package com.food.common.web;

import java.net.URLDecoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
	
	@Autowired
	BCryptPasswordEncoder passEncoder;

	/**
	 * Portal Main 화면
	 * @return
	 */
	@RequestMapping(value="/main", method=RequestMethod.GET)
	public ModelAndView showMainPage(){
		return new ModelAndView("/portal/eatPrdMain");
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
		
		map.addAttribute("fudId", fudId);
		map.addAttribute("fudNm", URLDecoder.decode(fudNm, "UTF-8"));
		
		return "/portal/detailPrdView";
	}
	
	/**
	 * 관리자 로그인 화면
	 * @return
	 */
	@RequestMapping(value="/admin/login", method=RequestMethod.GET)
	public ModelAndView showAdminLogin(){
		return new ModelAndView("/admin/login");
	}
	
	/**
	 * 관리자 인기검색어 관리 리스트 화면
	 * @return
	 */
	@RequestMapping(value="/admin/viewRank", method=RequestMethod.GET)
	public ModelAndView goAdminRank(){
		return new ModelAndView("/admin/adminRank");
	}
	
	/**
	 * 관리자 인기검색어 관리 수정 화면
	 * @return
	 */
	@RequestMapping(value="/admin/rankMod", method=RequestMethod.GET)
	public ModelAndView goRankModify(){
		return new ModelAndView("/admin/adminRankModify");
	}
	
	/**
	 * 관리자 등록/수정요청 리스트 화면
	 * @return
	 */
	@RequestMapping(value="/admin/viewList", method=RequestMethod.GET)
	public ModelAndView goAdminViewList(ModelMap map,
			@RequestParam(value="viewType", required=true, defaultValue="") String viewType){
		map.addAttribute("viewType", viewType);
		return new ModelAndView("/admin/adminViewList");
	}
	
	/**
	 * 관리자 등록/수정요청 상세화면
	 * @return
	 */
	@RequestMapping(value="/admin/viewDetail", method=RequestMethod.GET)
	public ModelAndView goAdminViewDetail(ModelMap map,
			@RequestParam(value="seq", required=true, defaultValue="") int reqSeq,
			@RequestParam(value="viewType", required=true, defaultValue="") String viewType){
		map.addAttribute("reqSeq", reqSeq);
		map.addAttribute("viewType", viewType);
		return new ModelAndView("/admin/adminViewDetail");
	}
}
