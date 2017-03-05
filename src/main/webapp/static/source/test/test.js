"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Project = function () {
    function Project(name) {
        _classCallCheck(this, Project);

        this.name = name;
    }

    _createClass(Project, [{
        key: "start",
        value: function start() {
            return "Project " + this.name + " starting";
        }
        //其实我就是一个说的方法

    }, {
        key: "say",
        value: function say() {
            console.log("this project is funny");
        }
    }]);

    return Project;
}();

var project = new Project("Journal");
project.start();
console.log("成功了吗");
console.log("成功了吗12");
console.log("成功了吗123");
console.log("成功了吗1234");