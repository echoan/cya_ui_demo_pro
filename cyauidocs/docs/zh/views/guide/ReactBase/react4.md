<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-09-15 15:18:17
 * @LastEditors: Chengya
 * @LastEditTime: 2025-09-15 16:14:53
-->

### React 中创建组件的方式

#### 一、创建函数组件(无状态组件)

1. 使用函数来创建无状态组件 返回 dom 结构
2. 将其以函数调用的方式（添加{}包裹）或者标签的形式在页面使用
3. 函数创建组件函数名首字母大写

示例

```jsx
import React from "react";
import ReactDOM from "react-dom";

//react 创建组件方式一 使用函数创建无状态组件
const CreateMyDom = () => {
  return <div>我是一个函数创建的无状态组件</div>;
};
const CreateMyDom1 = function () {
  return <div>我也是一个函数创建的无状态组件</div>;
};
function Helloworld() {
  return <div>Hello World</div>;
}
ReactDOM.render(
  <div>
    {CreateMyDom()}
    {CreateMyDom1()}
    {Helloworld()}
    <CreateMyDom />
    <CreateMyDom1 />
    <Helloworld />
  </div>,
  document.getElementById("root")
);
```

- #### 函数组件又叫无状态组件，是相对于 class 关键字 创建的类组件来说的，类组件有自己的状态，有组件的生命周期

#### 二、class 关键字 创建类组件

- #### class 关键字基本内容回顾

1. 回顾 class 关键字的基本使用

```jsx
//console.log('123')
//构造函数创建一个类
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("tom", 25);
//直接挂载到构造函数的属性，称为静态属性
Person.info = "这是一个人的类";
console.log(p1);
//通过new出来的实例访问到的属性，称为实例属性
console.log(p1.name);
console.log(p1.age);
//访问静态属性不能通过实例，要通过构造函数
console.log(p1.info); //undefined
console.log(Person.info);

//分割线
console.log("---------------------------------------------");
//使用class关键字创建类
class Animal {
  //constructor是类的构造器 每一个类中都有一个构造器，如果没有人为指定构造器的话，那么类内部的构造器可以认为是个空构造器 constructor(){}
  //构造器的作用，当执行new一个实例的时候，必然优先执行构造器中的代码
  constructor(name, age) {
    //实例属性
    this.name = name;
    this.age = age;
  }
  //在class内部创建静态属性，使用static关键字
  static info = "这是一个动物的类";
}
const animal1 = new Animal("旺财", 2);
console.log(animal1);
console.log(animal1.name);
console.log(animal1.age);
//访问静态属性同样要通过类
console.log(animal1.info); //undefined
console.log(Animal.info);
```

2. class 类的实例方法和静态方法

```jsx
function Person(name, age) {
  //实例属性
  this.name = name;
  this.age = age;
}
//静态属性
Person.info = "这是个人的类";

//添加一个实例方法
Person.prototype.say = function () {
  console.log("你好");
};
//添加一个静态方法
Person.show = function () {
  console.log("这是静态方法");
};
const p1 = new Person("tom", 20);
console.log(p1);
p1.say(); //调用实例方法
//p1.show();//报错
Person.show(); //调用静态方法

console.log("---------------------------------------------------");
//class创建类

class Animal {
  constructor(name, age) {
    //实例属性
    this.name = name;
    this.age = age;
  }
  //静态属性
  static info = "这是动物类";
  //添加实例方法
  say() {
    console.log("动物类的实例方法");
  }
  //添加静态方法
  static show() {
    console.log("这是动物类的静态方法");
  }
}
const animal1 = new Animal("阿黄", 3);
console.log(animal1);
//调用实例方法
animal1.say();
//调用静态方法
Animal.show();
```

3. class 类的继承

```jsx
//为类American和Chinese创建一个父类这里可以将其视为该两个类的原型对象 prototype
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //添加实例方法
  say() {
    console.log("你好");
  }
}

//创建一个美国人的类
//class类中，可以使用extends实现子类继承父类 语法 class 子类 extends 父类 {}
class American extends Person {}
const A1 = new American("jack", 25);
console.log(A1);
A1.say();

//创建一个中国人的类
class Chinese extends Person {
  //如果此时不定义该类的construntor,那么该类的constructor其实就是父类的constructor,如果此处定义该类的constructor，那么需要使用函数super()
  constructor(name, age, IDcard) {
    super(name, age);
    this.IDcard = IDcard;
  }
  move() {
    console.log("教练，我要打篮球");
  }
  /*3个问题
  1.为什么要在constructor中使用super()？如果一个子类通过extends关键字继承父类，那么在该子类自定义constructor时，必须先调用super;
  2.super是什么？ super是一个函数，其本质是父类的构造器，子类的super()其实是父类构造器constructor在子类的引用。
  3.调用了super后参数的传递？在定义类的constructor时可以为该类添加有别于父类实例属性的，并且仅属于该类的实例属性（比如该例下的IDcard属性），但是为了保证同样拥有父类定义的实例属性，需要传必要的参数，如这里传递的name,age，否则对应属性就是undefined.
  */
}
const C1 = new Chinese("林书豪", 30, 375435199389987654);
console.log(C1);
C1.say();
C1.move();
```

- #### class 关键字创建类组件

1. 使用 class 来创建 react 的有状态组件（有自己的私有数据以及生命周期）。
2. 组件首字母大写,组件继承 React.Component 父类，调用 render 函数 在函数内返回 dom 结构或 null
3. 以标签形式使用

示例

```jsx
mport React from 'react';
import  ReactDOM from 'react-dom'

//react创建组件的方式二 使用class来创建有状态组件
class MyDom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
     //render函数用来渲染当前组件对应的虚拟Dom元素
    render() {
        return (
            <div>
                我是react使用class来创建的有状态组件
            </div>
         );
    }
}
//调用ReactDom render函数来渲染
ReactDOM.render(<MyDom/>,document.getElementById('root'))
```
