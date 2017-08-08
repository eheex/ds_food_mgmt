package com.food.portal.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class FoodProdReq {

	private int reqSeq;
	
	private String reqGb;
	
	private String prdCd;
	
	private String prdNm;
	
	private String comNa;
	
	private String barCd;
	
	private String modNt;
	
	private String modDt;
	
	private String regYn;
	
	private String regDt;
	
	private String email;
	
	private String addrUrl;
	
	/* 
	 *  이미지 추가건
	 */
	private List<FoodRest> foodRest;
	
	private String imgID;
	
	public List<FoodRest> getFoodRest() {
		return foodRest;
	}

	public void setFoodRest(List<FoodRest> foodRest) {
		this.foodRest = foodRest;
	}
	
	public int getReqSeq() {
		return reqSeq;
	}

	public void setReqSeq(int reqSeq) {
		this.reqSeq = reqSeq;
	}
	
	public String getImgID() {
		return imgID;
	}

	public void setImgID(String imgID) {
		this.imgID = imgID;
	}

	public String getImgPth() {
		return imgPth;
	}

	public void setImgPth(String imgPth) {
		this.imgPth = imgPth;
	}

	public String getImgNM() {
		return imgNM;
	}

	public void setImgNM(String imgNM) {
		this.imgNM = imgNM;
	}

	private String imgPth;
	
	private String imgNM;
	
	

	public String getReqGb() {
		return reqGb;
	}

	public void setReqGb(String reqGb) {
		this.reqGb = reqGb;
	}

	public String getPrdCd() {
		return prdCd;
	}

	public void setPrdCd(String prdCd) {
		this.prdCd = prdCd;
	}

	public String getPrdNm() {
		return prdNm;
	}

	public void setPrdNm(String prdNm) {
		this.prdNm = prdNm;
	}

	public String getComNa() {
		return comNa;
	}

	public void setComNa(String comNa) {
		this.comNa = comNa;
	}

	public String getBarCd() {
		return barCd;
	}

	public void setBarCd(String barCd) {
		this.barCd = barCd;
	}

	public String getModNt() {
		return modNt;
	}

	public void setModNt(String modNt) {
		this.modNt = modNt;
	}

	public String getRegYn() {
		return regYn;
	}

	public void setRegYn(String regYn) {
		this.regYn = regYn;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getModDt() {
		return modDt;
	}

	public void setModDt(String modDt) {
		this.modDt = modDt;
	}

	public String getRegDt() {
		return regDt;
	}

	public void setRegDt(String regDt) {
		this.regDt = regDt;
	}

	public String getAddrUrl() {
		return addrUrl;
	}

	public void setAddrUrl(String addrUrl) {
		this.addrUrl = addrUrl;
	}
	
}
