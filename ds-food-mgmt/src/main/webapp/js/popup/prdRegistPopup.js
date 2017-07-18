(function(window, $, undefined) {
/**
 *  제품등록 요청 팝업
 *	푸드TFT 
 */
window.$PrdRegistPopup = {
	rtFile : {},	
	_jPopUpElement: $('<div id="pauseLayer">'+
						'<div class="outer"><div class="outin">'+
						'<div id="alertLayer" class="prd_regist1">'+				
							'<div class="title">'+
								'제품등록 요청'+
								'<button id="btnClose"><img src="../images/common/btn_close4.png" alt="팝업창 닫기" /></button>'+
							'</div>'+
							'<div class="prd_regcont">'+
								'<p class="p1">'+
									'제품의 정면사진과 뒷면의 영양성분과 원재료, 바코드를 촬영해 이미지를 함께<br />'+
									'등록해주시면 더욱 빨리 제품을 등록할 수 있습니다.'+
								'</p>'+
								'<form id="myform" class="" name="myform" method="post">'+
								'<fieldset>'+
									'<legend class="blind">사용자 제품등록</legend>'+
									'<p class="write_info1"><strong>*</strong>필수입력</p>'+
									'<div class="box">'+
									'<ul class="writelist">'+
										'<li>'+
											'<label for="prdname">제품명<strong>*</strong></label>'+
											'<input id="prdname" name="prdname" type="text" title="제품명" class="prdinput1s" placeholder="제품명을 입력해주세요." /></li>'+
										'<li>'+
											'<label for="brand">회사/브랜드<strong>*</strong></label>'+
											'<input id="brand" name="brand" type="text" title="회사명 브랜드명" class="prdinput1s" placeholder="회사명 또는 브랜드명을 입력해주세요." />'+
										'</li>'+
										'<li>'+
											'<label for="barcode">바코드</label>'+
											'<input id="barcode" name="barcode" type="text" title="바코드" class="prdinput1" placeholder="제품 바코드 번호를 입력해주세요." />'+
										'</li>'+
										'<li>'+
											'<label for="prdphoto1">제품사진 1</label>'+
											'<span class="filetype">'+
											'<input id="prdphoto1" name="prdphoto" type="text" title="제품사진 1" class="file-text" placeholder="이미지 파일을 첨부해주세요" />'+
												'<span class="file-btn">파일찾기</span>'+
												'<span class="file-select"><input type="file" name=file1 class="input-file"></span>'+
											'</span>'+
										'</li>'+
										'<li>'+
											'<label for="prdphoto2">제품사진 2</label>'+
											'<span class="filetype">'+
												'<input id="prdphoto2" name="prdphoto" type="text" title="제품사진 2" class="file-text" placeholder="이미지 파일을 첨부해주세요" />'+
												'<span class="file-btn">파일찾기</span>'+
												'<span class="file-select"><input type="file" name=file2  class="input-file"></span>'+
											'</span>'+
										'</li>'+
										'<li>'+
											'<label for="prdphoto3">제품사진 3</label>'+
											'<span class="filetype">'+
												'<input id="prdphoto3" name="prdphoto" type="text" title="제품사진 3" class="file-text" placeholder="이미지 파일을 첨부해주세요" />'+
												'<span class="file-btn">파일찾기</span>'+
												'<span class="file-select"><input type="file" name=file3   class="input-file"></span>'+
											'</span>'+
										'</li>'+
										'<li>'+
											'<label for="prdphoto3">제품사진 4</label>'+
											'<span class="filetype">'+
												'<input id="prdphoto4" name="prdphoto" type="text" title="제품사진 4" class="file-text" placeholder="이미지 파일을 첨부해주세요" />'+
												'<span class="file-btn">파일찾기</span>'+
												'<span class="file-select"><input type="file" name=file4  class="input-file"></span>'+
											'</span>'+
										'</li>'+
										'<li>'+
											'<label for="prdphoto3">제품사진 5</label>'+
											'<span class="filetype">'+
												'<input id="prdphoto5" name="prdphoto" type="text" title="제품사진 5" class="file-text" placeholder="이미지 파일을 첨부해주세요" />'+
												'<span class="file-btn">파일찾기</span>'+
												'<span class="file-select"><input type="file" name=file5  class="input-file"></span>'+
											'</span>'+
										'</li>'+
										'<li>'+
											'<label for="email">이메일</label>'+
											'<input id="email" name="email" type="text" title="이메일" class="prdinput1" placeholder="이메일을 입력하면 제품 등록 후 알려드립니다." />'+
										'</li>'+
									'</ul>'+
									'</div>'+
									'<button id="btnRequest" type="submit" title="등록요청" class="prd_smit1" onclick="">등록요청</button>'+
								'</fieldset>'+
								'</form>'+
							'</div>'+
						'</div>'+
					'</div></div>'+
				'</div>'),
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
		}).on("click", "#btnRequest", function(event){
			//등록 요청
			event.preventDefault();
			if(_this._validation()){
				_this._onRequest();
			}
		});
	},
	_validation:function(){
		if($("input#prdname", this._jPopUpElement).val() == ""){
			alert("제품명을 입력해주세요.");
			$("input#prdname", this._jPopUpElement).focus();
			return false;
		}
		
		if($("input#brand", this._jPopUpElement).val() == ""){
			alert("회사명 또는 브랜드명을 입력해주세요.");
			$("input#brand", this._jPopUpElement).focus();
			return false;
		}
		
		return true;
	},
	_onRequest:function(){

		//제품등록 요청 Ajax 처리
		var _this = this;
		if(_this._onUpload() == "1"){
		
			var prdname = $("input#prdname", this._jPopUpElement).val();
			var brand   = $("input#brand",   this._jPopUpElement).val();
			var email   = $("input#email",   this._jPopUpElement).val();
			
			var _data  = {
					"prdNm":prdname,
					"comNa":brand,
					"reqGb":"I",
					"email":email
			    };
			
			_data.foodRest = [];
			$.each(_this.rtFile, function(key,value){
				var _file = {"imgID":value[1],
							 "imgNM":value[0],
							 "imgPth":value[3]
				};
				_data.foodRest.push(_file);
			});
			
			$.ajax({
				url: "/portal/prdReq/insert",
				type: "POST",
				data : JSON.stringify(_data),
				contentType: "application/json; charset=UTF-8",
				dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
				async: false	//동기화처리
			}).done(function(data) {
				console.log(data);
			});

		} else {alert("첨부실패");}
	},
	_onUpload:function(){
		var _this = this;
		//파일 업로드 처리
		var rtnValue = "1";
		
		var fileCheck ="0";
		
		if($("input[name=file1]", this._jPopUpElement).val() != "") fileCheck = "1";
		if($("input[name=file2]", this._jPopUpElement).val() != "") fileCheck = "1";
		if($("input[name=file3]", this._jPopUpElement).val() != "") fileCheck = "1";
		if($("input[name=file4]", this._jPopUpElement).val() != "") fileCheck = "1";
		if($("input[name=file5]", this._jPopUpElement).val() != "") fileCheck = "1";

		if(fileCheck == "1") { 	
		
			$("#myform").ajaxForm({
	
				url: "/portal/upload/imageSave",
				
				type: "POST",
				
				enctype: "multipart/form-data", // 여기에 url과 enctype은 꼭 지정해주어야 하는 부분이며 multipart로 지정해주지 않으면 controller로 파일을 보낼 수 없음
	
				async: false,	//동기화처리
	
				success: function(result){
					console.log(result);
					_this.rtFile = result;
					rtnValue = "1";
				},
				error:function(xhr,ajaxOptions,thrownError){
					//alert(xhr.responseText);
					//alert(thrownError);
					rtnValue = "0";
				}
			}).submit();
		}
		
		return rtnValue;
	},

	destroy: function(){
		var _jEl = $("body");
		
		if(_jEl.find("#pauseLayer").length > 0){
			$("input", this._jPopUpElement).val("");
			_jEl.find("#pauseLayer").remove();
		}
	}
}

})(window, window.jQuery);