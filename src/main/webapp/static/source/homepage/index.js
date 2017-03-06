/**
 * Created by Andrew on 2017/3/6.
 */
(function(require) {
    require.config({
        baseUrl : '../static/',
        paths : {
            'jquery' : 'lib/jquery/dist/jquery.min',
            'qy.ajaxutil':'../static/dist/js/comp/qy.ajaxutil.min',
            'test':'dist/js/test/test.min'
        },
        shim:{
            "qy.ajaxutil'":['jquery']
        }
    });
    // require(['qy.ajaxutil','test']);
})(window.require);