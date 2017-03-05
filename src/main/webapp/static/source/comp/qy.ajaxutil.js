/**
 * Created by Andrew on 2017/3/5.
 * ajax 模块，基于jQuery，进行了一定的封装
 * @author 晴云
 * @moudle name qy.ajaxutil
 */
define(['jquery',function ($) {
    /*使用严格模式*/
    'use strict';
    /**
     * 发送ajax请求的方法
     * @name sendAjax
     * @methodOf AjaxxUtil
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
     * @return
     */
    var sendAjax=function (path,successBackFunction,errorBackFunction,settings) {
        
    }
    
}])