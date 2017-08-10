package com.food.portal.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class FoodRest  {

	private int reqSeq;		//시퀀스번호
	
	private String imgID;	//이미지 아이디
	
	private String imgPth;	//이미지 경로
	
	private String imgNM;	//이미지 파일명
	
	private String modDt;	//수정일시
	
	private List<FoodRest> foodRests;	//FoodRest List 객체정보

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

	public String getModDt() {
		return modDt;
	}

	public void setModDt(String modDt) {
		this.modDt = modDt;
	}

	public List<FoodRest> getFoodRests() {
		return foodRests;
	}

	public void setFoodRests(List<FoodRest> foodRests) {
		this.foodRests = foodRests;
	}

}
