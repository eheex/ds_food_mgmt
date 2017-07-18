package com.food.portal.service;

import com.food.common.model.SearchRequest;
import com.food.portal.model.FudDetail;

public interface SearchDetailResultService {

	public FudDetail getDetailResult(SearchRequest searchRequest);
	
}
