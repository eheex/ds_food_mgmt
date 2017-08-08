package com.food.portal.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * 포탈 식품 상세검색 클래스
 * @author 푸드TFT
 *
 */
@JsonInclude(Include.NON_NULL)
public class FudDetail extends Fud{

	private String barcode;			//바코드
	
	private String itmRptNo;		//품목보고번호
	
	private String itmRptDt;		//보고일
	
	private String dtiIdvMrk;		//개별표시
	
	private String ognCntn;			//유기농 성분
	
	private String foodGroup;		//식품분류
	
	private String foodType;		//식품유형
	
	private String mta01;			//제조년월
	
	private String mta02;			//유통기한
	
	private String mta03;			//품질유지기한
	
	private String mta04;			//반품 및 교환 장소
	
	private String mta05;			//고객상담실
	
	private String mta06;			//주의사항
	
	private String mta07;			//제조시설 안내
	
	private String mta08;			//인증
	
	private String mta08Sub;		//인증설명
	
	private String mta09;			//기타마케팅 문구
	
	private String mta10;			//특허
	
	private String mta11;			//실용시안
	
	private String mta12;			//유기농
	
	private String pacForm;			//포장형태
	
	private String pacMtrlCt;		//포장재질
	
	private String rcspCt;			//분리배출표시
	
	private String rcspMrk;			//분리배출 상세
	
	private List<String> rawmtrlRuleStrcts;
	
	private List<NTR> ntr;			//영양성분
	
	private List<CPN> cpn;			//업소/소재지

	public String getBarcode() {
		return barcode;
	}

	public void setBarcode(String barcode) {
		this.barcode = barcode;
	}

	public String getItmRptNo() {
		return itmRptNo;
	}

	public void setItmRptNo(String itmRptNo) {
		this.itmRptNo = itmRptNo;
	}

	public String getItmRptDt() {
		return itmRptDt;
	}

	public void setItmRptDt(String itmRptDt) {
		this.itmRptDt = itmRptDt;
	}

	public String getDtiIdvMrk() {
		return dtiIdvMrk;
	}

	public void setDtiIdvMrk(String dtiIdvMrk) {
		this.dtiIdvMrk = dtiIdvMrk;
	}

	public String getOgnCntn() {
		return ognCntn;
	}

	public void setOgnCntn(String ognCntn) {
		this.ognCntn = ognCntn;
	}

	public String getFoodGroup() {
		return foodGroup;
	}

	public void setFoodGroup(String foodGroup) {
		this.foodGroup = foodGroup;
	}

	public String getFoodType() {
		return foodType;
	}

	public void setFoodType(String foodType) {
		this.foodType = foodType;
	}

	public String getMta01() {
		return mta01;
	}

	public void setMta01(String mta01) {
		this.mta01 = mta01;
	}

	public String getMta02() {
		return mta02;
	}

	public void setMta02(String mta02) {
		this.mta02 = mta02;
	}

	public String getMta03() {
		return mta03;
	}

	public void setMta03(String mta03) {
		this.mta03 = mta03;
	}

	public String getMta04() {
		return mta04;
	}

	public void setMta04(String mta04) {
		this.mta04 = mta04;
	}

	public String getMta05() {
		return mta05;
	}

	public void setMta05(String mta05) {
		this.mta05 = mta05;
	}

	public String getMta06() {
		return mta06;
	}

	public void setMta06(String mta06) {
		this.mta06 = mta06;
	}

	public String getMta07() {
		return mta07;
	}

	public void setMta07(String mta07) {
		this.mta07 = mta07;
	}

	public String getMta08() {
		return mta08;
	}

	public void setMta08(String mta08) {
		this.mta08 = mta08;
	}

	public String getMta09() {
		return mta09;
	}

	public void setMta09(String mta09) {
		this.mta09 = mta09;
	}

	public String getMta10() {
		return mta10;
	}

	public void setMta10(String mta10) {
		this.mta10 = mta10;
	}

	public String getMta11() {
		return mta11;
	}

	public void setMta11(String mta11) {
		this.mta11 = mta11;
	}

	public String getMta12() {
		return mta12;
	}

	public void setMta12(String mta12) {
		this.mta12 = mta12;
	}

	public String getPacForm() {
		return pacForm;
	}

	public void setPacForm(String pacForm) {
		this.pacForm = pacForm;
	}

	public String getPacMtrlCt() {
		return pacMtrlCt;
	}

	public void setPacMtrlCt(String pacMtrlCt) {
		this.pacMtrlCt = pacMtrlCt;
	}

	public String getRcspCt() {
		return rcspCt;
	}

	public void setRcspCt(String rcspCt) {
		this.rcspCt = rcspCt;
	}

	public String getRcspMrk() {
		return rcspMrk;
	}

	public void setRcspMrk(String rcspMrk) {
		this.rcspMrk = rcspMrk;
	}

	public List<NTR> getNtr() {
		return ntr;
	}

	public void setNtr(List<NTR> ntr) {
		this.ntr = ntr;
	}

	public List<CPN> getCpn() {
		return cpn;
	}

	public void setCpn(List<CPN> cpn) {
		this.cpn = cpn;
	}

	public List<String> getRawmtrlRuleStrcts() {
		return rawmtrlRuleStrcts;
	}

	public void setRawmtrlRuleStrcts(List<String> rawmtrlRuleStrcts) {
		this.rawmtrlRuleStrcts = rawmtrlRuleStrcts;
	}

	public String getMta08Sub() {
		return mta08Sub;
	}

	public void setMta08Sub(String mta08Sub) {
		this.mta08Sub = mta08Sub;
	}
	
}
