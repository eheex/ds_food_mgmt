package com.food.admin.service;

import java.util.List;

import com.food.admin.model.FoodAdmin;
import com.food.admin.model.FoodProdHitMgmt;
import com.food.common.model.SearchRequest;
import com.food.portal.model.FoodProdReq;

public interface FoodAdminService {

	/**
	 * 관리자 정보 조회
	 * @param foodAdmin
	 * @return
	 */
	FoodAdmin getFoodAdminInfo(FoodAdmin foodAdmin);
	
	/**
	 * 인기검색어순위
	 * @return
	 */
	List<FoodProdHitMgmt> getRankList();
	
	/**
	 * 조회기간 인기검색어 순위 조회
	 * @param searchTime
	 * @return
	 */
	List<FoodProdHitMgmt> getMaualOption(String searchTime);
	
	/**
	 * 인기검색어관리 저장
	 * @param keyWordInfo
	 * @return
	 */
	int setSaveKeyword(FoodProdHitMgmt keyWordInfos);
	
	/**
	 * 관리자 등록/수정요청 정보 조회
	 * @param searchRequest
	 * @return
	 */
	List<FoodProdReq> getFoodReqData(SearchRequest searchRequest);
	
	/**
	 * 관리자 등록/수정요청 정보 수정
	 * @param foodProdReq
	 * @return
	 * @throws Exception
	 */
	int modifyFoodReqData(FoodProdReq foodProdReq);
}
