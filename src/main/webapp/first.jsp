<%--
  Created by IntelliJ IDEA.
  User: wanglijun
  Date: 2016/8/18
  Time: 12:06
  To change this template use File | Settings | File Templates.
--%>
<%String path = request.getContextPath(); %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript">
        var __ROOT__ = "<%=path%>";
    </script>
</head>
<link rel="stylesheet" href="css/jbox.css">
<link rel="stylesheet" href="jquery-jbox/2.3/Skins/Bootstrap/jbox.css">
<link rel="stylesheet" href="static/dist/css/test.min.css?v=d2146b29e2">
<body>
    <h2>Hello javaScript，bye java!</h2>
    <input type="button" onclick="hello()" value="zou">
    <h2>${message}</h2>
    <input id="txtTest" type="text" placeholder="sign your name"style="width:260px">
    <%--<input id="txtTest2" type="text" placeholder="sign your name">--%>
    <input id="uploadHeadPic" type="button" value="选择文件" class="license_file">
    <input id="urlID" type="text"class="license_file">
    头像：<img id="imgID" src="">
    <a href="fullAvatarEditor-2.3/simpleDemo.html">tiao</a>
    <br>
<%
    out.print("1111");
%>

    <div id="home">
        <div id="top">top</div>
        <div id="center">
            <div id="left">left</div>
            <div id="right">right</div>
        </div>
    </div>
<script src="js/autocomplete.js"></script>
<%--<script src="js/jquery-1.9.1.js"></script>--%>
<%--<script src="<%=path %>/static/lib/jquery/dist/jquery.min.js"></script>--%>
<script data-main="<%=path %>/static/dist/js/homepage/index.min.js?v=f810c1410e" src="<%=path %>/static/lib/requirejs/require.js"></script>
  <%--  <script src="js/jquery.jBox-2.3.min.js"></script>
    <script src="js/jquery-migrate-1.js"></script>--%>
<script>

</script>
</body>
<%--<script>
    function hello() {
    var t = new XMLHttpRequest;
    t.open("get", "/hello/printHello", !0), t.onreadystatechange = function () {
        "4" == t.readyState && "200" == t.status && alert("请求成功")
    }, t.send(null)
}
window.onload = function () {
    var t = document.getElementById("txtTest").style.width;
    AutoComplete({
        id: "txtTest",
        url: "/test/input/getInput",
        paraName: "name",
        textFiled: "name",
        valueFiled: "id",
        style: {width: t, height: "auto", backgroundColor: "white", cursor: "pointer", display: "block"},
        select: function (t, e) {
            alert(t + "---" + e)
        },
        showdivId: "showDIv"
    })
}, $(function () {
    function t() {
        $.jBox("iframe:fullAvatarEditor-2.3/simpleDemo.html", {
            title: "请上传头像",
            buttons: {submit: !0},
            width: 650,
            height: 550,
            submit: function (t, e, n) {
                var o = e.find("iframe")[0].contentWindow.saveUploadUrl.value;
                window.parent.window.document.getElementById("imgID").src = o
            },
            closed: function () {
                window.parent.window.document.getElementById("urlID").value = "1"
            }
        })
    }

    $("#uploadHeadPic").bind("click", t)
})</script>--%>
</html>