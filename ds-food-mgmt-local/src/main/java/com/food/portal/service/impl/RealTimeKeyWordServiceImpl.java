package com.food.portal.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.portal.mapper.RealTimeKeyWordMapper;
import com.food.portal.model.Fud;
import com.food.portal.service.RealTimeKeyWordService;

@Service
public class RealTimeKeyWordServiceImpl implements RealTimeKeyWordService {

	@Autowired
	RealTimeKeyWordMapper realTimeKeyWordMapper;
	
	/**
	 * 실시간 검색 식품 조회
	 */
	@Override
	public List<Fud> getRealTimeKeyWordList() {
		return realTimeKeyWordMapper.selectRealTimeKeyWordList();
	}
	
}
