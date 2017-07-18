<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isELIgnored="false" %>  
<jsp:include page="htmlHeader.jsp" flush="false"/>
<script>
$(function(){
	$("#btnRequest").on("click", function(){
		$.ajax({
			url: "/portal/prdReq/insert",
			data: {"reqSeq": $("#reqSeq").val(),
				   "reqGbn": $("#reqGb").val()
				   },
			contentType: "application/json; charset=UTF-8",
			dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
			async: false	//동기화처리
		}).done(function(res) {
			if(res){
				alert("저장이 성공적으로 되었습니다.");
			}else{
				alert("저장오류!");
			}
		});
	});

});
</script>
</head>
<body>
시퀀스 : <input type="text" id="reqSeq" value="123124124">
<br/>
구분 : <input type="text" id="reqGb">

<button id="btnRequest">등록요청</button>
</body>
</html>