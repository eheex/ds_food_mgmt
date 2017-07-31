package com.food.common.web.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;
import org.springframework.ui.ModelMap;

import com.bdapis.apip.common.ErrorCodeResolver;
import com.bdapis.apip.core.model.ResponseError;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class LoginFailureHandler implements AuthenticationFailureHandler
{
    private final Logger log = LoggerFactory.getLogger(this.getClass());
    private String ajaxHeader = "AJAX";
    @Autowired
    protected MessageSourceAccessor accessor;
    
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException auth) throws IOException, ServletException
    {
        if (isAjaxRequest(request)) {
            //String errorCode = ApiConstants.LOGIN_FAIL;
        	String errorCode = "1601";
            String[] messageArguments = {auth.getMessage()};
            ErrorCodeResolver resolver = new ErrorCodeResolver(errorCode, accessor);
            ResponseError responseError = 
                            new ResponseError(resolver, request.getRequestURI(), messageArguments);
            
            log.debug(responseError.getMessage());
            //responseError.setMessage(auth.getMessage());
            ObjectMapper mapper = new ObjectMapper();
            ModelMap mm = new ModelMap();
            mm.put("error",responseError );
            response.setContentType("application/json;charset=UTF-8");
            response.setStatus(Integer.parseInt(responseError.getId()));
            response.getWriter().write(mapper.writeValueAsString(mm));
            response.getWriter().flush();
            response.getWriter().close();
        }else{
            log.debug("login Error!!");
            request.setAttribute("Exception", auth);
            
            response.sendRedirect(request.getContextPath() + "/error-login");
        }
        
    }
    
    private boolean isAjaxRequest(HttpServletRequest request) {
        String isAjax =  request.getHeader(ajaxHeader);
        if(isAjax != null    && isAjax.equalsIgnoreCase(Boolean.TRUE.toString()))
            return true;
        
        
        return false;
    }
}

