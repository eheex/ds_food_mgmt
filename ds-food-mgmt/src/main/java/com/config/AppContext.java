package com.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.context.annotation.Import;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;


@Configuration
@ComponentScan(
		basePackages="com.food",
		excludeFilters=
		{
				@Filter(type=FilterType.ANNOTATION, value=Controller.class),
				@Filter(type=FilterType.ANNOTATION, value=ControllerAdvice.class)
		}
)
@Import({
	CommonContext.class,
	MessageContext.class,
	//RestContext.class,
	DatabaseConfig.class,
	MyBatisContext.class
})
public class AppContext {
}
