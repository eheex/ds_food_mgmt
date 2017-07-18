package com.food.portal.service;

import java.util.List;

import com.food.common.model.SearchRequest;
import com.food.portal.model.Fud;
import com.food.portal.model.FudDetail;

public interface SearchDetailResultService {

	/**
	 * 식품 상세조회
	 * @param searchRequest
	 * @return
	 */
	public FudDetail getDetailResult(SearchRequest searchRequest);
	
	/**
	 * 식품 상세조회 - 카테고리 인기제품 조회
	 * @param searchRequest
	 * @return
	 */
	public List<Fud> getCategoryRank(SearchRequest searchRequest);
	
	/**
	 * 상세조회팝업 - 알레르기/인증/무첨가 데이터 조회
	 * @return
	 */
	public Object getDetailSearchPopupData();
}
