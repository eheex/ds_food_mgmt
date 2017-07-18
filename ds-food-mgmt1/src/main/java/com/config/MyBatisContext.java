package com.config;

import java.io.IOException;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.daesang.apip.annotation.mybatis.Mapper;

@Configuration
@EnableTransactionManagement
@MapperScan(
        annotationClass=Mapper.class,
        basePackages="com.food",
        sqlSessionFactoryRef="sqlSessionFactoryBean")
public class MyBatisContext {

    protected final Logger log = LoggerFactory.getLogger(this.getClass());
    

    /**
     * myBatis의 {@link org.apache.ibatis.session.SqlSessionFactory}을 생성하는 팩토리빈을 등록한다.
     */
    @Bean
    public SqlSessionFactoryBean sqlSessionFactoryBean( 
            DataSource dataSource, ApplicationContext applicationContext) throws IOException {
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        // 마이바티스가 사용한 DataSource를 등록
        factoryBean.setDataSource(dataSource);
        // 마이바티스 설정파일 위치 설정
        factoryBean.setConfigLocation(applicationContext.getResource("classpath:mybatis/configuration.xml"));
        // com.daesang.apip.mgmt.ocpo.*.model 패키지 이하의 model 클래스 이름을 짧은 별칭으로 등록
        //factoryBean.setTypeAliasesPackage("com.daesang.apip.mgmt.**.model");
        // META-INF/mybatis/mappers 패키지 이하의 모든 XML을 매퍼로 등록
        factoryBean.setMapperLocations(applicationContext.getResources("classpath:mybatis/mappers/**/*.xml"));
        return factoryBean;
    }

    /**
     * 마이바티스 {@link org.apache.ibatis.session.SqlSession} 빈을 등록한다.
     *
     * SqlSessionTemplate은 SqlSession을 구현하고 코드에서 SqlSession를 대체하는 역할을 한다.
     * 쓰레드에 안전하게 작성되었기 때문에 여러 DAO나 매퍼에서 공유 할 수 있다.
     */
    @Bean
    public SqlSessionTemplate sqlSession(SqlSessionFactory sqlSessionFactory) {
        return new SqlSessionTemplate(sqlSessionFactory);
    }
    
        
}
