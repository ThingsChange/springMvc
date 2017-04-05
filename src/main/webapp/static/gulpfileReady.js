'use strict'
//引入gulp和gulp插件
var gulp = require('gulp'),
    babel=require('gulp-babel'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    jshint=require('gulp-jshint'),
    assetRev = require('gulp-asset-rev'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    runSequence = require('run-sequence'),
    sequence=require("gulp-sequence"),
    rev = require('gulp-rev'),
    sourcemaps=require('gulp-sourcemaps'),
    revCollector = require('gulp-rev-collector'),
    browserSync = require('browser-sync').create(),
    SSI         = require('browsersync-ssi'),
    concat      = require('gulp-concat'),
    plumber     = require('gulp-plumber'),
    zip         = require('gulp-zip');




//定义css、js源文件路径
var cssSrc = 'css/**/*.css',
    sassSrc='sass/**/*.scss',
    cssMinSrc = 'dist/css/**/*.css',
    jsSrc = 'source/**/*.js',
    jsMinSrc = 'dist/js/**/*.js',
    lessSrc = 'less/**/*.less',
    imgMinSrc = 'dist/images/*.{png,jpg,gif,ico}',
    htmlSrc = '../*.jsp',
    es6Src='source/**/*.es6',
    baseDir='dist'

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir:[baseDir],
            middleware:SSI({
                baseDir:baseDir,
                ext:'.shtml',
                version:'2.10.0'
            })
        },
        port: 8080
    });

    gulp.watch(sassSrc,['cssChange']);
    gulp.watch(es6Src, ['jsChange']);
    // gulp.watch(htmlSrc, ['revHtml']);
    /*gulp.watch(htmlSrc).on("change",function(){
        browserSync.reload;
    });*/
});

gulp.task('cssChange',function (done) {
        //condition = false;
        runSequence(  //此处不能用gulp.run这个最大限度并行(异步)执行的方法，要用到runSequence这个串行方法(顺序执行)才可以在运行gulp后顺序执行这些任务并在html中加入版本号
            ['scss'],['cssMin'],['revCss'],['revHtml'],done);
})
gulp.task('jsChange',function (done) {
    runSequence(  //此处不能用gulp.run这个最大限度并行(异步)执行的方法，要用到runSequence这个串行方法(顺序执行)才可以在运行gulp后顺序执行这些任务并在html中加入版本号
            ['toes5'],['jshint'],['uglify'],['revJs'],['revHtml'],done);
    }
)
//编译less 定义一个less任务（自定义任务名称）
gulp.task('less', function(){
    return gulp.src(lessSrc)  //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('css'));//编译后的路径
});
//编译scss 定义一个scss任务（自定义任务名称）
gulp.task('scss', function(){
    return gulp.src(sassSrc)  //该任务针对的文件
        .pipe(plumber())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass({outputStyle:"compact"}))
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
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());;  //输出文件夹
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

//压缩js
gulp.task('uglify',function(){
    return gulp.src(jsSrc)
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());;
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
        .pipe(plumber())
        .pipe(revCollector())
        .pipe(gulp.dest('../'))
        .pipe(browserSync.stream());;

});
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
    return gulp.src(es6Src)// ES6 源码存放的路径
        .pipe(babel())
        .pipe(gulp.dest("source")); //转换成 ES5 存放的路径
});

gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch(es6Src, ['toes5']);
    gulp.watch(jsSrc, ['uglify']);
});


gulp.task("javascript",function () {
    gulp.src(jsSrc)
        .pipe(sourcemaps.init())
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(sourcemaps.write('_srcmap'))
        .pipe(gulp.dest('dist/js'));
})


gulp.task('default', function (done) {
    //condition = false;
    runSequence(  //此处不能用gulp.run这个最大限度并行(异步)执行的方法，要用到runSequence这个串行方法(顺序执行)才可以在运行gulp后顺序执行这些任务并在html中加入版本号
        ['toes5'],
        ['less'],
        ['scss'],
        ['assetRev'],
        ['cssMin'],
        ['revCss'],
        ['uglify'],
        ['revJs'],
        // 'imageMin',
        ['revImage'],
        // ['htmlMin'],
        ['revHtml'],
        done);
});