package com.food.portal.service;

import java.util.List;

import com.food.portal.model.Fud;

public interface RealTimeKeyWordService {

	/**
	 * 실시간 검색 식품 조회
	 * @return
	 */
	public List<Fud> getRealTimeKeyWordList();
	
}
