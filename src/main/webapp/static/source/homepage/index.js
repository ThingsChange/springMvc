/**
 * Created by Andrew on 2017/3/6.
 */
(function(require) {
    console.log(__ROOT__);
    require.config({
        baseUrl : __ROOT__+'/static/',
        paths : {
            'jquery' : 'lib/jquery/dist/jquery.min',
            'qy.ajaxutil.min':'dist/js/comp/qy.ajaxutil.min',
            'test.min':'dist/js/test/test.min'
        },
        shim:{
            "qy.ajaxutil'":['jquery']
        }
    });
    require(['qy.ajaxutil.min','test.min'],function (ajaxutil,test) {
        console.log("1223");
    });
})(window.require);