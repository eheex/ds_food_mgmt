<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isELIgnored="false" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta name="Author" content="eatsight 관리자 페이지" />	
<title>eatsight 관리자 페이지</title>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="../css/base.admin.css" />
<link rel="stylesheet" type="text/css" href="../css/style.admin.css">
<script type="text/javascript" src="../js/lib/jquery/jquery-1.12.4.js"></script>
<script type="text/javascript" src="../js/lib/datatables/datatables.min.js"></script>
<script type="text/javascript" src="../js/admin/adminRank.js"></script>
<script type="text/javascript">

function initMenu() {
	$('.lnb ul').show();
	$('.lnb ul').children('.current').parent().show();

	$(".lnb li a").on("click", function(event){
		$(".lnb li").removeClass("current");
		$(this).parents("li").addClass("current");		
	});
}

$(document).ready(function() {
	initMenu();
	$AdminRank.init();
	
	$(".header .id").text(sessionStorage.getItem("name"));
	
	$("#btnLogout").on("click", function(event){
		event.preventDefault();
		
		sessionStorage.removeItem("name");
		location.href = "/logout";		
	});
});
</script>
</head>
<body id="nimda_wrap">
	<!-- header -->
	<div class="header_wrap">
		<div class="header">
			<h1 class="logo"><a href="/" title="eatsight 관리자 메인페이지로 이동합니다."><img src="../images/common/logo.png" alt="eatsight 관리자 홈" /></a></h1>
			<ul class="util_menu">
				<li><span class="id"></span> 님 좋은 하루 보내세요</li>
				<li><button type="button" class="logout" id="btnLogout"><span>로그아웃</span></button></li>
			</ul>		
		</div>
	</div>
	<!-- //header -->
	<!-- container -->
	<div id="container">
		<!-- lnb_area -->
		<div id="lnb_wrap">
			<ul class="lnb">
				<h2>주메뉴</h2>
				<li class="current"><a title="관리자 메뉴">관리자 메뉴</a>
					<ul class="dep3">
						<li id="keywordView" class="current"><a href="/admin/viewRank" title="인기검색어 관리">인기검색어 관리</a></li>
						<li id="regList"><a href="/admin/viewList?viewType=reg" title="등록요청 제품">등록요청 제품</a></li>
						<li id="modList"><a href="/admin/viewList?viewType=mod" title="수정요청 제품">수정요청 제품</a></li>
					</ul>
				</li>
			</ul>
		</div>		
		<!-- //lnb_area -->
		<!-- contents -->
		<div id="contents">
			<h3>인기검색어 관리</h3>
			<table id="rankListTable" class="tableTy1" cellpadding="0" cellspacing="0">
				<colgroup>
					<col width="8.4%" />
					<col width="" />
				</colgroup>
				<thead>
					<tr>
						<th scope="col">순위</th>
						<th scope="col">검색어</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
			<!-- BTN -->
			<div class="btnAreaR">
				<a href="/admin/rankMod"><button id="btnModify" type="button" title="수정요청" class="bg1">수정</button></a>
			</div>
			<!-- //BTN -->
		</div>
		<!-- //contents -->
	</div>
	<!-- //container -->
	<div class="footer">
		<div class="footerwrap">
			<p class="copyright">서울시 중랑구 면목로470 대상빌딩 4층 (131-220)  Tel. 02-3408-0114 | Fax. 02-439-0453<br />Copyright 2014 daesangit.com. All Rights Reserved</p>
		</div>
	</div>
</body>
</html>