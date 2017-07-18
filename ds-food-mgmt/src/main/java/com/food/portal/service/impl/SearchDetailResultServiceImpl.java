package com.food.portal.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bdapis.apip.common.exception.ServiceException;
import com.food.common.model.SearchRequest;
import com.food.portal.mapper.SearchDetailResultMapper;
import com.food.portal.mapper.SearchResultMapper;
import com.food.portal.model.CPN;
import com.food.portal.model.Fud;
import com.food.portal.model.FudDetail;
import com.food.portal.model.NTR;
import com.food.portal.service.SearchDetailResultService;

@Service
public class SearchDetailResultServiceImpl implements SearchDetailResultService {
	
	@Autowired
	SearchDetailResultMapper searchDetailResultMapper;
	
	@Autowired
	SearchResultMapper searchResultMapper;

	/**
	 * 식품 상세조회
	 * @param searchRequest
	 * @return
	 * @throws Exception
	 */
	@Override
	@Transactional
	public FudDetail getDetailResult(SearchRequest searchRequest) {
		
		searchRequest.setData();
		
		//0. 식품조회 이력등록
		
		int insertHistory = searchResultMapper.insertFoodProdHis(searchRequest);
		
		FudDetail fudDetailInfo = new FudDetail();
		
		if(insertHistory > 0){
		
			// 1. 식품 기본 상세검색
			fudDetailInfo = searchDetailResultMapper.selectSearchDetailResult(searchRequest);
			
			if(fudDetailInfo != null){
				// 2. 원재료 검색
				List<String> rawMTRLTxts = new ArrayList<String>();
				List<FudDetail> rawMTRL = searchDetailResultMapper.selectSearchDetailRawMTRL(searchRequest);
				if(rawMTRL.size() > 0){
					for(int i=0; i<rawMTRL.size(); i++){
						rawMTRLTxts.add(i, rawMTRL.get(i).getRawmtrlRuleStrct());
					}
				}
				
				// 3. 영양성분 검색
				List<NTR> ntrInfos = searchDetailResultMapper.selectSearchDetailNTR(searchRequest);
				
				// 4. 업소/소재지 검색
				List<CPN> cpnInfos = searchDetailResultMapper.selectSearchDetailCPN(searchRequest);
				
				fudDetailInfo.setRawmtrlRuleStrcts(rawMTRLTxts);
				fudDetailInfo.setNtr(ntrInfos);
				fudDetailInfo.setCpn(cpnInfos);
			}
		}else{
			throw new ServiceException("HisInsertErr", "식품조회 이력등록시 오류가 발생하였습니다.");
		}
		
		return fudDetailInfo;
	}
	
	/**
	 * 식품 상세조회 - 카테고리 인기제품 조회
	 * @param searchRequest
	 * @return
	 */
	@Override
	public List<Fud> getCategoryRank(SearchRequest searchRequest) {

		searchRequest.setData();
		
		List<Fud> categoryRanks = searchDetailResultMapper.selectCategoryRank(searchRequest);
		
		return categoryRanks;
	}
	
	/**
	 * 상세검색 알레르기/인증/무첨가 데이터 조회
	 * @return
	 */
	@Override
	public Object getDetailSearchPopupData() {
		
		HashMap<String, Object> detailSearchData = new HashMap<String, Object>();
		
		//알레르기 성분 조회
		detailSearchData.put("allergyCds", searchDetailResultMapper.selectSearchAllergyCd());
		//인증 조회
		detailSearchData.put("certifyCds", searchDetailResultMapper.selectSearchCertifyCd());
		//무첨가 조회
		detailSearchData.put("notAddCds", searchDetailResultMapper.selectSearchNotAddCd());
		
		return detailSearchData;
	}

}
