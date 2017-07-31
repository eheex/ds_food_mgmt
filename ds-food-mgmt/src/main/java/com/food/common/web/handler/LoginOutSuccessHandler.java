package com.food.common.web.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.http.HttpStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.ui.ModelMap;

import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class LoginOutSuccessHandler implements LogoutSuccessHandler
{
    private final Logger log = LoggerFactory.getLogger(this.getClass());
    private String ajaxHeader = "AJAX";
    @Autowired
    protected MessageSourceAccessor accessor;
    
    
    @Override
    public void onLogoutSuccess(HttpServletRequest request,
            HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException {
        // TODO Auto-generated method stub
//        ObjectMapper mapper = new ObjectMapper();
//        ModelMap mm = new ModelMap();
//        mm.put("data",authentication.getPrincipal());
//        response.setContentType("application/json;charset=UTF-8");
//        response.setStatus(HttpStatus.SC_ACCEPTED);
//        response.getWriter().write(mapper.writeValueAsString(mm));
//        response.getWriter().flush();
//        response.getWriter().close();
        response.sendRedirect("/admin/login");
        
    }


    private boolean isAjaxRequest(HttpServletRequest request) {
        String isAjax =  request.getHeader(ajaxHeader);
        if(isAjax != null    && isAjax.equalsIgnoreCase(Boolean.TRUE.toString()))
            return true;
        
        
        return false;
    }
}