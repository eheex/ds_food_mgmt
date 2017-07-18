package com.food.portal.service.impl;


import java.util.ArrayList;
import java.util.Iterator;


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
//    public int setFoodProdReq(FoodProdReq foodProdReq, ArrayList<FoodRest> listFoodRest) {
	  public int setFoodProdReq(FoodProdReq foodProdReq) {
		ArrayList<FoodRest> listFoodRest = null;
		int rtnValue = foodProdReqMapper.insertFoodProdReq(foodProdReq);
				
		
		System.out.println("FoodProdReqServiceImpl foodProdReq getReqSeq = [" +foodProdReq.getReqSeq()+ "]");
		
		
		System.out.println("FoodProdReqServiceImpl setFoodProdReq rtnValue = [" +rtnValue+ "]");
//		System.out.println("FoodProdReqServiceImpl listFoodRest.size() = [" +listFoodRest.size()+ "]");
//		System.out.println("FoodProdReqServiceImpl setFoodProdReq listFoodRest.size() = [" +listFoodRest.size()+ "]");
	
		
		
		/*
		for(int loopCount=0; loopCount < listFoodRest.size() ; loopCount++){

			FoodRest recvFoodRest = null;
			FoodRest sendFoodRest = null;
			recvFoodRest = listFoodRest.get(loopCount);
			
			sendFoodRest.setReqSeq(rtnValue);
			sendFoodRest.setImgID(recvFoodRest.getImgID());
			sendFoodRest.setImgPth(recvFoodRest.getImgPth());
			sendFoodRest.setImgNM(recvFoodRest.getImgNM());
			
			int rtnSub = foodRestMapper.insertFoodRest(sendFoodRest);
		
			System.out.println(  "loopCount[" +loopCount + "] = ["+rtnSub+ "]");
		}
		*/
		/*
		Iterator <FoodRest> it = listFoodRest.iterator();  
		
		while(it.hasNext()){
			FoodRest recvFoodRest = it.next();
			FoodRest sendFoodRest = null;
			
			sendFoodRest.setReqSeq(rtnValue);
			sendFoodRest.setImgID(recvFoodRest.getImgID());
			sendFoodRest.setImgPth(recvFoodRest.getImgPth());
			sendFoodRest.setImgNM(recvFoodRest.getImgNM());
			
			foodRestMapper.insertFoodRest(sendFoodRest);
		
		}
 		*/
		return rtnValue;
	}

}
