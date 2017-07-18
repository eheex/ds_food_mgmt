package com.food.portal.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.portal.mapper.MainMapper;
import com.food.portal.model.Fud;
import com.food.portal.service.MainService;

@Service
public class MainServiceImpl implements MainService {

	@Autowired
	MainMapper mainMapper;
	
	/**
	 * 실시간 검색 식품 조회
	 */
	@Override
	public List<Fud> getMainRankList() {
		return mainMapper.selectMainRankList();
	}
	
}
