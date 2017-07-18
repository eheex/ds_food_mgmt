$(function(){
    /*scroll Top*/
    $("div.gotop").fadeOut("slow");
    $(window).scroll(function(){
        setTimeout(scroll_top, 200);//arrow appear time
    });
    $(".gotop").hover(function(){
        $(this).css("background-color","#307ad5");
    }, function(){
        $(this).css("background-color","#999");
        scroll_top()
    })
    $("#gotop div").click(function(){
        $('body,html').animate({ scrollTop: 0 }, 600);//arrow click page speed
            return false;
    });
});

// jj 테스트 

// ㅇㅇ












//scroll Top
function scroll_top(){
    if($(window).scrollTop()<=1) {
        $("#gotop").fadeOut("slow");
    }
    else {
        $("#gotop").fadeIn("slow");
    }
}

//category
$(function() {
    $( ".btn_category>button" ).bind("click", function(e) {
        $('#category_all').slideDown('fast');
        $(this).next().show();
        $(this).hide();
        //전체 카테고리 팝업 오픈
        $CategoryPopup.open();
    });
     $( "#category_all>button").bind("click", function(e) {    
        $('#category_all').slideUp('fast');
        $('.btn_category>button').prev().show();
        $('.btn_category>button').last().hide();
    });
    $( ".btn_category>button").last().bind("click", function(e) {    
        $('#category_all').slideUp('fast');
        $('.btn_category>button.btnoff').show();
        $('.btn_category>button.btnon').hide();
    });	
    $('#category_all').slideUp('focusout', function(){ 
        $('#category_all').hide('fast');
        $('.btn_category>button').first().show();
        $('.btn_category>button').last().hide();
    });
}); 


//keywordRoll
function fnkeywordRoll(){
    var height =  $(".rolling").height();
	var num = $(".rolling_class li").length;
	var max = height * num;
	var move = 0;
	function noticeRolling(){
		move += height;
		$(".rolling_class").animate({"top":-move},800,function(){
			if( move >= max ){
				$(this).css("top",0);
				move = 0;
			};
		});
	};
	noticeRollingOff = setInterval(noticeRolling,1000);
	$(".rolling_class").append($(".rolling_class li").first().clone());
}


//detailSearch
/*$(document).ready(function() {
	$.fn.layerOpen = function(options) {
		return this.each(function() {
			var $this  = $(this);
			var $layer = $($this.attr('href') || null);
			$this.off().click(function(e) {
				e.preventDefault();
				//$layer.show().focus();
				$layer.show();
				$('body,html').animate({ scrollTop: 0 }, 1000);
				$layer.find('.srh_detail_close').one('click',function () {
					$layer.hide();
					$this.focus();
				});
			});
		});
	}
	$('.detail_tit').layerOpen();
});*/

//detailSearch
$(document).ready(function() {
	$("#btnSearchDetail").off().on("click", function(event){
		event.preventDefault();
		$DetailSearchPopup.open();
	});
});


//placeholder
function addNewInputText() {
	var newInputText = document.createElement("input");
	newInputText.type = "text";
	newInputText.placeholder = "placeholder message";
	document.body.appendChild(newInputText);
}

/*Designed input[type=file]*/
(function(window, $, undefined) {

  //$(makeObjFile);
  
  function makeObjFile() {
    var inputFile = CustomFiletype();
    inputFile.init($('.filetype'));
  }

  function CustomFiletype() {
    if (this === window) return new CustomFiletype;
    this.$fileBox = null;
    this.$fileUpload = null;
  }

  CustomFiletype.prototype = {

    'init': function(fileClass) {
      this.$fileBox = fileClass || $('.filetype');
      this.initEvent();
    },

    'initEvent': function() {
      this.fileUpload();
    },

    'fileUpload': function() {
      var _self = this;

      $.each(_self.$fileBox, function(idx, item) {

        var _$fileBox = _self.$fileBox.eq(idx),
          _$fileType = _$fileBox.find('input[type=file]'),
          _$fileText = _$fileBox.find('input[type=text]');
        _$fileText.attr('disabled', 'disabled');

        _$fileType.on('change', function() {
          var filePath = $(this).val();
          _$fileText.val(filePath);
        })

      })
    }

  }

  window.$MakeObjFile = makeObjFile;
  
})(window, window.jQuery);

//쿠키 생성
function setCookie(cName, cValue, cDay){
	var expire = new Date();
	expire.setDate(expire.getDate() + cDay);
	cookies = cName + "=" + escape(cValue) + "; path=/ "; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
	if(typeof cDay != "undefined") cookies += ";expires=" + expire.toGMTString() + ";";
	document.cookie = cookies;
}

 // 쿠키 가져오기
function getCookie(cName) {
 cName = cName + "=";
 var cookieData = document.cookie;
 var start = cookieData.indexOf(cName);
 var cValue = "";
 if(start != -1){
     start += cName.length;
     var end = cookieData.indexOf(";", start);
     if(end == -1)end = cookieData.length;
     cValue = cookieData.substring(start, end);
 }
 return unescape(cValue);
}
