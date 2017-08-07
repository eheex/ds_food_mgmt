package com.food.portal.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.common.model.PageInfo;
import com.food.common.model.SearchRequest;
import com.food.portal.model.FudList;
import com.food.portal.service.SearchResultService;

/**
 * Portal 검색 Controller
 * @author foodTF
 * @date 2017. 06. 09
 */
@Controller
@RequestMapping(value="/portal/search")
public class SearchResultController {

	@Autowired
	SearchResultService searchResultService;
	
	/**
	 * 리스트 상품검색
	 * @param searchRequest
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/result", method = RequestMethod.GET)
	@ResponseBody
	public Object getSearchResultList(SearchRequest searchRequest) throws Exception{
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		List<FudList> searchData = searchResultService.getSearchResultList(searchRequest);
		
		PageInfo pageInfo = new PageInfo();
		pageInfo.setSize(searchData.size());
		pageInfo.setTotalCount(0);
		if(searchData.size() > 0){
			pageInfo.setTotalCount(searchData.get(0).getTotcnt());
		}
		
		map.put("pageInfo", pageInfo);
		map.put("data", searchData);
		return map;
	}
	
}
