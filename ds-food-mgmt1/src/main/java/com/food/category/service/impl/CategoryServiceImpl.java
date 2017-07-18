package com.food.category.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.category.mapper.CategoryMapper;
import com.food.category.model.Test;
import com.food.category.service.CategoryService;

/**
 * Category SERVICE
 *
 * @author mike, BD apis
 * @date 2015. 8. 20.
 * @version $Id$
 */
@Service
public class CategoryServiceImpl implements CategoryService{
	@Autowired
	CategoryMapper categoryMapper;
	
	public List<Test> getCategoryList(){
		return categoryMapper.selectCategoryList();
	}
}
