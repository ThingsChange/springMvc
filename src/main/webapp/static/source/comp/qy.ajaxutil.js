/**
 * Created by Andrew on 2017/3/5.
 * ajax 模块，基于jQuery，进行了一定的封装
 * @author 晴云
 * @moudle name qy.ajaxutil
 */
define(['jquery'],function ($) {
    /*使用严格模式*/
    'use strict';
    /**
     * 发送ajax请求的方法
     * @name sendAjax
     * @methodOf AjaxxUtil
     * @param path 向后台请求的URL
     * @param successBackFunction 成功后的回调函数，回调函数可接受两个参数；第一个为返回的数据，第二个为jquery传递的标准信息
     * @param errorBackFunction 失败后的回调函数，回调函数可接受三个参数，XMLHttpRequest,data,errorThrown
     *          1.如果ajax 发生了错误，例如服务器连接超时或者失败。
     *              XMLHttpRequest,errorThrown是jquery传递过来的标准信息
     *              data.errorMessage中含有翻译成中文的jQuery ajax的错误解释
     *              data.jsonMesage2FrontEnd没有值
     *          2. 如果后台发生了异常，并进行了正常的处理
     *              XMLHttpRequest, errorThrown这两个参数是null
     *              data.errorMessage是后台传递过来的用户可理解的错误信息
     *              data.jsonMessage2FrontEnd含有帮助前台程序处理错误的信息
     * @param settings ajax请求相关设置
     * @return
     */
    var sendAjax=function (path,successBackFunction,errorBackFunction,settings) {
        //默认配置
        var defaultSettings={
            'datatype':'json',
            'timeout':1500000,
            'async':true,
            'data':{},
            'type':'post'
        };
        //使用参数中的settings覆盖默认配置
        settings=$.extend(defaultSettings,settings);
        /*使用post方式进行提交*/
        $.ajax({
            type:settings.type,
            url:path,
            cache:false,
            data:settings.data,
            dataType:settings.datatype,
            timeout:settings.timeout,
            async:settings.async,
            success:function (data,textStatus) {
                if(data&&data.errorMessage&&typeof errorBackFunction ==='function'){
                    /*如果json中带有错误信息，且errorBackFunction是function,则执行errorBackFunction进行错误提示*/
                    errorBackFunction(null,data,null);
                }else if(typeof successBackFunction==='function'){
                    successBackFunction(data,textStatus);
                }
            },
            error:function (XMLHttpRequest,textStatus,errorThrown) {
                /*发生了ajax错误，此时并没有从后台得到任何帮助信息，我们只是简单的把英文错误翻译成中文*/
                var data={};
                switch (textStatus){
                    case 'error':
                        data.errorMessage='服务器错误';
                        break;
                    case 'timeout':
                        data.errorMessage='连接超时';
                        break;
                    case 'abort':
                        data.errorMessage='连接被终止';
                        break;
                    case 'parseerror':
                        data.errorMessage='解析错误';
                        break;
                    default:
                        data.errorMessage='连我都不知道出什么错了，你随便吧'
                }
                /*如果errorBackFunction 是函数的话*/
                if(typeof errorBackFunction==='function'){
                    errorBackFunction(XMLHttpRequest,data,errorThrown);
                }
            }
        });
    };
    var get = function (path,successBackFunction,errorBackFunction,settings) {
        settings=$.extend({type:"get"},settings);
        sendAjax(path,successBackFunction,errorBackFunction,settings);
    };
    var post = function (path,successBackFunction,errorBackFunction,settings) {
        sendAjax(path,successBackFunction,errorBackFunction,settings);
    };
    console.log("nimeice");
    var say=function () {
        console.log($);
    }
    say();
    return {
        sendAjax:sendAjax,
        get:get,
        post:post,
        say:say
    };
});