package com.food.category.controller.rest;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.category.model.Test;
import com.food.category.service.CategoryService;

/**
 * Category api controller
 *
 * @author mike, BD apis
 * @date 2015. 8. 20.
 * @version $Id$
 */
@Controller
@RequestMapping(value = "/eatsight/categories")
public class CategoryRestController{

    @Autowired
    private CategoryService categoryService;
    
    /**
     * 식품 분류 리스트
     */
    @RequestMapping(value = "/cls", method = RequestMethod.GET)
    @ResponseBody
    public Object getCategoryClassifyList() throws Exception{
    	HashMap<String, Object> map = new HashMap<String, Object>();
    	
        List<Test> categoryList = categoryService.getCategoryList();
        
        map.put("data", categoryList);
        
        return map;
    }
}
