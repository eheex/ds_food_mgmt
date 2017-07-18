(function(window, $, undefined) {
/**
 *  상세검색 팝업
 *	푸드TFT 
 */
window.$DetailSearchPopup = {
	bigTxt: "",
	middleTxt: "",
	smallTxt: "",
	_jPopUpElement: $('<!-- detail search -->'+
						'<div id="srh_detail" class="srh_detail">'+
							'<button class="srh_detail_close">상세검색<img src="../images/common/btn_detailminus.gif" alt="닫기" /></button>'+
								'<div class="finder">'+
								'<!-- 상세검색>카테고리 -->'+
									'<div class="finder_col _category">'+
										'<h3 class="finder_tit _category"><strong>카테고리</strong></h3>'+
										'<div class="finder_cell _big">'+
											'<h4 class="finder_cell_tit">대분류</h4>'+
											'<ul class="finder_list"><!--클릭 선택시 class=on-->'+
												'<li><a href="#" class="_big1 on">가공식품</a></li>'+
												'<li><a href="#" class="_big2">냉장/냉동/반찬/간편식</a></li>'+
												'<li><a href="#" class="_big3">건강/친환경식품</a></li>'+
												'<li><a href="#" class="_big4">정육/계란류</a></li>'+
												'<li><a href="#" class="_big5">쌀/잡곡</a></li>'+
												'<li><a href="#" class="_big6">채소</a></li>'+
												'<li><a href="#" class="_big7">수산물/해산물/건어물</a></li>'+
											'</ul>'+
										'</div>'+
										'<div class="finder_cell _mid">'+
											'<h4 class="finder_cell_tit">중분류</h4>'+
											'<ul class="finder_list _mid1"><!--가공식품-->'+
												'<li><a href="#" class="on">라면/컵라면/면식품</a></li>'+
												'<li><a href="#">분유/두유/이유식></a></li>'+
												'<li><a href="#">우유/요구르트/치즈/아이스크림</a></li>'+
												'<li><a href="#">초콜릿/캔디/껌</a></li>'+
												'<li><a href="#">과자/시리얼</a></li>'+
												'<li><a href="#">커피/녹차/차</a></li>'+
												'<li><a href="#">생수/음료/탄산수</a></li>'+
												'<li><a href="#">안주류</a></li>'+
												'<li><a href="#">견과류</a></li>'+
												'<li><a href="#">밀가루/설탕/소금/조미료</a></li>'+
												'<li><a href="#">식용유/참기름/파스타/소스</a></li>'+
												'<li><a href="#">간장/고추장/장류</a></li>'+
												'<li><a href="#">참치캔/통조림류</a></li>'+
												'<li><a href="#">즉석밥/카레짜장/즉석식품</a></li>'+
												'<li><a href="#">주류</a></li>'+
											'</ul>'+
											'<ul class="finder_list _mid2 hidden"><!--냉장/냉동-->'+
												'<li><a href="#">간편가정식</a></li>'+
												'<li><a href="#">식빵/잼/베이커리></a></li>'+
												'<li><a href="#">떡/특산물음식</a></li>'+
												'<li><a href="#">단무지/반찬</a></li>'+
												'<li><a href="#">김치</a></li>'+
												'<li><a href="#">만두/피자/냉동식품</a></li>'+
												'<li><a href="#">햄/어묵/맛살/면류 냉장식품</a></li>'+
											'</ul>'+
											'<ul class="finder_list _mid3 hidden"><!--건강/친환경-->'+
												'<li><a href="#">꿀/로얄제리</a></li>'+
												'<li><a href="#">홍삼/인삼/건강즙></a></li>'+
												'<li><a href="#">친환경가공식품</a></li>'+
												'<li><a href="#">한차/건강차재료</a></li>'+
												'<li><a href="#">다이어트/헬스보조식품</a></li>'+
												'<li><a href="#">건강식품(성분별)</a></li>'+
											'</ul>'+
											'<ul class="finder_list _mid4 hidden"><!--정육/계란류-->'+
												'<li><a href="#" class="_mid4-1">알류</a></li>'+
											'</ul>'+
											'<ul class="finder_list _mid5 hidden"><!--쌀/잡곡-->'+
												'<li><a href="#" class="_mid5-1">혼합곡/기능성잡곡</a></li>'+
												'<li><a href="#" class="_mid5-2">수수/조/깨/잡곡></a></li>'+
												'<li><a href="#" class="_mid5-3">콩/보리</a></li>'+
												'<li><a href="#" class="_mid5-4">찹쌀/현미/흑미</a></li>'+
												'<li><a href="#" class="_mid5-5">쌀</a></li>'+
											'</ul>'+
											'<ul class="finder_list _mid6 hidden" ><!--채소-->'+
												'<li><a href="#" class="_mid6-1">두부/콩나물</a></li>'+
											'</ul>'+
											'<ul class="finder_list _mid7 hidden" ><!--수산/해산-->'+
												'<li><a href="#" class="_mid7-1">조미김/생김</a></li>'+
												'<li><a href="#" class="_mid7-2">건오징어/어포/육포</a></li>'+
											'</ul>'+
										'</div>'+
										'<div class="finder_cell last _small">'+
											'<h4 class="finder_cell_tit">소분류</h4>'+
											'<ul class="finder_list _small1"><!--가공-라면-->'+
												'<li><a href="#" class="_small1-1 on">냉면/메밀면</a></li>'+
												'<li><a href="#" class="_small1-2">파스타</a></li>'+
												'<li><a href="#" class="_small1-3">당면</a></li>'+
												'<li><a href="#" class="_small1-4">우동 숙면</a></li>'+
												'<li><a href="#" class="_small1-5">쌀국수/월남쌈</a></li>'+
												'<li><a href="#" class="_small1-6">국수/칼국수/콩국수</a></li>'+
												'<li><a href="#" class="_small1-7">컵라면</a></li>'+
												'<li><a href="#" class="_small1-8">봉지라면</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small2 hidden"><!--가공-분유-->'+
												'<li><a href="#" class="_small2-1">분유이유식</a></li>'+
												'<li><a href="#" class="_small2-2">아기과자</a></li>'+
												'<li><a href="#" class="_small2-3">임신,수유부용 식품</a></li>'+
												'<li><a href="#" class="_small2-4">냉장두유</a></li>'+
												'<li><a href="#" class="_small2-5">선물용두유</a></li>'+
												'<li><a href="#" class="_small2-6">아기두유</a></li>'+
												'<li><a href="#" class="_small2-7">성인두유</a></li>'+
												'<li><a href="#" class="_small2-8">아기음료</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small3 hidden"><!--가공-우유-->'+
												'<li><a href="#" class="_small3-1">곡물우유</a></li>'+
												'<li><a href="#" class="_small3-2">연유</a></li>'+
												'<li><a href="#" class="_small3-3">아이스크림</a></li>'+
												'<li><a href="#" class="_small3-4">버터/마가린/생크림</a></li>'+
												'<li><a href="#" class="_small3-5">치즈</a></li>'+
												'<li><a href="#" class="_small3-6">떠먹는 요구르트</a></li>'+
												'<li><a href="#" class="_small3-7">마시는 요구르트</a></li>'+
												'<li><a href="#" class="_small3-8">멸균우유</a></li>'+
												'<li><a href="#" class="_small3-9">딸기/초코/커피우유</a></li>'+
												'<li><a href="#" class="_small3-10">어린이우유</a></li>'+
												'<li><a href="#" class="_small3-11">고칼슘우유</a></li>'+
												'<li><a href="#" class="_small3-12">저지방/무지방우유</a></li>'+
												'<li><a href="#" class="_small3-13">우유</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small4 hidden"><!--가공-초콜릿-->'+
												'<li><a href="#" class="_small4-1">엿</a></li>'+
												'<li><a href="#" class="_small4-2">수입 초콜릿/사탕</a></li>'+
												'<li><a href="#" class="_small4-3">젤리</a></li>'+
												'<li><a href="#" class="_small4-4">껌</a></li>'+
												'<li><a href="#" class="_small4-5">막대/츄잉사탕</a></li>'+
												'<li><a href="#" class="_small4-6">사탕</a></li>'+
												'<li><a href="#" class="_small4-7">초코바/양갱</a></li>'+
												'<li><a href="#" class="_small4-8">초콜릿</a></li>'+
												'<li><a href="#" class="_small4-9">카라멜</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small5 hidden"><!--가공-피자-->'+
												'<li><a href="#" class="_small5-1">상온소세지</a></li>'+
												'<li><a href="#" class="_small5-2">시리얼</a></li>'+
												'<li><a href="#" class="_small5-3">빵류</a></li>'+
												'<li><a href="#" class="_small5-4">수입과자</a></li>'+
												'<li><a href="#" class="_small5-5">한과/전통과자</a></li>'+
												'<li><a href="#" class="_small5-6">맛밤</a></li>'+
												'<li><a href="#" class="_small5-7">파이/카스타드/소프트쿠키</a></li>'+
												'<li><a href="#" class="_small5-8">쌀/옥수수과자</a></li>'+
												'<li><a href="#" class="_small5-9">스낵</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small6 hidden"><!--가공-커피-->'+
												'<li><a href="#" class="_small6-1">커피믹스</a></li>'+
												'<li><a href="#" class="_small6-2">헤즐넛/카푸치노향 커피믹스</a></li>'+
												'<li><a href="#" class="_small6-3">블랙믹스(설탕함유)</a></li>'+
												'<li><a href="#" class="_small6-4">블랙믹스(무설탕)</a></li>'+
												'<li><a href="#" class="_small6-5">원두커피</a></li>'+
												'<li><a href="#" class="_small6-6">인스턴트커피</a></li>'+
												'<li><a href="#" class="_small6-7">캡슐커피</a></li>'+
												'<li><a href="#" class="_small6-8">코코아/핫초코</a></li>'+
												'<li><a href="#" class="_small6-9">아이스커피/아이스티</a></li>'+
												'<li><a href="#" class="_small6-10">녹차/현미녹차</a></li>'+
												'<li><a href="#" class="_small6-11">둥글레차/옥수수차/메밀차</a></li>'+
												'<li><a href="#" class="_small6-12">홍차/허브차/보이차</a></li>'+
												'<li><a href="#" class="_small6-13">주전자용차(알곡/티백)</a></li>'+
												'<li><a href="#" class="_small6-14">율무차/땅콩차/견과차</a></li>'+
												'<li><a href="#" class="_small6-15">유자차/모과차</a></li>'+
												'<li><a href="#" class="_small6-16">한차/생강차/전통차</a></li>'+
												'<li><a href="#" class="_small6-17">기타차류</a></li>'+
												'<li><a href="#" class="_small6-18">다이어트차</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small7 hidden"><!--가공-생수-->'+
												'<li><a href="#" class="_small7-1">토마토/망고/자몽주스</a></li>'+
												'<li><a href="#" class="_small7-2">포도/사과주스</a></li>'+
												'<li><a href="#" class="_small7-3">오렌지/감귤주스</a></li>'+
												'<li><a href="#" class="_small7-4">탄산수</a></li>'+
												'<li><a href="#" class="_small7-5">식혜/수정과/전통음료</a></li>'+
												'<li><a href="#" class="_small7-6">수입생수</a></li>'+
												'<li><a href="#" class="_small7-7">어린이음료</a></li>'+
												'<li><a href="#" class="_small7-8">국내생수</a></li>'+
												'<li><a href="#" class="_small7-9">음료세트</a></li>'+
												'<li><a href="#" class="_small7-10">티음료</a></li>'+
												'<li><a href="#" class="_small7-11">커피음료</a></li>'+
												'<li><a href="#" class="_small7-12">무알콜맥주</a></li>'+
												'<li><a href="#" class="_small7-13">스포츠/이온/비타민/숙취해소</a></li>'+
												'<li><a href="#" class="_small7-14">환타/웰치스/레몬에이드류</a></li>'+
												'<li><a href="#" class="_small7-15">콜라/사이다</a></li>'+
												'<li><a href="#" class="_small7-16">냉장과일주스/쿨피스류</a></li>'+
												'<li><a href="#" class="_small7-17">기타과일주스</a></li>'+
												'<li><a href="#" class="_small7-18">매실/알로에/블루베리주스</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small8 hidden"><!--가공-안주-->'+
												'<li><a href="#" class="_small8-1">기타가공품</a></li>'+
												'<li><a href="#" class="_small8-2">어육가공품</a></li>'+
												'<li><a href="#" class="_small8-3">건조저장육류</a></li>'+
											'</ul>'+
												'<ul class="finder_list _small9 hidden"><!--가공-견과류-->'+
												'<li><a href="#" class="_small9-1">건포도/건과일</a></li>'+
												'<li><a href="#" class="_small9-2">땅콩/아몬드류</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small10 hidden"><!--가공-밀가루-->'+
												'<li><a href="#" class="_small10-1">빵/ 떡 믹스</a></li>'+
												'<li><a href="#" class="_small10-2">밀가루/요리가루</a></li>'+
												'<li><a href="#" class="_small10-3">기타조미료</a></li>'+
												'<li><a href="#" class="_small10-4">식품첨가물</a></li>'+
												'<li><a href="#" class="_small10-5">인공감미료</a></li>'+
												'<li><a href="#" class="_small10-6">후추/향신료/와사비</a></li>'+
												'<li><a href="#" class="_small10-7">조미료</a></li>'+
												'<li><a href="#" class="_small10-8">참깨/들깨</a></li>'+
												'<li><a href="#" class="_small10-9">고춧가루</a></li>'+
												'<li><a href="#" class="_small10-10">소금</a></li>'+
												'<li><a href="#" class="_small10-11">소금</a></li>'+
												'<li><a href="#" class="_small10-12">설탕</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small11 hidden"><!--가공-식용유-->'+
												'<li><a href="#" class="_small11-1">대두유/옥수수유</a></li>'+
												'<li><a href="#" class="_small11-2">참기름/들기름</a></li>'+
												'<li><a href="#" class="_small11-3">기타기름</a></li>'+
												'<li><a href="#" class="_small11-4">드레싱</a></li>'+
												'<li><a href="#" class="_small11-5">양념/소스</a></li>'+
												'<li><a href="#" class="_small11-6">파스타소스</a></li>'+
												'<li><a href="#" class="_small11-7">케찹/마요네즈</a></li>'+
												'<li><a href="#" class="_small11-8">물엿/액젓</a></li>'+
												'<li><a href="#" class="_small11-9">식초/음용식초</a></li>'+
												'<li><a href="#" class="_small11-10">현미유/쌀눈유/해바라기유</a></li>'+
												'<li><a href="#" class="_small11-11">카놀라유</a></li>'+
												'<li><a href="#" class="_small11-12">올리브유/포도씨유</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small12 hidden"><!--가공-간장-->'+
												'<li><a href="#" class="_small12-1">초고추장/볶음고추장</a></li>'+
												'<li><a href="#" class="_small12-2">고추장</a></li>'+
												'<li><a href="#" class="_small12-3">간장</a></li>'+
												'<li><a href="#" class="_small12-4">쌈장</a></li>'+
												'<li><a href="#" class="_small12-5">된장</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small13 hidden"><!--가공-참치캔-->'+
												'<li><a href="#" class="_small13-1">곡류가공품</a></li>'+
												'<li><a href="#" class="_small13-2">팥빙수재료</a></li>'+
												'<li><a href="#" class="_small13-3">농산통조림</a></li>'+
												'<li><a href="#" class="_small13-4">과일통조림</a></li>'+
												'<li><a href="#" class="_small13-5">고등어/꽁치/골뱅이/번데기</a></li>'+
												'<li><a href="#" class="_small13-6">반찬통조림/닭가슴살</a></li>'+
												'<li><a href="#" class="_small13-7">스팸/돈육통조림</a></li>'+
												'<li><a href="#" class="_small13-8">참치캔</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small14 hidden"><!--가공-즉석밥-->'+
												'<li><a href="#" class="_small14-1">카레/즉석카레</a></li>'+
												'<li><a href="#" class="_small14-2">햇반/즉석밥/누룽지</a></li>'+
												'<li><a href="#" class="_small14-3">선식</a></li>'+
												'<li><a href="#" class="_small14-4">즉석국/밥양념</a></li>'+
												'<li><a href="#" class="_small14-5">죽/스프</a></li>'+
												'<li><a href="#" class="_small14-6">덮밥/덮밥스프</a></li>'+
												'<li><a href="#" class="_small14-7">짜장/즉석짜장</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small15 hidden"><!--가공-주류-->'+
												'<li><a href="#" class="_small15-1">소주</a></li>'+
												'<li><a href="#" class="_small15-2">맥주</a></li>'+
												'<li><a href="#" class="_small15-3">막걸리</a></li>'+
												'<li><a href="#" class="_small15-4">기타주류</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small16 hidden"><!--냉장-간편가정-->'+
												'<li><a href="#" class="_small16-1">또띠아</a></li>'+
												'<li><a href="#" class="_small16-2">간식/디저트/샐러드</a></li>'+
												'<li><a href="#" class="_small16-3">보쌈/야식류</a></li>'+
												'<li><a href="#" class="_small16-4">순대/족발</a></li>'+
												'<li><a href="#" class="_small16-5">볶음류</a></li>'+
												'<li><a href="#" class="_small16-6">삼각김밥/죽/면류</a></li>'+
												'<li><a href="#" class="_small16-7">냉동밥/스파게티</a></li>'+
												'<li><a href="#" class="_small16-8">찜</a></li>'+
											'</ul>'+
					
											'<ul class="finder_list _small17 hidden"><!--냉장-식빵잼-->'+
												'<li><a href="#" class="_small17-1">식빵/일반빵</a></li>'+
												'<li><a href="#" class="_small17-2">베이킹도구/재료</a></li>'+
												'<li><a href="#" class="_small17-3">냉동생지/즉성빵</a></li>'+
												'<li><a href="#" class="_small17-4">호두파이/와플/츄러스</a></li>'+
												'<li><a href="#" class="_small17-5">베이글/머핀/도너츠</a></li>'+
												'<li><a href="#" class="_small17-6">롤케익/카스테라/쿠키</a></li>'+
												'<li><a href="#" class="_small17-7">케익/케익선물세트</a></li>'+
												'<li><a href="#" class="_small17-8">찐빵/호빵</a></li>'+
												'<li><a href="#" class="_small17-9">과일잼</a></li>'+
												'<li><a href="#" class="_small17-10">땅콩버터</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small18 hidden"><!--냉장-떡-->'+
												'<li><a href="#" class="_small18-1">백설기떡</a></li>'+
												'<li><a href="#" class="_small18-2">떡국떡/떡볶이떡</a></li>'+
												'<li><a href="#" class="_small18-3">특산물음식</a></li>'+
												'<li><a href="#" class="_small18-4">떡</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small19 hidden"><!--냉장-단무지-->'+
												'<li><a href="#" class="_small19-1">콩식품</a></li>'+
												'<li><a href="#" class="_small19-2">청국장/찌게양념/소스</a></li>'+
												'<li><a href="#" class="_small19-3">젓갈</a></li>'+
												'<li><a href="#" class="_small19-4">간장/양념게장</a></li>'+
												'<li><a href="#" class="_small19-5">수산반찬</a></li>'+
												'<li><a href="#" class="_small19-6">축산반찬</a></li>'+
												'<li><a href="#" class="_small19-7">농산반찬</a></li>'+
												'<li><a href="#" class="_small19-8">단무지/무쌈/무절임</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small20 hidden"><!--냉장-김치-->'+
												'<li><a href="#" class="_small20-1">양파/파/부추김치/기타</a></li>'+
												'<li><a href="#" class="_small20-2">갓김치/고들빼기</a></li>'+
												'<li><a href="#" class="_small20-3">물김치/백김치/동치미</a></li>'+
												'<li><a href="#" class="_small20-4">깍두기/총각/열무김치</a></li>'+
												'<li><a href="#" class="_small20-5">혼합김치</a></li>'+
												'<li><a href="#" class="_small20-6">일반김치</a></li>'+
												'<li><a href="#" class="_small20-7">절임배추/김치양념</a></li>'+
												'<li><a href="#" class="_small20-8">묵은지</a></li>'+
												'<li><a href="#" class="_small20-9">맛김치/볶음김치</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small21 hidden"><!--냉장-만두-->'+
												'<li><a href="#" class="_small21-1">피자</a></li>'+
												'<li><a href="#" class="_small21-2">만두피</a></li>'+
												'<li><a href="#" class="_small21-3">냉동간식</a></li>'+
												'<li><a href="#" class="_small21-4">냉동반찬</a></li>'+
												'<li><a href="#" class="_small21-5">만두</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small22 hidden"><!--냉장-햄-->'+
												'<li><a href="#" class="_small22-1">소세지/베이컨</a></li>'+
												'<li><a href="#" class="_small22-2">햄/김밥재료</a></li>'+
												'<li><a href="#" class="_small22-3">냉장간식</a></li>'+
												'<li><a href="#" class="_small22-4">냉장면류</a></li>'+
												'<li><a href="#" class="_small22-5">맛살</a></li>'+
												'<li><a href="#" class="_small22-6">유부</a></li>'+
												'<li><a href="#" class="_small22-7">어묵</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small23 hidden"><!--친환경-끌-->'+
												'<li><a href="#" class="_small23-1">국산꿀</a></li>'+
												'<li><a href="#" class="_small23-2">수입꿀</a></li>'+
												'<li><a href="#" class="_small23-3">로얄제리/프로폴리스</a></li>'+
												'<li><a href="#" class="_small23-4">꿀가공품</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small24 hidden"><!--친환경-홍삼-->'+
												'<li><a href="#" class="_small24-1">인삼차</a></li>'+
												'<li><a href="#" class="_small24-2">인삼</a></li>'+
												'<li><a href="#" class="_small24-3">건강즙/과일즙</a></li>'+
												'<li><a href="#" class="_small24-4">산삼배양근</a></li>'+
												'<li><a href="#" class="_small24-5">어린이홍삼</a></li>'+
												'<li><a href="#" class="_small24-6">홍삼선물세트</a></li>'+
												'<li><a href="#" class="_small24-7">홍인삼음료/홍삼차/사탕</a></li>'+
												'<li><a href="#" class="_small24-8">홍삼절편/정과/양갱</a></li>'+
												'<li><a href="#" class="_small24-9">홍삼분말/캡슐/환</a></li>'+
												'<li><a href="#" class="_small24-10">홍삼액</a></li>'+
												'<li><a href="#" class="_small24-11">홍삼뿌리군/농축액</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small25 hidden"><!--친환경-친환경가공-->'+
												'<li><a href="#" class="_small25-1">통조림/잼</a></li>'+
												'<li><a href="#" class="_small25-2">커피/차</a></li>'+
												'<li><a href="#" class="_small25-3">과자/캔디</a></li>'+
												'<li><a href="#" class="_small25-4">면류/시리얼/즉석식품</a></li>'+
												'<li><a href="#" class="_small25-5">우유/요구르트/치즈/유가공품</a></li>'+
												'<li><a href="#" class="_small25-6">음료/건강식품</a></li>'+
												'<li><a href="#" class="_small25-7">분말류/장류/유지류/소스류</a></li>'+
												'<li><a href="#" class="_small25-8">친환경 가공 선물세트</a></li>'+
												'<li><a href="#" class="_small25-9">냉장냉동</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small26 hidden"><!--친환경-한차-->'+
												'<li><a href="#" class="_small26-1">한차</a></li>'+
												'<li><a href="#" class="_small26-2">건강차재료</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small27 hidden"><!--친환경-다이어트-->'+
												'<li><a href="#" class="_small27-1">다이어트보조식품</a></li>'+
												'<li><a href="#" class="_small27-2">헬스보충식</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small28 hidden"><!--친환경-건강-->'+
												'<li><a href="#" class="_small28-1">종합 비타민</a></li>'+
												'<li><a href="#" class="_small28-2">비오틴</a></li>'+
												'<li><a href="#" class="_small28-3">비타민 A</a></li>'+
												'<li><a href="#" class="_small28-4">비타민 B</a></li>'+
												'<li><a href="#" class="_small28-5">비타민 C</a></li>'+
												'<li><a href="#" class="_small28-6">비타민 D</a></li>'+
												'<li><a href="#" class="_small28-7">비타민 E</a></li>'+
												'<li><a href="#" class="_small28-8">오메가3</a></li>'+
												'<li><a href="#" class="_small28-9">감마리놀렌산C</a></li>'+
												'<li><a href="#" class="_small28-10">철분</a></li>'+
												'<li><a href="#" class="_small28-11">엽산</a></li>'+
												'<li><a href="#" class="_small28-12">칼슘</a></li>'+
												'<li><a href="#" class="_small28-13">아연</a></li>'+
												'<li><a href="#" class="_small28-14">초유</a></li>'+
												'<li><a href="#" class="_small28-15">마그네슘</a></li>'+
												'<li><a href="#" class="_small28-16">쏘팔메토</a></li>'+
												'<li><a href="#" class="_small28-17">글루코사민</a></li>'+
												'<li><a href="#" class="_small28-18">루테인</a></li>'+
												'<li><a href="#" class="_small28-19">콜라겐</a></li>'+
												'<li><a href="#" class="_small28-20">히알루론산</a></li>'+
												'<li><a href="#" class="_small28-21">코엔자임큐텐</a></li>'+
												'<li><a href="#" class="_small28-22">키토산</a></li>'+
												'<li><a href="#" class="_small28-23">스쿠알렌</a></li>'+
												'<li><a href="#" class="_small28-24">유산균</a></li>'+
												'<li><a href="#" class="_small28-25">알로에</a></li>'+
												'<li><a href="#" class="_small28-26">식이섬유</a></li>'+
												'<li><a href="#" class="_small28-27">클로렐라</a></li>'+
												'<li><a href="#" class="_small28-28">스피루리나</a></li>'+
												'<li><a href="#" class="_small28-29">기타 건강식품</a></li>'+
												'<li><a href="#" class="_small28-30">일반의약품</a></li>'+
												'<li><a href="#" class="_small28-31">어린이건강</a></li>'+
												'<li><a href="#" class="_small28-32">밀크씨슬</a></li>'+
												'<li><a href="#" class="_small28-33">녹차추출물</a></li>'+
												'<li><a href="#" class="_small28-34">옥타코사놀</a></li>'+
												'<li><a href="#" class="_small28-35">엠에스엠</a></li>'+
												'<li><a href="#" class="_small28-36">공액리놀렌산</a></li>'+
												'<li><a href="#" class="_small28-37">대두이소플라본</a></li>'+
												'<li><a href="#" class="_small28-38">매실추출물</a></li>'+
												'<li><a href="#" class="_small28-39">백수오</a></li>'+
												'<li><a href="#" class="_small28-40">레시틴</a></li>'+
												'<li><a href="#" class="_small28-41">가르시니아캄보지아 추출물</a></li>'+
												'<li><a href="#" class="_small28-42">회화나무 열매 추출물</a></li>'+
												'<li><a href="#" class="_small28-43">홍경전 추출물</a></li>'+
												'<li><a href="#" class="_small28-44">난소화성 말토덱스트린</a></li>'+
												'<li><a href="#" class="_small28-45">은행잎 추출물</a></li>'+
												'<li><a href="#" class="_small28-46">셀레늄</a></li>'+
												'<li><a href="#" class="_small28-47">베타카로틴</a></li>'+
												'<li><a href="#" class="_small28-48">피크노제놀-프랑스해안송껍질 추출물</a></li>'+
												'<li><a href="#" class="_small28-49">잔티젠</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small29 hidden"><!--정육-알류-->'+
												'<li><a href="#" class="_small29-1">메추리알</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small30 hidden"><!--쌀-혼합곡-->'+
												'<li><a href="#" class="_small30-1">혼합곡</a></li>'+
												'<li><a href="#" class="_small30-2">기능성잡곡</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small31 hidden"><!--쌀-수수-->'+
												'<li><a href="#" class="_small31-1">기장</a></li>'+
												'<li><a href="#" class="_small31-2">깨</a></li>'+
												'<li><a href="#" class="_small31-3">율무/녹두</a></li>'+
												'<li><a href="#" class="_small31-4">기타잡곡</a></li>'+
												'<li><a href="#" class="_small31-5">수수</a></li>'+
												'<li><a href="#" class="_small31-6">조류</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small32 hidden"><!--쌀-콩보리-->'+
												'<li><a href="#" class="_small32-1">보리</a></li>'+
												'<li><a href="#" class="_small32-2">콩</a></li>'+
												'<li><a href="#" class="_small32-3">팥</a></li>'+
												'<li><a href="#" class="_small32-4">서리태</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small33 hidden"><!--쌀-찹쌀-->'+
												'<li><a href="#" class="_small33-1">찹쌀</a></li>'+
												'<li><a href="#" class="_small33-2">현미</a></li>'+
												'<li><a href="#" class="_small33-3">흑미</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small34 hidden"><!--쌀-쌀-->'+
												'<li><a href="#" class="_small34-1">쌀</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small35 hidden"><!--채소-두부-->'+
												'<li><a href="#" class="_small35-1">찌개/부침겸용두부</a></li>'+
												'<li><a href="#" class="_small35-2">묵</a></li>'+
												'<li><a href="#" class="_small35-3">순두부/연두부</a></li>'+
												'<li><a href="#" class="_small35-4">혼합/기능성두부</a></li>'+
												'<li><a href="#" class="_small35-5">부침용두부</a></li>'+
												'<li><a href="#" class="_small35-6">찌개용두부</a></li>'+
												'<li><a href="#" class="_small35-7">콩나물</a></li>'+
												'<li><a href="#" class="_small35-8">생식용</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small36 hidden"><!--수산-조미김-->'+
												'<li><a href="#" class="_small36-1">황태포</a></li>'+
												'<li><a href="#" class="_small36-2">미역</a></li>'+
												'<li><a href="#" class="_small36-3">다시마</a></li>'+
												'<li><a href="#" class="_small36-4">감자반</a></li>'+
												'<li><a href="#" class="_small36-5">도시락/김밥용김</a></li>'+
												'<li><a href="#" class="_small36-6">생김/파래김</a></li>'+
												'<li><a href="#" class="_small36-7">구운김/조미김</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small37 hidden"><!--수산-건오징어-->'+
												'<li><a href="#" class="_small37-1">황태/북어/오징어</a></li>'+
											'</ul>'+
										'</div>'+
									'</div>'+
									'<!-- //상세검색>카테고리 -->'+
									'<!-- 상세검색>영양성분 -->'+
									'<div class="finder_col _nutrition">'+
										'<h3 class="finder_tit _nutrition"><strong>영양성분</strong></h3>'+
										'<ul class="finder_range_list">'+
											'<li>'+
												'<span class="rang_tit">열량</span>'+
												'<div id="kcal" class="range_in"></div>'+
												'<input id="kcalMin" type="text" title="열량검색 최소값" class="rangenum" placeholder="0" />~<input id="kcalMax" type="text" title="열량검색 최대값" class="rangenum" placeholder="0" />kcal'+
											'</li>'+
											'<li>'+
												'<span class="rang_tit">탄수화물</span>'+
												'<div id="car" class="range_in"></div>'+
												'<input id="carMin" type="text" title="탄수화물검색 최소값" class="rangenum" placeholder="0" />~<input id="carMax" type="text" title="탄수화물검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li>'+
												'<span class="rang_tit">당류</span>'+
												'<div id="sugars" class="range_in"></div>'+
												'<input id="sugarsMin" type="text" title="열량검색 최소값" class="rangenum" placeholder="0" />~<input id="sugarsMax" type="text" title="열량검색 최대값" class="rangenum" placeholder="0" />kcal'+
											'</li>'+
											'<li>'+
												'<span class="rang_tit">단백질</span>'+
												'<div id="protein" class="range_in"></div>'+
												'<input id="proteinMin" type="text" title="탄수화물검색 최소값" class="rangenum" placeholder="0" />~<input id="proteinMax" type="text" title="탄수화물검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li>'+
												'<span class="rang_tit">지방</span>'+
												'<div id="fat" class="range_in"></div>'+
												'<input id="fatMin" type="text" title="탄수화물검색 최소값" class="rangenum" placeholder="0" />~<input id="fatMax" type="text" title="탄수화물검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li>'+
												'<span class="rang_tit">포화지방</span>'+
												'<div id="sFat" class="range_in"></div>'+
												'<input id="sFatMin" type="text" title="탄수화물검색 최소값" class="rangenum" placeholder="0" />~<input id="sFatMax" type="text" title="탄수화물검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li>'+
												'<span class="rang_tit">나트륨</span>'+
												'<div id="na" class="range_in"></div>'+
												'<input id="naMin" type="text" title="탄수화물검색 최소값" class="rangenum" placeholder="0" />~<input id="naMax" type="text" title="탄수화물검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
										'</ul>'+
									'</div>'+
									'<!-- //상세검색>영양성분 -->'+
									'<!-- 상세검색>제외하는 알레르기 성분 -->'+
									'<div class="finder_col _allergy">'+
										'<h3 class="finder_tit _allergy"><strong>제외하는 알레르기 성분</strong></h3>'+
										'<div class="finder_cell">'+
											'<ul class="finder_list">'+
												'<li><input type="checkbox" id="chk_a1" name="chk1" /><label for="chk_a1"><div><i></i></div>새우</label></li>'+
												'<li><input type="checkbox" id="chk_a2" name="chk1" /><label for="chk_a2"><div><i></i></div>땅콩</label></li>'+
												'<li><input type="checkbox" id="chk_a3" name="chk1" /><label for="chk_a3"><div><i></i></div>돼지고기</label></li>'+
												'<li><input type="checkbox" id="chk_a4" name="chk1" /><label for="chk_a4"><div><i></i></div>난류(계란)</label></li>'+
												'<li><input type="checkbox" id="chk_a5" name="chk1" /><label for="chk_a5"><div><i></i></div>우유(유당)</label></li>'+
												'<li><input type="checkbox" id="chk_a6" name="chk1" /><label for="chk_a6"><div><i></i></div>대두(콩)</label></li>'+
												'<li><input type="checkbox" id="chk_a7" name="chk1" /><label for="chk_a7"><div><i></i></div>고등어</label></li>'+
												'<li><input type="checkbox" id="chk_a8" name="chk1" /><label for="chk_a8"><div><i></i></div>게</label></li>'+
												'<li><input type="checkbox" id="chk_a9" name="chk1" /><label for="chk_a9"><div><i></i></div>밀(소맥)</label></li>'+
												'<li><input type="checkbox" id="chk_a10" name="chk1" /><label for="chk_a10"><div><i></i></div>복숭아</label></li>'+
												'<li><input type="checkbox" id="chk_a11" name="chk1" /><label for="chk_a11"><div><i></i></div>메밀</label></li>'+
												'<li><input type="checkbox" id="chk_a12" name="chk1" /><label for="chk_a12"><div><i></i></div>토마토</label></li>'+
												'<li><input type="checkbox" id="chk_a13" name="chk1" /><label for="chk_a13"><div><i></i></div>마시멜로(젤라틴)</label></li>'+
												'<li><input type="checkbox" id="chk_a14" name="chk1" /><label for="chk_a14"><div><i></i></div>아황산염</label></li>'+
												'<li><input type="checkbox" id="chk_a15" name="chk1" /><label for="chk_a15"><div><i></i></div>아몬드아몬드 아몬드아몬드</label></li>'+
												'<li><input type="checkbox" id="chk_a16" name="chk1" /><label for="chk_a16"><div><i></i></div>마시멜로(젤라틴)</label></li>'+
												'<li><input type="checkbox" id="chk_a17" name="chk1" /><label for="chk_a17"><div><i></i></div>아황산염</label></li>'+
												'<li><input type="checkbox" id="chk_a18" name="chk1" /><label for="chk_a18"><div><i></i></div>아몬드</label></li>'+
											'</ul>'+
										'</div>'+
									'</div>'+
									'<!-- //상세검색>제외하는 알레르기 성분 -->'+
									'<!-- 상세검색>인증 -->'+
									'<div class="finder_col _certify">'+
										'<h3 class="finder_tit _certify"><strong>인증</strong></h3>'+
										'<div class="finder_cell">'+
											'<ul class="finder_list">'+
												'<li><input type="checkbox" id="chk_b1" name="chk1" /><label for="chk_b1"><div><i></i></div>HACCP 인증</label></li>'+
												'<li><input type="checkbox" id="chk_b2" name="chk1" /><label for="chk_b2"><div><i></i></div>LOHAS 인증</label></li>'+
												'<li><input type="checkbox" id="chk_b3" name="chk1" /><label for="chk_b3"><div><i></i></div>CCM 인증</label></li>'+
												'<li><input type="checkbox" id="chk_b4" name="chk1" /><label for="chk_b4"><div><i></i></div>유기농인증</label></li>'+
												'<li><input type="checkbox" id="chk_b5" name="chk1" /><label for="chk_b5"><div><i></i></div>할랄 인증</label></li>'+
												'<li><input type="checkbox" id="chk_b6" name="chk1" /><label for="chk_b6"><div><i></i></div>HACCP 인증</label></li>'+
											'</ul>'+
										'</div>'+
									'</div>'+
									'<!-- //상세검색>인증 -->'+
									'<!-- 상세검색>무첨가 -->'+
									'<div class="finder_col _noadd">'+
										'<h3 class="finder_tit _noadd"><strong>무첨가성분</strong></h3>'+
										'<div class="finder_cell">'+
											'<ul class="finder_list">'+
												'<li><input type="checkbox" id="chk_c1" name="chk1" /><label for="chk_c1"><div><i></i></div>L-글루타민산나트륨(MSG)</label></li>'+
												'<li><input type="checkbox" id="chk_c2" name="chk1" /><label for="chk_c2"><div><i></i></div>합성아질산나트륨</label></li>'+
												'<li><input type="checkbox" id="chk_c3" name="chk1" /><label for="chk_c3"><div><i></i></div>합성착색료</label></li>'+
												'<li><input type="checkbox" id="chk_c4" name="chk1" /><label for="chk_c4"><div><i></i></div>합성보존료</label></li>'+
												'<li><input type="checkbox" id="chk_c5" name="chk1" /><label for="chk_c5"><div><i></i></div>L-소르빈산나트륨</label></li>'+
												'<li><input type="checkbox" id="chk_c6" name="chk1" /><label for="chk_c6"><div><i></i></div>L-글루타민산나트륨(MSG)</label></li>'+
											'</ul>'+
										'</div>'+
									'</div>'+
									'<!-- //상세검색>무첨가 -->'+
								'</div>'+
								'<!-- 상세검색>선택값 -->'+
								'<div class="choicewrap">'+
									'<span class="title">선택한 속성</span>'+
									/*'<span class="choice_value"><a href="#" class="choice_cancel">가공식품 > 라면/컵라면/면식품 > 봉지라면<img src="../images/common/btn_close2.png" alt="선택취소" /></a></span>'+
									'<span class="choice_valueexcept"><a class="choice_cancel">땅콩<img src="../images/common/btn_close2.png" alt="선택취소" /></a></span>'+
									'<span class="choice_valueexcept"><a class="choice_cancel">돼지고기<img src="../images/common/btn_close2.png" alt="선택취소" /></a></span>'+
									'<span class="choice_valueexcept"><a class="choice_cancel">난류(계란)<img src="../images/common/btn_close2.png" alt="선택취소" /></a></span>'+
									'<span class="choice_valueexcept"><a class="choice_cancel">우유(유당)<img src="../images/common/btn_close2.png" alt="선택취소" /></a></span>'+
									'<span class="choice_value"><a class="choice_cancel">LOHAS 인증<img src="../images/common/btn_close2.png" alt="선택취소" /></a></span>'+*/
									'<span class="choice_value"><a class="choice_cancel"></a></span>'+
									'<button class="srh_detail_apply">적용</button>'+
								'</div>'+
							'</div>'+
							'<!-- //detail search -->'),
	open:function(){
		
		this.destroy();
		
		$("#container .prdpage_info1").after(this._jPopUpElement);
		this._jPopUpElement.css("display","block");

		this._onClickEvent();
		this._setSelectTxt();
	},
	_onClickEvent:function(){
		var _this = this;
		
		//상세검색 닫기
		$("button.srh_detail_close").on("click", function(event){
			_this.destroy();
		});
		
		//영양성분 Slider
		$(".range_in").slider({
		  animate: "fast",
		  range: true,
		  change: function( event, ui ) {
			  var _sliderId = event.target.id;
			  var _sliderVal = ui.value;
			  
			  if(ui.handleIndex == 0){			//최소값
				  $("#"+_sliderId+"Min").val(_sliderVal);
			  }else if(ui.handleIndex == 1){	//최대값
				  $("#"+_sliderId+"Max").val(_sliderVal);
			  }
		  }
		});
		
		//대/중/소 class on 제어
		$(".finder_cell._big li a").on("click", function(event){
			event.preventDefault();
			
			_this.bigTxt = $(this).text();
			
			$(".finder_cell._big li a").removeClass("on");
			$(this).addClass("on");
			
			//해당 중분류영역 Show 처리
			var sBigClassNm = $(this).attr("class").split(" ");
			var sBigClassNo = sBigClassNm[0].substr(sBigClassNm[0].length-1, sBigClassNm[0].length);
			
			$("div.finder_cell._mid .finder_list").addClass("hidden");
			$("div.finder_cell._mid .finder_list._mid"+sBigClassNo).removeClass("hidden");
			
			_this._setSelectTxt("big");
			
			$("div.finder_cell._mid .finder_list._mid"+sBigClassNo).children().eq(0).find("a").click();
		});
		$(".finder_cell._mid li a").on("click", function(event){
			event.preventDefault();
			
			_this.middleTxt = $(this).text();
			
			$(".finder_cell._mid li a").removeClass("on");
			$(this).addClass("on");
			
			//해당 소분류영역 Show 처리
			//ul class="finder_list _mid2
			
			_this._setSelectTxt("mid");
		});
		/*$(".finder_cell._small li a").on("click", function(event){
			event.preventDefault();
			
			_this.smallTxt = $(this).text();
			
			$(".finder_cell._small li").find("a").removeClass("on");
			$(this).addClass("on");
			
			_this._setSelectTxt("small");
		});*/
		
		//중분류 hidden 제어
	   /*$(".finder_cell._big li a").on("click", function(event){
			event.preventDefault();
			var mid = $(this).attr('class').substr(0,$(this).attr('class').length-3)
			for(var x=0; x<7; x++)
			{
				var del = ".finder_list._mid" + (x+1);
				$(del).addClass("hidden");
			}
			
			var _mid = '.finder_list.'+ mid;
	        $(_mid).removeClass("hidden");

		});*/
		
		//소분류 hidden 제어
	   $(".finder_cell._mid li a").on("click", function(event){
			event.preventDefault();
			var low = $(this).attr('class').substr(0,$(this).attr('class').length-3)
			
			var _low = '.finder_list.'+ low;
			$(".finder_cell._small li").find("a").addClass("hidden");
			$(_low).removeClass("hidden");

		});
	},
	_setSelectTxt:function(sArea){
		
		this.bigTxt = (sArea == undefined || (sArea == "big" || sArea == "mid" || sArea == "small")) ? $("div.finder_cell._big").find("a.on").text() : "";
		this.middleTxt = (sArea == undefined || (sArea == "mid" || sArea == "small")) ? " > " + $("div.finder_cell._mid").find("a.on").text() : "";
		this.smallTxt = (sArea == undefined || sArea == "small") ? " > " + $("div.finder_cell._small").find("a.on").text() : "";
		
		var _selectTxt = this.bigTxt+this.middleTxt+this.smallTxt;
		
		$("div.choicewrap .choice_value a", this._jPopUpElement).html(_selectTxt+
				'<img src="../images/common/btn_close2.png" alt="선택취소" />').on("click", "img", function(event){
					event.preventDefault();
					$(this).parents("a").html("");
				}
		);
	},
	destroy: function(){
		var _jEl = $("#container");
		
		if(_jEl.find("#srh_detail").length > 0){
			_jEl.find("#srh_detail").remove();
			
		}
	}
}

})(window, window.jQuery);