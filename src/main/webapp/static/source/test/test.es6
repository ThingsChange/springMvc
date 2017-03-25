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
    getPoint(){
        const x=1;
        const y=2;
        return {x,y};
    }
}
var project = new Project("Journal");
project.start();
console.log("12212 ");
console.log(Object.assign({},project.getPoint()));

class testChild extends Project{
    constructor(name,age) {
        super(name);
        this.age=age;
    }
    sayAge(){
        console.log(this.age);
    }
}
var  projectChild=new testChild("张三",12);
projectChild.start();
projectChild.sayAge();