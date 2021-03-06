//引入gulp和gulp插件
var gulp = require('gulp'),
    babel=require('gulp-babel'),
    mergeStream=require("merge-stream"),
    less = require('gulp-less'),
    jshint=require('gulp-jshint'),
    assetRev = require('gulp-asset-rev'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    browserSync=require('browser-sync'),
    runSequence = require('run-sequence'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    sourcemaps=require('gulp-sourcemaps'),
    autoprefixer=require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    reload=browserSync.create().reload;
gulp.task('help',function () {

    console.log('	gulp build			文件打包');

    console.log('	gulp watch			文件监控打包');

    console.log('	gulp help			gulp参数说明');

    console.log('	gulp server			测试server');

    console.log('	gulp -p				生产环境（默认生产环境）');

    console.log('	gulp -d				开发环境');

    console.log('	gulp -m <module>		部分模块打包（默认全部打包）');

});

//定义css、js源文件路径
var cssSrc = 'css/**/*.css',
    cssMinSrc = 'dist/css/**/*.css',
    jsSrc = 'source/**/*.js',
    jsMinSrc = 'dist/js/**/*.js',
    lessSrc = 'less/**/*.less',
    imgMinSrc = 'dist/images/*.{png,jpg,gif,ico}',
    htmlSrc = '../*.jsp',
    es6Src='source/**/*.es6';
//define a task for watch source change
gulp.task('serve',['less'], function() {
    browserSync({
        //指定服务器启动根目录
        // server: "dist",
        open: "false",
        directory: true,
        browser: "chrome",
        proxy: "localhost:8080",
        reloadDelay: 2000
    });
    //监听es6编译
    gulp.watch([es6Src,jsSrc], function (event) {
        runSequence(
            ['toes5'],
            ['jshint'],
            ['uglify'],
            ['revJs'],
            ['revHtml'],
            ['reload']
        )
    });
   gulp.watch(lessSrc, function (event) {
        runSequence(
            ['less'],
            ['cssMin'],
            ['revCss'],
            ['revHtml'],
            ['reload']
        )
    })
    //监听任何文件变化，实时刷新页面
 /*   gulp.watch(es6Src).on('change', browserSync.reload);
    gulp.watch(lessSrc).on('change', browserSync.reload);*/
});
//压缩js
gulp.task('uglify',function(){
    return gulp.src(jsSrc)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('dist/js'));
});
//压缩js
gulp.task('uglifyDis',function(){
    return gulp.src(jsSrc)
        // .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        // .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts', function() {  // 这个任务的名称是 scripts
    return gulp.src('source/js/+(a|b).js')  //
        .pipe(sourcemaps.init())  // 我们希望出错能回溯到最原始的文件，也就是 a.js 和 b.js 中去寻找错误的原因
        .pipe(concat('main.min.js'))  // 指定合并并压缩后的文件名
        .pipe(uglify())  // 压缩
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('dist/js'));
});

//编译less 定义一个less任务（自定义任务名称）
gulp.task('less', function(){
    return gulp.src(lessSrc)  //该任务针对的文件
        .pipe(sourcemaps.init())
        .pipe(less()) //该任务调用的模块
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'));//编译后的路径
});

//为css中引入的图片/字体等添加hash编码
gulp.task('assetRev', function(){
    return gulp.src(cssSrc)  //该任务针对的文件
        .pipe(assetRev()) //该任务调用的模块
        .pipe(gulp.dest('src')); //编译后的路径
});

//压缩css
gulp.task('cssMin', function() {
    return gulp.src(cssSrc)   //压缩的文件
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCss()) //执行压缩
        .pipe(gulp.dest('dist/css'));  //输出文件夹
});

//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revCss', function(){
    return gulp.src(cssMinSrc)
        .pipe(rev()) //文件名加MD5后缀
        .pipe(rev.manifest())  //必须有这个方法 生成一个rev-manifest.json
        .pipe(gulp.dest('dist/css'));  //将rev-manifest.json 保存到 dist/css 目录内
});

//jsHint代码检查
gulp.task('jshint', function() {
    gulp.src(jsSrc)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});



//js生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revJs', function(){
    return gulp.src(jsMinSrc)
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist/js'));
});


//压缩html
gulp.task('htmlMin',function(){
    var options = {
        collapseWhitespace:true,  //从字面意思应该可以看出来，清除空格，压缩html，这一条比较重要，作用比较大，引起的改变压缩量也特别大。
        collapseBooleanAttributes:true,  //省略布尔属性的值，比如：<input checked="checked"/>,那么设置这个属性后，就会变成 <input checked/>。
        removeComments:true,  //清除html中注释的部分，我们应该减少html页面中的注释。
        removeEmptyAttributes:true,  //清除所有的空属性。
        removeScriptTypeAttributes:true,  //清除所有script标签中的type="text/javascript"属性。
        removeStyleLinkTypeAttributes:true,  //清楚所有Link标签上的type属性。
        minifyJS:true,  //压缩html中的javascript代码。
        minifyCSS:true  //压缩html中的css代码。
    };
    return gulp.src(htmlSrc)
        .pipe(htmlmin(options))
        .pipe(gulp.dest('../'));
});

//Html替换css、js文件版本
gulp.task('revHtml', function () {
    return gulp.src(['dist/**/*.json', '../*.jsp'])
        .pipe(revCollector())
        .pipe(gulp.dest('../'));
});
gulp.task('reload',function () {
    browserSync.reload()
    // reload({ stream:true });
})
/*
//压缩image
gulp.task('imageMin', function () {
    gulp.src('images/!*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});*/

gulp.task('revImage', function(){
    return gulp.src(imgMinSrc)
        .pipe(rev())
        .pipe(rev.manifest())  //必须有这个方法
        .pipe(gulp.dest('dist/images'));
});









//转换es6文件为es5代码
gulp.task("toes5", function () {
   /* return mergeStream(
        gulp.src([es6Src])
            .pipe(babel())
            )
        .pipe(gulp.dest("source"))*/
       /* gulp.src('src/!**!/!*.js')
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(sourcemaps.write('.'))
        )
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));*/



    return gulp.src(es6Src)// ES6 源码存放的路径
        .pipe(babel())
        .pipe(gulp.dest("source")); //转换成 ES5 存放的路径
});

gulp.task("dev",function (done) {
    runSequence(  //此处不能用gulp.run这个最大限度并行(异步)执行的方法，要用到runSequence这个串行方法(顺序执行)才可以在运行gulp后顺序执行这些任务并在html中加入版本号
        ['toes5','less'],
        ['assetRev'],
        ['cssMin','uglify'],
        ['revCss','revJs'],
        // 'imageMin',
        ['revImage'],
        // ['htmlMin'],
        ['revHtml'],
        ['serve'],
        done);
})

gulp.task("dis",function (done) {
    runSequence(  //此处不能用gulp.run这个最大限度并行(异步)执行的方法，要用到runSequence这个串行方法(顺序执行)才可以在运行gulp后顺序执行这些任务并在html中加入版本号
        ['toes5','less'],
        ['assetRev'],
        ['cssMin','uglifyDis'],
        ['revCss','revJs'],
        // 'imageMin',
        ['revImage'],
        // ['htmlMin'],
        ['revHtml'],
        ['serve'],
        done);

})




gulp.task('default', function (done) {
    //condition = false;
    runSequence(  //此处不能用gulp.run这个最大限度并行(异步)执行的方法，要用到runSequence这个串行方法(顺序执行)才可以在运行gulp后顺序执行这些任务并在html中加入版本号
        ['toes5','less'],
        ['assetRev'],
        ['cssMin','uglify'],
        ['revCss','revJs'],
        // 'imageMin',
        ['revImage'],
        // ['htmlMin'],
        ['revHtml'],
        ['serve'],
        done);
});