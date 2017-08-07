package com.food.common.web.exception;

import org.springframework.security.access.AccessDeniedException;

public class CumstomAccessDeniedException extends AccessDeniedException{
    
    /**
     * 
     */
    private static final long serialVersionUID = -6752724058975508136L;
    private String errorCode = ""; 
    public CumstomAccessDeniedException(String errorCode, String msg, Throwable t) {
        super(msg, t);
        this.setErrorCode(errorCode);
        // TODO Auto-generated constructor stub
    }

    public CumstomAccessDeniedException(String errorCode, String msg) {
        super(msg);
        this.setErrorCode(errorCode);
        // TODO Auto-generated constructor stub
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }
    
}
