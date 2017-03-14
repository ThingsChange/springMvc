/**
 * Created by wanglijun on 2017/3/14.
 */
"use strict";

var path = require('path');

/* 环境信息 */

var source = 'source',

    develop = 'develop',

    production = 'production';



/* src路径 */

var src = {

    tpl: 'tpl/**',

    css: 'styles/**/*.less',

    js: 'lib/**/*.js',

    html: '/**.html',

    img: 'images/**'

}

/* 模块信息 */

var modules = {

    "t1": {

        src: 't1',

        dest: 't1',

        name: 't1',

        css_files: 'styles/app.less'

    },

    "t2": {

        src:'t2',

        dest: 't2',

        name: 't2'

    },

    "index": {

        src:'index',

        dest: 'index',

        name: 'index'

    },

    "common": {

        src:'common',

        dest: 'common',

        name: 'common'

    }

};
var FileConfig  = function () {
    FileConfig.prototype.modules = function () {

        return modules;

    };
};
module.exports = new FileConfig();