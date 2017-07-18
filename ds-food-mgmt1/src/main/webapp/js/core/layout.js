(function(window, $, undefined) {

//이미 클래스가 정의 되어있으면 정의하지 않는다.
if(typeof window.$Layout != "undefined") {
	return;
}

/* 의존 라이브러리 체크 */
if(typeof $ == "undefined"){
	alert("Please install JQuery library!!");
	return;
}
window.$Layout = {
	setSearchHeader: function(){
		var _this = this;
		
		var _jHeaderEl = $('<!-- header -->'+
							'<div class="header">'+
								'<div class="headerwrap">'+
									'<h1><a href="/main" title="eatsight 메인으로 이동"><img src="../images/common/top_logo1.png" alt="eatsight" /></a></h1>'+
									'<!--Search Form-->'+
									/*'<form id="subsch" class="subsch" name="form" method="get">'+*/
									'<fieldset>'+
										'<legend class="blind">검색</legend>'+
										'<input id="query" name="query" type="text" title="검색어 입력" class="schinput" placeholder="식품명을 입력하세요 (ex.스낵)" />'+
										'<button id="search_btn" type="submit" title="검색" class="sch_smit1" onclick="">검색</button>'+
									'</fieldset>'+
									/*'</form>'+*/
									'<!--//Search Form-->'+
								'</div>'+
							'</div>'+
							'<!-- //header -->'+
							'<div class="navbar">'+
								'<div class="navbarwrap">'+
									'<!-- category_area -->'+
									'<div class="btn_category">'+
										'<button class="btnoff"><img src="../images/common/btn_catealloff.gif" alt="전체 카테고리 열기" />전체 카테고리</button>'+
										'<button class="btnon"><img src="../images/common/btn_cateallon.gif" alt="전체 카테고리 선택" />전체 카테고리</button>'+
									'</div>'+
									'<div id="category_all" class="category_all">'+			
										'<h2 class="category_btn"><a href="#">전체 카테고리</a></h2>'+
										'<ul class="category_view">'+
										'</ul>'+
										'<button><img src="../images/common/btn_close1.png" alt="전체 카테고리 닫기" /></button>'+
										'<div class="closewrap"></div>'+
									'</div>'+
									'<!-- //category_area -->'+
									'<!-- hotkeyword -->'+				
									'<div class="hotkeyword">'+
										'<div id="wordroll" class="rolling"><!--Keyword Rolling-->'+
											'<span class="title">실시간</span>'+
											'<ul class="rolling_class">'+
											 '<li><span class="num">1</span><span class="prd">제품1</span></li>'+
											 '<li><span class="num">2</span><span class="prd">제품2</span></li>'+
											 '<li><span class="num">3</span><span class="prd">제품3</span></li>'+
											 '<li><span class="num">4</span><span class="prd">제품4</span></li>'+
											 '<li><span class="num">5</span><span class="prd">제품5</span></li>'+
											 '<li><span class="num">6</span><span class="prd">제품6</span></li>'+
											 '<li><span class="num">7</span><span class="prd">제품7</span></li>'+
											 '<li><span class="num">8</span><span class="prd">제품8</span></li>'+
											 '<li><span class="num">9</span><span class="prd">제품9</span></li>'+
											 '<li><span class="num">10</span><span class="prd">제품10</span></li>'+
											'</ul>'+
										'</div>'+
										'<div class="class_view"><!--Keyword view-->'+
											'<span class="title">실시간 인기 검색어</span>'+
											'<ul>'+
												 '<li><span class="num">1</span><span class="prd"><a href="#">라면</a></span></li>'+
												 '<li><span class="num">2</span><span class="prd"><a href="#">제품2</a></span></li>'+
												 '<li><span class="num">3</span><span class="prd"><a href="#">제품3</a></span></li>'+
												 '<li><span class="num">4</span><span class="prd"><a href="#">제품4</a></span></li>'+
												 '<li><span class="num">5</span><span class="prd"><a href="#">제품5</a></span></li>'+
												 '<li><span class="num">6</span><span class="prd"><a href="#">제품6</a></span></li>'+
												 '<li><span class="num">7</span><span class="prd"><a href="#">제품7</a></span></li>'+
												 '<li><span class="num">8</span><span class="prd"><a href="#">제품8</a></span></li>'+
												 '<li><span class="num">9</span><span class="prd"><a href="#">제품9</a></span></li>'+
												 '<li><span class="num">10</span><span class="prd"><a href="#">제품10</a></span></li>'+
											'</ul>'+
											'<span class="dayinfo">2017.05.26 00:00 기준</span>'+
										'</div>'+
									'</div>'+
									'<!-- //hotkeyword -->'+
								'</div>'+
							'</div>').on("keyup", "input#query", function(event){
								 if(event.keyCode == 13){
									 _this.onSearch($("input#query").val());
								 }
							}).on("click", "#search_btn", function(event){
								_this.onSearch($("input#query").val());
							});
		
		_jHeaderEl.prependTo($("#wrap"));
	},
	onSearch:function(searchQuery){
		var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
		
		searchQuery = $.trim(searchQuery);
		if( searchQuery == "" || searchQuery == null || searchQuery.length < 2){
	      	alert('검색어를 2글자 이상 입력해주세요.');
	      	return false;
		}else if(special_pattern.test(searchQuery)){
			alert('특수문자는 사용할 수 없습니다.');
	      	return false;
		}else{
			var _query = encodeURI(encodeURIComponent(searchQuery));
			var _hash = $.param({type:"fud"});
			self.location.href = "list?fudNm="+_query+"#"+_hash;
		}
	}
};
	
})(window, window.jQuery);