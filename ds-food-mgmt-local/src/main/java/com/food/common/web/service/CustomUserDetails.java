package com.food.common.web.service;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import com.food.admin.model.FoodAdmin;

public class CustomUserDetails extends org.springframework.security.core.userdetails.User{

    /**
     * 
     */
    private static final long serialVersionUID = -3391997252242321168L;
    
    private FoodAdmin user;

    public CustomUserDetails(FoodAdmin user, Collection<? extends GrantedAuthority> authorities) {
        super(user.getAdminId(), user.getAdminPwd(), authorities);
        this.user = user;
    }

    public CustomUserDetails(FoodAdmin user, boolean enabled, boolean accountNonExpired, boolean credentialsNonExpired, boolean accountNonLocked, Collection<? extends GrantedAuthority> authorities) {
        super(user.getAdminId(), user.getAdminPwd(), enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
        this.user = user;
    }

    public FoodAdmin getUser() {
        return user;
    }
    

}