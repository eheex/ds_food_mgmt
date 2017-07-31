package com.food.admin.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.admin.mapper.FoodAdminMapper;
import com.food.admin.model.FoodAdmin;
import com.food.admin.model.FoodProdHitMgmt;
import com.food.admin.service.FoodAdminService;
import com.food.common.model.SearchRequest;
import com.food.portal.model.FoodProdReq;
import com.food.portal.model.FoodRest;

@Service
public class FoodAdminServiceImpl implements FoodAdminService {

	@Autowired
	FoodAdminMapper foodAdminMapper;
	
	/**
	 * 관리자 정보 조회
	 * @param foodAdmin
	 * @return
	 */
	@Override
	public FoodAdmin getFoodAdminInfo(FoodAdmin foodAdmin) {
		return foodAdminMapper.selectFoodAdminInfo(foodAdmin);
	}

	/**
	 * 실시간 검색 식품 조회
	 */
	@Override
	public List<FoodProdHitMgmt> getRankList() {
		return foodAdminMapper.selectRankList();
	}
	
	/**
	 * 조회기간 인기검색어 순위 조회
	 * @param searchTime
	 * @return
	 */
	@Override
	public List<FoodProdHitMgmt> getMaualOption(String searchTime) {
		return foodAdminMapper.selectMaualOption(searchTime);
	}
	
	/**
	 * 관리자 등록/수정요청 정보 조회
	 * @param searchRequest
	 * @return
	 */
	@Override
	public List<FoodProdReq> getFoodReqData(SearchRequest searchRequest) {
		
		searchRequest.setData();
		
		List<FoodProdReq> listData = foodAdminMapper.selectFoodProdReq(searchRequest);
		
		if("true".equals((String)searchRequest.getQueryData("detailView"))){
			List<FoodRest> imgInfo = foodAdminMapper.selectFoodProdImg(searchRequest);
			
			listData.get(0).setFoodRest(imgInfo);
		}
		
		return listData;
	}

}
