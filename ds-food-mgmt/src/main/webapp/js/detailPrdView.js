(function(window, $, undefined) {

window.$DetailPrdView = {
	detailPrdInfo: {},
	init:function(){
		this.showLoading();
		
		//Header 공통 그리기
		$Layout.setSearchHeader();
		
		this._getCategoryRank();
		this._getData();
		this._onClickEvent();
	},
	_getData:function(){
		var _this = this;

		var _sendData = {"query":{"fudId":fudId,"fudNm":fudNm}};
		$.ajax({
			url: "/portal/searchDetail/result",
			data:JSON.stringify(_sendData),
		    type:"POST",
			contentType: "application/json; charset=UTF-8",
			dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
			async: true	//동기화처리
		}).success(function(data){
			console.log("data::::"+data);
			_this.detailPrdInfo = data;
			_this._setDetailPrdInfo();
		}).error(function(){
			alert("상세정보를 가져오는중 오류가 발생하였습니다.");
			_this.hideLoading();
		}).done(function() {
			_this.hideLoading();
		});
	},
	_getCategoryRank:function(){
		var _this = this;
		
		var _sendData = {"query":{"fudId":fudId,"fudNm":fudNm}};
		
		$.ajax({
			url: "/portal/searchDetail/categoryRank",
			data:JSON.stringify(_sendData),
		    type:"POST",
			contentType: "application/json; charset=UTF-8",
			dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
			async: true	//동기화처리
		}).done(function(data) {
			_this._drawCategoryRank(data);
		});
	},
	_onClickEvent:function(){
		//수정요청팝업
		$("#btnPrdMod").on("click", function(event){
			event.preventDefault();
			$PrdModifyPopup.open();
		});
	},
	_setDetailPrdInfo:function(){
		
		var _prdViewArea = $("div.prd_view");
		
		//위치정보 Set
		var _foodGroup = "";
		if(typeof this.detailPrdInfo.foodGroup != "undefined" && this.detailPrdInfo.foodGroup != ""){
			var _foodGroupTxt = this.detailPrdInfo.foodGroup.split(">");
			$.each(_foodGroupTxt, function(idx){
				if(_foodGroupTxt.length-1 == idx){
					_foodGroup += '<li class="here">'+_foodGroupTxt[idx]+'</li>';
				}else{
					_foodGroup += '<li>'+_foodGroupTxt[idx]+'</li>';
				}
			});
		}
		$("div.location_wrap .location").append(_foodGroup);
		
		$("span.prd_name",_prdViewArea).html(this.detailPrdInfo.fudNm);	//제품명
		$("span.prd_weight",_prdViewArea).html(this.detailPrdInfo.vlm);	//용량
		
		var _fudUrl = this.detailPrdInfo.fudUrl;
		if(_isNullChk(_fudUrl)){
			_fudUrl = "../images/common/noimg.jpg";
		}
		
		$(".prd_imgview img",_prdViewArea).attr("src",_fudUrl);	//제품이미지
		
		//바코드
		$(".prd_barcode", _prdViewArea).html(this.detailPrdInfo.barcode);
		//품목보고번호
		$(".prd_rptNo", _prdViewArea).html(this.detailPrdInfo.itmRptNo);
		//보고일
		$(".prd_rptDt", _prdViewArea).html(this.detailPrdInfo.itmRptDt);
		//업소명/소재지
		var _cpn = "";
		if(this.detailPrdInfo.cpn.length > 0){
			$.each(this.detailPrdInfo.cpn, function(key,value){
				if(key != 0){_cpn += "<br />";}
				if(this.cpnCtgNm == "제조원"){
					_cpn += "제조원 / " + this.cpnNm;
				}else if(this.cpnCtgNm == "판매원"){
					_cpn += "판매원 / " + this.cpnNm;
				}else if(this.cpnCtgNm == "수입원"){
					_cpn += "수입원 / " + this.cpnNm;
				}else if(this.cpnCtgNm == "유통전문판매원"){
					_cpn += "유통전문판매원 / " + this.cpnNm;
				}else if(this.cpnCtgNm == "수입판매원"){
					_cpn += "수입판매원 / " + this.cpnNm;
				}
			});
		}
		
		$(".prd_cpn p", _prdViewArea).html(_cpn);
		//식품분류
		$(".prd_fudGroup", _prdViewArea).html(this.detailPrdInfo.foodGroup);
		//식품유형
		$(".prd_fudType", _prdViewArea).html(this.detailPrdInfo.foodType);
		//개별표시
		$(".prd_dtiIdvMrk", _prdViewArea).html(this.detailPrdInfo.dtiIdvMrk);
		//브랜드
		$(".prd_brand", _prdViewArea).html(this.detailPrdInfo.brand);
		//태그정보
		var _tagTxt = "";
		if(typeof this.detailPrdInfo.tag != "undefined" && this.detailPrdInfo.tag != ""){
			var _tag = this.detailPrdInfo.tag.split(",");
			$.each(_tag, function(idx){
				_tagTxt += '<span class="hashtag">#'+_tag[idx]+'</span>';
			});
		}
		$(".prd_tag", _prdViewArea).html(_tagTxt);
		
		//태그명클릭 시 
		$("span.hashtag", _prdViewArea).on("click", function(event){
			//태그명 클릭 시 리스트 태그검색이동
			event.preventDefault();
			var _tagNm = $(this).text().replace("#","");
			var _query = encodeURI(encodeURIComponent(_tagNm));
			var _hash = $.param({type:"tag"});
			self.location.href = "list?tag="+_query+"#"+_hash;
			
		});
		
		//영양성분
		if(this.detailPrdInfo.ntr.length > 0){
			$.each(this.detailPrdInfo.ntr, function(idx){
				
				if(idx == 0){
					var _jEl = $('<li>'+this.untGnbnm+' '+this.ofrQt+'('+this.ofrCnamt+')</li>');
					
					$("div.nutri_comp ul.supplyweight" , _prdViewArea).append(_jEl);
					
					var _jEl = $('<div class="dd prd_oneCal">'+this.cal+'</div>'+
								 '<div class="dd prd_totCal">'+this.totCal+'</div>');
					$("div.nutri_comp ul.kcal li" , _prdViewArea).append(_jEl);
				}
				
				var _jEl = $('<li>'+
								'<div class="dt">'+this.oppNtrIgdNm+'</div>'+
								'<div class="dd">'+(!_isNullChk(this.cnamtNm) ? this.cnamtNm : "-" )+'</div>'+
								'<div class="dd">'+(!_isNullChk(this.rate) ? this.rate : "-" )+'</div>'+
							'</li>');
				$("div.nutri_comp ul.component" , _prdViewArea).append(_jEl);
			});
		}else{
			var _jEl = $('<li style="text-align:center;line-height:30px;">영양성분이 존재하지 않습니다.</li>');
			$("div.nutri_comp ul.component" , _prdViewArea).append(_jEl);
		}
		
		//원재료
  	  	var _materialTxt = "";
  	  	if(this.detailPrdInfo.rawmtrlRuleStrcts.length > 0){
  		  var _materialData = this.detailPrdInfo.rawmtrlRuleStrcts;
  		  
  		  $.each(_materialData, function(idx){
  			_materialTxt += _rawmtrlRuleStrctTxt(_materialData[idx]);
  		  });
            
          $(".prd_rawmtrl", _prdViewArea).html(_materialTxt);
  	  	}
  	  
		//알레르기성분
  	  	var _allrgyIgdCt = "-";
  	  	if(!_isNullChk(this.detailPrdInfo.allrgyIgdCt)){
  	  		_allrgyIgdCt = this.detailPrdInfo.allrgyIgdCt.replace(/,/gi,"&nbsp;");
  	  	}
  	  	$(".prd_allrgy", _prdViewArea).html(_allrgyIgdCt);
		//특정성분
  	  	$(".prd_spcIgd", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.spcIgd) ? this.detailPrdInfo.spcIgd : "-");
		//유기농 함량
  		$(".prd_ognCntn", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.ognCntn) ? this.detailPrdInfo.ognCntn : "-");
		//인증
  		var _html = "";
  		if(!_isNullChk(this.detailPrdInfo.mta08)){
  			var _certifyTxts = this.detailPrdInfo.mta08.split(",");
  			var _certifySubTxts = this.detailPrdInfo.mta08Sub.split(",");
  			$.each(_certifyTxts, function(i){
  				_html += _certifyTxts[i]+"<span class='mark'>?<div class='infodetail'><strong>"+_certifySubTxts[i]+"</strong></div></span>  ";
  			});
  		}
  		$(".prd_certify", _prdViewArea).html(_html);
  		
  		
		//무첨가
  		$(".prd_notAdd", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.notAdd) ? this.detailPrdInfo.notAdd : "-");
		//기타 마케팅문구
  		$(".prd_mta09", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.mta09) ? this.detailPrdInfo.mta09 : "-");
		//반품 및 교환장소
  		$(".prd_mta04", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.mta04) ? this.detailPrdInfo.mta04 : "-");
		//고객상담실
  		$(".prd_mta05", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.mta05) ? this.detailPrdInfo.mta05 : "-");
		//특허
  		$(".prd_mta10", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.mta10) ? this.detailPrdInfo.mta10 : "-");
		//유기농
  		$(".prd_mta12", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.mta12) ? this.detailPrdInfo.mta12 : "-");
		//실용신안
  		$(".prd_mta11", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.mta11) ? this.detailPrdInfo.mta11 : "-");
		//주의사항
  		$(".prd_mta06", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.mta06) ? this.detailPrdInfo.mta06 : "-");
		//제조시설 안내
  		$(".prd_mta07", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.mta07) ? this.detailPrdInfo.mta07 : "-");
		//포장형태
  		$(".prd_pacForm", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.pacForm) ? this.detailPrdInfo.pacForm : "-");
		//포장재질
  		$(".prd_pacMtrlCt", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.pacMtrlCt) ? this.detailPrdInfo.pacMtrlCt : "-");
		//분리배출 표시
  		$(".prd_rcspCt", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.rcspCt) ? this.detailPrdInfo.rcspCt : "-");
		//분리배출 상세
  		$(".prd_rcspMrk", _prdViewArea).html(!_isNullChk(this.detailPrdInfo.rcspMrk) ? this.detailPrdInfo.rcspMrk : "-");
	},
	_drawCategoryRank:function(categoryRankData){
		//카테고리 인기제품 Set
		var _this = this;
		
		var _jUl = $("#categoryRank");
		
		if(!_isNullChk(categoryRankData)){
			$.each(categoryRankData, function(){
				var _cal = !_isNullChk(this.cal) ? this.cal : "-";
				var _fudUrl = !_isNullChk(this.fudUrl) ? this.fudUrl : "../images/common/noimg145.jpg";
				var _materialTxt = "";
				if(!_isNullChk(this.rawmtrlRuleStrct)){
					_materialTxt = _rawmtrlRuleStrctTxt(this.rawmtrlRuleStrct);
				}
				var _tagEl = "";
		    	if(!_isNullChk(this.tag)){
		    		  var _tags = this.tag.split(",");
		    		  
		    		  //태그 한줄에 3개만 표시처리
		    		  var maxCount = 3;
			    	  if(_tags.length < 3){
			    		  maxCount = _tags.length;
			    	  } 
			    	  
			    	  for(var i=0; i < maxCount; i++){
			    		  _tagEl += '<a href="#" title="'+_tags[i]+'"><span class="hashtag">#'+_tags[i]+'</span></a>';
			    	  }
		    	}
				var _jEl = $('<li id="'+this.fudId+'">'+
								'<img src="'+_fudUrl+'" alt="'+this.fudNm+'" />'+
								'<div class="info1">'+
									'<span class="mark1">알레르기</span><div class="infodetail">원재료에 알레르기성분이 포함되어 있습니다.<br ><strong>포함 성분: 밀, 대두</strong></div><span class="mark2">인증</span><div class="infodetail">이 제품은 인증 인증을 받았습니다.<br /><strong>HACCP 인증</strong></div><span class="mark3">무첨가</span><div class="infodetail">이 제품은 무첨가 마케팅을 하고 있습니다.<br /><strong>무첨가: 합성보존료, 합성착향료</strong></div>'+
								'</div>'+
								'<div class="info2"><span class="prdname">'+this.fudNm+'</span><span class="kcal1-1">'+_cal+'</span><span class="kcal1-2">kcal</span></div>'+
								'<div class="info3"><span class="materialname">'+_materialTxt+'</span></div>'+
								'<div class="info4">'+_tagEl+'</div>'+
							 '</li>').data("data", this).on("click", function(event){
								 event.preventDefault();
								
								 var _fudId = $(this).data("data").fudId;
								 var _fudNm = $(this).data("data").fudNm;
								
								 if(event.target.className == "hashtag"){
									//태그 검색화면 이동
									var _tagNm = event.target.innerText.replace(/#/gi,"");
									var _query = encodeURI(encodeURIComponent(_tagNm));
									var _hash = $.param({type:"tag"});
									self.location.href = "list?tag="+_query+"#"+_hash;
								 }else{
									//해당 식품 상세화면으로 이동
									self.location.href = "detailView?fudId="+_fudId+"&fudNm="+encodeURI(encodeURIComponent(_fudNm));
								 }
							});
				_jUl.append(_jEl);
			});
		}
		
		
	},
	showLoading:function(){		
		$("body").css("overflow", "hidden").find("#loadingArea").removeClass("hidden");	
	},
	hideLoading:function(){
		$("body").css("overflow", "auto").find("#loadingArea").addClass("hidden");	
	}
};

/* Object 데이타 Null 체크 함수 */
function _isNullChk(obj){
	return (typeof obj != "undefined" && obj != null && obj != "") ? false : true;
}

/* 원재료 텍스트 처리 함수 */
function _rawmtrlRuleStrctTxt(rawmtrlData){
	
	rawmtrlData = rawmtrlData.replace(/\#\|\MTRL\|/g, '<span class="static-text" data-type="MTRL" data-name="" data-code="" data-nick="" data-highlight="" data-agree="">');
	rawmtrlData = rawmtrlData.replace(/\#\|\ORIGIN\|/g, '<span class="static-text" data-type="ORIGIN" data-name="" data-code="" data-nick="">');
	rawmtrlData = rawmtrlData.replace(/\#\|\CNAMT\|/g, '<span class="static-text" data-type="CNAMT" data-number="" data-unittext="" data-unitcode="">');
	rawmtrlData = rawmtrlData.replace(/\|\#/g, '</span>');
	rawmtrlData = rawmtrlData.replace(/\<b\>/g, '<b class="bold">');
	rawmtrlData = rawmtrlData.replace(/\<em\>/g, '<em class="big">');
	  
	var _dom = $('<div></div>');
	_dom.append(rawmtrlData);
	var elements = _dom.find('span');
	var materialTxt = "";
	$.each(elements, function(){
		var text = $(this).text().split('|'),
		type = $(this).data('type'),
		html, node, currenttext;
	 
		//함량, 원산지 정보 없으면 표시 안하도록 처리 (추후구현)
		if(type == "CNAMT" && type =="ORIGIN"){}
	 
		if (type == 'MTRL'){
			materialTxt += text[0] + " "; 
		}else if (type == 'ORIGIN'){
			materialTxt += (text[2] !== '') ? text[2] + " " : text[0] + " ";
		}else if (type == 'CNAMT'){
			materialTxt += (text[1] !== '') ? text[0] + text[1] + " " : text[0] + " ";
		}
	
	});
	
	return materialTxt;
}

})(window, window.jQuery);