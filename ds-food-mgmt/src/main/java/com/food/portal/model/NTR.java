package com.food.portal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * 포탈 식품 상세검색 - 영양성분 Object 
 * @author 푸드TFT
 */
@JsonInclude(Include.NON_NULL)
public class NTR {
	
	private Long fudId;					//제품 코드

	private String untGnbnm;			//영양성분 구분
	
	private String ofrQt;				//1회제공량
	
	private String ofrCnamt;			//단위제공량
	
	private String cal;					//중량 칼로리
	
	private String totOfrQt;			//구분
	
	private String totOfrCnamt;			//
	
	private String totCal;				//
	
	private String untCntnTypCd;		//
	
	private String oppNtrIgdId;			//
		
	private String oppNtrIgdNm;			//
	
	private String cnamtNm;				//
	
	private String rate;				//
	
	private String totCnamt;			//
	
	private String totCnamtUntCd;		//
	
	private String totRate;				//
	
	private int ntrIgdLvlNo;			//
	
	private int ntrIgdSrtNo;			//

	public Long getFudId() {
		return fudId;
	}

	public void setFudId(Long fudId) {
		this.fudId = fudId;
	}

	public String getUntGnbnm() {
		return untGnbnm;
	}

	public void setUntGnbnm(String untGnbnm) {
		this.untGnbnm = untGnbnm;
	}

	public String getOfrQt() {
		return ofrQt;
	}

	public void setOfrQt(String ofrQt) {
		this.ofrQt = ofrQt;
	}

	public String getOfrCnamt() {
		return ofrCnamt;
	}

	public void setOfrCnamt(String ofrCnamt) {
		this.ofrCnamt = ofrCnamt;
	}

	public String getCal() {
		return cal;
	}

	public void setCal(String cal) {
		this.cal = cal;
	}

	public String getTotOfrQt() {
		return totOfrQt;
	}

	public void setTotOfrQt(String totOfrQt) {
		this.totOfrQt = totOfrQt;
	}

	public String getTotOfrCnamt() {
		return totOfrCnamt;
	}

	public void setTotOfrCnamt(String totOfrCnamt) {
		this.totOfrCnamt = totOfrCnamt;
	}

	public String getTotCal() {
		return totCal;
	}

	public void setTotCal(String totCal) {
		this.totCal = totCal;
	}

	public String getUntCntnTypCd() {
		return untCntnTypCd;
	}

	public void setUntCntnTypCd(String untCntnTypCd) {
		this.untCntnTypCd = untCntnTypCd;
	}

	public String getOppNtrIgdId() {
		return oppNtrIgdId;
	}

	public void setOppNtrIgdId(String oppNtrIgdId) {
		this.oppNtrIgdId = oppNtrIgdId;
	}

	public String getOppNtrIgdNm() {
		return oppNtrIgdNm;
	}

	public void setOppNtrIgdNm(String oppNtrIgdNm) {
		this.oppNtrIgdNm = oppNtrIgdNm;
	}

	public String getCnamtNm() {
		return cnamtNm;
	}

	public void setCnamtNm(String cnamtNm) {
		this.cnamtNm = cnamtNm;
	}

	public String getRate() {
		return rate;
	}

	public void setRate(String rate) {
		this.rate = rate;
	}

	public String getTotCnamt() {
		return totCnamt;
	}

	public void setTotCnamt(String totCnamt) {
		this.totCnamt = totCnamt;
	}

	public String getTotCnamtUntCd() {
		return totCnamtUntCd;
	}

	public void setTotCnamtUntCd(String totCnamtUntCd) {
		this.totCnamtUntCd = totCnamtUntCd;
	}

	public String getTotRate() {
		return totRate;
	}

	public void setTotRate(String totRate) {
		this.totRate = totRate;
	}

	public int getNtrIgdLvlNo() {
		return ntrIgdLvlNo;
	}

	public void setNtrIgdLvlNo(int ntrIgdLvlNo) {
		this.ntrIgdLvlNo = ntrIgdLvlNo;
	}

	public int getNtrIgdSrtNo() {
		return ntrIgdSrtNo;
	}

	public void setNtrIgdSrtNo(int ntrIgdSrtNo) {
		this.ntrIgdSrtNo = ntrIgdSrtNo;
	}
	
}
