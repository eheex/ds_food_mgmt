package com.food.portal.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.food.portal.service.FoodRestService;

import java.util.Iterator;

/**
 * Food api controller
 *
 * @author
 * @version $Id$
 * @date 2017. 
 */
@Controller
@RequestMapping(value = "/portal/upload")
public class FoodRestController {

	@Autowired
    FoodRestService foodRestService;
   
    /**
     * 식품 이미지 저장
     *
     * @param foodId            the food id
     * @param imageCategoryCode the image category code
     * @param imageFile         the image file
     * @return the object
     * @throws IOException the io exception
     */
    @RequestMapping(value = "/imageSave", method = RequestMethod.POST)
    @ResponseBody
    public Object updateFoodImage(
              MultipartHttpServletRequest req  
    		, HttpServletRequest request
    		, HttpServletResponse response
    		
    		) throws IOException{
    	System.out.println("--------------------- imageSave");
    	
    	//Iterator itr =  (Iterator) req.getFileNames();
    	
    	Iterator<String> itr = req.getFileNames();
    	
    	MultipartFile file = null;
    	
    	HashMap<String,ArrayList> rtHashMap = new  HashMap<String,ArrayList>();
    	    	
    	int loopCount = 1;
    	
    	while(itr.hasNext()){
    		
    		file = req.getFile(itr.next());
    	
    		String fileName = file.getOriginalFilename();
	    
	        System.out.println("fileName[" +fileName+ "]");
	        // 업로드 경로 설정
	        String sRootPath = "C:\\project\\food_workspaces\\ds-food-mgmt\\src\\main\\webapp\\foodupload";  // Application.xml 에 선언한 값 가져오기
	        String sSvrFilePath = "/upload_root/";
	        
	        Date now = new Date();
	        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
	                
	        String imgID  = sdf.format(now)  + String.valueOf(loopCount) ; 
	        
	        String sSvrFileName = imgID + "_" + fileName;
	        
	        ArrayList<String> dataList = new ArrayList<String>();
    		
    		String rtSeq = "rtSeq" + String.valueOf(loopCount++);
	        
	        // 파일 관련 변수 선언
	        InputStream inStream = null;    
	        OutputStream outStream = null;
	        // AJAX 관련 변수 선언
	        //PrintWriter outWriter=null; 
	        try {
		        // 파일 업로드 변수 설정
		        inStream = file.getInputStream();  
		        File newFile = new File(sRootPath, sSvrFileName);  
		        if (!newFile.exists()) {  
		        	newFile.createNewFile();  
		        }
		         
		        outStream = new FileOutputStream(newFile);
		        // 파일 업로드 진행
		        int read = 0;  
		        byte[] bytes = new byte[1024];  
		           
		        while ((read = inStream.read(bytes)) != -1) {  
		        	outStream.write(bytes, 0, read);  
		        }  
	
		        System.out.println("fileName-------------[" +fileName+ "]");
		        System.out.println("sSvrFileName---------[" +sSvrFileName+ "]");
		        System.out.println("sSvrFilePath---------[" +sSvrFilePath+ "]");
//		        System.out.println("file.getSize()-------[" +file.getSize()+ "]");
//		        System.out.println("file.getContentType()[" +file.getContentType()+ "]");
	
		        // 한글 처리를 위한 response 설정
		        response.setContentType("text/plain;charset=UTF-8");
		        response.setCharacterEncoding("UTF-8");
		        response.setHeader("Cache-Control", "no-chche");
		       
		        // 업로드 결과 전송
		        //outWriter = response.getWriter();
		        //outWriter.flush();
		        
		        dataList.add(sSvrFileName);
		        dataList.add(imgID);
		        dataList.add(sSvrFilePath);
		        
		        rtHashMap.put(rtSeq,   dataList);
	
	         } catch (IOException e) {  
	        	 e.printStackTrace();  
	         } finally {
	        	 try{if(inStream!=null) inStream.close();}catch(Exception ex){}
	        	 try{if(outStream!=null) outStream.close();}catch(Exception ex){}
	        }

    	}
    	
   	
    	
    	/*
    	
    	MultipartFile file = req.getFile("file1");

   	   	
        String fileName = file.getOriginalFilename(); // 한글명일 경우 고려
    
        System.out.println("fileName[" +fileName+ "]");
        // 업로드 경로 설정
        String sRootPath = "C:\\project\\food_workspaces\\ds-food-mgmt\\src\\main\\webapp\\foodupload";  // Application.xml 에 선언한 값 가져오기
        String sSvrFilePath = "upload_root";
        String sSvrFileName = fileName;
       
        // 파일 관련 변수 선언
        InputStream inStream = null;    
        OutputStream outStream = null;
        // AJAX 관련 변수 선언
        PrintWriter outWriter=null; 
        try {
	        // 파일 업로드 변수 설정
	        inStream = file.getInputStream();  
	        File newFile = new File(sRootPath, sSvrFileName);  
	        if (!newFile.exists()) {  
	        	newFile.createNewFile();  
	        }
	         
	        outStream = new FileOutputStream(newFile);
	        // 파일 업로드 진행
	        int read = 0;  
	        byte[] bytes = new byte[1024];  
	           
	        while ((read = inStream.read(bytes)) != -1) {  
	        	outStream.write(bytes, 0, read);  
	        }  

	        System.out.println("fileName-------------[" +fileName+ "]");
	        System.out.println("sSvrFileName---------[" +sSvrFileName+ "]");
	        System.out.println("sSvrFilePath---------[" +sSvrFilePath+ "]");
	        System.out.println("file.getSize()-------[" +file.getSize()+ "]");
	        System.out.println("file.getContentType()[" +file.getContentType()+ "]");

	        // 한글 처리를 위한 response 설정
	        response.setContentType("text/plain;charset=UTF-8");
	        response.setCharacterEncoding("UTF-8");
	        response.setHeader("Cache-Control", "no-chche");
	       
	        // 업로드 결과 전송
	        outWriter = response.getWriter();
	        outWriter.flush();

         } catch (IOException e) {  
        	 e.printStackTrace();  
         } finally {
        	 try{if(inStream!=null) inStream.close();}catch(Exception ex){}
        	 try{if(outStream!=null) outStream.close();}catch(Exception ex){}
        }
        */
        return rtHashMap;
    }
     
    
}
