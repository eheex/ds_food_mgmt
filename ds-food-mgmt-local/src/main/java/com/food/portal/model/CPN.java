package com.food.portal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * 포탈 식품 상세검색 - 업소/소재지 Object 
 * @author 푸드TFT
 */
@JsonInclude(Include.NON_NULL)
public class CPN {

	private String cpnCtgNm;
	
	private String cpnNm;

	public String getCpnCtgNm() {
		return cpnCtgNm;
	}

	public void setCpnCtgNm(String cpnCtgNm) {
		this.cpnCtgNm = cpnCtgNm;
	}

	public String getCpnNm() {
		return cpnNm;
	}

	public void setCpnNm(String cpnNm) {
		this.cpnNm = cpnNm;
	}
	
}
