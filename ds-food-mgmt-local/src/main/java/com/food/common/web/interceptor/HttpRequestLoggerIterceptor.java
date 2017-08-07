package com.food.common.web.interceptor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class HttpRequestLoggerIterceptor extends HandlerInterceptorAdapter {
    protected final Logger log = LoggerFactory.getLogger(this.getClass());

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        log.debug("======================================          REQUEST         ======================================");
        Enumeration<String> requestHeaderNames = request.getHeaderNames();
        while (requestHeaderNames.hasMoreElements()) {
            String headerName = requestHeaderNames.nextElement();
            Enumeration<String> headers = request.getHeaders(headerName);
            while (headers.hasMoreElements()) {
                String headerValue = headers.nextElement();
                log.debug(" Request HEADER - {} : {} ", headerName, headerValue );
            }
            
        }
        log.debug(" Request METHOD:{} URI:{}  ", request.getMethod(), request.getRequestURI());
        if(request.getMethod().equalsIgnoreCase("POST")||request.getMethod().equalsIgnoreCase("PUT")){
            byte[] bodyData;
            bodyData = IOUtils.toByteArray(request.getInputStream());
            log.debug(" Request Body: {}" , new String(bodyData));
        }
        
        return true;
    }
    
    @Override
    public void postHandle(
            HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView)
            throws Exception {
        // TODO Auto-generated method stub
    }


//    public String getBody(HttpServletRequest request){
      public String getBody(InputStream inputStream){
          String body = null;
          StringBuilder stringBuilder = new StringBuilder();
          BufferedReader bufferedReader = null;
   
          try {
              if (inputStream != null) {
                  bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                  char[] charBuffer = new char[128];
                  int bytesRead = -1;
                  while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
                      stringBuilder.append(charBuffer, 0, bytesRead);
                  }
              }
          } catch (IOException ex) {
          } finally {
              if (bufferedReader != null) {
                  try {
                      bufferedReader.close();
                  } catch (IOException ex) {
   
                  }
              }
          }
   
          body = stringBuilder.toString();
          return body;
      }
}
