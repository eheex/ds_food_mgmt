package com.food.portal.mapper;

import java.util.List;

import com.daesang.apip.annotation.mybatis.Mapper;
import com.food.common.model.SearchRequest;
import com.food.portal.model.FudList;

@Mapper
public interface SearchResultMapper {
	
	/**
	 * 식품조회 히스토리 등록
	 * @param searchRequest
	 * @return
	 */
	public int insertFoodProdHis(SearchRequest searchRequest);

	/**
	 * 식품명 조회
	 * @param seachRequest
	 * @return
	 */
	public List<FudList> selectSearchResultList(SearchRequest searchRequest);
	
	/**
	 * 카테고리명 조회
	 * @param seachRequest
	 * @return
	 */
	public List<FudList> selectSearchCategoryResultList(SearchRequest searchRequest);
	
	/**
	 * 태그명 조회
	 * @param seachRequest
	 * @return
	 */
	public List<FudList> selectSearchTagResultList(SearchRequest searchRequest);
	
	/**
	 * 카테고리 위치 조회
	 * @param searchRequest
	 * @return
	 */
	public FudList selectCategoryLocationSearch(SearchRequest searchRequest);
	
}
