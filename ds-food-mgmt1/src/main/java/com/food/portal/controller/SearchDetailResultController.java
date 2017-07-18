package com.food.portal.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.common.model.SearchRequest;
import com.food.portal.model.FudDetail;
import com.food.portal.service.SearchDetailResultService;

@Controller
@RequestMapping(value="/portal/searchDetail")
public class SearchDetailResultController {

	@Autowired
	SearchDetailResultService searchDetailResultService;
	
	@RequestMapping(value = "/result", method = RequestMethod.POST)
	@ResponseBody
	public Object getSearchResultList(@RequestBody SearchRequest searchRequest,
			ArrayList<String> text) throws Exception{
		
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@"+searchRequest.getPage());
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@"+text.get(0));
		
		FudDetail fudDetailInfo = searchDetailResultService.getDetailResult(searchRequest);
		
		return fudDetailInfo;
	}
}
