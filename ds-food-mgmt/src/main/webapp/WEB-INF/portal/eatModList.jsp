<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<script type="text/javascript" src="../js/lib/jquery/jquery-1.12.4.js"></script>
<script type="text/javascript" src="../js/lib/datatables/datatables.min.js"></script>
</head>
<body>
<script type="text/javascript" src="./js/popup/categoryPopup.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	
	_getData:function(){
		var _this = this;

		$.ajax({
			url: "/portal/mod",
			data: {
				"query":{
					"prdNm":prdNm,
					"comNa":comNa,  //브랜드명
					"regDt":regDt,  //등록일   , 수정요청 등록일 경우 req_gb = u
	
					}
		    },
			contentType: "application/json; charset=UTF-8",
			dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
			async: false	//동기화처리
		}).done(function(data) {
			console.log(data.data);
		}

</body>