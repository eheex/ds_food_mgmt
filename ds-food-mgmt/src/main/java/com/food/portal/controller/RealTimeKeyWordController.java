package com.food.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.portal.service.RealTimeKeyWordService;

@Controller
@RequestMapping(value="/portal/main")
public class RealTimeKeyWordController {
	
	@Autowired
	RealTimeKeyWordService realTimeKeyWordService;

	/**
	 * 실시간 검색 식품 조회
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/realtime", method = RequestMethod.GET)
	@ResponseBody
	public Object getRealTimeKeyWordList() throws Exception{
		return realTimeKeyWordService.getRealTimeKeyWordList();
	}
}
