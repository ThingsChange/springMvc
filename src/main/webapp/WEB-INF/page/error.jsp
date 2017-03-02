<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="java.io.PrintWriter" %>
<%@ page import="org.slf4j.*" %>
<%@ page import="java.lang.Exception" %>
<%@ page import="com.dianfubao.webui.common.api.KyApi" %>
 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = KyApi.protocol + "://"+request.getServerName()+path+"/";
%>

<!DOCTYPE html>
<html>
	<head>
		<base href="<%=basePath%>" />
		<link media="all" type="text/css" rel="stylesheet"	href="static/dist/style.min.css?t=9ec624db">
	</head>
	<body>	
		<jsp:include page="public/top-header.jsp"></jsp:include>
		<jsp:include page="public/_header_login.jsp"></jsp:include>
		<div id="content">
			<div style="background:#f0f4f7;">
			    <div class=" width-wrap align-left cl" style="margin-top:128px;margin-bottom:128px;">
			     	<div class="left-wrap error-img">
			            <img src="static/img/error.png" />
			        </div>
			        <div class="left-wrap error-right">
			            <h3>抱歉，出现异常了！</h3>	
			            <p class="fs6">您要查看的页面可能暂时不可用，请尝试打开其它页面；</p>		         
			            <p><a href="javascript:history.go(-1)" target="_self">之前浏览的页面</a><em class="mr ml">或</em><a href="/" target="_self">首页</a></p>
			          
			        </div>
			    </div>
		    </div>
		</div>	
		<jsp:include page="public/footer.jsp"></jsp:include>				
	</body>
</html>
