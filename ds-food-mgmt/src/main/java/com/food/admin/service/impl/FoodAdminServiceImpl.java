package com.food.admin.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bdapis.apip.common.exception.ServiceException;
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
	 * 인기검색어관리 저장
	 * @param keyWordInfo
	 * @return
	 */
	@Override
	@Transactional
	public int setSaveKeyword(FoodProdHitMgmt keyWordInfos) {
		
		List<FoodProdHitMgmt> foodProdHitMgmts = keyWordInfos.getFoodProdHitMgmts();
		
		int success = 0;
		
		//인기검색어 테이블 삭제 후 저장
		foodAdminMapper.deleteFoodProdHitMgmt();
		
		if(foodProdHitMgmts != null && foodProdHitMgmts.size() > 0){
			//수동등록 저장
			for(FoodProdHitMgmt keyWordInfo : foodProdHitMgmts){
				success = foodAdminMapper.insertSaveKeyword(keyWordInfo);
				if(success < 0){
					throw new ServiceException("키워드를 저장중에 오류가 발생하였습니다.");
				}
			}
		}else{
			//자동등록 저장
			success = foodAdminMapper.insertSaveKeyword(keyWordInfos);
			if(success < 0){
				throw new ServiceException("키워드를 저장중에 오류가 발생하였습니다.");
			}
		}
		
		
		return success;
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
