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
<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="jquery-jbox/2.3/Skins/Bootstrap/jbox.css">
<link rel="stylesheet" href="<%=path %>/static/dist/css/test.min.css?v=9f28ad4461">

<script data-main="<%=path %>/static/dist/js/homepage/index.min.js?v=48e78c4be3" src="<%=path %>/static/lib/requirejs/require.js"></script>
<body>
    <h2>Hello javaScript，bye java!</h2>
    <input type="button"  class="btnSize" value="zou">
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
        <div id="top">尝试CSS样式</div>
        <div id="center">
            <div id="left" v-cloak>{{message1}}</div>
            <div id="right">
                <p v-cloak>{{agagin}}</p>
                <input type="text" v-model='agagin'>
            </div>
            <div id="centerDown" class="centerDown" >
                <ul>
                    <li v-for="lifeStyle in lifeStyles">
                        <span v-cloak>{{lifeStyle.name}}:</span>
                        <span v-cloak>{{lifeStyle.level}}</span>
                    </li>
                </ul>
            </div>
            <div id="testFunction">
                <p v-cloak>{{result}}</p>
                <button class="btnSize btn" v-on:click="reverseMessage">ReverseMessage</button>
                <div id="app">
                    <input v-model="newTodo" v-on:keyup.enter="addTodo">
                    <ul>
                        <li v-for="(todo,index) in todos">
                            <span v-cloak>{{todo.text}}</span>
                            <button v-on:click="removeTodo(index)">X</button>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
<script src="js/autocomplete.js"></script>
    <%--这个的引入是为了可以使用ES6的一些新的语法的转换--%>
<script data-main="<%=path %>/static/dist/js/homepage/index.min.js?v=48e78c4be3" src="<%=path %>/static/lib/requirejs/require.js"></script>
<script>

</script>
</body>
</html>