package com.food.portal.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.common.model.SearchRequest;
import com.food.portal.mapper.SearchDetailResultMapper;
import com.food.portal.model.CPN;
import com.food.portal.model.FudDetail;
import com.food.portal.model.NTR;
import com.food.portal.service.SearchDetailResultService;

@Service
public class SearchDetailResultServiceImpl implements SearchDetailResultService {
	
	@Autowired
	SearchDetailResultMapper searchDetailResultMapper;

	@Override
	public FudDetail getDetailResult(SearchRequest searchRequest) {
		
		searchRequest.setData();
		
		// 1. 식품 기본 상세검색
		FudDetail fudDetailInfo = searchDetailResultMapper.selectSearchDetailResult(searchRequest);
		
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
		
		return fudDetailInfo;
	}

}
