package com.food.common.web;

import java.net.URLDecoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.food.portal.service.SearchDetailResultService;

@Controller
public class MenuController {
	
	@Autowired
	SearchDetailResultService searchDetailResultService;

	/**
	 * Portal Main 화면
	 * @return
	 */
	@RequestMapping(value="/main", method=RequestMethod.GET)
	public ModelAndView showMainPage(){
		return new ModelAndView("/portal/eatPrdMain");
	}
	
	

	/**
	 * Portal Mod 화면
	 * @return
	 */
	@RequestMapping(value="/mod", method=RequestMethod.GET)
	public ModelAndView showModPage(){
		return new ModelAndView("/portal/eatModList");
	}
	
	
	/**
	 * Portal List 화면
	 * @return
	 */
	@RequestMapping(value="/list", method=RequestMethod.GET)
	public String goListPage(
			@RequestParam(value="fudNm", required=false, defaultValue="") String fudNm,
			@RequestParam(value="categoryNm", required=false, defaultValue="") String categoryNm,
			@RequestParam(value="tag", required=false, defaultValue="") String tag, ModelMap map) throws Exception {
		System.out.println("fudNm Encode=====>>"+fudNm);
		System.out.println("categoryNm Encode=====>>"+categoryNm);
		System.out.println("tag Encode=====>>"+tag);
		
		System.out.println("fudNm Decode=====>>"+URLDecoder.decode(fudNm, "UTF-8"));
		System.out.println("categoryNm Decode=====>>"+URLDecoder.decode(categoryNm, "UTF-8"));
		System.out.println("tag Decode=====>>"+URLDecoder.decode(tag, "UTF-8"));
		
		map.addAttribute("fudNm", URLDecoder.decode(fudNm, "UTF-8"));
		map.addAttribute("categoryNm", URLDecoder.decode(categoryNm, "UTF-8"));
		map.addAttribute("tag", URLDecoder.decode(tag, "UTF-8"));
		
		return ("/portal/eatPrdList");
	}
	
	/**
	 * Portal 식품 상세화면
	 * @param model
	 * @param fudId
	 * @return
	 */
	@RequestMapping(value="/detailView")
	public String goDetailViewPage(ModelMap map,
			@RequestParam(value="fudId", required=true, defaultValue="") Long fudId,
			@RequestParam(value="fudNm", required=true, defaultValue="") String fudNm) throws Exception {
		
		System.out.println("==============fudId==========="+fudId);
		System.out.println("==============fudNm==========="+fudNm);
		
		/*
		SearchRequest searchRequest = new SearchRequest();
		
		HashMap<String, Object> query = new HashMap<String, Object>();
		query.put("fudId", fudId);
		query.put("fudNm", URLDecoder.decode(fudNm, "UTF-8"));
		
		searchRequest.setQuery(query);
		
		FudDetail fudDetailInfo = searchDetailResultService.getDetailResult(searchRequest);
		
		map.addAttribute("fudDetailInfo", fudDetailInfo);
		*/
		map.addAttribute("fudId", fudId);
		map.addAttribute("fudNm", URLDecoder.decode(fudNm, "UTF-8"));
		
		
		return "/portal/detailPrdView";
	}
}
