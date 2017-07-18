(function(window, $, undefined) {
/**
 *  제품등록 요청 팝업
 *	푸드TFT 
 */
window.$PrdModifyPopup = {
	_jPopUpElement: $('<!-- layerpop -->'+
					'<div id="pauseLayer">'+
						'<div class="outer"><div class="outin">'+
						'<div id="alertLayer" class="prd_regist1">'+		
							'<div class="title">'+
								'제품수정 요청'+
								'<button id="btnClose"><img src="../images/common/btn_close4.png" alt="팝업창 닫기" /></button>'+
							'</div>'+
							'<div class="prd_regcont">'+
								'<p class="p1">'+
									'제품명, 업소명, 원재료, 영양성분 등 잘못 등록된 정보를 말씀해주시면<br />빠르게 수정하도록 하겠습니다.'+
								'</p>'+			
								'<form id="" class="" name="form" method="">'+
								'<fieldset>'+
									'<legend class="blind">사용자 제품수정 요청</legend>'+
									'<p class="write_info1"><strong>*</strong>필수입력</p>'+
									'<div class="box">'+
									'<ul class="writelist">'+
										'<li class="modiprd">'+
											'<div class="label">수정요청제품</div>'+
											'<div class="prdinfo">'+
												'<span class="prdname">[제품명] 스윙칩 간장치킨맛</span>'+
												'<span class="prdcomp">[제조원] (주)오리온</span>'+
											'</div>'+
										'</li>'+
										'<li class="litextarea">'+
											'<label for="comm_contents">수정요청내용<strong>*</strong></label>'+
											'<textarea name="comm_contents" id="comm_contents" title="수정요청내용" class="prdtextareas" placeholder="수정해야 할 내용을 적어주세요."></textarea>'+
										'</li>'+
										'<li>'+
											'<label for="prdphoto1">이미지</label>'+
											'<span class="filetype">'+
												'<input id="prdphoto1" name="prdphoto" type="text" title="제품사진 1" class="file-text" placeholder="이미지 파일을 첨부해주세요" />'+
												'<span class="file-btn">파일찾기</span>'+
												'<span class="file-select"><input type="file" class="input-file"></span>'+
											'</span>'+
										'</li>'+
										'<li>'+
											'<label for="email">이메일</label>'+
											'<input id="email" name="email" type="text" title="이메일" class="prdinput1" placeholder="이메일을 입력하면 제품 등록 후 알려드립니다." />'+
										'</li>'+
									'</ul>'+
									'</div>'+
									'<button id="btnModify" type="submit" title="수정요청" class="prd_smit1">수정요청</button>'+
								'</fieldset>'+
								'</form>'+
							'</div>'+
						'</div>'+
						'</div></div>'+
					'</div>'+
				'<!-- //layerpop	-->'),
	open:function(){
		var _jEl = $("body #wrap");
		
		this.destroy();
		
		_jEl.before(this._jPopUpElement);
		$MakeObjFile();	//파일찾기 기능
		
		this._onClickEvent();
	},
	_onClickEvent:function(){
		var _this = this;
		this._jPopUpElement.on("click", "#btnClose", function(event){
			//팝업창 닫기
			event.preventDefault();
			_this.destroy();
		}).on("click", "#btnModify", function(event){
			//수정 요청
			event.preventDefault();
			if(_this._validation()){
				_this._onModify();
			}
		});
	},
	_validation:function(){
		if($("textarea#comm_contents", this._jPopUpElement).val() == ""){
			alert("수정내용을 적어주세요.");
			$("textarea#comm_contents", this._jPopUpElement).focus();
			return false;
		}
		
		return true;
	},
	_onModify:function(){
		//제품수정 요청 Ajax 처리
		
	},
	destroy: function(){
		var _jEl = $("body");
		
		if(_jEl.find("#pauseLayer").length > 0){
			_jEl.find("#pauseLayer").remove();
		}
	}
}

})(window, window.jQuery);