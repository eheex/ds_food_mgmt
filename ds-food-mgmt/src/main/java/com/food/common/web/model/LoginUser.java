package com.food.common.web.model;

import java.util.Collection;

import org.springframework.security.core.userdetails.User;

public class LoginUser extends User {
    private static final long serialVersionUID = -3531439484732724601L;

    public LoginUser(String username, String password, Collection authorities) {

            super(username, password, authorities);

    }

    public static long getSerialversionuid() {
       return serialVersionUID;
    }
    

}
