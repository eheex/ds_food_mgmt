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
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.UrlBasedViewResolver;
import org.springframework.web.servlet.view.tiles3.TilesConfigurer;
import org.springframework.web.servlet.view.tiles3.TilesView;

@Configuration
@EnableWebMvc
@ComponentScan(
		basePackages="com.food",useDefaultFilters=false,
		includeFilters={@Filter(type=FilterType.ANNOTATION, value=Controller.class)
		,@Filter(type=FilterType.ANNOTATION, value=ControllerAdvice.class)}
)

public class WebContext extends WebMvcConfigurationSupport  {
	
	/* Tiles Test */
	private static final Map<String, Definition> tiles = new HashMap<String, Definition>();
	
	private static final Attribute TEMPLATE = new Attribute("/WEB-INF/layouts/layout.jsp");
	/* END */
	
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
        /*BeanNameViewResolver resolver = new BeanNameViewResolver();
        resolver.setOrder(1);
        return resolver;*/
    	UrlBasedViewResolver urlBasedViewResolver = new UrlBasedViewResolver();
		urlBasedViewResolver.setViewClass(TilesView.class);
		urlBasedViewResolver.setOrder(1);

		return urlBasedViewResolver;
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
    
    /* Tiles 추가 */
    @Bean
	public TilesConfigurer tilesConfigurer(){
		TilesConfigurer t = new TilesConfigurer();
		t.setCheckRefresh(true);
		t.setDefinitionsFactoryClass(JavaDefinitionsFactory.class);
		t.setDefinitions(new String[]{});

		addDefinition("index", "index", "/WEB-INF/portal/eatPrdMain.jsp");
		/*addDefinition("adminLogin", "관리자 로그인", "/WEB-INF/pages/adminLogin.jsp");
		addDefinition("userLogin", "사용자 로그인", "/WEB-INF/pages/userLogin.jsp");

		addDefinition("admin", "관리자 페이지", "/WEB-INF/pages/admin/admin.jsp");
		addDefinition("user", "사용자 페이지", "/WEB-INF/pages/user/user.jsp");*/

		return t;
	}

    private void addDefinition(String name, String title, String body) {
		Map<String, Attribute> attributes = getDefaultAttributes();

		attributes.put("title", new Attribute(title));
		attributes.put("content", new Attribute(body));

		tiles.put(name, new Definition(name, TEMPLATE, attributes));
		
		System.out.println("==================tiles=========="+tiles);
	}

    private Map<String, Attribute> getDefaultAttributes() {
		Map<String, Attribute> attributes = new HashMap<String,Attribute>();

		attributes.put("header", new Attribute("/WEB-INF/layouts/header.jsp"));
		
		return attributes;
	}

    public static class JavaDefinitionsFactory extends UnresolvingLocaleDefinitionsFactory {
		@Override
		public Definition getDefinition(String name, Request tilesContext) {
			return tiles.get(name);
		}
	}



}

