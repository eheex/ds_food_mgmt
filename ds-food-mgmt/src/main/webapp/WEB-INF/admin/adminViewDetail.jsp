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
<style type="text/css">
table tbody img {width:145px;height:145px;border:1px solid #ccc}
</style>
<script type="text/javascript" src="../js/lib/jquery/jquery-1.12.4.js"></script>
<script type="text/javascript" src="../js/admin/adminViewDetail.js"></script>
<script type="text/javascript">

var reqSeq = "${reqSeq}";
var viewType = "${viewType}";

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
	$AdminViewDetail.init();
	
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
			<h3 id="viewName">등록 요청 제품 > 상세조회</h3>
			<!-- BOARD LIST -->
			<div class="tb_view">
				<table class="tableTy2" cellpadding="0" cellspacing="0" >
					<colgroup>
					<col width="17.82%" />
					<col width="" />
					</colgroup>
					<tbody id="registViewBody">
						<tr>
							<th scope="row"><label>제품명</label></th>
							<td id="prdNm"></td>
						</tr>
						<tr>
							<th scope="row"><label>회사/브랜드</label></th>
							<td id="comNa"></td>
						</tr>
						<tr>
							<th scope="row"><label>바코드</label></th>
							<td id="barCd"></td>
						</tr>
						<tr>
							<th scope="row"><label>제품 이미지</label></th>
							<td id="foodImg">
								<img src="../images/common/noimg145.jpg" />
								<img src="../images/common/noimg145.jpg" />
								<img src="../images/common/noimg145.jpg" />
								<img src="../images/common/noimg145.jpg" />
								<img src="../images/common/noimg145.jpg" />
								<button id="btnUrlSave" type="button" class="btn80_mg1" style="width:95px !important"><span>전체 다운로드</span></button>
							</td>
						</tr>
						<tr>
							<th scope="row"><label>요청자 이메일</label></th>
							<td id="email"></td>
						</tr>
						<tr>
							<th scope="row"><label>요청 일시</label></th>
							<td id="regDt"></td>
						</tr>
						<tr>
							<th scope="row"><label>등록제품 URL </label></th>
							<td>
								<input type="text" title="등록제품URL" name="adminid" id="adminid" style="width:133px" value=""/>
								<button id="btnUrlSave" type="button" class="btn80_mg1"><span>저장</span></button>
							</td>
						</tr>
					</tbody>
					<tbody id="modifyViewBody" class="hidden">
						<tr>
							<th scope="row"><label>제품명</label></th>
							<td id="prdNm"></td>
						</tr>
						<tr>
							<th scope="row"><label>제조원</label></th>
							<td id="comNa"></td>
						</tr>
						<tr>
							<th scope="row"><label>제품 URL</label></th>
							<td id="addrUrl"></td>
						</tr>
						<tr>
							<th scope="row"><label>수정요청 내용</label></th>
							<td id="modNt">
								<textarea name="comm_contents" id="comm_contents" title="내용" style="width:500px;height:100px;" readonly >에디터</textarea>
							</td>
						</tr>
						<tr>
							<th scope="row"><label>이미지</label></th>
							<td id="foodImg">
								<img src="../images/common/noimg145.jpg" />
							</td>
						</tr>
						<tr>
							<th scope="row"><label>요청자 이메일</label></th>
							<td id="email"></td>
						</tr>
						<tr>
							<th scope="row"><label>요청 일시</label></th>
							<td id="regDt"></td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- BTN -->
			<div class="btnAreaR">
			<button onclick="javascript:history.go(-1)" type="button" class="bg2" id=""><span>목록</span></button>
			</div>
		</div>
		<!-- //contents -->
	</div>
	<!-- //container -->
	<div class="footer">
		<div class="footerwrap">
			<p class="copyright">서울시 중랑구 면목로470 대상빌딩 5층 (131-220)  Tel. 02-3408-0114 | Fax. 02-439-0453<br />Copyright 2017 daesangit.com. All Rights Reserved</p>
		</div>
	</div>
</body>
</html>