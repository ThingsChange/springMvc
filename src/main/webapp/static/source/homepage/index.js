/**
 * Created by Andrew on 2017/3/6.
 */
(function(require) {
    console.log(require);
    console.log(__ROOT__);
    require.config({
        baseUrl : '/static/dist/js/',
        paths : {
            'jquery' : '../../lib/jquery/dist/jquery.min',
            'ajaxutil':'comp/qy.ajaxutil.min',
            'test.min':'test/test.min',
            'util':'comp/uti12l.min'
        },
        shim:{
            "ajaxutil":['jquery']
        }
    });
    require(['ajaxutil','test.min','util'],function (ajaxutil,test,util) {

        console.log(ajaxutil);
        console.log(util);
        console.log(test);
        ajaxutil.say();
        console.log("1223");
    });
})(window.require);