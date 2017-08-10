package com.food.common.web;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.View;

import com.bdapis.apip.common.exception.ServiceException;

/**
 * <p>파일을 다운로드할 때 사용하는 View 클래스이다</p>
 * 
 * @author 푸드TFT
 */
public class DownloadView implements View {

	/**
	 * 파일 유형을 얻는다
	 * @return 파일 유형
	 */
	@Override
	public String getContentType() {
		return "application/download; utf-8";
	}

	@Override
	public void render(Map<String, ?> object, 
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		File serverFile = (File)object.get("serverFileDir");
		String clientFileName = checkNull(object.get("clientFileName"));
		if("".equals(clientFileName)) {
			clientFileName = serverFile.getName();
		}
		
		response.setHeader("Pragma", "no-cache");
		response.setHeader("Expires", "0");
		response.setHeader("Cache-Control", "no-cache");
		response.setContentType(getContentType());		
		//response.setContentLength((int)serverFile.length());		
		response.setHeader("Content-Disposition", "attachment; filename=\"" + URLEncoder.encode(clientFileName, "utf-8").replace("+", "%20") + "\";");                 
		response.setHeader("Content-Transfer-Encoding", "binary");
		
		String szStartOffset = request.getParameter("_StartOffset");
		String szEndOffSet = request.getParameter("_EndOffset");
		
		long StartOffset = 0;
		long EndOffset = 0;			
		if (szStartOffset != null) {
			StartOffset = Long.parseLong(szStartOffset);
		}
		if (szEndOffSet != null) {
			EndOffset = Long.parseLong(szEndOffSet);
		}
		long OffsetLength = 0;
		
		//파일사이즈를 알기 위해서 필요	
		if(szStartOffset != null || szEndOffSet != null) {
			OffsetLength = EndOffset-StartOffset +1;
			response.setHeader("Content-Length", ""+ OffsetLength);
			byte b[] = new byte[8192];
			BufferedInputStream input = null;
			BufferedOutputStream output = null;
			try {
				input = new BufferedInputStream(new FileInputStream(serverFile));
				output = new BufferedOutputStream(response.getOutputStream());
				int read = 0;
				if (StartOffset != 0) {
					long n = input.skip(StartOffset);
					if (n == -1) read = -1;
				}
				if(OffsetLength>0) {
					while (OffsetLength>0) {
						if(OffsetLength < 8192) {
							b = new byte[(int)OffsetLength];
						}
						read = input.read(b);
						if(read == -1)
							break;

						output.write(b, 0, read);
						OffsetLength = OffsetLength - read;
					}
				}	
			}catch(Exception e) {
				throw new ServiceException("ERROR", e.getMessage());
			}finally{
				try{
					if(output != null) {
						output.flush();
						output.close();
					}
				}catch(IOException ie){}
				
				try{
					if(input != null)
						input.close();
				}catch(IOException ie){}
			}
		}else {
			response.setHeader("Content-Length", ""+ serverFile.length());
			
			OutputStream out = response.getOutputStream();                 
			FileInputStream fis = null;                 
			try {                         
				fis = new FileInputStream(serverFile);                         
				copy(fis, out);                                  
			} catch(Exception e){    
				throw new ServiceException("ERROR", e.getMessage());
			}finally{                         
				if(fis != null){                                 
					try{                    
						fis.close();                
					}catch(Exception e){
						throw new ServiceException("ERROR", e.getMessage());
					}            
				}                     
			}             
			out.flush(); 
		}
	}
	
	/**
     * 객체의 널 여부 체크하여 널일 경우 공백문자열을 반환한다
     *
     * @param str 체크한 객체
     * @return 결과 문자열
     */
    public static String checkNull(Object obj) {
        if (obj == null) {
            return "";
        } else {
            return obj.toString().trim();
        }
    }
    
    /**
	 * 파일을 복사한다
	 * @param is 원본 Input Stream
	 * @param os 대상 Output Stream
	 * @throws IOException
	 */
	public static void copy(InputStream is, OutputStream os) throws IOException {
		int bytesRead = 0;
		byte[] buffer = new byte[1024];
		while((bytesRead = is.read(buffer)) != -1) {
			os.write(buffer, 0, bytesRead);
		}
	}
}
