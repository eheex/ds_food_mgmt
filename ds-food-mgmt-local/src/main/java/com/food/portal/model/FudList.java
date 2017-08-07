package com.food.portal.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * 포탈 검색리스트 클래스
 * @author 푸드TFT
 *
 */
@JsonInclude(Include.NON_NULL)
public class FudList extends Fud {

	private int sortHiscnt;	//인기순정렬값
	
	private int sortCal;	//칼로리정렬값

	public int getSortHiscnt() {
		return sortHiscnt;
	}

	public void setSortHiscnt(int sortHiscnt) {
		this.sortHiscnt = sortHiscnt;
	}

	public int getSortCal() {
		return sortCal;
	}

	public void setSortCal(int sortCal) {
		this.sortCal = sortCal;
	}
	
}
