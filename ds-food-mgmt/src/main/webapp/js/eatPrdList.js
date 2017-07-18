(function(window, $, undefined) {

window.$EatPrdList = {
	_jsonHash : {},
	_listData : {"data":[],"pageInfo":{}},
	_jFoodTable : null,
	init:function(){
		//Header 공통 그리기
		$Layout.setSearchHeader();
		 // 테스트
		//  하나 더 추가
		//식품 정보 가이드
		$GuidePopup.open();
		
		//상세검색
		$(".finder_list, .finder_range_list").mCustomScrollbar({
			theme:"dark-3"
		});
		
		if (location.href.indexOf("#") != -1) {
			var _hash = location.href.split("#")[1];
			this._jsonHash = _hash.replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
		}
		
		this._getData();
		this._onClickEvent();
	},
	_getData:function(){
		var _this = this;

		$.ajax({
			url: "/portal/search/result",
			data: {
				"query":{
					"fudNm":fudNm,
					"tag":tag,
					"categoryNm":categoryNm,
					"clsId":_this._jsonHash.categoryId,
					"type":_this._jsonHash.type,
					}
		    },
			contentType: "application/json; charset=UTF-8",
			dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
			async: false	//동기화처리
		}).done(function(data) {
			console.log(data.data);
			if(data != undefined && data.data.length > 0){
				_this._listData = data.data;
				$(".noresult1").addClass("hidden");
				$("#listResultArea").removeClass("hidden");
				$(".prdpage_info1").append("총&nbsp;<strong>"+_this._listData.length+"건</strong>");
				
				//Location 처리
				if(_this._listData[0].clsGroup != undefined && _this._listData[0].clsGroup.length > 0){
					var _clsGroupArr = _this._listData[0].clsGroup.split(">");
					var _jLocationEl = $(".location_wrap .location");
					$.each(_clsGroupArr, function(i, value){
						var _li = "<li>"+value+"</li>";
						if(_clsGroupArr.length-1 == i) _li = "<li class=\"here\">"+value+"</li>";
						_jLocationEl.append(_li)
					});
				}else{
					$(".location_wrap .location").append("<li>카테고리전체</li>");
				}
				
				_this._drawDataTable();
			}else{
				//No Result 처리
				$("#listResultArea").addClass("hidden");
				$(".noresult1").removeClass("hidden");
				$(".prdpage_info1").append("<strong>‘"+fudNm+categoryNm+"’</strong>(으)로 <strong>0건</strong>의 제품이 검색되었습니다.");
				
				$(".location_wrap .location").append("<li>카테고리전체</li>");
			}
		});
	},
	_drawDataTable:function(){
		var _this = this;
		
		$.fn.dataTable.ext.errMode = "none";	//dataTable error시  alert창 안띄우게 함
		
		/* DataTable Plug-in */
		this._jFoodTable = $("#prdListTable").DataTable({
			lengthChange: false,	//paging 콤보박스 disable
			ordering: true,			//기본 정렬을 해제함(쿼리정렬사용위함)
			searching: false,
			data: _this._listData,
		 	columns: [
		 		{ data:"sortHiscnt", name: 'sortHiscnt', title: "인기순", width: "100px"},
		 		{ data:"fudNm", name: 'fudNm', title: "상품명", width: "200px"},
		 		{ data:"crtDt", name: 'crtDt', title: "등록일", width: "300px"},
		 		{ data:"sortCal", name: 'sortCal', title: "칼로리", width: "400px"}
		    ],
		    language: {
		    	"paginate": {
		            "next":"　",
		            "previous":"　"
		        },
		    	"info": ""
		    },
		    rowCallback : function( row, data, index ) {
		    	  $(row).children().remove();
		    	  
		    	  console.log("rowData::::::::"+data);
		    	  
		    	  /* 중량 처리 */
		    	  var _vlm = "";
		    	  if(typeof data.vlm != "undefined" && data.vlm != ""){
		    		  _vlm = data.vlm;
		    	  }
		    	  
		    	  /* 열량 처리 */
		    	  var _kcal = "";
		    	  if(typeof data.cal != "undefined" && data.cal != ""){
		    		  _kcal = data.cal+"kcal";
		    	  }
		    	  
		    	  /* 원재료 처리 */
		    	  var _materialTxt = "";
		    	  if(typeof data.rawmtrlRuleStrct != "undefined" && data.rawmtrlRuleStrct != ""){
		    		  var _materialData = data.rawmtrlRuleStrct;
		    		  _materialData = _materialData.replace(/\#\|\MTRL\|/g, '<span class="static-text" data-type="MTRL" data-name="" data-code="" data-nick="" data-highlight="" data-agree="">');
		    		  _materialData = _materialData.replace(/\#\|\ORIGIN\|/g, '<span class="static-text" data-type="ORIGIN" data-name="" data-code="" data-nick="">');
		    		  _materialData = _materialData.replace(/\#\|\CNAMT\|/g, '<span class="static-text" data-type="CNAMT" data-number="" data-unittext="" data-unitcode="">');
		    		  _materialData = _materialData.replace(/\|\#/g, '</span>');
		    		  _materialData = _materialData.replace(/\<b\>/g, '<b class="bold">');
		    		  _materialData = _materialData.replace(/\<em\>/g, '<em class="big">');
		    		  
		    		  var _dom = $('<div></div>');
		              _dom.append(_materialData);
		              var elements = _dom.find('span')
		    		  $.each(elements, function(){
		    			 
		    			  var text = $(this).text().split('|'),
		                    type = $(this).data('type'),
		                    html, node, currenttext;
		    			  
		    			  //함량, 원산지 정보 없으면 표시 안하도록 처리 (추후구현)
		    			  if(type == "CNAMT" && type =="ORIGIN"){}
		    			  
		    			  if (type == 'MTRL'){
		    				  _materialTxt += text[0]; 
		                  }else if (type == 'ORIGIN'){
		                	  _materialTxt += (text[2] !== '') ?text[2] : text[0];
		                  }else if (type == 'CNAMT'){
		                	  _materialTxt += (text[1] !== '') ? text[0] + ' ' + text[1] : text[0];
		                  }

		    		  });
		    	  }
		    	  
		    	  /* 이미지 처리 */
		    	  var _imgUrl = "../images/common/noimg145.jpg";
		    	  if(typeof data.fudUrl != "undefined" && data.fudUrl != ""){
		    		  _imgUrl = data.fudUrl;
		    	  }
		    	  
		    	  /* 태그처리 */
		    	  var _tagEl = "";
		    	  if(typeof data.tag != "undefined" && data.tag != ""){
		    		  var _tags = [];
			    	  
			    	  _tags = data.tag.split(",");
			    	  
			    	  for(var i=0; i<_tags.length; i++){
			    		  _tagEl += '<span class="hashtag">#'+_tags[i]+'</span>';
			    	  }
		    	  }
		    	  
		           $(row).data("rowData", data).append($('<img src="'+_imgUrl+'" alt="메인제품썸네일">'+
			           	  '<div class="info2">'+
							'<div class="info2-1">'+
								'<span class="mark1 visibility">알레르기'+
									'<div class="infodetail">원재료에 알레르기성분이 포함되어 있습니다.<br><strong></strong></div>'+
								'</span>'+
								'<span class="mark2 visibility">인증'+
									'<div class="infodetail">이 제품은 인증 인증을 받았습니다.<br><strong></strong></div>'+
								'</span>'+
								'<span class="mark3 visibility">무첨가'+
									'<div class="infodetail">이 제품은 무첨가 마케팅을 하고 있습니다.<br><strong></strong></div>'+
								'</span>'+
								'<span class="mark4 visibility">영양성분주의'+
									'<div class="infodetail"></div>'+
								'</span>'+
							'</div>'+
							'<div class="info2-2"><p class="prdname">'+data.fudNm+'</p></div>'+
							'<div class="info2-3">'+_tagEl+'</div>'+
						   '</div>'+
						   '<div class="info3">'+
								'<span class="vam">'+data.cpnNm+'</span>'+
							'</div>'+
							'<div class="info4">'+
								'<div class="vam">'+
									'<span class="title">중&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;량</span><span class="weight">'+_vlm+'</span>'+
									'<span class="title">열&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;량</span><span class="kcal">'+_kcal+'</span>'+
									'<span class="title">주원료명</span><span class="materialname">'+_materialTxt+'</span>'+
								'</div>'+
							'</div>').on("click", ".hashtag", function(event){
								//태그명 클릭 시 리스트 태그검색이동
								event.preventDefault();
								var _tagNm = $(this).text().replace("#","");
								var _query = encodeURI(encodeURIComponent(_tagNm));
								var _hash = $.param({type:"tag"});
								self.location.href = "list?tag="+_query+"#"+_hash;
							})
							
					);
		           
		           /* 알레르기 */
		           if(typeof data.allrgyIgdCt != "undefined" && data.allrgyIgdCt != ""){
		        	   $("span.mark1",row).removeClass("visibility").find(".infodetail strong").html("포함 성분 : " + data.allrgyIgdCt);
		           }
		           /* 인증 */
		           if(typeof data.cert != "undefined" && data.cert != ""){
		        	   $("span.mark2",row).removeClass("visibility").find(".infodetail strong").html(data.cert);
		           }
		           /* 무첨가 */
		           if(typeof data.notAdd != "undefined" && data.notAdd != ""){
		        	   $("span.mark3",row).removeClass("visibility").find(".infodetail strong").html("무첨가 : " + data.notAdd);
		           }
		           /* 영양영분주의 */
		           if(typeof data.ntrIgdNm != "undefined" && data.ntrIgdNm != ""){
		        	   $("span.mark4",row).removeClass("visibility").find(".infodetail").html("해당 제품의 "+data.ntrIgdNm+"은(는) 1일 영양성분 기준치에 50%를 넘습니다.");
		           }
		           
		           //Row 클릭 시 제품상세페이지로 이동
		           $(row).on("click", function(event){
		        	   event.preventDefault();
		        	   if(event.target.className != "hashtag"){
			        	   var _fudId = $(this).data("rowData").fudId;
			        	   var _fudNm = $(this).data("rowData").fudNm;
			        	   self.location.href = "detailView?fudId="+_fudId+"&fudNm="+encodeURI(encodeURIComponent(_fudNm));
		        	   }
		           });
		    }
		});
		
		this._drawTableHeader();
	},
	_drawTableHeader:function(){
		var _this = this;
		
		/* Table 상단 처리 */
		var _jHeader = $('<div class="prd_listheader">'+
				'<div class="sortarea1-1">'+
					'<ul>'+
							'<li id="sortHit" class="on"><a href="#" title="인기순정렬">인기순</a></li>'+
							'<li id="sortName"><a href="#" title="가나다순정렬">가나다순</a></li>'+
							'<li id="sortDate"><a href="#" title="등록일순정렬">등록일순</a></li>'+
							'<li id="sortKcal"><a href="#" title="칼로리높은순정렬">칼로리높은순</a></li>'+
					'</ul>'+
				'</div>'+
				'<div class="sortarea1-2">'+
					'<label for="selnum">리스트갯수선택</label>'+
					'<select id="selnum" name="selnum">'+
						'<option value="10">10개씩</option>'+
						'<option value="20">20개씩</option>'+
						'<option value="50">50개씩</option>'+
						'<option value="100">100개씩</option>'+
					'</select>'+
				'</div>'+
			'</div>').on("click", ".sortarea1-1 li", function(event){
				//정렬 처리
				event.preventDefault();
				
				$(".sortarea1-1 ul li").removeClass("on");
				$(this).addClass("on");
				
				if(event.currentTarget.id == "sortHit"){					//인기순정렬
					_this._jFoodTable.column(0).order( 'desc' ).draw();
				}else if(event.currentTarget.id == "sortName"){				//가나다순정렬
					_this._jFoodTable.column(1).order( 'asc' ).draw();
				}else if(event.currentTarget.id == "sortDate"){				//등록일순정렬
					_this._jFoodTable.column(2).order( 'desc' ).draw();
				}else if(event.currentTarget.id == "sortKcal"){				//칼로리높은순정렬
					_this._jFoodTable.column(3).order( 'desc' ).draw();
				}
				
			}).on("change", "#selnum", function(event){
				//리스트 갯수 처리 - 10, 20, 50, 100 개씩
				_this._jFoodTable.page.len(this.value).draw();
			});
			
		$("#prdListTable thead").remove();
		$("#prdListTable").before(_jHeader);
	},
	_onClickEvent:function(){
		//제품등록요청 팝업 호출
		$("._btnPrdReq").on("click", function(event){
			event.preventDefault();
			$PrdRegistPopup.open();
		});
	}
};
})(window, window.jQuery);