package com.food.common.web.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.food.admin.model.FoodAdmin;
import com.food.admin.service.FoodAdminService;
import com.food.common.web.model.LoginUser;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

//    @Autowired
//    OperatorMapper userMapper;
//    
//    @Override
//    public UserDetails loadUserByUsername(String loginId)
//            throws UsernameNotFoundException {
//        List<String> roleList = new ArrayList<String>();
//        UserDetails userDetails = null;
//        
//        Operator user = new Operator();
//        user.setLoginId(loginId);
//        user = userMapper.selectOperatorDetail(user);
//        if (user == null)
//            throw new UsernameNotFoundException("username " + loginId + " not found");
//
//        roleList.add("ROLE_"+user.getGroupId()); //User별 Role은 한개로 한정되어 User모델이 입력
//        
//        userDetails = new CustomUserDetails(user,true, true, true, true,getGrantedAuthorities(roleList));
//        return userDetails;
//    }
//    
//    public List<GrantedAuthority> getGrantedAuthorities(List<String> roles) {
//        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
//        for (String role : roles) {
//            authorities.add(new SimpleGrantedAuthority(role));
//        }
//        return authorities;
//    }
protected final Logger log = LoggerFactory.getLogger(this.getClass());
    
    @Autowired FoodAdminService operatorService;
    
    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
    	System.out.println("=================username================"+username);
        FoodAdmin loginOperator = new FoodAdmin();
        loginOperator.setAdminId(username);
        loginOperator = operatorService.getFoodAdminInfo(loginOperator);
        
        if (loginOperator == null)
            throw new UsernameNotFoundException("username " + username
                + " not found");
    
        log.error("---------------------> loginId:{} pw:{}", loginOperator.getAdminId(), loginOperator.getAdminPwd());
        boolean accountNonExpired = true;
        boolean credentialsNonExpired = true;
        boolean accountNonLocked = true;
        //boolean enabled = (loginOperator.getOperatorStatusCode().equals("APR")&&loginOperator.getOperatorUseYn().equals("Y")?true:false);
        
        return new LoginUser(
                    loginOperator.getAdminId(), 
                    loginOperator.getAdminPwd(),
                    getAuthorities());
    }
    
    /**
     * Retrieves a collection of {@link GrantedAuthority} based on a numerical role
     * @param role the numerical role
     * @return a collection of {@link GrantedAuthority
     */
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> auth = new ArrayList<GrantedAuthority>();
        
        return auth;
    }
    /**
     * Converts a numerical role to an equivalent list of roles
     * @param role the numerical role
     * @return list of roles as as a list of {@link String}
     */
    public List<String> getRoles(Integer role) {
            List<String> roles = new ArrayList<String>();
            
            if (role.intValue() == 1) {
                    roles.add("ROLE_USER");
                    roles.add("ROLE_ADMIN");
                    
            } else if (role.intValue() == 2) {
                    roles.add("ROLE_USER");
            }
            
            return roles;
    }
    
    /**
     * Wraps {@link String} roles to {@link SimpleGrantedAuthority} objects
     * @param roles {@link String} of roles
     * @return list of granted authorities
     */
    public static List<GrantedAuthority> getGrantedAuthorities(List<String> roles) {
            List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
            for (String role : roles) {
                    authorities.add(new SimpleGrantedAuthority(role));
            }
            return authorities;
    }

}