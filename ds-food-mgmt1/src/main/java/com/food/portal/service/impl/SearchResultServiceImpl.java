package com.food.portal.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.common.model.SearchRequest;
import com.food.portal.mapper.SearchResultMapper;
import com.food.portal.model.FudList;
import com.food.portal.service.SearchResultService;

@Service
public class SearchResultServiceImpl implements SearchResultService {

	@Autowired
	SearchResultMapper searchResultMapper;
	
	/**
	 * 검색결과 리스트 조회
	 * @param searchRequest (Type => 상품명 - fud /카테고리명 - category /태그명 - tag)
	 * @return
	 */
	@Override
	public List<FudList> getSearchResultList(SearchRequest searchRequest) {
		
		List<FudList> fudList = new ArrayList<FudList>();
		
		searchRequest.setData();
		
		String type = (String)searchRequest.getQueryData("type");
	
		switch(type){
			case "fud":
				fudList = searchResultMapper.selectSearchResultList(searchRequest);
				break;
			case "category":
				fudList = searchResultMapper.selectSearchCategoryResultList(searchRequest);
				//카테고리 조회된 결과값이 있을경우 카테고리 위치를 조회한다.
				if(fudList.size() > 0){
					String clsGroup = searchResultMapper.selectCategoryLocationSearch(searchRequest).getClsGroup();
					fudList.get(0).setClsGroup(clsGroup);
				}
				break;
			case "tag":
				fudList = searchResultMapper.selectSearchTagResultList(searchRequest);
				break;
		}
	
		return fudList;
	}

	/**
	 * 식품조회 히스토리 등록
	 * @param searchRequest
	 * @return
	 */
	@Override
	public int setFoodProdHis(SearchRequest searchRequest) {
		System.out.println("===============setFoodProdHis============");
		return searchResultMapper.insertFoodProdHis(searchRequest);
	}
}
