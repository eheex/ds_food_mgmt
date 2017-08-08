(function(window, $, undefined) {
/**
 *  상세검색 팝업
 *	푸드TFT 
 */
window.$DetailSearchPopup = {
	bigTxt: "",
	middleTxt: "",
	smallTxt: "",
	_choiceDrawData : {},
	_searchDetailData: {},
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
												'<li><a id="100065" href="#" class="_big1">가공식품</a></li>'+
												'<li><a id="100066" href="#" class="_big2">냉장/냉동/반찬/간편식</a></li>'+
												'<li><a id="100067" href="#" class="_big3">건강/친환경식품</a></li>'+
												'<li><a id="100068" href="#" class="_big4">정육/계란류</a></li>'+
												'<li><a id="100069" href="#" class="_big5">쌀/잡곡</a></li>'+
												'<li><a id="100063" href="#" class="_big6">채소</a></li>'+
												'<li><a id="100064" href="#" class="_big7">수산물/해산물/건어물</a></li>'+
											'</ul>'+
										'</div>'+
										'<div class="finder_cell _mid">'+
											'<h4 class="finder_cell_tit">중분류</h4>'+
											'<ul class="finder_list _mid0"></ul>'+
											'<ul class="finder_list _mid1 hidden"><!--가공식품-->'+
												'<li><a id="100079" href="#" class="_mid1-1">라면/컵라면/면식품</a></li>'+
												'<li><a id="100078" href="#" class="_mid1-2">분유/두유/이유식</a></li>'+
												'<li><a id="100077" href="#" class="_mid1-3">우유/요구르트/치즈/아이스크림</a></li>'+
												'<li><a id="100076" href="#" class="_mid1-4">초콜릿/캔디/껌</a></li>'+
												'<li><a id="100075" href="#" class="_mid1-5">과자/시리얼</a></li>'+
												'<li><a id="100074" href="#" class="_mid1-6">커피/녹차/차</a></li>'+
												'<li><a id="100073" href="#" class="_mid1-7">생수/음료/탄산수</a></li>'+
												'<li><a id="100086" href="#" class="_mid1-8">안주류</a></li>'+
												'<li><a id="100085" href="#" class="_mid1-9">견과류</a></li>'+
												'<li><a id="100084" href="#" class="_mid1-10">밀가루/설탕/소금/조미료</a></li>'+
												'<li><a id="100083" href="#" class="_mid1-11">식용유/참기름/파스타/소스</a></li>'+
												'<li><a id="100082" href="#" class="_mid1-12">간장/고추장/장류</a></li>'+
												'<li><a id="100081" href="#" class="_mid1-13">참치캔/통조림류</a></li>'+
												'<li><a id="100080" href="#" class="_mid1-14">즉석밥/카레짜장/즉석식품</a></li>'+
												'<li><a id="100999" href="#" class="_mid1-15">주류</a></li>'+
											'</ul>'+
											'<ul class="finder_list _mid2 hidden"><!--냉장/냉동-->'+
												'<li><a id="100093" href="#">간편가정식</a></li>'+
												'<li><a id="100092" href="#">식빵/잼/베이커리</a></li>'+
												'<li><a id="100091" href="#">떡/특산물음식</a></li>'+
												'<li><a id="100090" href="#">단무지/반찬</a></li>'+
												'<li><a id="100089" href="#">김치</a></li>'+
												'<li><a id="100088" href="#">만두/피자/냉동식품</a></li>'+
												'<li><a id="100087" href="#">햄/어묵/맛살/면류 냉장식품</a></li>'+
											'</ul>'+
											'<ul class="finder_list _mid3 hidden"><!--건강/친환경-->'+
												'<li><a id="100095" href="#">꿀/로얄제리</a></li>'+
												'<li><a id="100094" href="#">홍삼/인삼/건강즙</a></li>'+
												'<li><a id="100099" href="#">친환경가공식품</a></li>'+
												'<li><a id="100098" href="#">한차/건강차재료</a></li>'+
												'<li><a id="100097" href="#">다이어트/헬스보조식품</a></li>'+
												'<li><a id="100096" href="#">건강식품(성분별)</a></li>'+
											'</ul>'+
											'<ul class="finder_list _mid4 hidden"><!--정육/계란류-->'+
												'<li><a id="100100" href="#" class="_mid4-1">알류</a></li>'+
												'<li><a id="101046" href="#" class="_mid4-2">정육</a></li>'+
											'</ul>'+
											'<ul class="finder_list _mid5 hidden"><!--쌀/잡곡-->'+
												'<li><a id="100105" href="#" class="_mid5-1">혼합곡/기능성잡곡</a></li>'+
												'<li><a id="100104" href="#" class="_mid5-2">수수/조/깨/잡곡</a></li>'+
												'<li><a id="100103" href="#" class="_mid5-3">콩/보리</a></li>'+
												'<li><a id="100102" href="#" class="_mid5-4">찹쌀/현미/흑미</a></li>'+
												'<li><a id="100101" href="#" class="_mid5-5">쌀</a></li>'+
											'</ul>'+
											'<ul class="finder_list _mid6 hidden" ><!--채소-->'+
												'<li><a id="100070" href="#" class="_mid6-1">두부/콩나물</a></li>'+
											'</ul>'+
											'<ul class="finder_list _mid7 hidden" ><!--수산/해산-->'+
												'<li><a id="100071" href="#" class="_mid7-1">조미김/생김</a></li>'+
												'<li><a id="100072" href="#" class="_mid7-2">건오징어/어포/육포</a></li>'+
											'</ul>'+
										'</div>'+
										'<div class="finder_cell last _small">'+
											'<h4 class="finder_cell_tit">소분류</h4>'+
											'<ul class="finder_list _small1 hidden"><!--가공-라면-->'+
												'<li><a id="100205" href="#">냉면/메밀</a></li>'+
												'<li><a id="100204" href="#">파스타</a></li>'+
												'<li><a id="100203" href="#">당면</a></li>'+
												'<li><a id="100202" href="#">우동 숙면</a></li>'+
												'<li><a id="100201" href="#">쌀국수/월남쌈</a></li>'+
												'<li><a id="100200" href="#">국수/칼국수/콩국수</a></li>'+
												'<li><a id="100199" href="#">컵라면</a></li>'+
												'<li><a id="100198" href="#">봉지라면</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small2 hidden"><!--가공-분유-->'+
												'<li><a id="100190" href="#">분유이유식</a></li>'+
												'<li><a id="100191" href="#">아기과자</a></li>'+
												'<li><a id="100197" href="#">임산·수유부용 식품</a></li>'+
												'<li><a id="100196" href="#">냉장두유</a></li>'+
												'<li><a id="100195" href="#">선물용두유</a></li>'+
												'<li><a id="100194" href="#">아기두유</a></li>'+
												'<li><a id="100193" href="#">성인두유</a></li>'+
												'<li><a id="100192" href="#">아기음료</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small3 hidden"><!--가공-우유-->'+
												'<li><a id="100189" href="#">곡물우유</a></li>'+
												'<li><a id="100188" href="#">연유</a></li>'+
												'<li><a id="100187" href="#">아이스크림</a></li>'+
												'<li><a id="100186" href="#">버터/마가린/생크림</a></li>'+
												'<li><a id="100185" href="#">치즈</a></li>'+
												'<li><a id="100184" href="#">떠먹는 요구르트</a></li>'+
												'<li><a id="100183" href="#">마시는 요구르트</a></li>'+
												'<li><a id="100182" href="#">멸균우유</a></li>'+
												'<li><a id="100181" href="#">딸기/초코/커피우유</a></li>'+
												'<li><a id="100180" href="#">어린이우유</a></li>'+
												'<li><a id="100179" href="#">고칼슘우유</a></li>'+
												'<li><a id="100178" href="#">저지방/무지방우유</a></li>'+
												'<li><a id="100177" href="#">우유</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small4 hidden"><!--가공-초콜릿-->'+
												'<li><a id="100175" href="#">엿</a></li>'+
												'<li><a id="100174" href="#">수입초콜릿/사탕</a></li>'+
												'<li><a id="100173" href="#">젤리</a></li>'+
												'<li><a id="100172" href="#">껌</a></li>'+
												'<li><a id="100171" href="#">막대/츄잉사탕</a></li>'+
												'<li><a id="100170" href="#">사탕</a></li>'+
												'<li><a id="100169" href="#">초코바/양갱</a></li>'+
												'<li><a id="100168" href="#">초콜릿</a></li>'+
												'<li><a id="100176" href="#">카라멜</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small5 hidden"><!--가공-피자-->'+
												'<li><a id="100159" href="#">상온소세지</a></li>'+
												'<li><a id="100158" href="#">시리얼</a></li>'+
												'<li><a id="100167" href="#">빵류</a></li>'+
												'<li><a id="100166" href="#">수입과자</a></li>'+
												'<li><a id="100165" href="#">한과/전통과자</a></li>'+
												'<li><a id="100164" href="#">맛밤</a></li>'+
												'<li><a id="100163" href="#">파이/카스타드/소프트쿠키</a></li>'+
												'<li><a id="100162" href="#">쿠키/비스킷</a></li>'+
												'<li><a id="100161" href="#">쌀/옥수수과자</a></li>'+
												'<li><a id="100160" href="#">스낵</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small6 hidden"><!--가공-커피-->'+
												'<li><a id="100140" href="#">커피믹스</a></li>'+
												'<li><a id="100141" href="#">헤즐넛,카푸치노향 커피믹스</a></li>'+
												'<li><a id="100142" href="#">블랙믹스(설탕함유)</a></li>'+
												'<li><a id="100143" href="#">블랙믹스(무설탕)</a></li>'+
												'<li><a id="100144" href="#">원두커피</a></li>'+
												'<li><a id="100145" href="#">인스턴트커피</a></li>'+
												'<li><a id="101029" href="#">캡슐커피</a></li>'+
												'<li><a id="100146" href="#">코코아/핫초코</a></li>'+
												'<li><a id="100147" href="#">프림</a></li>'+
												'<li><a id="100148" href="#">아이스커피/아이스티</a></li>'+
												'<li><a id="100149" href="#">녹차/현미녹차</a></li>'+
												'<li><a id="100150" href="#">둥글레차/옥수수차/메밀차</a></li>'+
												'<li><a id="100151" href="#">홍차/허브차/보이차</a></li>'+
												'<li><a id="100152" href="#">주전자용차(알곡/티백)</a></li>'+
												'<li><a id="100153" href="#">율무차/땅콩차/견과차</a></li>'+
												'<li><a id="100154" href="#">유자차/모과차</a></li>'+
												'<li><a id="100155" href="#">한차/생강차/전통차</a></li>'+
												'<li><a id="100156" href="#">기타차류</a></li>'+
												'<li><a id="100157" href="#">다이어트차</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small7 hidden"><!--가공-생수-->'+
												'<li><a id="100127" href="#">토마토/망고/자몽주스</a></li>'+
												'<li><a id="100126" href="#">포도/사과주스</a></li>'+
												'<li><a id="100125" href="#">오렌지/감귤주스</a></li>'+
												'<li><a id="100124" href="#">탄산수</a></li>'+
												'<li><a id="100139" href="#">식혜/수정과/전통음료</a></li>'+
												'<li><a id="100123" href="#">수입생수</a></li>'+
												'<li><a id="100138" href="#">어린이음료</a></li>'+
												'<li><a id="100122" href="#">국내생수</a></li>'+
												'<li><a id="100137" href="#">음료세트</a></li>'+
												'<li><a id="100136" href="#">티음료</a></li>'+
												'<li><a id="100135" href="#">커피음료</a></li>'+
												'<li><a id="100134" href="#">무알콜맥주</a></li>'+
												'<li><a id="100133" href="#">스포츠/이온/비타민/숙취해소</a></li>'+
												'<li><a id="100132" href="#">환타/웰치스/레몬에이드류</a></li>'+
												'<li><a id="100131" href="#">콜라/사이다</a></li>'+
												'<li><a id="100130" href="#">냉장과일주스/쿨피스류</a></li>'+
												'<li><a id="100129" href="#">기타과일주스</a></li>'+
												'<li><a id="100128" href="#">매실/알로에/블루베리주스</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small8 hidden"><!--가공-안주-->'+
												'<li><a id="100253" href="#">기타가공품</a></li>'+
												'<li><a id="100252" href="#">어육가공품</a></li>'+
												'<li><a id="100251" href="#">건조저장육류</a></li>'+
											'</ul>'+
												'<ul class="finder_list _small9 hidden"><!--가공-견과류-->'+
												'<li><a id="100250" href="#">건포도/건과일</a></li>'+
												'<li><a id="100249" href="#">땅콩/아몬드류</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small10 hidden"><!--가공-밀가루-->'+
												'<li><a id="100239" href="#">빵/떡 믹스</a></li>'+
												'<li><a id="100238" href="#">밀가루/요리가루</a></li>'+
												'<li><a id="100248" href="#">기타조미료</a></li>'+
												'<li><a id="100247" href="#">식품첨가물</a></li>'+
												'<li><a id="100246" href="#">인공감미료</a></li>'+
												'<li><a id="100245" href="#">후추/향신료/와사비</a></li>'+
												'<li><a id="100244" href="#">조미료</a></li>'+
												'<li><a id="100243" href="#">참깨/들깨</a></li>'+
												'<li><a id="100242" href="#">고춧가루</a></li>'+
												'<li><a id="100241" href="#">소금</a></li>'+
												'<li><a id="100240" href="#">설탕</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small11 hidden"><!--가공-식용유-->'+
												'<li><a id="100226" href="#">대두유/옥수수유</a></li>'+
												'<li><a id="100237" href="#">기타기름</a></li>'+
												'<li><a id="100236" href="#">드레싱</a></li>'+
												'<li><a id="100235" href="#">양념/소스</a></li>'+
												'<li><a id="100234" href="#">파스타소스</a></li>'+
												'<li><a id="100233" href="#">케찹/마요네즈</a></li>'+
												'<li><a id="100232" href="#">물엿/액젓</a></li>'+
												'<li><a id="100231" href="#">식초/음용식초</a></li>'+
												'<li><a id="100227" href="#">올리브유/포도씨유</a></li>'+
												'<li><a id="100229" href="#">현미유/쌀눈유/해바라기유</a></li>'+
												'<li><a id="100228" href="#">카놀라유</a></li>'+
												'<li><a id="100230" href="#">참기름/들기름</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small12 hidden"><!--가공-간장-->'+
												'<li><a id="100223" href="#">초고추장/볶음고추장</a></li>'+
												'<li><a id="100222" href="#">고추장</a></li>'+
												'<li><a id="100221" href="#">간장</a></li>'+
												'<li><a id="100225" href="#">쌈장</a></li>'+
												'<li><a id="100224" href="#">된장</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small13 hidden"><!--가공-참치캔-->'+
												'<li><a id="100220" href="#">곡류가공품</a></li>'+
												'<li><a id="100219" href="#">팥빙수재료</a></li>'+
												'<li><a id="100218" href="#">농산통조림</a></li>'+
												'<li><a id="100217" href="#">과일통조림</a></li>'+
												'<li><a id="100216" href="#">고등어/꽁치/골뱅이/번데기</a></li>'+
												'<li><a id="100215" href="#">반찬통조림/닭가슴살</a></li>'+
												'<li><a id="100214" href="#">스팸/돈육통조림</a></li>'+
												'<li><a id="100213" href="#">참치캔</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small14 hidden"><!--가공-즉석밥-->'+
												'<li><a id="100207" href="#">카레/즉석카레</a></li>'+
												'<li><a id="100206" href="#">햇반/즉석밥/누룽지</a></li>'+
												'<li><a id="100212" href="#">선식</a></li>'+
												'<li><a id="100211" href="#">즉석국/밥양념</a></li>'+
												'<li><a id="100210" href="#">죽/스프</a></li>'+
												'<li><a id="100209" href="#">덮밥/덮밥소스</a></li>'+
												'<li><a id="100208" href="#">짜장/즉석짜장</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small15 hidden"><!--가공-주류-->'+
												'<li><a id="101000" href="#">소주</a></li>'+
												'<li><a id="101001" href="#">맥주</a></li>'+
												'<li><a id="101002" href="#">막걸리</a></li>'+
												'<li><a id="101045" href="#">기타주류</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small16 hidden"><!--냉장-간편가정-->'+
												'<li><a id="100303" href="#">또띠아</a></li>'+
												'<li><a id="100302" href="#">간식/디저트/샐러드</a></li>'+
												'<li><a id="100301" href="#">보쌈/야식류</a></li>'+
												'<li><a id="100300" href="#">순대/족발</a></li>'+
												'<li><a id="100299" href="#">볶음류</a></li>'+
												'<li><a id="100298" href="#">삼각김밥/죽/면류</a></li>'+
												'<li><a id="100297" href="#">국/탕/찌개</a></li>'+
												'<li><a id="100296" href="#">냉동 밥/스파게티</a></li>'+
												'<li><a id="100304" href="#">찜</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small17 hidden"><!--냉장-식빵잼-->'+
												'<li><a id="100287" href="#">식빵/일반빵</a></li>'+
												'<li><a id="100295" href="#">베이킹도구/재료</a></li>'+
												'<li><a id="100294" href="#">냉동생지/즉석빵</a></li>'+
												'<li><a id="100293" href="#">호두파이/와플/츄러스</a></li>'+
												'<li><a id="100292" href="#">베이글/머핀/도너츠</a></li>'+
												'<li><a id="100291" href="#">롤케익/카스텔라/쿠키</a></li>'+
												'<li><a id="100290" href="#">케익/케익선물세트</a></li>'+
												'<li><a id="100289" href="#">찐빵/호빵</a></li>'+
												'<li><a id="100288" href="#">과일잼</a></li>'+
												'<li><a id="100974" href="#">땅콩버터</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small18 hidden"><!--냉장-떡-->'+
												'<li><a id="100286" href="#">백설기떡</a></li>'+
												'<li><a id="100285" href="#">떡국떡/떡볶이떡</a></li>'+
												'<li><a id="100284" href="#">특산물음식</a></li>'+
												'<li><a id="100283" href="#">떡</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small19 hidden"><!--냉장-단무지-->'+
												'<li><a id="100282" href="#">콩식품</a></li>'+
												'<li><a id="100281" href="#">청국장/찌게양념/소스</a></li>'+
												'<li><a id="100280" href="#">젓갈</a></li>'+
												'<li><a id="100279" href="#">간장/양념게장</a></li>'+
												'<li><a id="100278" href="#">수산반찬</a></li>'+
												'<li><a id="100277" href="#">축산반찬</a></li>'+
												'<li><a id="100276" href="#">농산반찬</a></li>'+
												'<li><a id="100275" href="#">단무지/무쌈/무절임</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small20 hidden"><!--냉장-김치-->'+
												'<li><a id="100271" href="#">양파/파/부추김치/기타</a></li>'+
												'<li><a id="100270" href="#">갓김치/고들빼기</a></li>'+
												'<li><a id="100269" href="#">물김치/백김치/동치미</a></li>'+
												'<li><a id="100268" href="#">깍두기/총각/열무김치</a></li>'+
												'<li><a id="100267" href="#">혼합김치</a></li>'+
												'<li><a id="100266" href="#">일반김치</a></li>'+
												'<li><a id="100274" href="#">절임배추/김치양념</a></li>'+
												'<li><a id="100273" href="#">묵은지</a></li>'+
												'<li><a id="100272" href="#">맛김치/볶음김치</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small21 hidden"><!--냉장-만두-->'+
												'<li><a id="100265" href="#">피자</a></li>'+
												'<li><a id="100264" href="#">만두피</a></li>'+
												'<li><a id="100263" href="#">냉동간식</a></li>'+
												'<li><a id="100262" href="#">냉동반찬</a></li>'+
												'<li><a id="100261" href="#">만두</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small22 hidden"><!--냉장-햄-->'+
												'<li><a id="100255" href="#">소시지/베이컨</a></li>'+
												'<li><a id="100254" href="#">햄/김밥재료</a></li>'+
												'<li><a id="100260" href="#">냉장간식</a></li>'+
												'<li><a id="100259" href="#">냉장면류</a></li>'+
												'<li><a id="100258" href="#">맛살</a></li>'+
												'<li><a id="100257" href="#">유부</a></li>'+
												'<li><a id="100256" href="#">어묵</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small23 hidden"><!--친환경-끌-->'+
												'<li><a id="100316" href="#">국산꿀</a></li>'+
												'<li><a id="100317" href="#">수입꿀</a></li>'+
												'<li><a id="100318" href="#">꿀가공품</a></li>'+
												'<li><a id="100319" href="#">로얄제리/프로폴리스</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small24 hidden"><!--친환경-홍삼-->'+
												'<li><a id="100315" href="#">인삼차</a></li>'+
												'<li><a id="100314" href="#">인삼</a></li>'+
												'<li><a id="100313" href="#">건강즙/과일즙</a></li>'+
												'<li><a id="100312" href="#">산삼배양근</a></li>'+
												'<li><a id="100311" href="#">어린이홍삼</a></li>'+
												'<li><a id="100310" href="#">홍삼선물세트</a></li>'+
												'<li><a id="100309" href="#">홍인삼음료/홍삼차/사탕</a></li>'+
												'<li><a id="100308" href="#">홍삼절편/정과/양갱</a></li>'+
												'<li><a id="100307" href="#">홍삼분말/캡슐/환</a></li>'+
												'<li><a id="100306" href="#">홍삼액</a></li>'+
												'<li><a id="100305" href="#">홍삼뿌리군/농축액</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small25 hidden"><!--친환경-친환경가공-->'+
												'<li><a id="100337" href="#">통조림/쨈</a></li>'+
												'<li><a id="100338" href="#">커피/차</a></li>'+
												'<li><a id="100339" href="#">과자/캔디</a></li>'+
												'<li><a id="100340" href="#">면류/시리얼/즉석식품</a></li>'+
												'<li><a id="100341" href="#">우유/요구르트/치즈/유가공품</a></li>'+
												'<li><a id="100342" href="#">음료/건강식품</a></li>'+
												'<li><a id="100343" href="#">분말류/장류/유지류/소스류</a></li>'+
												'<li><a id="100344" href="#">친환경 가공 선물세트</a></li>'+
												'<li><a id="100336" href="#">냉장냉동</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small26 hidden"><!--친환경-한차-->'+
												'<li><a id="100334" href="#">한차</a></li>'+
												'<li><a id="100335" href="#">건강차재료</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small27 hidden"><!--친환경-다이어트-->'+
												'<li><a id="100332" href="#">다이어트보조식품</a></li>'+
												'<li><a id="100333" href="#">헬스보충식</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small28 hidden"><!--친환경-건강-->'+
												'<li><a id="100320" href="#">종합 비타민</a></li>'+
												'<li><a id="101039" href="#">비오틴</a></li>'+
												'<li><a id="101003" href="#">비타민 A</a></li>'+
												'<li><a id="101004" href="#">비타민 B</a></li>'+
												'<li><a id="101005" href="#">비타민 C</a></li>'+
												'<li><a id="101035" href="#">비타민 D</a></li>'+
												'<li><a id="101034" href="#">비타민 E</a></li>'+
												'<li><a id="101040" href="#">빌베리추출물</a></li>'+
												'<li><a id="100321" href="#">오메가3</a></li>'+
												'<li><a id="101006" href="#">감마리놀렌산</a></li>'+
												'<li><a id="100322" href="#">철분</a></li>'+
												'<li><a id="101007" href="#">엽산</a></li>'+
												'<li><a id="101008" href="#">칼슘</a></li>'+
												'<li><a id="101009" href="#">아연</a></li>'+
												'<li><a id="101010" href="#">초유</a></li>'+
												'<li><a id="101011" href="#">마그네슘</a></li>'+
												'<li><a id="100323" href="#">쏘팔메토</a></li>'+
												'<li><a id="101012" href="#">글루코사민</a></li>'+
												'<li><a id="100324" href="#">루테인</a></li>'+
												'<li><a id="100325" href="#">콜라겐</a></li>'+
												'<li><a id="101013" href="#">히알루론산</a></li>'+
												'<li><a id="100326" href="#">코엔자임큐텐</a></li>'+
												'<li><a id="101014" href="#">키토산</a></li>'+
												'<li><a id="101015" href="#">스쿠알렌</a></li>'+
												'<li><a id="100327" href="#">유산균</a></li>'+
												'<li><a id="101016" href="#">알로에</a></li>'+
												'<li><a id="101017" href="#">식이섬유</a></li>'+
												'<li><a id="100328" href="#">클로렐라</a></li>'+
												'<li><a id="101018" href="#">스피루리나</a></li>'+
												'<li><a id="100329" href="#">기타 건강식품</a></li>'+
												'<li><a id="100330" href="#">일반의약품</a></li>'+
												'<li><a id="100331" href="#">어린이건강</a></li>'+
												'<li><a id="101019" href="#">밀크씨슬</a></li>'+
												'<li><a id="101020" href="#">녹차추출물</a></li>'+
												'<li><a id="101021" href="#">옥타코사놀</a></li>'+
												'<li><a id="101022" href="#">엠에스엠</a></li>'+
												'<li><a id="101023" href="#">공액리놀렌산</a></li>'+
												'<li><a id="101024" href="#">대두이소플라본</a></li>'+
												'<li><a id="101025" href="#">매실추출물</a></li>'+
												'<li><a id="101026" href="#">백수오</a></li>'+
												'<li><a id="101027" href="#">레시틴</a></li>'+
												'<li><a id="101028" href="#">가르시니아캄보지아추출물</a></li>'+
												'<li><a id="101031" href="#">회화나무 열매 추출물</a></li>'+
												'<li><a id="101032" href="#">홍경전 추출물</a></li>'+
												'<li><a id="101033" href="#">난소화성말토덱스트린</a></li>'+
												'<li><a id="101036" href="#">은행잎추출물</a></li>'+
												'<li><a id="101037" href="#">셀레늄</a></li>'+
												'<li><a id="101038" href="#">베타카로틴</a></li>'+
												'<li><a id="101041" href="#">피크노제놀-프랑스해안송껍질추출물</a></li>'+
												'<li><a id="101043" href="#">잔티젠</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small29 hidden"><!--정육-알류-->'+
												'<li><a id="100345" href="#">메추리알</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small30 hidden"><!--정육-계육-->'+
												'<li><a id="101047" href="#">계육</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small31 hidden"><!--쌀-혼합곡-->'+
												'<li><a id="100360" href="#">혼합곡</a></li>'+
												'<li><a id="100361" href="#">기능성잡곡</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small32 hidden"><!--쌀-수수-->'+
												'<li><a id="100354" href="#">수수</a></li>'+
												'<li><a id="100355" href="#">조류</a></li>'+
												'<li><a id="100356" href="#">기장</a></li>'+
												'<li><a id="100357" href="#">깨</a></li>'+
												'<li><a id="100358" href="#">율무/녹두</a></li>'+
												'<li><a id="100359" href="#">기타잡곡</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small33 hidden"><!--쌀-콩보리-->'+
												'<li><a id="100353" href="#">보리</a></li>'+
												'<li><a id="100350" href="#">콩</a></li>'+
												'<li><a id="100351" href="#">팥</a></li>'+
												'<li><a id="100352" href="#">서리태</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small34 hidden"><!--쌀-찹쌀-->'+
												'<li><a id="100347" href="#">찹쌀</a></li>'+
												'<li><a id="100348" href="#">현미</a></li>'+
												'<li><a id="100349" href="#">흑미</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small35 hidden"><!--쌀-쌀-->'+
												'<li><a id="100346" href="#">쌀</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small36 hidden"><!--채소-두부-->'+
												'<li><a id="100111" href="#">찌개/부침겸용두부</a></li>'+
												'<li><a id="100110" href="#">묵</a></li>'+
												'<li><a id="100109" href="#">순두부/연두부</a></li>'+
												'<li><a id="100108" href="#">혼합/기능성두부</a></li>'+
												'<li><a id="100107" href="#">부침용두부</a></li>'+
												'<li><a id="100106" href="#">찌개용두부</a></li>'+
												'<li><a id="100113" href="#">콩나물</a></li>'+
												'<li><a id="100112" href="#">생식용</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small37 hidden"><!--수산-조미김-->'+
												'<li><a id="100119" href="#">황태포</a></li>'+
												'<li><a id="100120" href="#">미역</a></li>'+
												'<li><a id="100118" href="#">다시마</a></li>'+
												'<li><a id="100117" href="#">감자반</a></li>'+
												'<li><a id="100116" href="#">도시락/김밥용김</a></li>'+
												'<li><a id="100115" href="#">생김/파래김</a></li>'+
												'<li><a id="100114" href="#">구운김/조미김</a></li>'+
											'</ul>'+
											'<ul class="finder_list _small38 hidden"><!--수산-건오징어-->'+
												'<li><a id="100121" href="#">황태/북어/오징어</a></li>'+
											'</ul>'+
										'</div>'+
									'</div>'+
									'<!-- //상세검색>카테고리 -->'+
									'<!-- 상세검색>영양성분 -->'+
									'<div class="finder_col _nutrition">'+
										'<h3 class="finder_tit _nutrition"><strong>영양성분</strong></h3>'+
										'<ul class="finder_range_list">'+
											'<li id="100000005">'+
											  '<span class="rang_tit">열량</span>'+
											  '<div id="CNAMT1" class="range_in"></div>'+
											  '<input id="CNAMT1Min" type="text" title="열량검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT1Max" type="text" title="열량검색 최대값" class="rangenum" placeholder="0" />kcal'+
											'</li>'+
											'<li id="100000006">'+
											  '<span class="rang_tit">탄수화물</span>'+
											  '<div id="CNAMT2" class="range_in"></div>'+
											  '<input id="CNAMT2Min" type="text" title="탄수화물검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT2Max" type="text" title="탄수화물검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000007">'+
											  '<span class="rang_tit">당류</span>'+
											  '<div id="CNAMT3" class="range_in"></div>'+
											  '<input id="CNAMT3Min" type="text" title="당류검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT3Max" type="text" title="당류검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000008">'+
											  '<span class="rang_tit">단백질</span>'+
											  '<div id="CNAMT4" class="range_in"></div>'+
											  '<input id="CNAMT4Min" type="text" title="단백질검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT4Max" type="text" title="단백질검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000009">'+
											  '<span class="rang_tit">지방</span>'+
											  '<div id="CNAMT5" class="range_in"></div>'+
											  '<input id="CNAMT5Min" type="text" title="지방검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT5Max" type="text" title="지방검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000010">'+
											  '<span class="rang_tit">콜레스테롤</span>'+
											  '<div id="CNAMT6" class="range_in"></div>'+
											  '<input id="CNAMT6Min" type="text" title="콜레스테롤검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT6Max" type="text" title="콜레스테롤검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000011">'+
											  '<span class="rang_tit">나트륨</span>'+
											  '<div id="CNAMT7" class="range_in"></div>'+
											  '<input id="CNAMT7Min" type="text" title="나트륨검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT7Max" type="text" title="나트륨검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000012">'+
											  '<span class="rang_tit">포화지방</span>'+
											  '<div id="CNAMT8" class="range_in"></div>'+
											  '<input id="CNAMT8Min" type="text" title="포화지방검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT8Max" type="text" title="포화지방검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000013">'+
											  '<span class="rang_tit">식이섬유</span>'+
											  '<div id="CNAMT9" class="range_in"></div>'+
											  '<input id="CNAMT9Min" type="text" title="식이섬유검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT9Max" type="text" title="식이섬유검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000016">'+
											  '<span class="rang_tit">트랜스지방</span>'+
											  '<div id="CNAMT10" class="range_in"></div>'+
											  '<input id="CNAMT10Min" type="text" title="트랜스지방검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT10Max" type="text" title="트랜스지방검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000043">'+
											  '<span class="rang_tit">칼슘</span>'+
											  '<div id="CNAMT11" class="range_in"></div>'+
											  '<input id="CNAMT11Min" type="text" title="칼슘검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT11Max" type="text" title="칼슘검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000045">'+
											  '<span class="rang_tit">철</span>'+
											  '<div id="CNAMT12" class="range_in"></div>'+
											  '<input id="CNAMT12Min" type="text" title="철검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT12Max" type="text" title="철검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000047">'+
											  '<span class="rang_tit">마그네슘</span>'+
											  '<div id="CNAMT13" class="range_in"></div>'+
											  '<input id="CNAMT13Min" type="text" title="마그네슘검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT13Max" type="text" title="마그네슘검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000048">'+
											  '<span class="rang_tit">망간</span>'+
											  '<div id="CNAMT14" class="range_in"></div>'+
											  '<input id="CNAMT14Min" type="text" title="망간검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT14Max" type="text" title="망간검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000049">'+
											  '<span class="rang_tit">아연</span>'+
											  '<div id="CNAMT15" class="range_in"></div>'+
											  '<input id="CNAMT15Min" type="text" title="아연검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT15Max" type="text" title="아연검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000056">'+
											  '<span class="rang_tit">철분</span>'+
											  '<div id="CNAMT16" class="range_in"></div>'+
											  '<input id="CNAMT16Min" type="text" title="철분검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT16Max" type="text" title="철분검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000066">'+
											  '<span class="rang_tit">비타민A</span>'+
											  '<div id="CNAMT17" class="range_in"></div>'+
											  '<input id="CNAMT17Min" type="text" title="비타민A검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT17Max" type="text" title="비타민A검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000067">'+
											  '<span class="rang_tit">비타민B1</span>'+
											  '<div id="CNAMT18" class="range_in"></div>'+
											  '<input id="CNAMT18Min" type="text" title="비타민B1검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT18Max" type="text" title="비타민B1검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000068">'+
											  '<span class="rang_tit">비타민B2</span>'+
											  '<div id="CNAMT19" class="range_in"></div>'+
											  '<input id="CNAMT19Min" type="text" title="비타민B2검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT19Max" type="text" title="비타민B2검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000069">'+
											  '<span class="rang_tit">비타민C</span>'+
											  '<div id="CNAMT20" class="range_in"></div>'+
											  '<input id="CNAMT20Min" type="text" title="비타민C검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT20Max" type="text" title="비타민C검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000070">'+
											  '<span class="rang_tit">나이아신</span>'+
											  '<div id="CNAMT21" class="range_in"></div>'+
											  '<input id="CNAMT21Min" type="text" title="나이아신검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT21Max" type="text" title="나이아신검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000071">'+
											  '<span class="rang_tit">비타민B6</span>'+
											  '<div id="CNAMT22" class="range_in"></div>'+
											  '<input id="CNAMT22Min" type="text" title="비타민B6검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT22Max" type="text" title="비타민B6검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000072">'+
											  '<span class="rang_tit">판토텐산</span>'+
											  '<div id="CNAMT23" class="range_in"></div>'+
											  '<input id="CNAMT23Min" type="text" title="판토텐산검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT23Max" type="text" title="판토텐산검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000073">'+
											  '<span class="rang_tit">비타민B12</span>'+
											  '<div id="CNAMT24" class="range_in"></div>'+
											  '<input id="CNAMT24Min" type="text" title="비타민B12검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT24Max" type="text" title="비타민B12검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000074">'+
											  '<span class="rang_tit">엽산</span>'+
											  '<div id="CNAMT25" class="range_in"></div>'+
											  '<input id="CNAMT25Min" type="text" title="엽산검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT25Max" type="text" title="엽산검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000075">'+
											  '<span class="rang_tit">비타민D</span>'+
											  '<div id="CNAMT26" class="range_in"></div>'+
											  '<input id="CNAMT26Min" type="text" title="비타민D검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT26Max" type="text" title="비타민D검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000076">'+
											  '<span class="rang_tit">비타민E</span>'+
											  '<div id="CNAMT27" class="range_in"></div>'+
											  '<input id="CNAMT27Min" type="text" title="비타민E검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT27Max" type="text" title="비타민E검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000078">'+
											  '<span class="rang_tit">비타민D₃</span>'+
											  '<div id="CNAMT28" class="range_in"></div>'+
											  '<input id="CNAMT28Min" type="text" title="비타민D₃검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT28Max" type="text" title="비타민D₃검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000080">'+
											  '<span class="rang_tit">비오틴</span>'+
											  '<div id="CNAMT29" class="range_in"></div>'+
											  '<input id="CNAMT29Min" type="text" title="비오틴검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT29Max" type="text" title="비오틴검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
											'<li id="100000239">'+
											  '<span class="rang_tit">카페인</span>'+
											  '<div id="CNAMT30" class="range_in"></div>'+
											  '<input id="CNAMT30Min" type="text" title="카페인검색 최소값" class="rangenum" placeholder="0" />~<input id="CNAMT30Max" type="text" title="카페인검색 최대값" class="rangenum" placeholder="0" />g'+
											'</li>'+
										'</ul>'+
									'</div>'+
									'<!-- //상세검색>영양성분 -->'+
									'<div id="choiceLoadingBar" class="hidden" style="position:absolute;width:998px;height:130px;top:297px;z-index:999;background:#ccc url(../images/common/bx_loader.gif) no-repeat center center;;opacity:0.6;filter:Alpha(Opacity=60);"></div>'+
									'<!-- 상세검색>제외하는 알레르기 성분 -->'+
									'<div class="finder_col _allergy">'+
										'<h3 class="finder_tit _allergy"><strong>제외하는 알레르기 성분</strong></h3>'+
										'<div class="finder_cell">'+
											'<ul class="finder_list">'+
											'</ul>'+
										'</div>'+
									'</div>'+
									'<!-- //상세검색>제외하는 알레르기 성분 -->'+
									'<!-- 상세검색>인증 -->'+
									'<div class="finder_col _certify">'+
										'<h3 class="finder_tit _certify"><strong>인증</strong></h3>'+
										'<div class="finder_cell">'+
											'<ul class="finder_list">'+
											'</ul>'+
										'</div>'+
									'</div>'+
									'<!-- //상세검색>인증 -->'+
									'<!-- 상세검색>무첨가 -->'+
									'<div class="finder_col _noadd">'+
										'<h3 class="finder_tit _noadd"><strong>무첨가성분</strong></h3>'+
										'<div class="finder_cell">'+
											'<ul class="finder_list">'+
											'</ul>'+
										'</div>'+
									'</div>'+
									'<!-- //상세검색>무첨가 -->'+
								'</div>'+
								'<!-- 상세검색>선택값 -->'+
								'<div class="choicewrap">'+
									'<span class="title">선택한 카테고리</span>'+
									'<span class="choice_value"><a class="choice_cancel"></a></span>'+
									'<a id="btnReset" style="position:absolute;right:95px;cursor:pointer">초기화</a>'+
									'<button id="btnDetailSearch" class="srh_detail_apply">적용</button>'+
								'</div>'+
							'</div>'+
							'<!-- //detail search -->'),
	open:function(){
		this.destroy();
		
		$("#container .prdpage_info1").after(this._jPopUpElement);
		this._jPopUpElement.css("display","block");

		this._getData();
		this._onClickEvent();
	},
	_getData:function(){
		var _this = this;
		
		//상세검색 팝업 최초 오픈시에만 Ajax를 통해 Data를 가져온다.
		if($.isEmptyObject(this._choiceDrawData)){
			//알레르기, 인증, 무첨가 Data를 가져온다.
			$("#choiceLoadingBar").removeClass("hidden");
			$.ajax({
				url: "/portal/searchDetail/popupData",
				contentType: "application/json; charset=UTF-8",
				dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
				async: true	//동기화처리
			}).success(function(data){
				_this._choiceDrawData = data;
				_this._drawChoiceArea(data);
			}).error(function(){
				alert("상세검색 Data 가져오기 ERROR");
				$("#choiceLoadingBar").addClass("hidden");
			}).done(function(data) {
				$("#choiceLoadingBar").addClass("hidden");
			});
		}else{
			this._drawChoiceArea(this._choiceDrawData);
		}
	},
	_drawChoiceArea:function(choiceData){
		var _this = this;
		
		$.each(choiceData, function(key){
			$.each(choiceData[key], function(){
				
				var _code = this.cd;
				var _codeNm = this.cdNm;
				
				if(key == "allergyCds"){
					$('<li><input type="checkbox" id="'+_code+'" name="'+_code+'" /><label title="'+_codeNm+'" for="'+_code+'"><div><i></i></div>'+_codeNm+'</label></li>').data("cData",this).appendTo($("div._allergy ul"));
				}else if(key == "notAddCds"){
					$('<li><input type="checkbox" id="'+_code+'" name="'+_code+'" /><label title="'+_codeNm+'" for="'+_code+'"><div><i></i></div>'+_codeNm+'</label></li>').data("cData",this).appendTo($("div._noadd ul"));
				}else if(key == "certifyCds"){
					$('<li><input type="checkbox" id="'+_code+'" name="'+_code+'" /><label title="'+_codeNm+'" for="'+_code+'"><div><i></i></div>'+_codeNm+'</label></li>').data("cData",this).appendTo($("div._certify ul"));
				}
			});
		});
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
		
		//영양성분 최대값 셋팅
		var _maxVal = [5600, 1500, 1500, 2300, 5600, 1100, 40000, 500, 13000, 400, 1400, 50, 1500, 1500, 50, 100, 6000, 200, 300, 3000, 1600, 160, 700, 500, 1700, 150, 300, 50, 5000, 1200];
		for(var i=0; i<$(".range_in").slider().length; i++){
			$("#CNAMT"+(i+1)).slider("option", "max", _maxVal[i]);
		}
		
		//영양성분 input 변경 시 Slider 변경처리
		$("div._nutrition input.rangenum").on("change", function(event){
			var _rangeId = $(this).attr("id");	//nutritive2Min
			var _rangeName = _rangeId.substr(_rangeId.length-3, _rangeId.length);	//Min
			var _sliderId = _rangeId.replace(_rangeName, "");	//nutritive2
			var _nIndex = (_rangeName == "Min") ? 0 : 1;
			
			if(_nIndex == 0){
				
			}
			
			$("#"+_sliderId).slider("values",_nIndex,$(this).val());
		});
		
		//대/중/소 class on 제어
		$(".finder_cell._big li a").on("click", function(event){
			event.preventDefault();
			
			_this.bigTxt = $(this).text();
			
			$(".finder_cell._big li a, .finder_cell._mid li a, .finder_cell._small li a").removeClass("on");
			$(this).addClass("on");
			
			//해당 중분류영역 Show 처리
			var sBigClassNm = $(this).attr("class").split(" ");
			var sBigClassNo = sBigClassNm[0].substr(sBigClassNm[0].length-1, sBigClassNm[0].length);
			
			$("div.finder_cell._mid .finder_list, div.finder_cell._small .finder_list").addClass("hidden");
			$("div.finder_cell._mid .finder_list._mid"+sBigClassNo).removeClass("hidden");
			
			_this._setSelectTxt("big");
		});
		$(".finder_cell._mid li a").on("click", function(event){
			event.preventDefault();
			
			_this.middleTxt = $(this).text();
			
			$(".finder_cell._mid li a, .finder_cell._small li a").removeClass("on");
			$(this).addClass("on");
			
			//해당 소분류영역 Show 처리			
			var sMidClassNm = $(this).parents("ul").attr("class").split(" ");
			var sMidClassNo = sMidClassNm[1].substr(4, sMidClassNm[1].length);
			var nFindSmallNo = $(".finder_cell._mid li").index($(this).parent("li")) + 1;
			
			$("div.finder_cell._small .finder_list").addClass("hidden");
			$("div.finder_cell._small .finder_list._small"+nFindSmallNo).removeClass("hidden");
			
			_this._setSelectTxt("mid");
		});
		$(".finder_cell._small li a").on("click", function(event){
			event.preventDefault();
			
			_this.smallTxt = $(this).text();
			
			$(".finder_cell._small li a").removeClass("on");
			$(this).addClass("on");
			
			_this._setSelectTxt("small");
		});
		
		//초기화 버튼 처리
		$("#btnReset").on("click", function(event){
			event.preventDefault();
			
			//카테고리
			$(".finder_cell._big li a, .finder_cell._mid li a, .finder_cell._small li a").removeClass("on");
			$(".finder_cell._mid .finder_list, .finder_cell._small .finder_list").addClass("hidden");
			$(".finder_cell._mid .finder_list._mid0").removeClass("hidden");
			
			//영양성분
			$("div._nutrition input.rangenum").val("");
			$(".range_in").slider("option", "values", [0,0]);
			
			//알레르기, 인증, 무첨가성분 체크박스 해제
			$("div._allergy input, div._certify input, div._noadd input").each(function(){
				$(this).prop("checked", false);
			});
			
			//선택한 카테고리 초기화
			$("div.choicewrap .choice_value a", this._jPopUpElement).html("")
		});
		
		//적용 버튼 처리
		$("#btnDetailSearch").on("click", function(event){
			event.preventDefault();
			
			_this._setSearchData();
			
			if(_this._validation()){
				_this.showLoading();
				$.ajax({
					url: "/portal/searchDetail/search",
					contentType: "application/json; charset=UTF-8",
					data : JSON.stringify(_this._searchDetailData),
					type : "POST",
					dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
					async: true	//동기화처리
				}).success(function(data){
					if(data != undefined && data.data.length > 0){
						if($EatPrdList._jFoodTable != null){
							$EatPrdList._jFoodTable.clear();
							$EatPrdList._jFoodTable.rows.add(data.data);
							$EatPrdList._jFoodTable.draw();
						}else{
							$EatPrdList.drawCallBack(data);
						}
					}else{
						alert("상세검색 결과가 없습니다.");
					}
				}).error(function(){
					alert("상세검색 중 오류가 발생하였습니다.");
					_this.hideLoading();
				}).done(function() {
					_this.hideLoading();
				});
			}
		});
	},
	_setSelectTxt:function(sArea){
		
		// 대,중,소 선택한 속성 처리
		this.bigTxt = (sArea == undefined || (sArea == "big" || sArea == "mid" || sArea == "small")) ? $("div.finder_cell._big").find("a.on").text() : "";
		this.middleTxt = (sArea == undefined || (sArea == "mid" || sArea == "small")) ? " > " + $("div.finder_cell._mid").find("a.on").text() : "";
		this.smallTxt = (sArea == undefined || sArea == "small") ? " > " + $("div.finder_cell._small").find("a.on").text() : "";
		
		var _selectTxt = this.bigTxt+this.middleTxt+this.smallTxt;
		
		$("div.choicewrap .choice_value a", this._jPopUpElement).html(_selectTxt);
	},
	_setSearchData:function(){
		var _this = this;
		
		this._searchDetailData.query = {"categoryId":"",
										"allergys":"",
										"certifys":"",
										"noAdds":"",
										"isNutriYn": "N"
									    };
		
		//카테고리 Data Set
		var _categorySels = $("div.finder_cell._big, div.finder_cell._mid, div.finder_cell._small").find("ul li a.on");
		var _categorySelId= (_categorySels.length > 0) ? $(_categorySels[_categorySels.length - 1]).attr("id") : "";
		if(_categorySels.length > 0){
			this._searchDetailData.query.categoryId = _categorySelId;
		}
		
		//영양성분 Data Set
		$("div._nutrition input.rangenum").each(function(){
			if($(this).val() > 0){
				var _rangeId = $(this).attr("id");	//CNAMT5Max
				var _rangeName = _rangeId.substr(_rangeId.length-3, _rangeId.length);	//Max

				var _nutriMin = _rangeId.substr(0, _rangeId.length-3)+"Min";
				var _nutriMax = _rangeId.substr(0, _rangeId.length-3)+"Max";
				
				if(_rangeName == "Max"){
					var _oNutri = {};
					_oNutri[_nutriMin] = ($("#"+_nutriMin).val() == "") ? 0 : $("#"+_nutriMin).val();
					_oNutri[_nutriMax] = $("#"+_nutriMax).val();
					
					_this._searchDetailData.query.isNutriYn = "Y";
					_this._searchDetailData.query[_nutriMin] = ($("#"+_nutriMin).val() == "") ? 0 : $("#"+_nutriMin).val();
					_this._searchDetailData.query[_nutriMax] = $("#"+_nutriMax).val();
				}
			}
		});
		
		//제외하는 알레르기 성분 Check Data Set
		var _allergyChkData = [];
		$("div._allergy ul li input").each(function(idx){
			if($(this).prop("checked")){
				_allergyChkData.push($(this).attr("id"));
			}
		});
		if(_allergyChkData.length > 0){
			this._searchDetailData.query.allergys = _allergyChkData.toString();
		}
		
		//인증 Check Data Set
		var _certifyChkData = [];
		$("div._certify ul li input").each(function(){
			if($(this).prop("checked")){
				_certifyChkData.push($(this).attr("id"));
			}
		});
		if(_certifyChkData.length > 0){
			this._searchDetailData.query.certifys = _certifyChkData.toString();
		}
		
		//무첨가성분 Check Data Set
		var _noAddChkData = [];
		$("div._noadd ul li input").each(function(){
			if($(this).prop("checked")){
				_noAddChkData.push($(this).attr("id"));
			}
		});
		if(_noAddChkData.length > 0){
			this._searchDetailData.query.noAdds = _noAddChkData.toString();
		}
	},
	_validation:function(){
		var _this = this;
		var _rtnValue = true;
		
		if($.isEmptyObject(this._searchDetailData)){
			alert("상세검색 조건을 하나이상 선택해주세요.");
			_rtnValue = false;
		}
		
		return _rtnValue;
	},
	showLoading:function(){		
		$("body").css("overflow", "hidden").find("#loadingArea").removeClass("hidden");	
	},
	hideLoading:function(){
		$("body").css("overflow", "auto").find("#loadingArea").addClass("hidden");	
	},
	destroy: function(){
		var _jEl = $("#container");
		
		if(_jEl.find("#srh_detail").length > 0){
			$("#btnReset").click();	//상세검색 닫힐 때 초기화처리
			_jEl.find("#srh_detail").remove();
		}
	}
}

})(window, window.jQuery);