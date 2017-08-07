package com.food.portal.mapper;

import java.util.List;

import com.daesang.apip.annotation.mybatis.Mapper;
import com.food.portal.model.Fud;

@Mapper
public interface RealTimeKeyWordMapper {

	/**
	 * 실시간 검색 식품 조회
	 * @return
	 */
	public List<Fud> selectRealTimeKeyWordList();
	
}
