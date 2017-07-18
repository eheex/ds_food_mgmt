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
    			var tag = "A,B,C";
	    		var tagData = tag.split(",");
	    		
    			var _jEl = $("<li class='slide' id='"+this.fudId+"'>"+
								"<img src='../images/common/prdsample1.jpg' alt='메인제품썸네일' />"+
									"<div class='info1'>"+
										"<span class='mark1'>알레르기</span><div class='infodetail'>원재료에 알레르기성분이 포함되어 있습니다.<br ><strong>포함 성분: 밀, 대두</strong></div><span class='mark2'>인증</span><div class='infodetail'>이 제품은 인증 인증을 받았습니다.<br /><strong>HACCP 인증</strong></div><span class='mark3'>무첨가</span><div class='infodetail'>이 제품은 무첨가 마케팅을 하고 있습니다.<br /><strong>무첨가: 합성보존료, 합성착향료</strong></div>"+
									"</div>"+
									"<div class='info2'><span class='prdname'>"+this.fudNm+"</span><span class='kcal1-1'>0000</span><span class='kcal1-2'>kcal</span></div>"+
									"<div class='info3'><span class='materialname'>주원재료명 00%(원산지</span></div>"+
									"<div class='info4'><a href='https://www.facebook.com/EatSight'><span class='hashtag'>#태그링크</span></a><a href='#'><span class='hashtag'>#태그</span></a><a href='#'><span class='hashtag'>#태그</span></a></div>"+
								"</li>").data("rowData", this).on("click", function(event){
									//해당 식품 상세화면으로 이동
									var _fudId = $(this).data("rowData").fudId;
									var _fudNm = $(this).data("rowData").fudNm;
									
									self.location.href = "detailView?fudId="+_fudId+"&fudNm="+encodeURI(encodeURIComponent(_fudNm));
								
									//태그 검색화면 이동
							});
				
				$("#slider1").append(_jEl);
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
							<ul class="rolling_class">
							 <li><span class="num">1</span><span class="prd">제품1</span></li>
							 <li><span class="num">2</span><span class="prd">제품2</span></li>
							 <li><span class="num">3</span><span class="prd">제품3</span></li>
							 <li><span class="num">4</span><span class="prd">제품4</span></li>
							 <li><span class="num">5</span><span class="prd">제품5</span></li>
							 <li><span class="num">6</span><span class="prd">제품6</span></li>
							 <li><span class="num">7</span><span class="prd">제품7</span></li>
							 <li><span class="num">8</span><span class="prd">제품8</span></li>
							 <li><span class="num">9</span><span class="prd">제품9</span></li>
							 <li><span class="num">10</span><span class="prd">제품10</span></li>
							</ul>
						</div>
						<div class="class_view"><!--Keyword view-->
						<span class="title">실시간 인기 검색어</span>
						<ul>
							 <li><span class="num">1</span><span class="prd"><a href="#">라면</a></span></li>
							 <li><span class="num">2</span><span class="prd"><a href="#">제품2</a></span></li>
							 <li><span class="num">3</span><span class="prd"><a href="#">제품3</a></span></li>
							 <li><span class="num">4</span><span class="prd"><a href="#">제품4</a></span></li>
							 <li><span class="num">5</span><span class="prd"><a href="#">제품5</a></span></li>
							 <li><span class="num">6</span><span class="prd"><a href="#">제품6</a></span></li>
							 <li><span class="num">7</span><span class="prd"><a href="#">제품7</a></span></li>
							 <li><span class="num">8</span><span class="prd"><a href="#">제품8</a></span></li>
							 <li><span class="num">9</span><span class="prd"><a href="#">제품9</a></span></li>
							 <li><span class="num">10</span><span class="prd"><a href="#">제품10</a></span></li>
						</ul>
						<span class="dayinfo">2017.05.26 00:00 기준</span>
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
							<!-- <li class="slide" onclick="">
								<img src="../images/common/prdsample1.jpg" alt="메인제품썸네일" />
								<div class="info1">MarkFull
									<span class="mark1">알레르기</span><div class="infodetail">원재료에 알레르기성분이 포함되어 있습니다.<br ><strong>포함 성분: 밀, 대두</strong></div><span class="mark2">인증</span><div class="infodetail">이 제품은 인증 인증을 받았습니다.<br /><strong>HACCP 인증</strong></div><span class="mark3">무첨가</span><div class="infodetail">이 제품은 무첨가 마케팅을 하고 있습니다.<br /><strong>무첨가: 합성보존료, 합성착향료</strong></div>
								</div>
								<div class="info2"><span class="prdname">제품명제품명제품명제품명제품명제품명</span><span class="kcal1-1">0000</span><span class="kcal1-2">kcal</span></div>
								<div class="info3"><span class="materialname">주원재료명 00%(원산지</span></div>
								<div class="info4"><a href="https://www.facebook.com/EatSight"><span class="hashtag">#태그링크</span></a><a href="#"><span class="hashtag">#태그</span></a><a href="#"><span class="hashtag">#태그</span></a></div>
							</li> -->
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