package com.food.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.portal.model.FoodProdReq;
import com.food.portal.service.FoodProdReqService;

/**
 * 제품 등록요청 팝업 Contorller
 * @author ksh
 *
 */
@Controller
@RequestMapping(value="/portal/prdReq")
public class FoodProdReqController {

	@Autowired
	FoodProdReqService foodProdReqServcie;
	
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	@ResponseBody
	public int setFoodProdReq(@RequestBody FoodProdReq foodProdReq) throws Exception{
		return foodProdReqServcie.setFoodProdReq(foodProdReq);
	}
}
