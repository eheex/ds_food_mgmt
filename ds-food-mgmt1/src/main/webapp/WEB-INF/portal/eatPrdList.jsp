<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isELIgnored="false" %>  
<jsp:include page="htmlHeader.jsp" flush="false"/>
<style type="text/css">
.hidden {display:none !important}
.visibility {visibility:hidden !important}
.filetype {top:0;left:-3px;}

.dataTables_wrapper .dataTables_paginate {float:none !important;text-align:center !important;margin-top:40px}
.dataTables_wrapper .dataTables_paginate .paginate_button {font-size:11px;height:27px;margin-left:-6px;margin-right:8px;box-sizing: border-box;display: inline-block;min-width: 1.5em;padding: 0.5em 1em;text-align: center;text-decoration: none !important;cursor: pointer;*cursor: hand;color: #333 !important;border: 1px solid transparent;border-radius: 2px;}
.dataTables_wrapper .dataTables_paginate .paginate_button:hover {text-decoration:none !important;color:#666 !important;border:1px solid #ddd !important;}
.dataTables_wrapper .dataTables_paginate .paginate_button.active {background:#fff;border:1px solid #ff6200;}
.dataTables_wrapper .dataTables_paginate .paginate_button.active a {font-weight:bold;color:#ff6200 !important;}
.dataTables_wrapper .dataTables_paginate .paginate_button.previous {margin:0 13px 0 -3px;border:1px solid #ddd;background:url(../images/common/pagenate_arrow2.gif) no-repeat 50% 50%}
.dataTables_wrapper .dataTables_paginate .paginate_button.previous:hover{background:url(../images/common/pagenate_arrow2over.gif) no-repeat 50% 50%}
.dataTables_wrapper .dataTables_paginate .paginate_button.next {margin:0 5px 0 0;border:1px solid #ddd;background:url(../images/common/pagenate_arrow3.gif) no-repeat 50% 50%}
.dataTables_wrapper .dataTables_paginate .paginate_button.next:hover{background:url(../images/common/pagenate_arrow3over.gif) no-repeat 50% 50%}

.ui-widget-header {background: #ff6200 !important}
.srh_detail .range_in {display:inline-block}
</style>
<script type="text/javascript" src="./js/eatPrdList.js"></script>
<script type="text/javascript" src="./js/popup/prdRegistPopup.js"></script>
<script type="text/javascript" src="./js/popup/guidePopup.js"></script>
<script>

var tag = "${tag}";
var fudNm = "${fudNm}";
var categoryNm = "${categoryNm}";

jQuery(document).ready(function($){
	$EatPrdList.init();
});
</script>
</head>
	<body>
		<div id="skipnav"><a  href="#container">skip to content</a></div>
		<!-- wrap -->	
		<div id="wrap">
			<div id="container">
				<div class="contents">					
					<!-- category Area -->
					<div class="location_wrap">
						<ol class="location">
							<li><img src="../images/common/bullet_lochome.png" alt="home" /></li>
						</ol>
					</div>
					<!-- //category Area -->
					<div class="prdpage_info1"><a id="btnSearchDetail" href="#srh_detail" class="detail_tit">상세검색<img src="../images/common/btn_detailplus.gif" alt="열기" /></a></div>
					
					<div id="listResultArea" class="hidden">
						<div class="prdarea">
							<table id="prdListTable" class="prd_list1"></table>
						</div>
						<div class="prd_btnarear1 mrgt40">원하시는 제품이 없나요? 등록 요청을 통해 알려주시면 최대한 빨리 등록하겠습니다.<button type="button" title="제품등록요청" class="prd_viewbtn1 _btnPrdReq">제품등록요청</button></div>
					</div>
					
					<!-- No result -->
					<div class="noresult1 hidden">
						<p class="result"><strong>'<c:out value="${fudNm}"/><c:out value="${categoryNm}"/><c:out value="${tag}"/>'</strong>에 대한 검색 결과가 없습니다.</p>
						<p class="info1">
							입력하신 검색어가 정확한지 다시 한번 확인해주세요.<br />
							띄어쓰기 또는 넓은 의미의 단어를 사용해보세요.
						</p>
						<div class="requestarea">
							<p class="requestinfo1">
								찾는 제품이 아직 없으시면 등록 요청을 통해 알려주세요.<br />
								제품명과 사진을 올려주시면 최대한 빨리 등록하겠습니다.
							</p>
							<a href="#" class="requestbtn _btnPrdReq">제품등록요청</a>
						</div>
					</div>					
					<!-- //No result -->
					<div id="gotop" class="gotop"><div>TOP</div></div>
				</div>
			</div>
<jsp:include page="htmlFooter.jsp" flush="false"/>

