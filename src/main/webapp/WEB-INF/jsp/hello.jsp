<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
<title>Hello World</title>
</head>
<body>
   <h2>aaaa</h2>
   name:<input type="text" placeholder="sign your name">111111111111
${pageContext.request.contextPath}
<%
   String path = request.getContextPath();
   out.print(path);
   String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
   out.print(basePath);
%>

</body>
<%--<c:set var="js" value="${pageContext.request.contextPath}/js"/>--%>
<script type="text/javascript" src="../../js/autocomplete.js"></script>
<script>
   window.onload = function () {
      AutoComplete({
         id: 'txtTest', //控件id
         url: '/Home/Test4', //数据
         paraName:'name',
         textFiled: 'name', //显示的文字的属性名
         valueFiled: 'id', //获取value的属性名
         //                  style: {}, //显示的下拉div的样式设置
         //                      url: '', //ajax请求的url
         select: function (val, text) {
            alert(val + '---' + text);
         }, //选择选项时触发的事件,
         showdivId: 'showDIv' //下拉选择区域的id});
      });

   }
</script>
</html>