<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isELIgnored="false" %>  
<jsp:include page="htmlHeader.jsp" flush="false"/>
<style type="text/css">
.hidden {display:none !important}
.visibility {visibility:hidden !important}
.filetype {top:0;left:-3px;}

.prd_list1 .info2-3 .hashtag:hover, .dd .hashtag:hover {cursor:pointer}
</style>
<script type="text/javascript" src="./js/popup/prdModifyPopup.js"></script>
<script type="text/javascript" src="./js/detailPrdView.js"></script>
<script>
//테스트 입니다.111

var fudId = "${fudId}";
var fudNm = "${fudNm}";

jQuery(document).ready(function($){
	
	$DetailPrdView.init();
	
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
					<!-- Prd View -->
					<div class="prd_view">
						<h3><span class="prd_name"></span><span class="prd_weight"></span></h3>
						<div class="prd_report1-1">							
							<div class="prd_imgview"><img src="" alt="제품이미지" /></div>
							<ul class="report_st1">
								<li><div class="dt">바코드</div><div class="dd prd_barcode"></div></li>
								<li><div class="dt">품목보고번호</div><div class="dd prd_rptNo"></div></li>
								<li><div class="dt">보고일</div><div class="dd prd_rptDt"></div></li>
								<li>
									<div class="dt">업소명/소재지</div>
									<div class="dd multiline1 prd_cpn">
										<p class="multitext1"></p>
									</div>
								</li>
								<li><div class="dt">식품분류</div><div class="dd prd_fudGroup"></div></li>
								<li><div class="dt">식품유형</div><div class="dd prd_fudType"></div></li>
								<li><div class="dt">개별표시</div><div class="dd prd_dtiIdvMrk"></div></li>
								<li><div class="dt">브랜드</div><div class="dd prd_brand"></div></li>
								<li>
									<div class="dt">태그정보</div>
									<div class="dd hasharea prd_tag">
									</div>
								</li>
							</ul>
						</div>
						<div class="prd_report1-2">
							<ul class="report_st2">
								<li>
									<div class="dt">원재료</div>
									<div class="dd prd_rawmtrl"></div>
								</li>
							</ul>
							<div class="nutri_comp">
								<div class="title">영양성분</div>
								<ul class="supplyweight">
									<!-- <li>1회 제공량 1봉지(60g)</li> -->
									<!-- <li>총 1회 제공량(60g)</li> -->
								</ul>
								<ul class="kcal">
									<!-- <li><div class="dt">열량/총 열량</div><div class="dd prd_oneCal">343kcal</div><div class="dd prd_totCal">343kcal</div></li> -->
									<li><div class="dt">열량/총 열량</div></li>
								</ul>
								<ul class="component">
									<!-- <li><div class="dt">탄수화물</div><div class="dd">31g</div><div class="dd">9%</div></li>
									<li>
										<div class="dt">▶ 당류</div><div class="dd">g</div><div class="dd">%</div>
									</li>
									<li>
										<div class="dt">단백질</div><div class="dd">g</div><div class="dd">%</div>
									</li>
									<li>
										<div class="dt">지방</div><div class="dd">g</div><div class="dd">%</div>
									</li>
									<li>
										<div class="dt">▶ 포화지방</div><div class="dd">g</div><div class="dd">%</div>
									</li>
									<li>
										<div class="dt">▶ 트랜스지방</div><div class="dd">g</div><div class="dd">%</div>
									</li>
									<li>
										<div class="dt">콜레스테롤</div>
										<div class="dd">g</div>
										<div class="dd">%</div>
									</li>
									<li>
										<div class="dt">나트륨</div>
										<div class="dd">g</div>
										<div class="dd">%</div>
									</li>
									<li>
										<div class="dt"> </div>
										<div class="dd"> </div>
										<div class="dd"> </div>
									</li>
									<li>
										<div class="dt"> </div>
										<div class="dd"> </div>
										<div class="dd"> </div>
									</li>
									<li>
										<div class="dt"> </div>
										<div class="dd"> </div>
										<div class="dd"> </div>
									</li>
									<li>
										<div class="dt"> </div>
										<div class="dd"> </div>
										<div class="dd"> </div>
									</li>
									<li>
										<div class="dt"> </div>
										<div class="dd"> </div>
										<div class="dd"> </div>
									</li>
									<li>
										<div class="dt"> </div>
										<div class="dd"> </div>
										<div class="dd"> </div>
									</li> -->
								</ul>
							</div>
							<ul class="report_st3 w2">
								<li><div class="dt">알레르기성분</div><div class="dd prd_allrgy"></div></li>
								<li><div class="dt">특정성분</div><div class="dd prd_spcIgd"></div></li>
								<li><div class="dt">유기농 함량</div><div class="dd prd_ognCntn"></div></li>
								<li>
									<div class="dt">인증</div>
									<div class="dd">
										HACCP인증<span class="mark">?</span>
										<div class="infodetail">
											이 제품은 무첨가 마케팅을 하고 있습니다.<br /><strong>무첨가: 합성보존료, 합성착향료</strong>
										</div>
									</div>
								</li>
								<li><div class="dt">무첨가</div><div class="dd prd_notAdd"></div></li>
								<li>
									<div class="dt">기타 마케팅문구</div>
									<div class="dd multiline2 w_dd1">
											<span class="multitext2 prd_mta09"></span>
									</div>
								</li>
							</ul>
							<ul class="report_st4 w1">
								<li><div class="dt">반품 및 교환장소</div><div class="dd prd_mta04"></div></li>
								<li><div class="dt">고객상담실</div><div class="dd prd_mta05"></div></li>
								<li><div class="dt">특허	</div><div class="dd prd_mta10"></div></li>
								<li><div class="dt">유기농</div><div class="dd prd_mta12"></div></li>
							</ul>
							<ul class="report_st3 w1">
								<li><div class="dt">실용신안</div><div class="dd prd_mta11"></div></li>
								<li>
									<div class="dt">주의사항</div>									
									<div class="dd multiline2 w_dd2 prd_mta06">
										<span class="multitext2"></span>
									</div>
								</li>
								<li><div class="dt">제조시설 안내</div><div class="dd prd_mta07"></div></li>
								<li><div class="dt">포장형태</div><div class="dd prd_pacForm"></div></li>
								<li><div class="dt">포장재질</div><div class="dd prd_pacMtrlCt"></div></li>
								<li><div class="dt">분리배출 표시</div><div class="dd prd_rcspCt"></div></li>
								<li><div class="dt">분리배출 상세</div><div class="dd prd_rcspMrk"></div></li>
							</ul>
						</div>
					</div>					
					<!-- //Prd View -->
					<div class="prd_btnarear2"><button id="btnGoBack" type="button" title="목록" class="prd_smit1">목록</button></div>
					
					<div class="prd_btnarear1 mrgb50">제품의 잘못된 정보를 발견하셨나요? 수정 요청을 통해 알려주시면 최대한 빨리 수정하겠습니다.<button id="btnPrdMod" type="button" title="제품수정요청" class="prd_viewbtn1">제품수정요청</button></div>
					
					<!-- Hit Product -->
					<div class="prdhit">
						<div class="prdhit_tit">카테고리 인기제품</div>
						<!--prd-->
						<div class="main_prd">
							<ul id="categoryRank">
							</ul>
						</div>
						<!--//prd-->
					</div>
					<!-- //Hit Product -->
					
					<div id="gotop" class="gotop"><div>TOP</div></div>
				</div>
			</div>
<jsp:include page="htmlFooter.jsp" flush="false"/>