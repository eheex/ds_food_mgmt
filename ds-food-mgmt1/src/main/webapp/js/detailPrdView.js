(function(window, $, undefined) {

window.$DetailPrdView = {
	detailPrdInfo: {},
	init:function(){
		//Header 공통 그리기
		$Layout.setSearchHeader();
		
		//this._getData();
		this._onClickEvent();
	},
	_getData:function(){
		var _this = this;
		
		$.ajax({
			url: "/portal/searchDetail/result",
			data: {
				"query":{
					"fudId":fudId,
					"fudNm":fudNm
					}
		    },
			contentType: "application/json; charset=UTF-8",
			dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
			async: false	//동기화처리
		}).done(function(data) {
			console.log(data);
			_this.detailPrdInfo = data;
		});
	},
	_onClickEvent:function(){
		//목록으로
		$("#btnBack").on("click", function(event){
			event.preventDefault();
		});
	}
};
})(window, window.jQuery);