package com.food.portal.mapper;

import java.util.List;

import com.daesang.apip.annotation.mybatis.Mapper;
import com.food.common.model.SearchRequest;
import com.food.portal.model.CPN;
import com.food.portal.model.Code;
import com.food.portal.model.Fud;
import com.food.portal.model.FudDetail;
import com.food.portal.model.FudList;
import com.food.portal.model.NTR;

@Mapper
public interface SearchDetailResultMapper {

	/**
	 * 식품 상세조회
	 * @return
	 */
	public FudDetail selectSearchDetailResult(SearchRequest searchRequest);
	
	/**
	 * 식품 상세조회 - 원재료 상세조회
	 * @return
	 */
	public List<FudDetail> selectSearchDetailRawMTRL(SearchRequest searchRequest);
	
	/**
	 * 식품 상세조회 - 카테고리 인기제품 조회
	 * @param searchRequest
	 * @return
	 */
	public List<Fud> selectCategoryRank(SearchRequest searchRequest);
	
	/**
	 * 식품 상세조회팝업 - 영양성분 상세조회
	 * @return
	 */
	public List<NTR> selectSearchDetailNTR(SearchRequest searchRequest);
	
	/**
	 * 상세조회팝업 - 업소명/소재지 상세조회
	 * @return
	 */
	public List<CPN> selectSearchDetailCPN(SearchRequest searchRequest);
	
	/**
	 * 상세조회팝업 - 알레르기 성분 조회
	 */
	public List<Code> selectSearchAllergyCd();
	
	/**
	 * 상세조회팝업 - 인증 조회
	 */
	public List<Code> selectSearchCertifyCd();
	
	/**
	 * 상세조회팝업 - 무첨가 조회
	 */
	public List<Code> selectSearchNotAddCd();
	
	/**
	 * 상세조회 전체 검색
	 * @param searchRequest
	 * @return
	 */
	public List<FudList> selectDetailSearchAll(SearchRequest searchRequest);
	
	/**
	 * 상세조회  검색 - 영양성분만
	 * @param searchRequest
	 * @return
	 */
	public List<FudList> selectDetailSearchOnlyNutri(SearchRequest searchRequest);
	
	
}
