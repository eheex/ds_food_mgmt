package com.food.portal.mapper;

import java.util.List;

import com.daesang.apip.annotation.mybatis.Mapper;
import com.food.common.model.SearchRequest;
import com.food.portal.model.CPN;
import com.food.portal.model.FudDetail;
import com.food.portal.model.NTR;

@Mapper
public interface SearchDetailResultMapper {

	/**
	 * 식품 상세조회
	 * @return
	 */
	public FudDetail selectSearchDetailResult(SearchRequest searchRequest);
	
	/**
	 * 원재료 상세조회
	 * @return
	 */
	public List<FudDetail> selectSearchDetailRawMTRL(SearchRequest searchRequest);
	
	/**
	 * 영양성분 상세조회
	 * @return
	 */
	public List<NTR> selectSearchDetailNTR(SearchRequest searchRequest);
	
	/**
	 * 업소명/소재지 상세조회
	 * @return
	 */
	public List<CPN> selectSearchDetailCPN(SearchRequest searchRequest);
}
