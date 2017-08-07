package com.food.portal.mapper;

import com.daesang.apip.annotation.mybatis.Mapper;
import com.food.portal.model.FoodProdReq;

@Mapper
public interface FoodProdReqMapper {

	/**
	 * 상품 등록 요청저장 
	 */

	public int insertFoodProdReq(FoodProdReq foodProdReq);

}

