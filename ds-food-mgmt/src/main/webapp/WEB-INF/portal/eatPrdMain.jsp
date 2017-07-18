<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta property="og:title" content="eatsight">
<meta property="og:url" content="http://dev.eatsight.com/">
<meta property="og:description" content="eatsight에서 다양한 식품정보를 만나 보세요"/>
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="">
<meta name="twitter:url" content="http://www.eatsigt.com/">
<meta name="twitter:description" content="eatsight에서 다양한 식품정보를 만나 보세요"/>
<link rel="stylesheet" type="text/css" href="../css/main.css"/>
<link rel="stylesheet" type="text/css" href="../css/default.css"/>
<link rel="stylesheet" type="text/css" href="../css/jquery.bxslider.css"/>
<style type="text/css">
.visibility {visibility:hidden !important}
</style>
<script type="text/javascript" src="../js/lib/jquery/jquery-1.12.4.js"></script>
<script type="text/javascript" src="../js/jquery.bxslider.min.js"></script>
<script type="text/javascript" src="../js/common.js"></script>
<script type="text/javascript" src="../js/placeholder.js"></script>
<!--[if lt IE 9]>
	<script src="https://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<script type="text/javascript" src="./js/popup/categoryPopup.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	
	var sliderData = [];

	$.ajax({
		url: "/portal/main/rank",
		contentType: "application/json; charset=UTF-8",
		dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
		async: false	//동기화처리
	}).done(function(foodData) {
		$.each(foodData, function(){
			sliderData.push(this);
		});
	});
	
	/* 실시간 검색 인기상품  Slider */  
  	var _sliderJEl = $('#slider1').bxSlider({
  		slideWidth: 220,
  	    minSlides: 4,
  	    maxSlides: 4,
  	    moveSlides: 4,
  	    slideMargin: 10,
		auto:true,
		autoHover:true,
		pager: true,
    	onSliderLoad:function(){
    		
    		$.each(sliderData, function(){
	    		var _cal = (typeof this.cal != "undefined" && this.cal != "") ? this.cal : "-";
	    		var _fudUrl = (typeof this.fudUrl != "undefined" && this.fudUrl != "") ? this.fudUrl : "../images/common/noimg145.jpg";
	    		var _tagEl = "";
		    	if(typeof this.tag != "undefined" && this.tag != ""){
		    		  var _tags = [];
			    	  
			    	  _tags = this.tag.split(",");
			    	  
			    	  for(var i=0; i<_tags.length; i++){
			    		  _tagEl += '<span class="hashtag">#'+_tags[i]+'</span>';
			    	  }
		    	  }
	    		
    			var _jEl = $("<li class='slide' id='"+this.fudId+"'>"+
								"<img src='"+_fudUrl+"' alt='"+this.fudNm+"' />"+
									"<div class='info1'>"+
										"<span class='mark1 visibility'>알레르기"+
											"<div class='infodetail'>원재료에 알레르기성분이 포함되어 있습니다.<br ><strong></strong></div>"+
										"</span>"+
										"<span class='mark2 visibility'>인증"+
											"<div class='infodetail'>이 제품은 인증 인증을 받았습니다.<br /><strong></strong></div>"+
										"</span>"+
										"<span class='mark3 visibility'>무첨가"+
											"<div class='infodetail'>이 제품은 무첨가 마케팅을 하고 있습니다.<br /><strong></strong></div>"+
										"</span>"+
									"</div>"+
									"<div class='info2'><span class='prdname'>"+this.fudNm+"</span><span class='kcal1-1'>"+_cal+"</span><span class='kcal1-2'>kcal</span></div>"+
									"<div class='info3'><span class='materialname'>주원재료명 00%(원산지</span></div>"+
									"<div class='info4'><a href='#'><span class='hashtag'>#태그</span></a><a href='#'><span class='hashtag'>#태그</span></a></div>"+
								"</li>").data("rowData", this).on("click", function(event){
									//해당 식품 상세화면으로 이동
									var _fudId = $(this).data("rowData").fudId;
									var _fudNm = $(this).data("rowData").fudNm;
									
									self.location.href = "detailView?fudId="+_fudId+"&fudNm="+encodeURI(encodeURIComponent(_fudNm));
								
									//태그 검색화면 이동
							});
				
				$("#slider1").append(_jEl);
				
				/* 알레르기 */
	           	if(typeof this.allrgyIgdCt != "undefined" && this.allrgyIgdCt != ""){
					$("span.mark1",_jEl).removeClass("visibility").find(".infodetail strong").html("포함 성분 : " + this.allrgyIgdCt);
	           	}
	           	/* 인증 */
	           	if(typeof this.cert != "undefined" && this.cert != ""){
					$("span.mark2",_jEl).removeClass("visibility").find(".infodetail strong").html(this.cert);
	           	}
	           	/* 무첨가 */
	           	if(typeof this.notAdd != "undefined" && this.notAdd != ""){
					$("span.mark3",_jEl).removeClass("visibility").find(".infodetail strong").html("무첨가 : " + this.notAdd);
	           	}
    		});
    	}
  });
  
  _sliderJEl.reloadSlider(); 
  
  //검색
  var _jInput = $("input#query");
  
  _jInput.keyup(function(event){
      if(event.keyCode == 13) onSearch();
  });
  $("#search_btn").on("click", function(event){
	  onSearch();
  });
  
  function onSearch(){
	  var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
	  
	  var searchQuery = $.trim(_jInput.val());
	  
	  if(searchQuery == "" || searchQuery == null || searchQuery.length < 2){
      	alert('검색어를 입력해주세요.');
      	_jInput.focus();
      }else if(special_pattern.test(searchQuery)){
			alert('특수문자는 사용할 수 없습니다.');
	      	return false;
	  }else{
    	var _hash = $.param({type:"fud"});
      	self.location.href = "list?fudNm=" + encodeURI(encodeURIComponent(searchQuery))+"#"+_hash;
      }
  }

//인기검색어 클릭시 조회 처리
  function fSearch(searchQuery){

   	var _hash = $.param({type:"fud"});
   	self.location.href = "list?fudNm=" + encodeURI(encodeURIComponent(searchQuery))+"#"+_hash;

  }
  
    
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
	
	});
  
});
</script>
<title>eatsight</title>
</head>
	<body>
		<div id="skipnav"><a  href="#container">skip to content</a></div>
		<!-- mainwrap -->
		<div id="mainwrap">
			<!-- header -->
			<div class="header">
				<div class="top_util">
					<div class="top_utilwrap">										
						<h1><a href="/main" title="eatsight 메인으로 이동"><img src="../images/common/top_logo1.png" alt="eatsight" /></a></h1>
						<div class="snswrap">
							<span><a href="https://www.facebook.com/EatSight" target="_blank" title="facebook새창으로이동" class="sns1-1">facebook</a></span><span><a href="http://blog.naver.com/villaapp" target="_blank" title="naverblog새창으로이동" class="sns1-2">blog</a></span><span><a href="http://post.naver.com/my.nhn?memberNo=5869589" target="_blank" title="naverpost새창으로이동" class="sns1-3">naver</a></span>
						</div>
					</div>
				</div>				
				<div class="headerwrap">
					<p class="main_sentence1">내가 먹는 식품<br />얼마나 알고 계세요?</p>
					<p class="main_sentence2">건강하게 검색하는 습관, 식품정보플랫폼 eatsight</p>
					<!--Main Search Form-->
					<!-- <form id="mainsch" class="mainsch" name="form" method="get"> -->
					<fieldset>
						<legend class="blind">검색</legend>
						<input id="query" name="query" type="text" title="검색어 입력" class="maininput" placeholder="식품명을 입력하세요 (ex.스낵)" />
						<button id="search_btn" type="submit" title="검색" class="mainsch_smit1" onclick="">검색</button>
					</fieldset>
					<!-- </form> -->
					<!--//Main Search Form-->	
				</div>
			</div>
			<!-- //header -->
			<div class="navbar">
				<div class="navbarwrap">
					<!-- category_area -->
					<div class="btn_category">
						<button class="btnoff"><img src="../images/common/btn_catealloff.gif" alt="전체 카테고리 열기" />전체 카테고리</button>
						<button class="btnon"><img src="../images/common/btn_cateallon.gif" alt="전체 카테고리 선택" />전체 카테고리</button>
					</div>
					<div id="category_all" class="category_all">							
						<h2 class="category_btn"><a href="#">전체 카테고리</a></h2>
						<ul class="category_view">
						</ul>
						<button><img src="../images/common/btn_close1.png" alt="전체 카테고리 닫기" /></button>
						<div class="closewrap"></div>
					</div>
					<!-- //category_area -->
					<!-- hotkeyword -->				
					<div class="hotkeyword">
						<div id="wordroll" class="rolling"><!--Keyword Rolling-->
							<span class="title">실시간</span>
							<ul id="realtime" class="rolling_class">
							</ul>
						</div>
						<div class="class_view"><!--Keyword view-->
							<span class="title">실시간 인기 검색어</span>
							<ul id="realTimeMouse">
							</ul>
							<span id="dayinfo" class="dayinfo"></span>
						</div>
					</div>
					<!-- //hotkeyword -->
				</div>
			</div>
			<div id="main_container">
				<div class="contents">
					<h3>실시간 검색 인기상품</h3>
					<!--Main Rolling 40-->
					<div class="main_prd">
						<ul id="slider1">
						</ul>
					</div>
					<!--//Main Rolling 40-->
					<div id="gotop" class="gotop"><div>TOP</div></div>
				</div>
			</div>
			<!-- footer -->	
			<div class="footer">
				<div class="footerwrap">
					서울시 중랑구 면목로470 대상빌딩 4층 (131-220)  Tel. 02-3408-0114 | Fax. 02-439-0453<br />
					Copyright 2014 daesangit.com. All Rights Reserved
				</div>
			</div>
			<!-- //footer -->	
		</div>
		<!-- //mainwrap -->
	</body>
</html>