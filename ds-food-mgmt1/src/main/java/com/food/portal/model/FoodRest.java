package com.food.portal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class FoodRest  {

	private int reqSeq;
	
	public int getReqSeq() {
		return reqSeq;
	}

	public void setReqSeq(int reqSeq) {
		this.reqSeq = reqSeq;
	}

	private String imgID;
	
	private String imgPth;
	
	private String imgNM;

	


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


}
