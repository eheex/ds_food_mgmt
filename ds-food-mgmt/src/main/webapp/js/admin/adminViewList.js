(function(window, $, undefined) {
/**
 * 관리자화면 - 등록/수정요청 리스트
 */
window.$AdminViewList = {
	init:function(){
		var _jBody = $("#contents");
		var _viewName = "";
		
		if(viewType == "reg"){
			_viewName = "등록요청 제품";
			$(".lnb li#regList a").click();
		}else if(viewType == "mod"){
			_viewName = "수정요청 제품";
			$(".lnb li#modList a").click();
		}
		$("h3#viewName", _jBody).html(_viewName);
		
		this._getData();
	},
	_getData:function(){
		var _this = this;
		
		var _reqGb = (viewType == "reg") ? "I" : "U";
		var _sendData = {"query":{"reqGb":_reqGb}};
		
		$.ajax({
			url: "/admin/getFoodReqData",
			data: _sendData,
			contentType: "application/json; charset=UTF-8",
			dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
			async: false	//동기화처리
		}).done(function(data) {
			if(_this._jDataTable){
				_this._jDataTable.clear();
	            _this._jDataTable.destroy();
			}
			_this._drawDataTable(data.data);
		});
	},
	_drawDataTable:function(oData){
		var _this = this;
		
		var _viewType = (viewType == "reg") ? "reg" : "mod";
		
		$.fn.dataTable.ext.errMode = "none";	//dataTable error시  alert창 안띄우게 함
		
		/* DataTable Plug-in */
		this._jDataTable = $("#registTable").DataTable({
			lengthChange: false,	//paging 콤보박스 disable
			ordering: false,			//기본 정렬을 해제함(쿼리정렬사용위함)
			searching: false,
			data: oData,
		 	columns: [
		 		{ data:"prdNm", name: 'prdNm', className: "td_underline", title: "제품명", width: "500px"},
		 		{ data:"comNa", name: 'comNa', title: "회사/브랜드", width: "300px"},
		 		{ data:"regDt", name: 'regDt', title: "요청 일시", width: "200px"}
		    ],
		    language: {
		    	"paginate": {
		            "next":"　",
		            "previous":"　"
		        },
		    	"info": ""
		    },
		    rowCallback : function( row, data, index ) {
		    	
		    	$(row).on("click", function(event){
		    		//해당 상세화면 이동
		    		location.href = "/admin/viewDetail?seq="+data.reqSeq+"&viewType="+_viewType;
		    	});
		    }
		});
		
		//수정요청 제품 리스트일경우 컬럼명을 바꾼다.
		if(_viewType == "mod"){
		    var title = this._jDataTable.column(1).header();
		    $(title).html("제조원");
		}
	}
};

})(window, window.jQuery);