(function(window, $, undefined) {
/**
 * 관리자화면 - 인기검색어 관리 화면
 */
window.$AdminRank = {
	init:function(){
		
		$(".lnb li#keywordView a").click();
		
		this._getData();
	},
	_getData:function(){
		var _this = this;
		
		$.ajax({
			url: "/admin/rank",
			contentType: "application/json; charset=UTF-8",
			dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
			async: false,	//동기화처리
		    success :function(data) {
		    	var loopCount = 1;
				$.each(data,function(){
					console.log(this);
					 $("#rankListTable tbody").append('<tr><td>'+ loopCount++ +'</td><td>'+this.fudNm+'</td></tr>');
				});		
			},
			error :function() {alert("조회오류");}
		});
	}
};

})(window, window.jQuery);