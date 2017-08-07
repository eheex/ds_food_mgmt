package com.food.common.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
/**
 * TODO Page처리를 위한 클래스
 *
 * @author mike Ryu, BD Apis
 * @date 2015. 3. 09
 * @version 1.0
 */
public class PageInfo {
	private Integer page;
	private Integer size;
	private Integer resultCount;
	private Integer totalCount;
	
	@JsonIgnore
	private Integer startRowNum;
	@JsonIgnore
	private Integer endRowNum;
	
	public PageInfo() 
	{
	    super();
	}
	
	public PageInfo(Integer page, Integer size) {
        super();
        this.page = page;
        this.size = size;
    }

    public PageInfo(int page, int size) {
		this.page = page;
		this.size = size;
	}
	
	public PageInfo(int page, int size, int resultCount, int totalCount) {
		this.page = page;
		this.size = size;
		this.resultCount = resultCount;
		this.totalCount = totalCount;
	}
	
	/*for paging*/
	public Integer getStartRowNum()
	{
		return ((page-1)*size);
	}
	
	/*for paging*/
	public Integer getEndRowNum()
	{
		return (page)*size;
	}

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Integer getResultCount() {
        return resultCount;
    }

    public void setResultCount(Integer resultCount) {
        this.resultCount = resultCount;
    }

    public Integer getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
    }

}
