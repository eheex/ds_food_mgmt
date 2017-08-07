package com.food.portal.service;

import java.util.List;

import com.food.common.model.SearchRequest;
import com.food.portal.model.FudList;

public interface SearchResultService {

	/**
	 * 검색결과 리스트 조회
	 * @param searchRequest
	 * @return
	 */
	public List<FudList> getSearchResultList(SearchRequest searchRequest);
	
	/**
	 * 식품조회 히스토리 등록
	 * @param searchRequest
	 * @return
	 */
	public int setFoodProdHis(SearchRequest searchRequest);
	
}
