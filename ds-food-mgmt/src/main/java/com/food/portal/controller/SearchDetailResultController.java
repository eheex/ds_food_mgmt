package com.food.portal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.common.model.SearchRequest;
import com.food.portal.model.Fud;
import com.food.portal.model.FudDetail;
import com.food.portal.service.SearchDetailResultService;

@Controller
@RequestMapping(value="/portal/searchDetail")
public class SearchDetailResultController {

	@Autowired
	SearchDetailResultService searchDetailResultService;
	
	/**
	 * 식품 상세조회
	 * @param searchRequest
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/result", method = RequestMethod.POST)
	@ResponseBody
	public Object getSearchResultList(@RequestBody SearchRequest searchRequest) throws Exception{
		
		FudDetail fudDetailInfo = searchDetailResultService.getDetailResult(searchRequest);
		
		return fudDetailInfo;
	}
	
	/**
	 * 식품 상세조회
	 * @param searchRequest
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/categoryRank", method = RequestMethod.POST)
	@ResponseBody
	public Object getCategoryRank(@RequestBody SearchRequest searchRequest) throws Exception{
		
		List<Fud> categoryRankInfo = searchDetailResultService.getCategoryRank(searchRequest);
		
		return categoryRankInfo;
	}
	
	/**
	 * 상세검색 알레르기/인증/무첨가 데이터 조회
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/popupData")
	@ResponseBody
	public Object getDetailSearchPopupData() throws Exception{
		
		return searchDetailResultService.getDetailSearchPopupData();
	}
}
