<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta name="Author" content="eatsight 관리자 페이지" />	
<title>eatsight 관리자 페이지</title>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="../css/base.admin.css" />
<link rel="stylesheet" type="text/css" href="../css/style.admin.css">
<style type="text/css">
.navbar-brand {width:230px;height:70px;display:block;margin:0 auto;background:url(../images/common/logo.png) 45px center #fff no-repeat;}
</style>
<script type="text/javascript" src="../js/lib/jquery/jquery-1.12.4.js"></script>
<script type="text/javascript">

var console = window.console || { log: function() {} };

$(document).ready(function(){
	$("#btnLogin").on("click", function(event){
		event.preventDefault();
		if(validation()) {
			var url = "/j_spring_security_check";
			var userId = $('#j_username').val();
            var password = $('#j_password').val();
            
            $.ajax({
            	url: url,
            	data: { j_username: userId, j_password: password },
                method: "POST",
                crossDomain: true,
                beforeSend: function (request)
                {
                    request.setRequestHeader("AJAX", true);
                    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                }
              }).done(function(data) {
                  sessionStorage.setItem("name", data.data.username);//user 정보 저장
                 
                  $(location).attr('href','/admin/viewRank');    
              }).error(function(error){
                  alert("로그인도중 오류가 발생하였습니다."+error);
              });
		}
	});
	
	$("#j_password").on("keyup", function(event){
        if(event.keyCode == 13){
			$("#btnLogin").click();
        }
    });
	
	function validation(){
		if($("#j_username").val() == ""){
			alert("아이디를 입력해주세요.");
			$("#j_username").focus();
			return false;
		}
		if($("#j_password").val() == ""){
			alert("비밀번호를 입력해주세요.");
			$("#j_password").focus();
			return false;
		}
		
		return true;
	}
});
</script>
</head>
<body>
<!-- WRAP -->
<div id="login_wrap">	
	<div id="login_container">
		<a class="navbar-brand"></a>		
		<h3>관리자 화면 로그인</h3>
		<div id="login_contents">
			<h2>로그인</h2>
			<div class="login">
				<form action="/j_spring_security_check" method="post">
					<fieldset>
						<legend>관리자 로그인</legend>
						<ul>
							<li><label for="j_username">아 이 디 </label><input type="text" id="j_username" name="id" class="in1" placeholder="아이디" /></li>
							<li><label for="j_password">비밀번호</label><input type="password" id="j_password" name="pw" class="in1" placeholder="비밀번호" /></li>
						</ul>
						<span class="btnArea"><a href="#" id="btnLogin" class="login_btn1">로그인</a></span>
						<div class="chk_id_login">
							<input type="checkbox" id="save_username" title="아이디 저장" name="input" id="label" /><label for="save_username">아이디 저장</label>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
</div>
<!-- //WRAP -->
</body>
</html>