package com.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.food.common.web.entrypoint.CustomAccessDenyEntryPoint;
import com.food.common.web.filter.AjaxSessionTimeoutFilter;
import com.food.common.web.handler.CustomAccessDeniedHandler;
import com.food.common.web.handler.LoginFailureHandler;
import com.food.common.web.handler.LoginOutSuccessHandler;
import com.food.common.web.handler.LoginSuccessHandler;

/**
 * TODO Spring Security 설정 처리 
 *
 * @author mike Ryu, BD Apis
 * @date 2015. 3. 09
 * @version 1.0
 */

@Configuration
@EnableWebSecurity
@Import(DatabaseConfig.class)
@PropertySource("classpath:system.properties")
public class CustomWebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {
    //@Autowired private UserDetailsService userDetailService;
    @Autowired 
    private LoginSuccessHandler loginSuccessHandler;
    @Autowired 
    private LoginOutSuccessHandler loginOutSuccessHandler;
    @Autowired 
    private LoginFailureHandler loginFailureHandler;
    @Autowired 
    private CustomAccessDeniedHandler accessDeniedHandler;
   
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    Environment env;
    
    /*@Override
    protected UserDetailsService userDetailsService() {
        return userDetailService;
    }
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
         auth.userDetailsService(userDetailsService());
    }*/
   
    @Override
    protected UserDetailsService userDetailsService() {
        return userDetailsService;
    }
    
    @Autowired
    private DataSource dataSource;
    
    @Autowired PasswordEncoder passwordEncoder;
    
    @Bean
    protected SessionRegistry sessionRegistryImpl()
    {
        return new SessionRegistryImpl();
    }
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	
//        http.httpBasic();
        //http.userDetailsService(userDetailsService()); //custom UserDetailsService로 주입
        //sessionManagement 추가 
        http
        .sessionManagement()
            //.invalidSessionUrl("/login") // session-management@invalid-session-url
            //.sessionAuthenticationErrorUrl("/login") // session-management@session-authentication-error-url
            .maximumSessions(3) // session-management/concurrency-control@max-sessions 동시 접속 1명
            .maxSessionsPreventsLogin(false) // session-management/concurrency-control@error-if-maximum-exceeded
            .expiredUrl("/expired-session") // session-management/concurrency-control@expired-url
            .sessionRegistry(sessionRegistryImpl()); // session-management/concurrency-control@session-registry-ref
        //security form and login authorize처리
        http
            //.addFilterBefore(new CORSFilter(),BasicAuthenticationFilter.class)
            .addFilterBefore(new AjaxSessionTimeoutFilter(),BasicAuthenticationFilter.class);
        http
            .exceptionHandling()
                .accessDeniedHandler(accessDeniedHandler)
                .authenticationEntryPoint(customAccessDenyEntryPoint())
                .and()
            .formLogin()
                .loginPage("/admin/login")
                .loginProcessingUrl("/j_spring_security_check")
                .usernameParameter("j_username")
                .passwordParameter("j_password")
                .successHandler(loginSuccessHandler)
                .failureHandler(loginFailureHandler)
                .permitAll()
                .and()
            .logout()
                .logoutUrl("/logout")
                .logoutSuccessHandler(loginOutSuccessHandler);
                //.logoutSuccessUrl("/");
            
        /*if(env.getProperty("ocpo.system.auth.checkYn").equals("Y")){
            http.authorizeRequests()
            .antMatchers("/error-login", "/login", "/favicon.ico", "/resources/**", "/publish/**", "/analytics/log/**", "/analytics/monitor/**", "/analytics/excel/**").permitAll()
            //.antMatchers( "/admin/**").hasAnyRole("OP","DEV")
            .anyRequest().authenticated()
            .and()
            .addFilterAfter(filterSecurityInterceptor(), FilterSecurityInterceptor.class)
            .csrf().disable();
        }else{
            http.authorizeRequests()
            //.accessDecisionManager(new CustomAccessDecisionManager())
            .antMatchers( "/eatsight/**", "/resources/**", "/apis/**", "/analytics/log/**", "/analytics/monitor/**", "/analytics/excel/**").permitAll()
            .anyRequest().authenticated()
            .and()
            .csrf().disable();
        }*/
        http.authorizeRequests()
        //.accessDecisionManager(new CustomAccessDecisionManager())
        .antMatchers( "/admin/**", "/portal/**", "/**").permitAll()
        .anyRequest().authenticated()
        .and()
        .csrf().disable();
        
    }
    
    @Bean
    public AuthenticationEntryPoint customAccessDenyEntryPoint() {
        CustomAccessDenyEntryPoint customAuthEntryPoint = new CustomAccessDenyEntryPoint();
        return customAuthEntryPoint;
    }

//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//        auth
//          .jdbcAuthentication()
//              .dataSource(dataSource)
//              .passwordEncoder(passwordEncoder)
//              .usersByUsernameQuery(getUserQuery())
//              .authoritiesByUsernameQuery(getAuthoritiesQuery());
//              //.groupAuthoritiesByUsername(getGroupAuthoritiesByUsernameQuery());
//    }
    @Autowired
    protected void configureGlobal(AuthenticationManagerBuilder auth)
            throws Exception {
        auth.userDetailsService(userDetailsService())
        .passwordEncoder(passwordEncoder);
    }
    
    // Only necessary to have access to verify the AuthenticationManager
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    
    
   /* private String getUserQuery() {
        return "SELECT lgi_id, lgi_pw, case when OPR_SUS_CD='APR' then 'true' else 'false' end as enabled "
                + "FROM MC_OPR "
                + "WHERE  lgi_id= ?";
    }

    private String getAuthoritiesQuery() {
        return "select A.lgi_id, CONCAT('ROLE_',B.ROL_ID) from MC_OPR A, MC_ROL B, MC_OPR_ROL C where A.OPR_ID=C.OPR_ID and  B.ROL_ID=C.ROL_ID and A.lgi_id=?";
    }*/
    
//    private String getGroupAuthoritiesByUsernameQuery() {
//        return "select groups.group_id, groups.name, authorities.authority from test.groups, test.users , test.group_users, test.group_authorities, test.authorities, test.user_authorities where group_users.group_id = groups.group_id and users.user_id = group_users.user_id and groups.group_id = group_authorities.group_id and group_authorities.authority_id=authorities.authority_id and users.user_id=?";
//    }
    
    @Override
    public void configure(WebSecurity web) throws Exception {
        web
            .ignoring()
                .antMatchers("/resource/**");
    }

}
