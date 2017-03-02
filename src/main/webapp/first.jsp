<%--
  Created by IntelliJ IDEA.
  User: wanglijun
  Date: 2016/8/18
  Time: 12:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<html>
<head>
    <title>Title</title>
</head>
<link rel="stylesheet" href="css/jbox.css"/>
<link type="text/css" rel="stylesheet" href="jquery-jbox/2.3/Skins/Bootstrap/jbox.css"/>
<body>
<h2>Hello javaScript，bye java!</h2>
<input type="button" onclick="hello()" value="zou">
<h2>${message}</h2>
<input id="txtTest" type="text" placeholder="sign your name" style="width: 260px;">
<%--<input id="txtTest2" type="text" placeholder="sign your name">--%>
<input id="uploadHeadPic" type="button" value="选择文件"  class="license_file">
<input  id="urlID" type="text" value=""  class="license_file">
头像：<img  id="imgID" src="" />

<a href="fullAvatarEditor-2.3/simpleDemo.html">tiao</a>


<br>

<%
    out.print("1111");
%>
<script type="text/javascript" src="js/autocomplete.js"></script>
<script type="text/javascript" src="js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="js/jquery.jBox-2.3.min.js"></script>
<script type="text/javascript" src="js/jquery-migrate-1.js"></script>
<script type="text/javascript" src="static/js/test/test.js?v=5db2acb4db"></script>
</body>
<script>
    window.onload = function () {
        var width=document.getElementById("txtTest").style.width;

        AutoComplete({
            id: 'txtTest', //控件id
            url: '/test/input/getInput', //数据
            paraName:'name',//ajax 请求的参数
            textFiled: 'name', //显示的文字的属性名
            valueFiled: 'id', //获取value的属性名
            style:{
                width: width,
                height: 'auto',
                backgroundColor: 'white',
                cursor: 'pointer',
                display: 'block'
            },
            //                  style: {}, //显示的下拉div的样式设置
            //                      url: '', //ajax请求的url
            select: function (val, text) {
                alert(val + '---' + text);
            }, //选择选项时触发的事件,
            showdivId: 'showDIv' //下拉选择区域的id});
        });
    }
    function hello(){
        var xhr=new XMLHttpRequest();
        xhr.open("get","/hello/printHello",true);
        xhr.onreadystatechange=function(){
            if(xhr.readyState=="4"&&xhr.status=="200"){
                alert("请求成功");

            }
        }
        xhr.send(null);

    }
$(function () {
    //为上传头像绑定事件
    $("#uploadHeadPic").bind("click",uploadHeadPic);
    //上传头像
    function uploadHeadPic(){
        $.jBox("iframe:fullAvatarEditor-2.3/simpleDemo.html", { title: "请上传头像",buttons:{"submit":true},width:650,height:550,
            submit : function(v, h, f) {
                var st=h.find("iframe")[0].contentWindow.saveUploadUrl.value;
                window.parent.window.document.getElementById("imgID").src=st;
            },
            closed:function (){
                window.parent.window.document.getElementById("urlID").value="1";
            }
        });
    }
})
</script>

</body>
</html>
