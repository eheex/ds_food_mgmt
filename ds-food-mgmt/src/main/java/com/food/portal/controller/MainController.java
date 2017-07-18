package com.food.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.portal.service.MainService;

@Controller
@RequestMapping(value="/portal/main")
public class MainController {
	
	@Autowired
	MainService mainService;

	/**
	 * 실시간 검색 식품 조회
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/rank", method = RequestMethod.GET)
	@ResponseBody
	public Object getMainRankList() throws Exception{
		return mainService.getMainRankList();
	}
}
