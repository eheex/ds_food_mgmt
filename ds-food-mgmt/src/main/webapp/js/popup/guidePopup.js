(function(window, $, undefined) {
/**
 *  식품 정보가이드 팝업
 *	푸드TFT 
 */
window.$GuidePopup = {
	_jPopUpElement: $('<!-- layerpop -->'+
					'<div id="pauseLayer">'+
						'<div class="outer"><div class="outin">'+
						'<div id="alertLayer" class="alert_info1">'+				
							'<button id="btnClose"><img src="../images/common/btn_close3.png" alt="안내창 닫기" /></button>'+
							'<div class="mark_info1">'+
								'<p class="title">처음 Eatsight를 방문하신 분들을 위한<br /><strong>식품 정보 가이드!!</strong></p>'+
								'<div class="cont">'+
									'<p class="p1">리스트에서 보여지는 아이콘은 해당 정보를 나타냅니다.</p>'+
									'<div class="markbox">'+
										'<ul>'+
											'<li><span class="mark mark1">알레르기</span><span class="explain">알레르기성분이 들어있어요!</span></li>'+
											'<li><span class="mark mark2">인증</span><span class="explain">인증을 받았어요!</span></li>'+
											'<li><span class="mark mark3">무첨가</span><span class="explain">특정 첨가물 무첨가 마케팅을 하고 있어요!</span></li>'+
											'<li><span class="mark mark4">영양성분주의</span><span class="explain">어떤 영양성분이 하루 기준치 50%가 넘어요!</span></li>'+
										'</ul>'+
									'</div>'+
								'</div>'+
								'<div class="foot">'+
									'<p><img src="../images/common/mark_info1foot1.png" alt="자세한 내용이 궁금하면 아이콘에 커서를 올려보세요!" /></p>'+
									'<div class="ex">'+
										'<span class="mark mark1">알레르기</span>'+
										'<div class="infodetail">원재료에 알레르기성분이 포함되어 있습니다.<br ><strong>포함 성분: 밀, 대두</strong></div>'+
										'<span class="mark mark2">인증</span>'+
										'<span class="mark mark3">무첨가</span>'+
										'<span class="mark mark4">영양성분주의</span>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'</div></div>'+
					'</div>'+
					'<!-- //layerpop -->'),
	open:function(){
		if(!this._cookieCheck()){
			var _jEl = $("body #wrap");
			
			this.destroy();
			
			_jEl.before(this._jPopUpElement);
			
			this._onClickEvent();
		}
	},
	_cookieCheck:function(){
		var pk = 365;
		var popupPkList = getCookie("CLOSEPOPUP").split(",");
		var isSaved = false;
		for(i=0;  i<popupPkList.length;i++){
			if(popupPkList[i]==pk){
				isSaved = true;
			}
		}
		if(!isSaved) setCookie("CLOSEPOPUP", popupPkList+","+pk);
		return isSaved;
	},
	_onClickEvent:function(){
		var _this = this;
		this._jPopUpElement.on("click", "#btnClose", function(event){
			//팝업창 닫기
			event.preventDefault();
			_this.destroy();
		});
	},
	destroy: function(){
		var _jEl = $("body");
		
		if(_jEl.find("#pauseLayer").length > 0){
			_jEl.find("#pauseLayer").remove();
		}
	}
}

})(window, window.jQuery);