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
		this._onClickEvent();
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
			value = (value == "" || value == null) ? "-" : value;
			
			//수정사유
			if(key == "modNt"){			
				$("td#"+key+" textarea", _this._tableBody).val(value);
			}else if(key == "addrUrl"){
				$("#addrUrl").val(value);
			}else{
				$("td#"+key, _this._tableBody).html(value);
			}
			
		});
		
		//이미지 처리
		if($.isEmptyObject(oData[0].foodRest)){
			$("#btnAllDownload").prop("disabled", true);
		}else{
			$("#btnAllDownload").prop("disabled", false);
			
			$.each(oData[0].foodRest, function(index){
				var _data = this;
				var _imgUrl = $ServerInfo.getURL() + _data.imgPth + _data.imgNM;
				$("#foodImg img:eq("+index+")").data("foodImg", _data).css("cursor","pointer").attr("src", _imgUrl).on("click", function(event){
					event.preventDefault();
					location.href = $ServerInfo.getURL() + "/portal/upload/file/fileDownload.do?serverFileDir=" + _data.imgNM;
				});
			});
		}
		
		//수정요청제품 제품 URL
		if(viewType == "mod"){
			if(oData[0].prdCd != ""){
				var _adminUrl = "http://mgmt.eatsight.com/front/eatsight/index.html#/food/foodinfo_basic?id="+oData[0].prdCd;
				$("#addrUrl",_this._tableBody).html('<a href="'+_adminUrl+'" target="_blank" style="text-decoration:underline">'+_adminUrl+'</a>');
			}else{
				$("#addrUrl",_this._tableBody).html('-');
			}
			
		}
	},
	_onClickEvent:function(){
		var _this = this;

		//전체 다운로드
		$("#btnAllDownload").on("click", function(event){
			event.preventDefault();

			var _foodRestData = {};
			_foodRestData.foodRests = [];
			$("#foodImg img").each(function(){
				if($(this).data("foodImg") != undefined){
					_foodRestData.foodRests.push($(this).data("foodImg"));
				}else{
					return false;
				}
			});
			
			$.ajax({
				url: "/portal/upload/allDownload",
				data: JSON.stringify(_foodRestData),
				contentType: "application/json; charset=UTF-8",
				dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
				type:"POST",
				async: true	//동기화처리
			}).success(function(data){
				if(data.success){
				    location.href = $ServerInfo.getURL() + "/portal/upload/file/fileDownload.do?serverFileDir=" + data.fileName;
				}else{
					alert("다운로드에 실패하였습니다.");
				}
			}).error(function() {
				alert("다운로드에 실패하였습니다.");
			}).done(function() {
				
			});
		});
		
		//등록제품 URL 저장
		$("#btnUrlSave").on("click", function(event){
			event.preventDefault();
			
			if($("#addrUrl").val() != ""){
				var _sendData = {reqSeq  : reqSeq,
						 		 addrUrl : $("#addrUrl").val()
							    };
				$.ajax({
					url: "/admin/modifyFoodReqData",
					data: JSON.stringify(_sendData),
					contentType: "application/json; charset=UTF-8",
					dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
					type:"POST",
					async: true	//동기화처리
				}).success(function(data){
					alert("등록제품 URL이 성공적으로 저장되었습니다.");
				}).error(function() {
					alert("등록제품 URL을 저장하는도중\n오류가 발생하였습니다.");
				}).done(function() {
					
				});
			}
		});
	},
	
};
})(window, window.jQuery);