package com.food.common.web.entrypoint;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.ui.ModelMap;

import com.bdapis.apip.common.ErrorCodeResolver;
import com.bdapis.apip.core.model.ResponseError;
import com.fasterxml.jackson.databind.ObjectMapper;

public class CustomAccessDenyEntryPoint implements AuthenticationEntryPoint{
    private final String ajaxHeader = "AJAX";
    
    @Autowired
    protected MessageSourceAccessor accessor;
    @Override
    public void commence(HttpServletRequest request,
            HttpServletResponse response, AuthenticationException authException)
            throws IOException, ServletException {
        // TODO Auto-generated method stub

        if (isAjaxRequest(request)) {
            String errorCode = "1600";
            String[] messageArguments = {authException.getMessage()};
            ErrorCodeResolver resolver = new ErrorCodeResolver(errorCode, accessor);
            ResponseError responseError = 
                            new ResponseError(resolver, request.getRequestURI(), messageArguments);
            ObjectMapper mapper = new ObjectMapper();
            ModelMap mm = new ModelMap();
            mm.put("error",responseError );
            response.setContentType("application/json;charset=UTF-8");
            response.setStatus(Integer.parseInt(responseError.getId()));
            response.getWriter().write(mapper.writeValueAsString(mm));
            response.getWriter().flush();
            response.getWriter().close();
        } else {
            String errorCode = "1600";
            String[] messageArguments = {authException.getMessage()};
            ErrorCodeResolver resolver = new ErrorCodeResolver(errorCode, accessor);
            ResponseError responseError = 
                            new ResponseError(resolver, request.getRequestURI(), messageArguments);
            ObjectMapper mapper = new ObjectMapper();
            ModelMap mm = new ModelMap();
            mm.put("error",responseError );
            response.setContentType("application/json;charset=UTF-8");
            response.setStatus(Integer.parseInt(responseError.getId()));
            response.getWriter().write(mapper.writeValueAsString(mm));
            response.getWriter().flush();
            response.getWriter().close();
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
