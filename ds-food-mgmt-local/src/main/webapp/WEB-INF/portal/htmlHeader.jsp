<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.Date" %> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta property="og:title" content="eatsight">
<meta property="og:url" content="http://dev.eatsight.com/">
<meta property="og:description" content="eatsight에서 다양한 식품정보를 만나 보세요"/>
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="">
<meta name="twitter:url" content="http://www.eatsigt.com/">
<meta name="twitter:description" content="eatsight에서 다양한 식품정보를 만나 보세요"/>
<title>eatsight</title>
<link rel="stylesheet" type="text/css" href="../css/default.css"/>
<link rel="stylesheet" type="text/css" href="../css/jquery.mCustomScrollbar.css"/>
<link rel="stylesheet" type="text/css" href="../css/lib/jquery.ui/jquery-ui.min.css"/>
<link rel="stylesheet" type="text/css" href="../css/lib/jquery.ui/jquery-ui.structure.min.css"/>
<link rel="stylesheet" type="text/css" href="../css/lib/jquery.ui/jquery-ui.theme.min.css"/>
<script type="text/javascript" src="../js/lib/jquery/jquery-1.12.4.js"></script>
<script type="text/javascript" src="../js/lib/datatables/datatables.min.js"></script>
<script type="text/javascript" src="../js/lib/jquery.ui/jquery-ui.min.js"></script>
<script type="text/javascript" src="../js/lib/jquery/jquery.form.js"></script>
<script type="text/javascript" src="../js/common.js"></script>
<script type="text/javascript" src="../js/jquery.mCustomScrollbar.min.js"></script>
<script type="text/javascript" src="../js/placeholder.js"></script>
<script type="text/javascript" src="./js/core/layout.js"></script>
<script type="text/javascript" src="./js/popup/categoryPopup.js"></script>
<script type="text/javascript" src="./js/popup/detailSearchPopup.js"></script>
<script>
window.$ServerInfo = {
	ip:"<%=request.getServerName()%>",
	port:"<%=request.getServerPort()%>",
	dateTime: new Date(<%=(new Date()).getTime()%>),
	getURL:function(){
		return "http://" + this.ip + ":" + this.port;
	}
};
</script>





