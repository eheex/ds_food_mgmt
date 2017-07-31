package com.food.admin.mapper;

import com.daesang.apip.annotation.mybatis.Mapper;
import com.food.portal.model.FoodProdReq;

@Mapper
public interface FoodProdModMapper {

	/**
	 * 상품 등록 요청저장 
	 */

	public int insertFoodProdReq(FoodProdReq foodProdReq);

}

