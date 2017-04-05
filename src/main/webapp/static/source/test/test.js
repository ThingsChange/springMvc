"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    }, {
        key: "getPoint",
        value: function getPoint() {
            var x = 1;
            var y = 2;
            return { x: x, y: y };
        }
    }]);

    return Project;
}();

var project = new Project("Journal");
project.start();
console.log("12成功了22145吗23");
console.log("1245567");
console.log(Object.assign({}, project.getPoint()));

var testChild = function (_Project) {
    _inherits(testChild, _Project);

    function testChild(name, age) {
        _classCallCheck(this, testChild);

        var _this = _possibleConstructorReturn(this, (testChild.__proto__ || Object.getPrototypeOf(testChild)).call(this, name));

        _this.age = age;
        return _this;
    }

    _createClass(testChild, [{
        key: "sayAge",
        value: function sayAge() {
            console.log(this.age);
        }
    }]);

    return testChild;
}(Project);

var projectChild = new testChild("张三", 12);
projectChild.start();
projectChild.sayAge();