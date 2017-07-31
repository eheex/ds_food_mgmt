(function(window, $, undefined) {
/**
 * 관리자화면 - 인기검색어 관리 수정 화면
 */
window.$AdminRankModify = {
	init:function(){
		
		$(".lnb li#keywordView a").click();
		
		this._getData();
		this._bindEvent();
	},
	_getData:function(){
		var _this = this;
		
		
	},
	_bindEvent:function(){
		var _this = this;
		
		//수동등록 자동등록 라디오 버튼 처리
		$('input[name="gbn"]').on("click", function(event){
			var _gbnId = event.target.id;
			if(_gbnId == "regTypeA"){
				// 수동등록 시간설정 초기화
				$("select#manualSelectTime option:eq(0)").prop("selected", true);
				$("._manualOptionTr").addClass("hidden");
			}else if(_gbnId == "regTypeM"){
				_this._clear();
				$("._manualOptionTr").removeClass("hidden");
			}
		});
		
		$('#startDate, #endDate').val($.datepicker.formatDate('yy-mm-dd', new Date()));   
			
		//달력
		$("#startDate").datepicker({
	        dateFormat:'yy-mm-dd' // 만약 2011년 4월 29일 선택하면  inputbox 에 '2011-04-29' 로표시
	      , showOn: 'button' // 우측에 달력 icon 을 보인다.
	      , buttonImage: '/images/common/calendar24.png'  // 우측 달력 icon 의 이미지 패스 
	      , buttonImageOnly: true //  inputbox 뒤에 달력icon만 표시한다. ('...' 표시생략)
	      , changeMonth: true // 월선택 select box 표시 (기본은 false)
	      , changeYear: true  // 년선택 selectbox 표시 (기본은 false)
	      , showButtonPanel: true // 하단 today, done  버튼기능 추가 표시 (기본은 false)
	      , minDate: 0
	      , onClose: function( selectedDate ) {    
              // 시작일(fromDate) datepicker가 닫힐때
              // 종료일(toDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
              $("#endDate").datepicker( "option", "minDate", selectedDate );
          } 
	    });
		$("#endDate").datepicker({
	        dateFormat:'yy-mm-dd' // 만약 2011년 4월 29일 선택하면  inputbox 에 '2011/04/29' 로표시
	      , showOn: 'button' // 우측에 달력 icon 을 보인다.
	      , buttonImage: '/images/common/calendar24.png'  // 우측 달력 icon 의 이미지 패스 
	      , buttonImageOnly: true //  inputbox 뒤에 달력icon만 표시한다. ('...' 표시생략)
	      , changeMonth: true // 월선택 select box 표시 (기본은 false)
	      , changeYear: true  // 년선택 selectbox 표시 (기본은 false)
	      , showButtonPanel: true // 하단 today, done  버튼기능 추가 표시 (기본은 false)
	      , minDate: 0
	      , onClose: function( selectedDate ) {
              // 종료일(toDate) datepicker가 닫힐때
              // 시작일(fromDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 종료일로 지정 
              $("#startDate").datepicker( "option", "maxDate", selectedDate );
          } 
	    });
		
		//수동등록 키워드 조회
		$("#btnMOptionSearch").on("click", function(event){
			event.preventDefault();
			var searchTime = $("#manualSelectTime option:selected").val();

			_this._clear();

			$.ajax({
				url: "/admin/getMaualOption",
				contentType: "application/json; charset=UTF-8",
				data : {"searchTime":searchTime},
				dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
				async: false,	//동기화처리
			    success :function(data) {
			    	$("#manualKeywordList tbody").remove();
			    	var loopCount = 1;
					$.each(data,function(){
						$("#manualKeywordList").append('<tr><td>'+ loopCount++ +'</td><td>'+this.fudNm+'</td><td>'+this.cnt+'</td><td><input type="checkbox" name="chk" value="'+this.fudNm+'"></td></tr>');
					});		
				},
				error :function() {
					alert("조회오류");
				}
			});
		});
		
		//row 전체 선택
		$('#checkAll').click(function(){
			$("input:checkbox[name='chk']").each(function(e){
				if($('#checkAll').prop('checked') == false){
					$(this).prop('checked',false);
				} else {
					$(this).prop('checked',true);
				}
			});
			
		});
		
		//이동 버튼 클릭
		$("#btnMove").on("click", function(event){
			event.preventDefault();
			//$("#manualKeywordList tbody input:checkbox[name='chk']")
			$("input:checkbox[name='chk']").each(function(idx){
				if($(this).prop('checked')){
					$("input[name=keywordNm]:eq("+idx+")").val($(this).val());
				} 
			});
				
		});
		
		//취소
		$("#btnCancel").on("click", function(event){
			event.preventDefault();
			if(confirm("취소하시겠습니까?")){
				location.href = "/admin/viewRank";
			}
		});
		
		//저장
		$("#btnSave").on("click", function(event){
			event.preventDefault();
			if(_this._validation()){
				var _data = {};
				
				if($("input#regTypeM").prop("checked")){
					//수동등록 Data
					_data.foodProdHitMgmt = [];
					var loopCount = 1;
					$("input:text[name='keywordNm']").each(function(e){
						_data.foodProdHitMgmt.push({
							seq : "1",
							no : loopCount,
						    gbn : "M",
						    stYmd : $("input#startDate").val(),
						    stTime : $("select#startTime option:selected").val(),
						    edYmd : $("input#endDate").val(),
						    edTime : $("select#endTime option:selected").val(),
						    prdNm : $(this).val(),
						    refTim : $("select#manualSelectTime").val()
						});
					});
				}else{
					//자동등록 Data
					_data = {seq: "1",
							 no: "1",
							 gbn: "A",
							 stYmd: $("input#startDate").val(),
							 stTime: $("select#autoSelectTime option:selected").val(),
							 edYmd:"",
							 edTime:""};
				}
				
				$.ajax({
					url: "/admin/saveKeyword",
					contentType: "application/json; charset=UTF-8",
					data :JSON.stringify(_data),
					type : "POST",
					dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
					async: false,	//동기화처리
				    success :function(data) {
						alert("저장되었습니다.");
					},
					error :function() {
						alert("처리중 오류가 발생하였습니다.");
					}
				});
			}
		});
	},
	_clear:function(){
		var _this = this;
		// 자동등록 시간설정 초기화
		$("select#autoSelectTime option:eq(0)").prop("selected", true);
		// 인기검색어 순위 전체체크 해제
		$("input#checkAll").attr("checked", false);
		// 인기검색어 순위 테이블 Clear();
		$("table#manualKeywordList tbody").children().remove().end().append($("<tr><td colspan='4'>내용이 없습니다.<br />기간을 설정해 조회해주세요.</td></tr>"));
		// 인기검색어 초기화
		$("input[name=keywordNm]").val("");
	},
	_validation: function(){
		var _this = this;
		var rtnValue = true;
		
		//수동등록일 경우
		if($("input#regTypeM").prop("checked")){
			$("input:text[name='keywordNm']").each(function(e){
				if($(this).val() == ""){
					alert("검색어가 누락되었습니다. \n인기검색어를 모두 입력 하셔야 합니다.");
					rtnValue = false;
					return false;
				}
			});
			
			if($("input#startTime").val() <= $("input#endTime").val()){
				alert("서비스기간의 시간의 종료시간이 \n시작시간 이후로 설정해주십시오. ");
				rtnValue = false;
			}
		}
		
		return rtnValue;
	}
};

})(window, window.jQuery);