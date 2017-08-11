package com.food.portal.service.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.channels.FileChannel;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bdapis.apip.common.exception.ServiceException;
import com.food.portal.mapper.FoodRestMapper;

import com.food.portal.model.FoodRest;
import com.food.portal.service.FoodRestService;

/**
 * Food Image 서비스
 *
 */
@Service
public class FoodRestServiceImpl implements FoodRestService{

	@Autowired
	FoodRestMapper foodRestMapper;
	
	/**
	 * 동기화 체크 객체
	 */
	private static Object dump = new Object();
	
	//private static String UPLOAD_FILE_DIR = "C:/project/food_workspaces/ds-food-mgmt/src/main/webapp/foodupload/";	//로컬
		private static String UPLOAD_FILE_DIR = "/usr/local/tomcat9/webapps/ds-food-mgmt/foodImg/";						//운영서버
	
	/**
	 * 식품 이미지 저장
	 * @param foodRest
	 * @return
	 */
	@Override
	@Transactional
	public int setFoodRest(FoodRest foodRest) {
		return foodRestMapper.insertFoodRest(foodRest);
	}
	
	/**
     * 제품이미지 전체 다운로드 시 Zip파일로 다운받도록 처리
     * @param foodRest
     * @return
     * @throws IOException
     */
	@Override
	public String imgDownloadToZipFile(FoodRest foodRest) throws Exception {
		Date nowDate = new Date();
		Locale currentLocale = new Locale("KOREAN", "KOREA");
		String pattern = "yyyyMMddHHmmssSSS";
		SimpleDateFormat formatter = new SimpleDateFormat(pattern, currentLocale);
		String today = formatter.format(nowDate);
		
		String tempFilePath = "temp/copy/"+today;
		String targetFileName = "temp/"+today+".zip";
		String makeFolderPath = getFileSavePath(tempFilePath, false, true);
		
		
		List<FoodRest> imgInfos = foodRest.getFoodRests();
		for(int i=0; i<imgInfos.size(); i++){
			FoodRest imgInfo = imgInfos.get(i);
			String imgName = imgInfo.getImgNM();
			boolean successCopy = fileCopy(UPLOAD_FILE_DIR + imgName, 
					makeFolderPath +"/"+ imgName);
			if(!successCopy){
				throw new ServiceException("FILE COPY ERROR");
			}
		}
		
		
		FileOutputStream fos = null;
		ZipOutputStream zos = null;
		
		try{
			fos = new FileOutputStream (UPLOAD_FILE_DIR + targetFileName);
			zos = new ZipOutputStream(fos);
			File dirFile = new File(UPLOAD_FILE_DIR + tempFilePath);
			makeZipfile(zos, dirFile);
			zos.finish();
			rmdir(UPLOAD_FILE_DIR + tempFilePath); //copy 파일 삭제
		}catch(IOException e){
			 e.printStackTrace();
		}finally{
			if(fos != null){
				fos.close();
			}
			if(zos != null){
				zos.close();
			}
		}
		
		System.out.println("targetFileName =========================> "+targetFileName);
		
		return targetFileName;
	}
	
	/**
	 * 폴더를 ZIP 파일로 생성한다.
	 * @param zos
	 * @param dirFile
	 * @throws Exception
	 */
	private void makeZipfile(ZipOutputStream zos, File dirFile) throws Exception{
		File[] files = dirFile.listFiles();
		for(int i=0; i < files.length ; i++){
			try{
				byte[] buffer = new byte[1024];
				FileInputStream fis = new FileInputStream(files[i]);
				zos.putNextEntry(new ZipEntry(dirFile.getName()+"/"+files[i].getName()));
				int count;
				while ((count = fis.read(buffer)) > 0) {
					zos.write(buffer, 0, count);
				}
				zos.closeEntry();
				fis.close();
			}catch(IOException e){
				e.printStackTrace();
			}
		}
	}

	/**
	 * 입력받은 폴더를 삭제한다
	 * @param dirToBeDeleted 삭제할 폴더 명
	 */
    public static void rmdir(String dirToBeDeleted){

        File dir = new File(dirToBeDeleted);

        if(!dir.exists()){
            return;
        }
        if(!dir.isDirectory()){
            return;
        }

        File f = null;

        String[] files = dir.list();
        if(files.length == 0){
            f = new File(dirToBeDeleted);
            f.delete();
            return;
        }
        for(int i= 0; i<files.length; i++){
            f = new File(dirToBeDeleted + "/" + files[i]);
            if(!f.isFile()){
            	rmdir(dirToBeDeleted + "/" + files[i]);
            }
            f.delete();

        }

        f = new File(dirToBeDeleted);
        f.delete();
    }
    
	/**
	 * 파일의 저장된 경로를 가져온다
	 * @param fileDir efiles 하위 폴더명
	 * @param useDate 날짜폴더 사용여부
	 * @param existRoot 절대 경로 여부
	 * @return 파일의 경로
	 * @throws IOException
	 */
	public static String getFileSavePath(String fileDir, boolean useDate, boolean existRoot) throws IOException {
		StringBuffer svrStr = new StringBuffer();
		synchronized (dump) {			
			if(existRoot){
				svrStr.append(UPLOAD_FILE_DIR);
			}
			svrStr.append(fileDir);
			if(useDate){
				svrStr.append(new SimpleDateFormat("/yyyy/MMdd",Locale.KOREA).format(new Date()));
			}
			
			String checkDir = svrStr.toString();
			if(!existRoot){
				checkDir = UPLOAD_FILE_DIR + checkDir;
			}			
			File svrdir = new File(checkDir);
			if (!svrdir.exists()) {
				svrdir.mkdirs();
			}
		}		
		return svrStr.toString();
	}
	
    /**
	 * 파일을 복사한다. 성능개선을 위해 NIO를 사용한다
	 * @param inFile 원본파일명 
	 * @param outFile 복사할 대상 파일명  			  
	 * @return 복사 성공여부
	 */
    public static boolean fileCopy(String inFileFullPath, String outFileFullPath) {
    	boolean copySuccess = false;
    	FileChannel in  = null;
    	FileChannel out  = null;    	
    	try{
    		in = new RandomAccessFile(inFileFullPath, "r").getChannel();
    		out = new RandomAccessFile(outFileFullPath, "rw").getChannel();
    		in.transferTo(0, in.size(), out);
    		copySuccess = true;
    	}catch(IOException e){
    		copySuccess = false;
    	}finally{
    		try {    			
    			if(in != null) {
    				in.close();
    			}
    		} catch (IOException e) {
				return copySuccess;
			}
    		try {
				if(out != null) {
					out.close();
				}
			} catch (IOException e) {
				return copySuccess;
			}
    	}
    	return copySuccess;    	
    }
}
