<%@ page contentType="text/html;charset=UTF-8"%>
<html>
<head>
    <script type="text/javascript" src="js/autocomplete.js"></script>
</head>
<body>
<h2>Hello World!</h2>
<input type="button" onclick="hello()" value="zou">
<h2>${message}</h2>
name:<input type="text" placeholder="sign your name">
</body>
<script>
    window.onload = function () {
        AutoComplete({
            id: 'txtTest', //控件id
            url: '/test/input/getInput', //数据
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
    function hello(){
        var xhr=new XMLHttpRequest();
        xhr.open("get","/api/hello/printHello",true);
        xhr.onreadystatechange=function(){
            if(xhr.readyState=="4"&&xhr.status=="200"){
                alert("请求成功");

            }
        }
        xhr.send(null);

    }

</script>
</html>
