package com.food.common.web.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import org.springframework.ui.ModelMap;

import com.bdapis.apip.common.ErrorCodeResolver;
import com.bdapis.apip.core.model.ResponseError;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.food.common.web.exception.CumstomAccessDeniedException;

@Component
public class CustomAccessDeniedHandler implements AccessDeniedHandler
{
    private final Logger log = LoggerFactory.getLogger(this.getClass());
    
    private String ajaxHeader = "AJAX";
    
    @Autowired
    protected MessageSourceAccessor accessor;

    @Override
    public void handle(HttpServletRequest request,HttpServletResponse response,
            AccessDeniedException accessDeniedException) throws IOException, ServletException {
        
        // TODO Auto-generated method stub
        log.debug("Access Error!!");    
        if (isAjaxRequest(request)) {
            try {
                
                CumstomAccessDeniedException customAccessDeniedException = (CumstomAccessDeniedException) accessDeniedException;
                String errorCode = customAccessDeniedException.getErrorCode().length()>0?customAccessDeniedException.getErrorCode():"1600";
                String[] messageArguments = {customAccessDeniedException.getMessage()};
                
                ErrorCodeResolver resolver = new ErrorCodeResolver(errorCode, accessor);
                ResponseError responseError = 
                                new ResponseError(resolver, request.getRequestURI(), messageArguments);
                
                log.debug(responseError.getMessage());
                ObjectMapper mapper = new ObjectMapper();
                ModelMap mm = new ModelMap();
                mm.put("error",responseError );
                response.setContentType("application/json;charset=UTF-8");
                response.setStatus(Integer.parseInt(responseError.getId()));
                response.getWriter().write(mapper.writeValueAsString(mm));
                response.getWriter().flush();
                response.getWriter().close();
            } catch (AccessDeniedException e) {
                response.sendError(HttpServletResponse.SC_FORBIDDEN);
            } catch (AuthenticationException e) {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
            }
        } else {
            try {
                
                CumstomAccessDeniedException customAccessDeniedException = (CumstomAccessDeniedException) accessDeniedException;
                String errorCode = customAccessDeniedException.getErrorCode().length()>0?customAccessDeniedException.getErrorCode():"1600";
                String[] messageArguments = {customAccessDeniedException.getMessage()};
                
                ErrorCodeResolver resolver = new ErrorCodeResolver(errorCode, accessor);
                ResponseError responseError = 
                                new ResponseError(resolver, request.getRequestURI(), messageArguments);
                
                log.debug(responseError.getMessage());
                ObjectMapper mapper = new ObjectMapper();
                ModelMap mm = new ModelMap();
                mm.put("error",responseError );
                response.setContentType("application/json;charset=UTF-8");
                response.setStatus(Integer.parseInt(responseError.getId()));
                response.getWriter().write(mapper.writeValueAsString(mm));
                response.getWriter().flush();
                response.getWriter().close();
            } catch (AccessDeniedException e) {
                response.sendError(HttpServletResponse.SC_FORBIDDEN);
            } catch (AuthenticationException e) {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
            }
            //response.sendRedirect(request.getContextPath() + "/login");
        }
        
    }
    
    private boolean isAjaxRequest(HttpServletRequest request) {
        String isAjax =  request.getHeader(ajaxHeader);
        if(isAjax != null    && isAjax.equalsIgnoreCase(Boolean.TRUE.toString()))
            return true;
        
        
        return false;
    }

    
}

