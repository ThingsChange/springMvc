//导入你所需要用的工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'); // sass/scss编译
    babel=require('gulp-babel'),
    rename=require('gulp-rename'),
    jshint = require("gulp-jshint"),
    uglify=require('gulp-uglify'),
    runSequence = require('run-sequence'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector');

var es6Src='source/**/*.es6',
    jsSrc='dist/**/*.js'
    cssSrc='css/**/*.css'


//转换es6文件为es5代码
gulp.task("toes5", function () {
    return gulp.src(es6Src)// ES6 源码存放的路径
        .pipe(babel())
        .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});
// 压缩 js 文件
gulp.task('min', function() {
    gulp.src(jsSrc)
        .pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
            preserveComments:'some'//并保留部分注释
        }))
        .pipe(rename({ suffix: '.min' })) // 重命名
        .pipe(gulp.dest('js'))
});
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch(es6Src, ['toes5'])
    // gulp.watch(jsSrc, ['min']);
    gulp.watch('css/**/*.scss',['sass']);
    // gulp.watch(jsSrc,['revCss','revJs','revHtml'])
});
// scss 任务
gulp.task('sass', function () {
    return sass('css/**/*.scss', { style: 'compressed' }) // 指明源文件路径、并进行文件匹配（style: 'compressed' 表示输出格式）
        .on('error', function (err) {
            console.error('Error!', err.message); // 显示错误信息
        })
        .pipe(gulp.dest('minicss')); // 输出路径
});
// 默认任务
gulp.task('default',['auto','sass','watch1','dev']);
//监听文件
gulp.task('watch1',function(){
    return gulp.watch('src/css/test.scss',['sass']);
    //监听 src/css/test.scss 文件，修改时自动执行 sass 任务。
});

//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revCss', function(){
    return gulp.src(cssSrc)
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/css'));
});


//js生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revJs', function(){
    return gulp.src(jsSrc)
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js'));
});


//Html替换css、js文件版本
gulp.task('revHtml', function () {
    return gulp.src(['rev/**/*.json', '../*.jsp'])
        .pipe(revCollector())
        .pipe(gulp.dest('../'));
});


//开发构建
gulp.task('dev', function (done) {
    condition = false;
    runSequence(
        ['revCss'],
        ['revJs'],
        ['revHtml'],
        done);
});