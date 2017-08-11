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
<link rel="stylesheet" type="text/css" href="../css/lib/jquery.ui/jquery-ui.min.css">
<style type="text/css">
.hidden {display:none !important}

#loadingBox {position:absolute;top:50%;left:60%}
#manualKeywordList tbody tr {height:39px}
#manualKeywordList thead tr th.th_center {padding:0 !important;text-align:center}
</style>
<script type="text/javascript" src="../js/lib/jquery/jquery-1.12.4.js"></script>
<script type="text/javascript" src="../js/lib/jquery.ui/jquery-ui.min.js"></script>
<script type="text/javascript" src="../js/admin/adminRankModify.js"></script>
<script type="text/javascript">

var console = window.console || { log: function() {} };

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
	$AdminRankModify.init();
	
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
			<h3>인기검색어 관리 > 수정</h3>
			<table class="tableTy2" cellpadding="0" cellspacing="0" >
				<colgroup>
				<col width="17.82%" />
				<col width="" />
				</colgroup>
				<tbody>
					<tr>
						<th scope="row"><label for="regTypeM"><input type="radio" title="선택" name="gbn" id="regTypeM" value="M" checked="checked"> 수동등록</label></th>
						<td>
							<select id="manualSelectTime">
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
							</select>
							시간 기준 검색어 순위
							<button type="button" id="btnMOptionSearch" class="btn80_mg1"><span>조회</span></button>
						</td>
					</tr>
					<tr class="_manualOptionTr">
						<td colspan="2">
							<div style="float:left;width:45%">
								조회 기간 인기검색어 순위 1~10 <br/>
								<table id="manualKeywordList" class="tableTy1" cellpadding="0" cellspacing="0" style="margin-top:10px;">
									<colgroup>
										<col width="15%" />
										<col width="" />
										<col width="20%" />
										<col width="5%" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">순위</th>
											<th scope="col" class="th_center">검색어</th>
											<th scope="col" class="th_center">검색량</th>
											<th scope="col" class="th_center"><input type="checkbox" title="선택" name="checkAll" id="checkAll"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td colspan="4">내용이 없습니다.<br />기간을 설정해 조회해주세요.</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div style="float:left;height:472px;">
								<button type="button" id="btnMove" class="btn80_mg1" style="margin-top:220px"><span>이동</span></button>
							</div>
							<div style="float:left;width:45%">
								인기검색어 편집
								<table class="tableTy1" cellpadding="0" cellspacing="0" style="margin-top:10px;">
									<colgroup>
										<col width="15%" />
										<col width="" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">순위</th>
											<th scope="col">검색어</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td class="tit"><input type="text" name="keywordNm" style="width:250px"></td>
										</tr>
										<tr>
											<td>2</td>
											<td class="tit"><input type="text" name="keywordNm" style="width:250px"></td>
										</tr>
										<tr>
											<td>3</td>
											<td class="tit"><input type="text" name="keywordNm" style="width:250px"></td>
										</tr>
										<tr>
											<td>4</td>
											<td class="tit"><input type="text" name="keywordNm" style="width:250px"></td>
										</tr>
										<tr>
											<td>5</td>
											<td class="tit"><input type="text" name="keywordNm" style="width:250px"></td>
										</tr>
										<tr>
											<td>6</td>
											<td class="tit"><input type="text" name="keywordNm" style="width:250px"></td>
										</tr>
										<tr>
											<td>7</td>
											<td class="tit"><input type="text" name="keywordNm" style="width:250px"></td>
										</tr>
										<tr>
											<td>8</td>
											<td class="tit"><input type="text" name="keywordNm" style="width:250px"></td>
										</tr>
										<tr>
											<td>9</td>
											<td class="tit"><input type="text" name="keywordNm" style="width:250px"></td>
										</tr>
										<tr>
											<td>10</td>
											<td class="tit"><input type="text" name="keywordNm" style="width:250px"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</td>
					</tr>
					<tr class="_manualOptionTr">
						<td colspan="2">수동 등록 인기검색어 서비스기간 
							<input type="text" id="startDate" readonly>
							<select id="startTime">
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
							</select>
							시 ~ 
							<input type="text" id="endDate" readonly>
							<select id="endTime">
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
							</select>
						</td>
					</tr>
					<tr>
						<th scope="row"><label for="regTypeA"><input type="radio" title="선택" name="gbn" id="regTypeA" value="A"> 자동등록</label></th>
						<td>
							<select id="autoSelectTime">
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
							</select>
							시간 기준 검색어 순위 반영
						</td>
					</tr>
				</tbody>
			</table>
			<div class="btnAreaR" style="margin-top:10px;">
				<button type="button" class="bg2" id="btnCancel"><span>취소</span></button>
				<button type="button" class="bg1" id="btnSave"><span>저장</span></button>
			</div>
			<div id="loadingBox" class="hidden">
				<img src="../images/common/bx_loader.gif" />
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