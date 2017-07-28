package com.food.admin.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.portal.model.FoodProdReq;
import com.food.portal.model.FoodRest;
import com.food.portal.service.FoodProdReqService;

/**
 * 제품 수정요청 리스 Contorller 테스트
 * @author ksh
 *
 */
@Controller
@RequestMapping(value="/admin/prdMod")
public class FoodProdModController {

	@Autowired
	FoodProdReqService foodProdReqServcie;
	
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	@ResponseBody
	public int setFoodProdReq(@RequestBody FoodProdReq foodProdReq) throws Exception{
//		System.out.println("FoodProdReqController, setFoodProdReq ---------------------pass");
		
//		System.out.println("FoodProdReqController, foodProdReq ["+foodProdReq.getPrdNm()+"]");
//		System.out.println("FoodProdReqController, getFoodRest ["+foodProdReq.getFoodRest().size()+"]");
		
//		System.out.println("FoodProdReqController foodProdReq = [" + foodProdReq+ "]");
//		System.out.println("FoodProdReqController foodRest = [" + foodRest+ "]");
//		return foodProdReqServcie.setFoodProdReq(foodProdReq, listFoodRest );
		return foodProdReqServcie.setFoodProdReq(foodProdReq);

	}
	
	
	
}
