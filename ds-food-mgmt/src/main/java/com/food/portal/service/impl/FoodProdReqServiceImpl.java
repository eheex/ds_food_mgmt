package com.food.portal.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.food.portal.mapper.FoodProdReqMapper;
import com.food.portal.mapper.FoodRestMapper;
import com.food.portal.model.FoodProdReq;
import com.food.portal.model.FoodRest;
import com.food.portal.service.FoodProdReqService;

@Service
public class FoodProdReqServiceImpl implements FoodProdReqService {

	@Autowired
	FoodProdReqMapper foodProdReqMapper;
	
	@Autowired
	FoodRestMapper foodRestMapper;
	
	@Override
	@Transactional
	public int setFoodProdReq(FoodProdReq foodProdReq) {
		
		// 제품 요청/수정 등록
		int rtnValue = foodProdReqMapper.insertFoodProdReq(foodProdReq);
		
		System.out.println("FoodProdReqServiceImpl foodProdReq getReqSeq = [" +foodProdReq.getReqSeq()+ "]");
	
		if(rtnValue > 0){
			
			//이미지 정보 있을경우 추가
			if(foodProdReq.getFoodRest().size() > 0){
		
				int reqSeq = foodProdReq.getReqSeq();
				
				for(int i=0; i < foodProdReq.getFoodRest().size(); i++){
					
					FoodRest foodRest = foodProdReq.getFoodRest().get(i);
					
					foodRest.setReqSeq(reqSeq);
					
					rtnValue = foodRestMapper.insertFoodRest(foodRest);
				}
			
			}
			
		}
		
		return rtnValue;
	}

}
