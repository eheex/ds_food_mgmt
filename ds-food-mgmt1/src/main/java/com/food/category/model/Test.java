/*
 * Copyright (c) 2013 SK Telecom.
 * All right reserved.
 *
 * This software is the confidential and proprietary information of SK Telecom.
 * You shall not disclose such Confidential Information and
 * shall use it only in accordance with the terms of the license agreement
 * you entered into with SK Telecom.
 */
package com.food.category.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 *
 * 식품 분류 Object
 *
 * @author mike, BD apis
 * @date 2012. 6. 12. 오후 4:43:10
 * @version $Id$
 */
@JsonInclude(Include.NON_NULL)
public class Test{
	
	private String msg;
	
	private String msg1;
	
	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public String getMsg1() {
		return msg1;
	}

	public void setMsg1(String msg1) {
		this.msg1 = msg1;
	}
	
}
