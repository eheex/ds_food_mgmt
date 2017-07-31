package com.food.admin.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * admin
 * @author 푸드TFT
 *
 */
@JsonInclude(Include.NON_NULL)
public class FoodProdHitMgmt {
	
	private String fudNm;	//식품이름
	
	private String cnt;	// 검색량
	
	private String seq;	// 순번
	
	private String no;  // 순번-순서
	
	private String gbn;  // 구분
	
	private String stYmd; // 시작일자
	
	private String stTime;  // 시작시간
	
	private String edYmd;   // 종료일자
	
	private String edTime;  // 종료시간
	
	private String prdNm;   // 검색상품명
	
	private String refTime; // 
	
	private String modDt;  // 수정일자
	
	private List<FoodProdHitMgmt> foodProdHitMgmts;

	public String getFudNm() {
		return fudNm;
	}

	public void setFudNm(String fudNm) {
		this.fudNm = fudNm;
	}

	public String getCnt() {
		return cnt;
	}

	public void setCnt(String cnt) {
		this.cnt = cnt;
	}

	public String getSeq() {
		return seq;
	}

	public void setSeq(String seq) {
		this.seq = seq;
	}

	public String getNo() {
		return no;
	}

	public void setNo(String no) {
		this.no = no;
	}

	public String getGbn() {
		return gbn;
	}

	public void setGbn(String gbn) {
		this.gbn = gbn;
	}

	public String getStYmd() {
		return stYmd;
	}

	public void setStYmd(String stYmd) {
		this.stYmd = stYmd;
	}

	public String getStTime() {
		return stTime;
	}

	public void setStTime(String stTime) {
		this.stTime = stTime;
	}

	public String getEdYmd() {
		return edYmd;
	}

	public void setEdYmd(String edYmd) {
		this.edYmd = edYmd;
	}

	public String getEdTime() {
		return edTime;
	}

	public void setEdTime(String edTime) {
		this.edTime = edTime;
	}

	public String getPrdNm() {
		return prdNm;
	}

	public void setPrdNm(String prdNm) {
		this.prdNm = prdNm;
	}

	public String getRefTime() {
		return refTime;
	}

	public void setRefTime(String refTime) {
		this.refTime = refTime;
	}

	public String getModDt() {
		return modDt;
	}

	public void setModDt(String modDt) {
		this.modDt = modDt;
	}

	public List<FoodProdHitMgmt> getFoodProdHitMgmts() {
		return foodProdHitMgmts;
	}

	public void setFoodProdHitMgmts(List<FoodProdHitMgmt> foodProdHitMgmts) {
		this.foodProdHitMgmts = foodProdHitMgmts;
	}
}
