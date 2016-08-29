<%--
  Created by IntelliJ IDEA.
  User: wanglijun
  Date: 2016/8/18
  Time: 12:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<script type="text/javascript" src="js/autocomplete.js"></script>
<body>
<h2>Hello World!</h2>
<input type="button" onclick="hello()" value="zou">
<h2>${message}</h2>
<input id="txtTest" type="text" placeholder="sign your name" style="width: 260px;">
<input id="txtTest2" type="text" placeholder="sign your name">
</body>
<script>
    window.onload = function () {
        var width=document.getElementById("txtTest").style.width;

        AutoComplete({
            id: 'txtTest', //控件id
            url: '/test/input', //数据
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
   /* function hello(){
        var xhr=new XMLHttpRequest();
        xhr.open("get","/hello",true);
        xhr.onreadystatechange=function(){
            if(xhr.readyState=="4"&&xhr.status=="200"){
                alert("请求成功");

            }
        }
        xhr.send(null);

    }*/

</script>
</html>

</body>
</html>
