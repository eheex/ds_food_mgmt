(function(window, $, undefined) {
/**
 * 관리자화면 - 등록/수정요청 상세화면
 */
window.$AdminViewDetail = {
	_tableBody : null,
	init:function(){
		var _viewName = "";
		
		$("table tbody").addClass("hidden");
		
		if(viewType == "reg"){
			$(".lnb li#regList a").click();
			_viewName = "등록요청 제품 > 상세조회";
			this._tableBody = $("table tbody#registViewBody");
			this._tableBody.removeClass("hidden");
		}else if(viewType == "mod"){
			$(".lnb li#modList a").click();
			_viewName = "수정요청 제품 > 상세조회";
			this._tableBody = $("table tbody#modifyViewBody");
			this._tableBody.removeClass("hidden");
		}
		$("h3#viewName").html(_viewName);
		
		this._getData();
	},
	_getData:function(){
		var _this = this;
		
		$.ajax({
			url: "/admin/getFoodReqData",
			data: {"query":{"reqSeq":reqSeq,"detailView":true}},
			contentType: "application/json; charset=UTF-8",
			dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
			async: false	//동기화처리
		}).done(function(data) {
			_this._setData(data.data);
		});
	},
	_setData:function(oData){
		var _this = this;
		
		$.each(oData[0], function(key, value){
			console.log("key :::: "+key+" // value :::: "+value);
			
			value = (value == "" || value == null) ? "-" : value;
			
			if(key == "modNt"){
				$("td#"+key+" textarea", _this._tableBody).val(value);
			}else{
				$("td#"+key, _this._tableBody).html(value);
			}
			
		});
	}
};

})(window, window.jQuery);