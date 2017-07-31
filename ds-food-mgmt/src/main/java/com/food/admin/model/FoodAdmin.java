package com.food.admin.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TODO 운영자 Model
 *
 * @author 푸드TFT 
 */
@JsonInclude(Include.NON_NULL)
public class FoodAdmin {

	private String adminId;
	
	private String adminPwd;
	
	private String adminName;
	
	private String modDt;

	public String getAdminId() {
		return adminId;
	}

	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}

	public String getAdminPwd() {
		return adminPwd;
	}

	public void setAdminPwd(String adminPwd) {
		this.adminPwd = adminPwd;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getModDt() {
		return modDt;
	}

	public void setModDt(String modDt) {
		this.modDt = modDt;
	}
	
}
