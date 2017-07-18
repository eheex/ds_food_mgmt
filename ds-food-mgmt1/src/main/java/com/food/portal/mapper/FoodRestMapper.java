package com.food.portal.mapper;

import com.daesang.apip.annotation.mybatis.Mapper;
import com.food.portal.model.FoodRest;


/**
 * Food Image mapper
 *
 * @version $Id$
 */
@Mapper
public interface FoodRestMapper {

	/**
	 * 이미지 등록 
	 */
	public int insertFoodRest(FoodRest foodRest);
	
}
