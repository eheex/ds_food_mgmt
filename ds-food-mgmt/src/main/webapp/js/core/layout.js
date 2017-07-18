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
									'<fieldset>'+
										'<legend class="blind">검색</legend>'+
										'<input id="query" name="query" type="text" title="검색어 입력" class="schinput" placeholder="식품명을 입력하세요 (ex.스낵)" />'+
										'<button id="search_btn" type="submit" title="검색" class="sch_smit1" onclick="">검색</button>'+
									'</fieldset>'+
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
											'<ul id="realtime" class="rolling_class">'+
											'</ul>'+
										'</div>'+
										'<div class="class_view"><!--Keyword view-->'+
											'<span class="title">실시간 인기 검색어</span>'+
											'<ul id="realTimeMouse">'+
											'</ul>'+
											'<span id="dayinfo" class="dayinfo"></span>'+
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
		
		var realTimeData = {}; // 실시간및 인기검색어 처리 데이터
		$.ajax({
				url: "/portal/main/realtime",
				contentType: "application/json; charset=UTF-8",
				dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
				async: false	//동기화처리
			}).done(function(rData) {
				
				realTimeData = rData;	
			    var loopCount = 1;
			    var loopCountSub = 1;
			    console.log(realTimeData);

				$.each(realTimeData, function(){

					var realTimeTag      = $("<li><span class='num'>"+ loopCount++ +"</span><span class='prd'>"+this.fudNm+"</span></li>");
					var realTimeTagMouse = $("<li><span class='num'>"+ loopCountSub++ +"</span><span class='prd'><a href='#'>"+this.fudNm
							               + "</a></span></li>").on("click","a",function(event){
							            	   event.preventDefault();
							            	   fSearch($(this).text());
											}); 
								
					$("#realtime").append(realTimeTag);
					$("#realTimeMouse").append(realTimeTagMouse);
				});

			});

		// 인기검색어 클릭시 조회 처리
		function fSearch(searchQuery){

		 	var _hash = $.param({type:"fud"});
		 	self.location.href = "list?fudNm=" + encodeURI(encodeURIComponent(searchQuery))+"#"+_hash;

		}
		
		// 화면에 태그값 삽입후 이벤트가 처리되어야지 정상적으로 스크롤이벤트가 발생함.
		fnkeywordRoll();
		
		var xmlHttp;

		function srvTime(){

			if (window.XMLHttpRequest) {//분기하지 않으면 IE에서만 작동된다.
			
				xmlHttp = new XMLHttpRequest(); // IE 7.0 이상, 크롬, 파이어폭스 등
				
				xmlHttp.open('HEAD',window.location.href.toString(),false);
				
				xmlHttp.setRequestHeader("Content-Type", "text/html");
				
				xmlHttp.send('');
				
				return xmlHttp.getResponseHeader("Date");
			
			}else if (window.ActiveXObject) {
			
				xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
				
				xmlHttp.open('HEAD',window.location.href.toString(),false);
				
				xmlHttp.setRequestHeader("Content-Type", "text/html");
				
				xmlHttp.send('');
				
				return xmlHttp.getResponseHeader("Date");
			
			}

		}

		var st = srvTime();

		// 현재시간 셋팅하기		
		var now = new Date(st);

		var dayinfo = now.getFullYear() + "."+ (now.getMonth()+1)  + "." + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + " 기준";
		
		$("#dayinfo").html(dayinfo);

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