(function(window, $, undefined) {
/**
 *  제품수정 요청 팝업
 *	푸드TFT 
 */
window.$PrdModifyPopup = {
	rtFile : {},
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
								'<form id="myform" name="myform" method="post">'+
								'<fieldset>'+
									'<legend class="blind">사용자 제품수정 요청</legend>'+
									'<p class="write_info1"><strong>*</strong>필수입력</p>'+
									'<div class="box">'+
									'<ul class="writelist">'+
										'<li class="modiprd">'+
											'<div class="label">수정요청제품</div>'+
											'<div class="prdinfo">'+
												'<span class="prdname">[제품명] <a id="fudnm"></a></span>'+
												'<span class="prdcomp">[제조원] <a id="fudCpn"></a></span>'+
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
												'<span class="file-select"><input type="file" name="file" class="input-file"></span>'+
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
	_jPopUpSucess: $('<!-- layerpop	-->'
					+'<div id="pauseLayer">'
					+	'<div id="alertLayer" class="prd_done">'
					+		'<button id="btnClose" class="close"><img src="../images/common/btn_close4.png" alt="팝업창 닫기" /></button>'
					+		'<div class="cont">'
					+			'<p class="p1">수정 요청이 완료되었습니다!</p>'
					+			'<p class="p2">빠른 시일 내에 수정하도록 하겠습니다.</p>'
					+			'<button id="btnConfirm" type="button" title="팝업닫기" class="prd_smit1" onclick="">확인</button>'
					+		'</div>'
					+	'</div>'
					+'</div>'
					+'<!-- //layerpop	-->'),
	open:function(){
		var _jEl = $("body #wrap");
		
		this.destroy();
		
		_jEl.before(this._jPopUpElement);
		$MakeObjFile();	//파일찾기 기능
		
		$("#fudnm").html(fudNm);
		$("#fudCpn").html($(".prd_cpn p").text());
		
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
			alert("수정요청내용을 적어주세요.");
			$("textarea#comm_contents", this._jPopUpElement).focus();
			return false;
		}
		
		return true;
	},
	_onModify:function(){
		//제품등록 요청 Ajax 처리
		var _this = this;
		
		if(_this._onUpload() == "1" || _this._onUpload() == "2"){
		
			var prdcd   = fudId;
			var prdname = fudNm;
//			var brand   = $("input#brand",   this._jPopUpElement).val();
			var email   = $("input#email",   this._jPopUpElement).val();
			var modnt   = $("textarea#comm_contents",   this._jPopUpElement).val();
			
			var _data  = {
					"prdNm":prdname,
//					"comNa":brand,
					"reqGb":"U",
					"prdCd":prdcd,
					"modNt":modnt,
					"email":email
			    };
			
			_data.foodRest = [];
			$.each(_this.rtFile, function(key,value){
				var _file = {"imgID":value[1],
							 "imgNM":value[0],
							 "imgPth":value[2]
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
				var _jEl = $("body #wrap");
				// 폼초기화
				$('#myform')[0].reset();
								
				_this.destroy();
				//_jEl.find("#pauseLayer").remove();
				_jEl.before(_this._jPopUpSucess);

				
				_this._jPopUpSucess.on("click","#btnConfirm, #btnClose", function(event){
					//팝업창 닫기
					event.preventDefault();
					_this.destroy();
				});

			});

		} else {alert('jpg, gif, png, bmp 확장자만 업로드 가능합니다.');}
	},
	_onUpload:function(){
		//파일 업로드 처리
		var _this = this;
		
		var rtnValue = "0";
		var imgCheck1 = validation( $("input[name=file]", this._jPopUpElement).val());

	   // rtnValue 값  1 : 정상, 2:첨부파일 없음, 3:이미지파일 아님	
		if      (imgCheck1 == "0") rtnValue = "2";
		else if (imgCheck1 == "2") rtnValue = "3";
		else    rtnValue = "1";
     
		if(rtnValue == "1") { 	
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
			$("#myform")[0].reset(); // 폼 초기화
			_jEl.find("#pauseLayer").remove();
		}
	}
}

function validation(fileName) { 
	if(fileName == ""){
		return "0";
	} else {
		var fileNameExtensionIndex = fileName.lastIndexOf('.') + 1; // .뒤부터 확장자 
		var fileNameExtension = fileName.toLowerCase().substring(fileNameExtensionIndex,fileName.length); // 확장자 자르기 
		if(!((fileNameExtension === 'jpg') || (fileNameExtension === 'gif') || (fileNameExtension === 'png') || (fileNameExtension === 'bmp'))) { 
			return "2"; 
		} else { 
			return "1"; 
		} 
	}
}
})(window, window.jQuery);