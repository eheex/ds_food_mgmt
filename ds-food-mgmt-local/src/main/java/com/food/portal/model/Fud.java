package com.food.portal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * 포탈 검색리스트 클래스
 * @author 푸드TFT
 *
 */
@JsonInclude(Include.NON_NULL)
public class Fud {
	
	private Long fudId;	//식품아이디
	
	private String fudNm;	//식품이름
	
	private String fudStnCd;	//식품구분코드
	
	private String fudOrgplceCd;	//식품원산지코드
	
	private String prductStnCd;	//제품구분코드
	
	private String fudUrl;	//식품정보URL	
	
	private String spcIgd;	//식품번들출력코드	
	
	private String tag;	//태그
	
	private String brand;	//브랜드
	
	private String vlm;	//중량
	
	private String cal;	//칼로리
	
	private String rawmtrlRuleStrct;	//원재료
	
	private String cpnNm;	//판매처
	
	private int totcnt;		//총카운트
	
	private String allrgyIgdCt;	//알레르기성분
	
	private String allrgyGbn;	//알레르기성분 유무(Y:있음,N:없음)
	
	private String cert;	//인증
	
	private String notAdd;	//무첨가
	
	private String ntrIgdNm;	//영양성분주의
	
	private int hiscnt;	//인기순카운트
	
	private String crtDt;	//제품등록일	
	
	private String aliNm;		//식품이명
	
	private String clsGroup;	//카테고리 위치 값
	
	public Long getFudId() {
		return fudId;
	}

	public void setFudId(Long fudId) {
		this.fudId = fudId;
	}

	public String getFudNm() {
		return fudNm;
	}

	public void setFudNm(String fudNm) {
		this.fudNm = fudNm;
	}

	public String getFudStnCd() {
		return fudStnCd;
	}

	public void setFudStnCd(String fudStnCd) {
		this.fudStnCd = fudStnCd;
	}

	public String getFudOrgplceCd() {
		return fudOrgplceCd;
	}

	public void setFudOrgplceCd(String fudOrgplceCd) {
		this.fudOrgplceCd = fudOrgplceCd;
	}

	public String getPrductStnCd() {
		return prductStnCd;
	}

	public void setPrductStnCd(String prductStnCd) {
		this.prductStnCd = prductStnCd;
	}

	public String getFudUrl() {
		return fudUrl;
	}

	public void setFudUrl(String fudUrl) {
		this.fudUrl = fudUrl;
	}

	public String getSpcIgd() {
		return spcIgd;
	}

	public void setSpcIgd(String spcIgd) {
		this.spcIgd = spcIgd;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getVlm() {
		return vlm;
	}

	public void setVlm(String vlm) {
		this.vlm = vlm;
	}

	public String getCal() {
		return cal;
	}

	public void setCal(String cal) {
		this.cal = cal;
	}

	public String getRawmtrlRuleStrct() {
		return rawmtrlRuleStrct;
	}

	public void setRawmtrlRuleStrct(String rawmtrlRuleStrct) {
		this.rawmtrlRuleStrct = rawmtrlRuleStrct;
	}

	public String getCpnNm() {
		return cpnNm;
	}

	public void setCpnNm(String cpnNm) {
		this.cpnNm = cpnNm;
	}

	public int getTotcnt() {
		return totcnt;
	}

	public void setTotcnt(int totcnt) {
		this.totcnt = totcnt;
	}

	public String getAllrgyIgdCt() {
		return allrgyIgdCt;
	}

	public void setAllrgyIgdCt(String allrgyIgdCt) {
		this.allrgyIgdCt = allrgyIgdCt;
	}

	public String getAllrgyGbn() {
		return allrgyGbn;
	}

	public void setAllrgyGbn(String allrgyGbn) {
		this.allrgyGbn = allrgyGbn;
	}

	public String getCert() {
		return cert;
	}

	public void setCert(String cert) {
		this.cert = cert;
	}

	public String getNotAdd() {
		return notAdd;
	}

	public void setNotAdd(String notAdd) {
		this.notAdd = notAdd;
	}

	public String getNtrIgdNm() {
		return ntrIgdNm;
	}

	public void setNtrIgdNm(String ntrIgdNm) {
		this.ntrIgdNm = ntrIgdNm;
	}

	public int getHiscnt() {
		return hiscnt;
	}

	public void setHiscnt(int hiscnt) {
		this.hiscnt = hiscnt;
	}

	public String getCrtDt() {
		return crtDt;
	}

	public void setCrtDt(String crtDt) {
		this.crtDt = crtDt;
	}

	public String getClsGroup() {
		return clsGroup;
	}

	public void setClsGroup(String clsGroup) {
		this.clsGroup = clsGroup;
	}

	public String getAliNm() {
		return aliNm;
	}

	public void setAliNm(String aliNm) {
		this.aliNm = aliNm;
	}
	
}
