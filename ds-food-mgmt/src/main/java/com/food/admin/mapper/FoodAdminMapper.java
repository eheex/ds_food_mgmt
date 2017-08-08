package com.food.admin.mapper;

import java.util.List;

import com.daesang.apip.annotation.mybatis.Mapper;
import com.food.admin.model.FoodAdmin;
import com.food.admin.model.FoodProdHitMgmt;
import com.food.common.model.SearchRequest;
import com.food.portal.model.FoodProdReq;
import com.food.portal.model.FoodRest;

@Mapper
public interface FoodAdminMapper {

	/**
	 * 관리자 정보 조회
	 * @param foodAdmin
	 * @return
	 */
	FoodAdmin selectFoodAdminInfo(FoodAdmin foodAdmin);
	
	/**
	 * 실시간 검색 식품 조회
	 * @return
	 */
	List<FoodProdHitMgmt> selectRankList();
	
	/**
	 * 조회기간 인기검색어 순위 조회
	 * @param searchTime
	 * @return
	 */
	List<FoodProdHitMgmt> selectMaualOption(String searchTime);
	
	/**
	 * 인기검색어관리 저장
	 * @param keyWordInfo
	 * @return
	 */
	int insertSaveKeyword(FoodProdHitMgmt keyWordInfo);
	
	/**
	 * 인기검색어관리 삭제
	 * @return
	 */
	int deleteFoodProdHitMgmt();
	
	/**
	 * 관리자 등록/수정요청 정보 조회
	 * @param searchRequest
	 * @return
	 */
	List<FoodProdReq> selectFoodProdReq(SearchRequest searchRequest);
	
	/**
	 * 관리자 제품 이미지 정보 조회
	 * @param searchRequest
	 * @return
	 */
	List<FoodRest> selectFoodProdImg(SearchRequest searchRequest);
	
	/**
	 * 수정요청제품  정보 수정
	 * @param foodProdReq
	 * @return
	 */
	int updateFoodProdReq(FoodProdReq foodProdReq);
}
