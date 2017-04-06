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
            'util':'comp/uti12l.min',
            'vue':'../../lib/vue/dist/vue.min'
        },
        shim:{
            "ajaxutil":['jquery']
        }
    });
    require(['ajaxutil','test.min','util','vue'],function (ajaxutil,test,util,vue) {
        new vue({
            el:'#left',
            data:{
                message1:'Hello Vue.js! '
            }
        });
        new vue({
            el:'#right',
            data:{
                agagin:'Hello again'
            }
        });
        var centerDown=new vue({
            el: '#centerDown',
            data: {
                lifeStyles: [
                    {name: '高冷范儿', level: '3'},
                    {name: '避重就轻', level: '5'}
                ]
            }
        });
        var reverseMessage=new vue({
            el:"#testFunction",
            data:{
                result:'It\'s a Function ',
                newTodo:'',
                todos:[{text:'逗比'}]
            },
            methods:{
                reverseMessage:function () {
                    this.result=this.result.split("").reverse().join('');
                },
                addTodo:function () {
                    var text = this.newTodo.trim();
                    if (text){
                        this.todos.push({text:text});
                        this.newTodo='';
                    }
                },
                removeTodo:function (index) {
                    this.todos.splice(index,1)
                }

            }
        });
        console.log(ajaxutil);
        console.log(util);
        console.log(test);
        console.log("1223");
        console.log("1223");
    });
})(window.require);