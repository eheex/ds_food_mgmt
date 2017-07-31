package com.config;
               

import java.util.HashMap;
import java.util.Map;

import org.apache.tiles.Attribute;
import org.apache.tiles.Definition;
import org.apache.tiles.definition.UnresolvingLocaleDefinitionsFactory;
import org.apache.tiles.request.Request;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.view.BeanNameViewResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

@Configuration
@EnableWebMvc
@ComponentScan(
		basePackages="com.food",useDefaultFilters=false,
		includeFilters={@Filter(type=FilterType.ANNOTATION, value=Controller.class)
		,@Filter(type=FilterType.ANNOTATION, value=ControllerAdvice.class)}
)

public class WebContext extends WebMvcConfigurationSupport  {
	
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) 
    {
    	registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
  //registry.addResourceHandler("/swagger/**").addResourceLocations("/resources/swagger/");
    }
    
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // TODO Auto-generated method stub
       // registry.addInterceptor(new HttpRequestLoggerIterceptor()).addPathPatterns("/apis/**");
        
    }

    @Override
    public void configureDefaultServletHandling(
            DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }
    @Bean
    public ViewResolver viewResolver()
    {
        BeanNameViewResolver resolver = new BeanNameViewResolver();
        resolver.setOrder(1);
        return resolver;
    }
    @Bean
    public ViewResolver JstlViewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setOrder(2);
        resolver.setPrefix("/WEB-INF/");
        resolver.setViewClass(JstlView.class);
        resolver.setSuffix(".jsp");
        return resolver;
    }
    @Bean
    public MultipartResolver multipartResolver() {
        org.springframework.web.multipart.commons.CommonsMultipartResolver multipartResolver = new org.springframework.web.multipart.commons.CommonsMultipartResolver();
        multipartResolver.setMaxUploadSize(10000000);
        return multipartResolver;
    }

}

