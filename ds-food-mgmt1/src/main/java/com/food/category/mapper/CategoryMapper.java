package com.food.category.mapper;

import java.util.List;

import com.daesang.apip.annotation.mybatis.Mapper;
import com.food.category.model.Test;

/**
 * TODO Company mapper
 *
 * @author mike, BD apis
 * @date 2015. 8. 20.
 * @version $Id$
 */
@Mapper
public interface CategoryMapper{
	public List<Test> selectCategoryList();
}
