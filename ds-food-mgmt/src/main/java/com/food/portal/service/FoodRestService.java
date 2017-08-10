package com.food.portal.service;

import java.io.IOException;

import com.food.portal.model.FoodRest;


/**
 * Food Image 서비스
 *
 */
public interface FoodRestService {

	/**
	 * 식품 이미지 저장
	 * @param foodRest
	 * @return
	 */
   	public int setFoodRest(FoodRest foodRest);
   
   	/**
     * 제품이미지 전체 다운로드 시 Zip파일로 다운받도록 처리
     * @param foodRest
     * @return
     * @throws IOException
     */
   	public String imgDownloadToZipFile(FoodRest foodRest) throws Exception;
}
