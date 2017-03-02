<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = KyApi.protocol + "://"+request.getServerName()+path+"/";
%>
<%@ page import="com.dianfubao.webui.common.api.KyApi" %>
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
			    <div class=" width-wrap align-center cl" style="margin-top:128px;margin-bottom:128px;">
			        <div class="left-wrap error-img">
			            <img src="static/img/error.png" />
			        </div>
			        <div class="left-wrap error-right">
			            <h3>抱歉，您访问的页面出错了！</h3>
			            <p class="fs6">您要查看的页面可能暂时不可用，请尝试打开其它页面；</p>
			            <p><a href="javascript:history.go(-1)" target="_self">之前浏览的页面</a><em class="mr ml">或</em><a href="/" target="_self">首页</a></p>
			            <div class="mt"><a href="javascript:$('#detail').slideToggle()" class="sz12">详细信息》</a></div>
			            <span id="detail" style="display:none;color:gray;line-height: 30px;font-size:12px">错误：404，页面未找到</span>
			        </div>
			    </div>
		    </div>
		</div>	
		<jsp:include page="public/footer.jsp"></jsp:include>
		<script type="text/javascript" src= "static/lib/jquery-1.11.3.js"></script>			
	</body>
</html>
