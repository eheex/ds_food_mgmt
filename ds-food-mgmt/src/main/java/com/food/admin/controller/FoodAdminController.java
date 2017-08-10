package com.food.admin.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.admin.model.FoodProdHitMgmt;
import com.food.admin.service.FoodAdminService;
import com.food.common.model.SearchRequest;
import com.food.portal.model.FoodProdReq;

@Controller
@RequestMapping(value="/admin")
public class FoodAdminController {

	@Autowired
	FoodAdminService foodAdminService;
	
	/**
	 * 현재인기검색어 순위
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/rank", method = RequestMethod.GET)
	@ResponseBody
	public Object getRankList() throws Exception{
		System.out.println( "--------------- FoodAdminController getRankList() ---------------");
		return foodAdminService.getRankList();
	}
	
	/**
	 * 조회기간 인기검색어 순위 조회
	 * @param searchTime
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getMaualOption", method = RequestMethod.GET)
	@ResponseBody
	public Object getMaualOption(@RequestParam(value="searchTime", required=true, defaultValue="") String searchTime) throws Exception{
		return foodAdminService.getMaualOption(searchTime);
	}
	
	/**
	 * 인기검색어관리 저장
	 * @param keyWordInfo
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/saveKeyword", method = RequestMethod.POST)
	@ResponseBody
	public int setSaveKeyword(@RequestBody FoodProdHitMgmt keyWordInfos) throws Exception{

		return foodAdminService.setSaveKeyword(keyWordInfos);
	}

	/**
	 * 관리자 등록/수정요청 정보 조회
	 * @param searchRequest
	 * @return
	 */
	@RequestMapping(value="/getFoodReqData")
	@ResponseBody
	public Object getFoodReqData(SearchRequest searchRequest) throws Exception{
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		map.put("data", foodAdminService.getFoodReqData(searchRequest));
		
		return map;
	}
	
	/**
	 * 관리자 등록/수정요청 정보 수정
	 * @param foodProdReq
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/modifyFoodReqData", method = RequestMethod.POST)
	@ResponseBody
	public int modifyFoodReqData(@RequestBody FoodProdReq foodProdReq) throws Exception{

		return foodAdminService.modifyFoodReqData(foodProdReq);
	}
}
