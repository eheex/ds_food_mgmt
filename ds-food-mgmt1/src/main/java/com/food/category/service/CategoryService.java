/*
 * Copyright (c) 2013 SK Telecom.
 * All right reserved.
 *
 * This software is the confidential and proprietary information of SK Telecom.
 * You shall not disclose such Confidential Information and
 * shall use it only in accordance with the terms of the license agreement
 * you entered into with SK Telecom.
 */
package com.food.category.service;

import java.util.List;

import com.food.category.model.Test;

/**
 * Category 서비스
 *
 * @author mike, BD apis
 * @date 2015. 8. 20.
 * @version $Id$
 */
public interface CategoryService {
	public List<Test> getCategoryList();
}
