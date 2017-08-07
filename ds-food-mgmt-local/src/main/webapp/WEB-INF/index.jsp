<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
 
<link href="<c:out value="${pageContext.request.contextPath}" />/resources/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
 <%
String name = "";
%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> 

<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
<script>
$(document).ready(function() {
     $("#test").click(function(){
         jQuery.ajax({
             type:"GET",
             url:"http://54.178.188.117:8081/oc/apis/users",
             dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
             success : function(data) {
                   // 통신이 성공적으로 이루어졌을 때 이 함수를 타게 된다.
                   // TODO
                   alert("ok:"+data);
             },
             complete : function(data) {
                   // 통신이 실패했어도 완료가 되었을 때 이 함수를 타게 된다.
                   // TODO
             },
             error : function(xhr, status, error) {
                   alert("에러발생");
             }
        });
     });
});
</script>
<div style="width:200px;float:left;">
    <sec:authorize access="isAuthenticated()">
           test 님 반갑습니다~~~~ food!!!!!!!
 
    <a href="${ctx}/j_spring_security_logout">로그아웃</a>
    </sec:authorize>
    
    <ul>
        <sec:authorize access="hasRole('ROLE_OC')">
        <li>관리자 화면</li>
        </sec:authorize>
        <sec:authorize access="permitAll">
        <li id="test"><a href="#">비회원 게시판</a></li>
        </sec:authorize>
        <sec:authorize access="isAuthenticated()">
        <li>준회원 게시판</li>
        </sec:authorize>
        <sec:authorize access="hasAnyRole('ROLE_MEMBER2', 'ROLE_OC')">
        <li>정회원 게시판</li>
        </sec:authorize>
        <sec:authorize access="hasRole('ROLE_MEMBER')">
        <li>test 메뉴</li>
        </sec:authorize>
    </ul>
</div>