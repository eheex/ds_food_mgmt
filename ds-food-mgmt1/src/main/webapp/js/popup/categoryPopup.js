(function(window, $, undefined) {

/**
 *  전체 카테고리 팝업
 *	푸드TFT 
 */
window.$CategoryPopup = {
	_categoryElement: $('<li>'+
							'<a title="가공식품">가공식품</a>'+
							'<ul class="category_sub">'+
								'<li>'+   
									'<a id="100079" href="#" title="라면/컵라면/면식품">라면/컵라면/면식품</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100205" href="#" title="냉면/메밀">냉면/메밀</a></li>'+
										'<li><a id="100204" href="#" title="파스타">파스타</a></li>'+
										'<li><a id="100203" href="#" title="당면">당면</a></li>'+
										'<li><a id="100202" href="#" title="우동 숙면">우동 숙면</a></li>'+
										'<li><a id="100201" href="#" title="쌀국수/월남쌈">쌀국수/월남쌈</a></li>'+
										'<li><a id="100200" href="#" title="국수/칼국수/콩국수">국수/칼국수/콩국수</a></li>'+
										'<li><a id="100199" href="#" title="컵라면">컵라면</a></li>'+
										'<li><a id="100198" href="#" title="봉지라면">봉지라면</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+   
									'<a id="100078" href="#" title="분유/두유/이유식">분유/두유/이유식</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100190" href="#" title="분유이유식">분유이유식</a></li>'+
										'<li><a id="100191" href="#" title="아기과자">아기과자</a></li>'+
										'<li><a id="100197" href="#" title="임신,수유부용 식품">임신,수유부용 식품</a></li>'+
										'<li><a id="100196" href="#" title="냉장두유">냉장두유</a></li>'+
										'<li><a id="100195" href="#" title="선물용두유">선물용두유</a></li>'+
										'<li><a id="100194" href="#" title="아기두유">아기두유</a></li>'+
										'<li><a id="100193" href="#" title="성인두유">성인두유</a></li>'+
										'<li><a id="100192" href="#" title="아기음료">아기음료</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100077" href="#" title="우유/요구르트/치즈/아이스크림">우유/요구르트/치즈/아이스크림</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100189" href="#" title="곡물우유">곡물우유</a></li>'+
										'<li><a id="100188" href="#" title="연유">연유</a></li>'+
										'<li><a id="100187" href="#" title="아이스크림">아이스크림</a></li>'+
										'<li><a id="100186" href="#" title="버터/마가린/생크림">버터/마가린/생크림</a></li>'+
										'<li><a id="100185" href="#" title="치즈">치즈</a></li>'+
										'<li><a id="100184" href="#" title="떠먹는 요구르트">떠먹는 요구르트</a></li>'+
										'<li><a id="100183" href="#" title="마시는 요구르트">마시는 요구르트</a></li>'+
										'<li><a id="100182" href="#" title="멸균우유">멸균우유</a></li>'+
										'<li><a id="100181" href="#" title="딸기/초코/커피우유">딸기/초코/커피우유</a></li>'+
										'<li><a id="100180" href="#" title="어린이우유">어린이우유</a></li>'+
										'<li><a id="100179" href="#" title="고칼슘우유">고칼슘우유</a></li>'+
										'<li><a id="100178" href="#" title="저지방/무지방우유">저지방/무지방우유</a></li>'+
										'<li><a id="100177" href="#" title="우유">우유</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100076" href="#" title="초콜릿/캔디/껌">초콜릿/캔디/껌</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100175" href="#" title="엿">엿</a></li>'+
										'<li><a id="100174" href="#" title="수입 초콜릿/사탕">수입 초콜릿/사탕</a></li>'+
										'<li><a id="100173" href="#" title="젤리">젤리</a></li>'+
										'<li><a id="100172" href="#" title="껌">껌</a></li>'+
										'<li><a id="100171" href="#" title="막대/츄잉사탕">막대/츄잉사탕</a></li>'+
										'<li><a id="100170" href="#" title="사탕">사탕</a></li>'+
										'<li><a id="100169" href="#" title="초코바/양갱">초코바/양갱</a></li>'+
										'<li><a id="100168" href="#" title="초콜릿">초콜릿</a></li>'+
										'<li><a id="100176" href="#" title="카라멜">카라멜</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100075" href="#" title="과자/시리얼">과자/시리얼</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100159" href="#" title="상온소세지">상온소세지</a></li>'+
										'<li><a id="100158" href="#" title="시리얼">시리얼</a></li>'+
										'<li><a id="100167" href="#" title="빵류">빵류</a></li>'+
										'<li><a id="100166" href="#" title="수입과자">수입과자</a></li>'+
										'<li><a id="100165" href="#" title="한과/전통과자">한과/전통과자</a></li>'+
										'<li><a id="100164" href="#" title="맛밤">맛밤</a></li>'+
										'<li><a id="100163" href="#" title="파이/카스타드/소프트쿠키">파이/카스타드/소프트쿠키</a></li>'+
										'<li><a id="100162" href="#" title="쿠키/비스킷">쿠키/비스킷</a></li>'+
										'<li><a id="100161" href="#" title="쌀/옥수수과자">쌀/옥수수과자</a></li>'+
										'<li><a id="100160" href="#" title="스낵">스낵</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100074" href="#" title="커피/녹차/차">커피/녹차/차</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100140" href="#" title="커피믹스">커피믹스</a></li>'+
										'<li><a id="100141" href="#" title="헤즐넛/카푸치노향 커피믹스">헤즐넛/카푸치노향 커피믹스</a></li>'+
										'<li><a id="100142" href="#" title="블랙믹스(설탕함유)">블랙믹스(설탕함유)</a></li>'+
										'<li><a id="100143" href="#" title="블랙믹스(무설탕)">블랙믹스(무설탕)</a></li>'+
										'<li><a id="100144" href="#" title="원두커피">원두커피</a></li>'+
										'<li><a id="100145" href="#" title="인스턴트커피">인스턴트커피</a></li>'+
										'<li><a id="101029" href="#" title="캡슐커피">캡슐커피</a></li>'+
										'<li><a id="100146" href="#" title="코코아/핫초코">코코아/핫초코</a></li>'+
										'<li><a id="100147" href="#" title="프림">프림</a></li>'+
										'<li><a id="100148" href="#" title="아이스커피/아이스티">아이스커피/아이스티</a></li>'+
										'<li><a id="100149" href="#" title="녹차/현미녹차">녹차/현미녹차</a></li>'+
										'<li><a id="100150" href="#" title="둥글레차/옥수수차/메밀차">둥글레차/옥수수차/메밀차</a></li>'+
										'<li><a id="100151" href="#" title="홍차/허브차/보이차">홍차/허브차/보이차</a></li>'+
										'<li><a id="100152" href="#" title="주전자용차(알곡/티백)">주전자용차(알곡/티백)</a></li>'+
										'<li><a id="100153" href="#" title="율무차/땅콩차/견과차">율무차/땅콩차/견과차</a></li>'+
										'<li><a id="100154" href="#" title="유자차/모과차">유자차/모과차</a></li>'+
										'<li><a id="100155" href="#" title="한차/생강차/전통차">한차/생강차/전통차</a></li>'+
										'<li><a id="100156" href="#" title="기타차류">기타차류</a></li>'+
										'<li><a id="100157" href="#" title="다이어트차">다이어트차</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100073" href="#" title="생수/음료/탄산수">생수/음료/탄산수</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100127" href="#" title="토마토/망고/자몽주스">토마토/망고/자몽주스</a></li>'+
										'<li><a id="100126" href="#" title="포도/사과주스">포도/사과주스</a></li>'+
										'<li><a id="100125" href="#" title="오렌지/감귤주스">오렌지/감귤주스</a></li>'+
										'<li><a id="100124" href="#" title="탄산수">탄산수</a></li>'+
										'<li><a id="100139" href="#" title="식혜/수정과/전통음료">식혜/수정과/전통음료</a></li>'+
										'<li><a id="100123" href="#" title="수입생수">수입생수</a></li>'+
										'<li><a id="100138" href="#" title="어린이음료">어린이음료</a></li>'+
										'<li><a id="100122" href="#" title="국내생수">국내생수</a></li>	'+
										'<li><a id="100137" href="#" title="음료세트">음료세트</a></li>'+
										'<li><a id="100136" href="#" title="티음료">티음료</a></li>'+
										'<li><a id="100135" href="#" title="커피음료">커피음료</a></li>'+
										'<li><a id="100134" href="#" title="무알콜맥주">무알콜맥주</a></li>'+
										'<li><a id="100133" href="#" title="스포츠/이온/비타민/숙취해소">스포츠/이온/비타민/숙취해소</a></li>'+
										'<li><a id="100132" href="#" title="환타/웰치스/레몬에이드류">환타/웰치스/레몬에이드류</a></li>'+
										'<li><a id="100131" href="#" title="콜라/사이다">콜라/사이다</a></li>'+
										'<li><a id="100130" href="#" title="냉장과일주스/쿨피스류">냉장과일주스/쿨피스류</a></li>'+
										'<li><a id="100129" href="#" title="기타과일주스">기타과일주스</a></li>'+
										'<li><a id="100128" href="#" title="매실/알로에/블루베리주스">매실/알로에/블루베리주스</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100086" href="#" title="안주류">안주류</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100253" href="#" title="기타가공품">기타가공품</a></li>'+
										'<li><a id="100252" href="#" title="어육가공품">어육가공품</a></li>'+
										'<li><a id="100251" href="#" title="건조저장육류">건조저장육류</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100085" href="#" title="견과류">견과류</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100250" href="#" title="건포도/건과일">건포도/건과일</a></li>'+
										'<li><a id="100249" href="#" title="땅콩/아몬드류">땅콩/아몬드류</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100084" href="#" title="밀가루/설탕/소금/조미료">밀가루/설탕/소금/조미료</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100239" href="#" title="빵/떡 믹스">빵/떡 믹스</a></li>'+
										'<li><a id="100238" href="#" title="밀가루/요리가루">밀가루/요리가루</a></li>'+
										'<li><a id="100248" href="#" title="기타조미료">기타조미료</a></li>	'+
										'<li><a id="100247" href="#" title="식품첨가물">식품첨가물</a></li>'+
										'<li><a id="100246" href="#" title="인공감미료">인공감미료</a></li>'+
										'<li><a id="100245" href="#" title="후추/향신료/와사비">후추/향신료/와사비</a></li>'+
										'<li><a id="100244" href="#" title="조미료">조미료</a></li>'+
										'<li><a id="100243" href="#" title="참깨/들깨">참깨/들깨</a></li>'+
										'<li><a id="100242" href="#" title="고춧가루">고춧가루</a></li>'+
										'<li><a id="100241" href="#" title="소금">소금</a></li>'+
										'<li><a id="100240" href="#" title="설탕">설탕</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100083" href="#" title="식용유/참기름/파스타/소스">식용유/참기름/파스타/소스</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100226" href="#" title="대두유/옥수수유">대두유/옥수수유</a></li>'+
										'<li><a id="100230" href="#" title="참기름/들기름">참기름/들기름</a></li>'+
										'<li><a id="100237" href="#" title="기타기름">기타기름</a></li>	'+
										'<li><a id="100236" href="#" title="드레싱">드레싱</a></li>'+
										'<li><a id="100235" href="#" title="양념/소스">양념/소스</a></li>'+
										'<li><a id="100234" href="#" title="파스타소스">파스타소스</a></li>'+
										'<li><a id="100233" href="#" title="케찹/마요네즈">케찹/마요네즈</a></li>'+
										'<li><a id="100232" href="#" title="물엿/액젓">물엿/액젓</a></li>'+
										'<li><a id="100231" href="#" title="식초/음용식초">식초/음용식초</a></li>'+
										'<li><a id="100229" href="#" title="현미유/쌀눈유/해바라기유">현미유/쌀눈유/해바라기유</a></li>'+
										'<li><a id="100228" href="#" title="카놀라유">카놀라유</a></li>'+
										'<li><a id="100227" href="#" title="올리브유/포도씨유">올리브유/포도씨유</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100082" href="#" title="간장/고추장/장류">간장/고추장/장류</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100223" href="#" title="초고추장/볶음고추장">초고추장/볶음고추장</a></li>'+
										'<li><a id="100222" href="#" title="고추장">고추장</a></li>'+
										'<li><a id="100221" href="#" title="간장">간장</a></li>'+
										'<li><a id="100225" href="#" title="쌈장">쌈장</a></li>'+
										'<li><a id="100224" href="#" title="된장">된장</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100081" href="#" title="참치캔/통조림류">참치캔/통조림류</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100220" href="#" title="곡류가공품">곡류가공품</a></li>'+
										'<li><a id="100219" href="#" title="팥빙수재료">팥빙수재료</a></li>'+
										'<li><a id="100218" href="#" title="농산통조림">농산통조림</a></li>	'+
										'<li><a id="100217" href="#" title="과일통조림">과일통조림</a></li>'+
										'<li><a id="100216" href="#" title="고등어/꽁치/골뱅이/번데기">고등어/꽁치/골뱅이/번데기</a></li>'+
										'<li><a id="100215" href="#" title="반찬통조림/닭가슴살">반찬통조림/닭가슴살</a></li>'+
										'<li><a id="100214" href="#" title="스팸/돈육통조림">스팸/돈육통조림</a></li>'+
										'<li><a id="100213" href="#" title="참치캔">참치캔</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100080" href="#" title="즉석밥/카레짜장/즉석식품">즉석밥/카레짜장/즉석식품</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100207" href="#" title="카레/즉석카레">카레/즉석카레</a></li>'+
										'<li><a id="100206" href="#" title="햇반/즉석밥/누룽지">햇반/즉석밥/누룽지</a></li>'+
										'<li><a id="100212" href="#" title="선식">선식</a></li>'+
										'<li><a id="100211" href="#" title="즉석국/밥양념">즉석국/밥양념</a></li>'+
										'<li><a id="100210" href="#" title="죽/스프">죽/스프</a></li>'+
										'<li><a id="100209" href="#" title="덮밥/덮밥스프">덮밥/덮밥스프</a></li>'+
										'<li><a id="100208" href="#" title="짜장/즉석짜장">짜장/즉석짜장</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100999" href="#" title="주류">주류</a>'+
									'<ul class="ul_class">'+
										'<li><a id="101000" href="#" title="소주">소주</a></li>'+
										'<li><a id="101001" href="#" title="맥주">맥주</a></li>'+
										'<li><a id="101002" href="#" title="막걸리">막걸리</a></li>	'+
										'<li><a id="101045" href="#" title="기타주류">기타주류</a></li>'+
									'</ul>'+
								'</li>  '+ 
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a title="냉장/냉동/반찬/간편식">냉장/냉동/반찬/간편식</a>'+
							'<ul class="category_sub">'+
								'<li>'+
									'<a id="100093" href="#" title="간편가정식">간편가정식</a>'+    
									'<ul class="ul_class">'+
										'<li><a id="100303" href="#" title="또띠아">또띠아</a></li>'+         
										'<li><a id="100302" href="#" title="간식/디저트/샐러드">간식/디저트/샐러드</a></li>'+
										'<li><a id="100301" href="#" title="보쌈/야식류">보쌈/야식류</a></li>'+
										'<li><a id="100300" href="#" title="순대/족발">순대/족발</a></li>'+
										'<li><a id="100299" href="#" title="볶음류">볶음류</a></li>'+
										'<li><a id="100298" href="#" title="삼각김밥/죽/면류">삼각김밥/죽/면류</a></li>'+
										'<li><a id="100297" href="#" title="국/탕/찌개">국/탕/찌개</a></li>'+
										'<li><a id="100296" href="#" title="냉동밥/스파게티">냉동밥/스파게티</a></li>'+
										'<li><a id="100304" href="#" title="찜">찜</a></li>'+
									'</ul>'+
								'</li>'+  
								'<li>'+
									'<a id="100092" href="#" title="식빵/잼/베이커리">식빵/잼/베이커리</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100287" href="#" title="식빵/일반빵">식빵/일반빵</a></li>'+         /*소분류*/
										'<li><a id="100295" href="#" title="베이킹도구/재료">베이킹도구/재료</a></li>'+
										'<li><a id="100294" href="#" title="냉동생지/즉성빵">냉동생지/즉성빵</a></li>'+
										'<li><a id="100293" href="#" title="호두파이/와플/츄러스">호두파이/와플/츄러스</a></li>'+
										'<li><a id="100292" href="#" title="베이글/머핀/도너츠">베이글/머핀/도너츠</a></li>'+
										'<li><a id="100291" href="#" title="롤케익/카스테라/쿠키">롤케익/카스테라/쿠키</a></li>'+
										'<li><a id="100290" href="#" title="케익/케익선물세트">케익/케익선물세트</a></li>'+
										'<li><a id="100289" href="#" title="찐빵/호빵">찐빵/호빵</a></li>'+
										'<li><a id="100288" href="#" title="과일잼">과일잼</a></li>'+
										'<li><a id="100974" href="#" title="땅콩버터">땅콩버터</a></li>'+
									'</ul>'+
								'</li>'+ 
								'<li>'+		
									'<a id="100091" href="#" title="떡/특산물음식">떡/특산물음식</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100286" href="#" title="백설기떡">백설기떡</a></li>'+         /*소분류*/
										'<li><a id="100285" href="#" title="떡국떡/떡볶이떡">떡국떡/떡볶이떡</a></li>'+
										'<li><a id="100284" href="#" title="특산물음식">특산물음식</a></li>'+
										'<li><a id="100283" href="#" title="떡">떡</a></li>'+
									'</ul>'+
								'</li>'+ 	
								'<li>'+
									'<a id="100090" href="#" title="단무지/반찬">단무지/반찬</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100282" href="#" title="콩식품">콩식품</a></li>'+         /*소분류*/
										'<li><a id="100281" href="#" title="청국장/찌게양념/소스">청국장/찌게양념/소스</a></li>'+
										'<li><a id="100280" href="#" title="젓갈">젓갈</a></li>'+
										'<li><a id="100279" href="#" title="간장/양념게장">간장/양념게장</a></li>'+
										'<li><a id="100278" href="#" title="수산반찬">수산반찬</a></li>'+
										'<li><a id="100277" href="#" title="축산반찬">축산반찬</a></li>'+
										'<li><a id="100276" href="#" title="농산반찬">농산반찬</a></li>'+
										'<li><a id="100275" href="#" title="단무지/무쌈/무절임">단무지/무쌈/무절임</a></li>'+
									'</ul>'+
								'</li>'+ 
								'<li>'+
									'<a id="100089" href="#" title="김치">김치</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100271" href="#" title="양파/파/부추김치/기타">양파/파/부추김치/기타</a></li>'+         /*소분류*/
										'<li><a id="100270" href="#" title="갓김치/고들빼기">갓김치/고들빼기</a></li>'+
										'<li><a id="100269" href="#" title="물김치/백김치/동치미">물김치/백김치/동치미</a></li>'+
										'<li><a id="100268" href="#" title="깍두기/총각/열무김치">깍두기/총각/열무김치</a></li>'+
										'<li><a id="100267" href="#" title="혼합김치">혼합김치</a></li>'+
										'<li><a id="100266" href="#" title="일반김치">일반김치</a></li>'+
										'<li><a id="100274" href="#" title="절임배추/김치양념">절임배추/김치양념</a></li>'+
										'<li><a id="100273" href="#" title="묵은지">묵은지</a></li>'+	
										'<li><a id="100272" href="#" title="맛김치/볶음김치">맛김치/볶음김치</a></li>'+
									'</ul>'+
								'</li>'+ 
								'<li>'+
									'<a id="100088" href="#" title="만두/피자/냉동식품">만두/피자/냉동식품</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100265" href="#" title="피자">피자</a></li>'+         /*소분류*/
										'<li><a id="100264" href="#" title="만두피">만두피</a></li>'+
										'<li><a id="100263" href="#" title="냉동간식">냉동간식</a></li>'+
										'<li><a id="100262" href="#" title="냉동반찬">냉동반찬</a></li>'+
										'<li><a id="100261" href="#" title="만두">만두</a></li>'+
									'</ul>'+
								'</li>'+ 
								'<li>'+
									'<a id="100088" href="#" title="햄/어묵/맛살/면류 냉장식품">햄/어묵/맛살/면류 냉장식품</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100255" href="#" title="소세지/베이컨">소세지/베이컨</a></li>'+         /*소분류*/
										'<li><a id="100254" href="#" title="햄/김밥재료">햄/김밥재료</a></li>'+
										'<li><a id="100260" href="#" title="냉장간식">냉장간식</a></li>'+
										'<li><a id="100259" href="#" title="냉장면류">냉장면류</a></li>'+
										'<li><a id="100258" href="#" title="맛살">맛살</a></li>'+
										'<li><a id="100257" href="#" title="유부">유부</a></li>'+
										'<li><a id="100256" href="#" title="어묵">어묵</a></li>'+
									'</ul>'+
								'</li>'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a title="건강/친환경 식품">건강/친환경 식품</a>'+
							'<ul class="category_sub">'+
								'<li>'+
									'<a id="100095" href="#" title="꿀/로얄제리">꿀/로얄제리</a>'+    /*중분류*/
									'<ul class="ul_class">'+
										'<li><a id="100316" href="#" title="국산꿀">국산꿀</a></li>'+         /*소분류*/
										'<li><a id="100317" href="#" title="수입꿀">수입꿀</a></li>'+
										'<li><a id="100319" href="#" title="로얄제리/프로폴리스">로얄제리/프로폴리스</a></li>'+
										'<li><a id="100318" href="#" title="꿀가공품">꿀가공품</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100094" href="#" title="홍삼/인삼/건강즙">홍삼/인삼/건강즙</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100315" href="#" title="인삼차">인삼차</a></li>'+         /*소분류*/
										'<li><a id="100314" href="#" title="인삼">인삼</a></li>'+
										'<li><a id="100313" href="#" title="건강즙/과일즙">건강즙/과일즙</a></li>'+
										'<li><a id="100312" href="#" title="산삼배양근">산삼배양근</a></li>'+
										'<li><a id="100311" href="#" title="어린이홍삼">어린이홍삼</a></li>'+
										'<li><a id="100310" href="#" title="홍삼선물세트">홍삼선물세트</a></li>'+
										'<li><a id="100309" href="#" title="홍인삼음료/홍삼차/사탕">홍인삼음료/홍삼차/사탕</a></li>'+
										'<li><a id="100308" href="#" title="홍삼절편/정과/양갱">홍삼절편/정과/양갱</a></li>'+
										'<li><a id="100307" href="#" title="홍삼분말/캡슐/환">홍삼분말/캡슐/환</a></li>'+
										'<li><a id="100306" href="#" title="홍삼액">홍삼액</a></li>'+
										'<li><a id="100305" href="#" title="홍삼뿌리군/농축액">홍삼뿌리군/농축액</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100099" href="#" title="친환경 가공식품">친환경 가공식품</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100337" href="#" title="통조림/잼">통조림/잼</a></li>'+         /*소분류*/
										'<li><a id="100338" href="#" title="커피/차">커피/차</a></li>'+
										'<li><a id="100339" href="#" title="과자/캔디">과자/캔디</a></li>'+
										'<li><a id="100340" href="#" title="면류/시리얼/즉석식품">면류/시리얼/즉석식품</a></li>'+
										'<li><a id="100341" href="#" title="우유/요구르트/치즈/유가공품">우유/요구르트/치즈/유가공품</a></li>'+
										'<li><a id="100342" href="#" title="음료/건강식품">음료/건강식품</a></li>'+
										'<li><a id="100343" href="#" title="분말류/장류/유지류/소스류">분말류/장류/유지류/소스류</a></li>'+
										'<li><a id="100344" href="#" title="친환경 가공 선물세트">친환경 가공 선물세트</a></li>'+
										'<li><a id="100336" href="#" title="냉장냉동">냉장냉동</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100098" href="#" title="한차/건강차재료">한차/건강차재료</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100334" href="#" title="한차">한차</a></li>'+         /*소분류*/
										'<li><a id="100335" href="#" title="건강차재료">건강차재료</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100097" href="#" title="다이어트/헬스보조식품">다이어트/헬스보조식품</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100332" href="#" title="다이어트보조식품">다이어트보조식품</a></li>'+         /*소분류*/
										'<li><a id="100333" href="#" title="헬스보충식">헬스보충식</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+
									'<a id="100096" href="#" title="건강식품(성분별)">건강식품(성분별)</a>'+
									'<ul class="ul_class _180w">'+
										'<li><a id="100320" href="#" title="종합 비타민">종합 비타민</a></li>'+         /*소분류*/
										'<li><a id="101039" href="#" title="비오틴">비오틴</a></li>'+
										'<li><a id="101003" href="#" title="비타민 A">비타민 A</a></li>'+
										'<li><a id="101004" href="#" title="비타민 B">비타민 B</a></li>'+
										'<li><a id="101005" href="#" title="비타민 C">비타민 C</a></li>'+
										'<li><a id="101035" href="#" title="비타민 D">비타민 D</a></li>'+
										'<li><a id="101034" href="#" title="비타민 E">비타민 E</a></li>'+
										'<li><a id="100321" href="#" title="오메가3">오메가3</a></li>'+
										'<li><a id="101006" href="#" title="감마리놀렌산">감마리놀렌산</a></li>'+
										'<li><a id="100322" href="#" title="철분">철분</a></li>'+
										'<li><a id="101007" href="#" title="엽산">엽산</a></li>'+
										'<li><a id="101008" href="#" title="칼슘">칼슘</a></li>'+
										'<li><a id="101009" href="#" title="아연">아연</a></li>'+
										'<li><a id="101010" href="#" title="초유">초유</a></li>'+
										'<li><a id="101011" href="#" title="마그네슘">마그네슘</a></li>'+
										'<li><a id="100323" href="#" title="쏘팔메토">쏘팔메토</a></li>'+
										'<li><a id="101012" href="#" title="글루코사민">글루코사민</a></li>'+
										'<li><a id="100324" href="#" title="루테인">루테인</a></li>'+
										'<li><a id="100325" href="#" title="콜라겐">콜라겐</a></li>'+
										'<li><a id="101013" href="#" title="히알루론산">히알루론산</a></li>'+
										'<li><a id="100326" href="#" title="코엔자임큐텐">코엔자임큐텐</a></li>'+
										'<li><a id="101014" href="#" title="키토산">키토산</a></li>'+
										'<li><a id="101015" href="#" title="스쿠알렌">스쿠알렌</a></li>'+
										'<li><a id="100327" href="#" title="유산균">유산균</a></li>'+
										'<li><a id="101016" href="#" title="알로에">알로에</a></li>'+
										'<li><a id="101017" href="#" title="식이섬유">식이섬유</a></li>'+
										'<li><a id="100328" href="#" title="클로렐라">클로렐라</a></li>'+
										'<li><a id="101018" href="#" title="스피루리나">스피루리나</a></li>'+
										'<li><a id="100329" href="#" title="기타 건강식품">기타 건강식품</a></li>'+
										'<li><a id="100330" href="#" title="일반의약품">일반의약품</a></li>'+
										'<li><a id="100331" href="#" title="어린이건강">어린이건강</a></li>'+
										'<li><a id="101019" href="#" title="밀크씨슬">밀크씨슬</a></li>'+
										'<li><a id="101020" href="#" title="녹차추출물">녹차추출물</a></li>'+
										'<li><a id="101021" href="#" title="옥타코사놀">옥타코사놀</a></li>'+
										'<li><a id="101022" href="#" title="엠에스엠">엠에스엠</a></li>'+
										'<li><a id="101023" href="#" title="공액리놀렌산">공액리놀렌산</a></li>'+
										'<li><a id="101024" href="#" title="대두이소플라본">대두이소플라본</a></li>'+
										'<li><a id="101025" href="#" title="매실추출물">매실추출물</a></li>'+
										'<li><a id="101026" href="#" title="백수오">백수오</a></li>'+
										'<li><a id="101027" href="#" title="레시틴">레시틴</a></li>'+
										'<li><a id="101028" href="#" title="가르시니아캄보지아추출물">가르시니아캄보지아추출물</a></li>'+
										'<li><a id="101031" href="#" title="회화나무 열매 추출물">회화나무 열매 추출물</a></li>'+
										'<li><a id="101032" href="#" title="홍경전 추출물">홍경전 추출물</a></li>'+
										'<li><a id="101033" href="#" title="난소화성말토덱스트린">난소화성말토덱스트린</a></li>'+
										'<li><a id="101036" href="#" title="은행잎 추출물">은행잎추출물</a></li>'+
										'<li><a id="101037" href="#" title="셀레늄">셀레늄</a></li>'+
										'<li><a id="101038" href="#" title="베타카로틴">베타카로틴</a></li>'+
										'<li><a id="101041" href="#" title="피크노제놀-프랑스해안송껍질추출물">피크노제놀-프랑스해안송껍질추출물</a></li>'+
										'<li><a id="101043" href="#" title="잔티젠">잔티젠</a></li>'+
									'</ul>'+
								'</li>'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a title="정육/계란류">정육/계란류</a>'+
							'<ul class="category_sub">'+
								'<li>'+  
									'<a id="100100" href="#" title="알류">알류</a>'+    /*중분류*/
									'<ul class="ul_class">'+
										'<li><a id="100345" href="#" title="메추리알">메추리알</a></li>'+         /*소분류*/
									'</ul>'+
								'</li>'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a title="쌀/잡곡">쌀/잡곡</a>'+
							'<ul class="category_sub">'+
								'<li>'+
									'<a id="100105" href="#" title="혼합곡/기능성잡곡">혼합곡/기능성잡곡</a>'+    /*중분류*/
									'<ul class="ul_class">'+
										'<li><a id="100360" href="#" title="혼합곡">혼합곡</a></li>'+         /*소분류*/
										'<li><a id="100361" href="#" title="기능성잡곡">기능성잡곡</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+ 
									'<a id="100104" href="#" title="수수/조/깨/잡곡">수수/조/깨/잡곡</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100356" href="#" title="기장">기장</a></li>'+         /*소분류*/
										'<li><a id="100357" href="#" title="깨">깨</a></li>'+
										'<li><a id="100358" href="#" title="율무/녹두">율무/녹두</a></li>'+
										'<li><a id="100359" href="#" title="기타잡곡">기타잡곡</a></li>'+
										'<li><a id="100354" href="#" title="수수">수수</a></li>'+
										'<li><a id="100355" href="#" title="조류">조류</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+ 
									'<a id="100103" href="#" title="콩/보리">콩/보리</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100353" href="#" title="보리">보리</a></li>'+         /*소분류*/
										'<li><a id="100350" href="#" title="콩">콩</a></li>'+
										'<li><a id="100351" href="#" title="팥">팥</a></li>'+
										'<li><a id="100352" href="#" title="서리태">서리태</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+ 
									'<a id="100102" href="#" title="찹쌀/현미/흑미">찹쌀/현미/흑미</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100347" href="#" title="찹쌀">찹쌀</a></li>'+         /*소분류*/
										'<li><a id="100348" href="#" title="현미">현미</a></li>'+
										'<li><a id="100349" href="#" title="흑미">흑미</a></li>'+
									'</ul>'+
								'</li>'+
								'<li>'+ 
									'<a id="100101" href="#" title="쌀">쌀</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100346" href="#" title="쌀">쌀</a></li>'+         /*소분류*/
									'</ul>'+
								'</li>'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a title="채소">채소</a>'+
							'<ul class="category_sub">'+
								'<li>'+
									'<a id="100070" href="#" title="두부/콩나물">두부/콩나물</a>'+    /*중분류*/
									'<ul class="ul_class">'+
										'<li><a id="100111" href="#" title="찌개/부침겸용두부">찌개/부침겸용두부</a></li>'+         /*소분류*/
										'<li><a id="100110" href="#" title="묵">묵</a></li>'+
										'<li><a id="100109" href="#" title="순두부/연두부">순두부/연두부</a></li>'+
										'<li><a id="100108" href="#" title="혼합/기능성두부">혼합/기능성두부</a></li>'+
										'<li><a id="100107" href="#" title="부침용두부">부침용두부</a></li>'+
										'<li><a id="100106" href="#" title="찌개용두부">찌개용두부</a></li>'+
										'<li><a id="100113" href="#" title="콩나물">콩나물</a></li>'+
										'<li><a id="100112" href="#" title="생식용">생식용</a></li>'+
									'</ul>'+
								'</li>'+
							'</ul>'+
						'</li>'+
						'<li>'+
							'<a title="수산물/해산물/건어물">수산물/해산물/건어물</a>'+
							'<ul class="category_sub">'+
								'<li>'+ 
									'<a id="100071" href="#" title="조미김/생김">조미김/생김</a>'+    /*중분류*/
									'<ul class="ul_class">'+
										'<li><a id="100119" href="#" title="황태포">황태포</a></li>'+         /*소분류*/
										'<li><a id="100120" href="#" title="미역">미역</a></li>'+
										'<li><a id="100118" href="#" title="다시마">다시마</a></li>'+
										'<li><a id="100117" href="#" title="김자반">김자반</a></li>'+
										'<li><a id="100116" href="#" title="도시락/김밥용김">도시락/김밥용김</a></li>'+
										'<li><a id="100115" href="#" title="생김/파래김">생김/파래김</a></li>'+
										'<li><a id="100114" href="#" title="구운김/조미김">구운김/조미김</a></li>'+
									'</ul>'+
								'</li>'+ 
								'<li>'+ 
									'<a id="100072" href="#" title="건오징어/어포/육포">건오징어/어포/육포</a>'+
									'<ul class="ul_class">'+
										'<li><a id="100121" href="#" title="황태/북어/오징어">황태/북어/오징어</a></li>'+         /*소분류*/
									'</ul>'+
								'</li>'+
							'</ul>'+
						'</li>'),
	open:function(){
		var _jEl = $("#category_all .category_view");
		
		if(_jEl.children().length > 0){
			_jEl.children().remove();
		}
		
		_jEl.append(this._categoryElement);
		
		this.onClickEvent();
	},
	onClickEvent:function(){
		this._categoryElement.on("click", ".category_sub a", function(event){
			//카테고리별 이동 처리
			event.preventDefault();
			var searchQuery = $.trim($(this).text());
			var _categoryId = $(this).attr("id");
			var _hash = $.param({type:"category",categoryId:_categoryId});
			self.location.href = "list?categoryNm=" + encodeURI(encodeURIComponent(searchQuery)+"#"+_hash);
		}).on("mouseover", ".category_sub > li > a", function(event){
			$(".ul_class").css({
				"left":$(this).width()+"px"
			});
		});
	}
}
})(window, window.jQuery);