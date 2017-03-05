class Project {
    constructor(name) {
        this.name = name;
    }
    start() {
        return "Project " + this.name + " starting";
    }
    //其实我就是一个说的方法
    say(){
        console.log("this project is funny");
    };
}
var project = new Project("Journal");
project.start();
console.log("成功了吗");