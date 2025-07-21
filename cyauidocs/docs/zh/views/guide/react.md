<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-05-25 17:04:51
 * @LastEditors: Chengya
 * @LastEditTime: 2025-07-21 13:43:45
-->

# React 相关内容

## React 基础内容

### React 语法

#### 1.React 中创建虚拟 dom 的最基本的代码

```jsx
//引入react包
import React from "react";
import ReactDom from "react-dom";
// 创建虚拟dom
const myDom = React.createElement("h1", { id: "Box" }, "我是一个h1标签");
ReactDom.render(myDom, document.getElementById("app"));
//这样创建虚拟dom比较麻烦，我们希望以一种写html的方式来快速的创建虚拟dom，这就需要使用jsx语法，并配合babel来使用
```

#### 2.React 中使用 jsx 语法来创建虚拟 dom

```jsx
import React from "react";
import ReactDom from "react-dom";
//使用jsx语法在js中以一种写html语言的方式来创建虚拟dom效率更高
const myDom = (
  <div id="Box">
    我是jsx语法创建的dom
    <h2>我是一个h2标签</h2>
  </div>
);

//调用ReactDom.render来将虚拟dom挂载到页面
ReactDom.render(myDom, document.getElementById("app"));
```

#### 3.React 中 jsx 语法的基本使用

```jsx
import React from "react";
import ReactDom from "react-dom";

const a = 100;
const strone = "香港是中国的一部分";
const flag = true;
const title = "flower";
const hh1 = <div>大家好我是div</div>;
const arrone = [
  <h3>肯巴沃克</h3>,
  <h3>马库斯斯玛特</h3>,
  <h3>杰森塔图姆</h3>,
  <h3>杰伦布朗</h3>,
];
const arrtwo = ["大连", "北京", "济南", "青岛"];
const cityarr = [];
//forEach方法
arrtwo.forEach((item) => {
  const temp = <p key={item}>{item}</p>;
  cityarr.push(temp);
});
//map方法
const cityarrtwo = arrtwo.map((item) => {
  return <p key={item}>{item}</p>;
});
ReactDom.render(
  <div>
    {/*渲染数字*/}
    {a + 100}
    <hr />
    {/*渲染字符串*/}
    {strone}
    <hr />
    {/*渲染布尔值*/}
    {flag ? "yes" : "no"}
    <hr />
    {/*为属性添加属性值*/}
    <p title={title}>{title}</p>
    <hr />
    {/*渲染jsx语法*/}
    {hh1}
    {/*渲染jsx元素数组因为这里没有加key所以会有警告*/}
    {arrone}
    {/*forEach方法构建的cityarr*/}
    {cityarr}
    {/*map方法构建的cityarrtwo*/}
    {cityarrtwo}
    {/*将普通的字符串数组转化为jsx数组并且渲染到页面上*/}
    {arrtwo.map((item) => (
      <h3 key={item} className={item}>
        {item}
      </h3>
    ))}
    <label htmlFor={a}>label标签中用htmlFor来替换label的for</label>
  </div>,
  document.getElementById("app")
);
```

#### 4.React 中最基本传参

```jsx
import React from "react";
import ReactDom from "react-dom";
//引入创建的Helloword组件
import Helloword from "./components/Helloword.jsx";
//构造函数创建组件
// function Helloword(props){
//     console.log(props);
//     //props.age = 100;
//     //console.log(props);//props只读无法修改
//     return <div>我是一个构造函数创建出来的组件,我的名字叫{props.name} 我的年龄是{props.age}岁</div>
// }
const obj = {
  name: "Tom",
  age: "30",
};
//解构的使用
const objone = {
  name: "cat",
  age: 30,
};
const objtwo = {
  sex: "male",
  ...objone,
};
console.log(objtwo);
ReactDom.render(
  <div>
    {/* 直接把创建的组件的名称 以标签的形式 放在页面即可使用 */}
    <Helloword name={obj.name} age={obj.age}></Helloword>
  </div>,
  document.getElementById("app")
);
```

##### HelloWorld 组件

```jsx
import React from "react";
//将index.js中创建的一个组件抽离为一个单独的文件
function Helloword(props) {
  return (
    <div>
      我是一个构造函数创建出来的组件,我的名字叫{props.name} 我的年龄是
      {props.age}岁
    </div>
  );
}
//将组件文件导出
export default Helloword;
```

#### 5.class 关键字的使用

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

#### 6.class 类的实例方法和静态方法

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

#### 7.class 类的继承

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

#### 8.使用 class 类来创建一个 React 的组件(类组件)

```jsx
import React from "react";
//以上等同于 import React,{Component} from 'react'
import ReactDom from "react-dom";

//class创建一个组件
class Onecomponent extends React.Component {
  constructor() {
    super();
  }
  //render函数用来渲染当前组件对应的虚拟Dom元素
  render() {
    //return null
    return <div>我是第一个用class类创建出来的react组件</div>;
  }
}

//调用ReactDom render函数来渲染
ReactDom.render(
  <div>
    <Onecomponent></Onecomponent>
  </div>,
  document.getElementById("app")
);
```

#### 9.class 创建的组件的传参以及私有数据

```jsx
import React from "react";
//以上等同于 import React,{Component} from 'react'
import ReactDom from "react-dom";
//class创建一个组件
class Onecomponent extends React.Component {
  constructor() {
    super();
    //this.state在这里就相当于vue中的data(){return{}}
    this.state = {
      message: "我是class关键字创建的组件的私有数据",
    };
  }
  //render函数用来渲染当前组件对应的虚拟Dom元素
  render() {
    //return null
    //this.props.name = 'jack' 试图修改props的属性 会报错 。无论是使用class关键字创建的组件还是使用构造函数创建的组件 props都是只读的不可修改其属性。
    //class创建的组件的私有数据是可以被修改的，它是可读可写的
    this.state.message = "我被修改了";
    //class关键字创建的组件在使用外界的参数时，不需要接受，直接使用this.props.属性名即可访问，this代表的是当前组件创建的实例对象
    return (
      <div>
        我是第一个用class类创建出来的react组件---{this.props.name}-----
        {this.props.age}------{this.state.message}
      </div>
    );
  }
}
const user = {
  name: "tom",
  age: 20,
};
//调用ReactDom render函数来渲染
ReactDom.render(
  <div>
    <Onecomponent {...user}></Onecomponent>
  </div>,
  document.getElementById("app")
);
```

#### 10.使用 class 关键字创建一个列表组件

```jsx
import React from "react";
import ReactDom from "react-dom";

class Pinglun extends React.Component {
  constructor() {
    super();
    this.state = {
      TextList: [
        { id: 0, name: "张三", words: "哈哈,沙发" },
        { id: 1, name: "李四", words: "啦啦,板凳" },
        { id: 2, name: "王五", words: "哈哈,凉席" },
        { id: 3, name: "赵六", words: "哈哈,砖头" },
        { id: 4, name: "田七", words: "哈哈,楼下山炮" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h3>这是一个评论列表</h3>
        {this.state.TextList.map((item) => (
          <div key={item.id}>
            <h2>评论人：{item.name}</h2>
            <p>评论内容：{item.words}</p>
          </div>
        ))}
      </div>
    );
  }
}
ReactDom.render(
  <div>
    <Pinglun></Pinglun>
  </div>,
  document.getElementById("app")
);
```

#### 11.对以上列表组件的抽离

```jsx
import React from "react";
import ReactDom from "react-dom";
//构造函数创建一个无状态组件应用于评论列表（组件的嵌套）
function Getpinglun(props) {
  return (
    <div>
      <h2>评论人：{props.name}</h2>
      <p>评论内容：{props.words}</p>
    </div>
  );
}
class Pinglun extends React.Component {
  constructor() {
    super();
    this.state = {
      TextList: [
        { id: 0, name: "张三", words: "哈哈,沙发" },
        { id: 1, name: "李四", words: "啦啦,板凳" },
        { id: 2, name: "王五", words: "哈哈,凉席" },
        { id: 3, name: "赵六", words: "哈哈,砖头" },
        { id: 4, name: "田七", words: "哈哈,楼下山炮" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h3>这是一个评论列表</h3>
        {this.state.TextList.map((item) => (
          <Getpinglun {...item} key={item.id}></Getpinglun>
        ))}
      </div>
    );
  }
}
ReactDom.render(
  <div>
    <Pinglun></Pinglun>
  </div>,
  document.getElementById("app")
);
```

#### 12. React 中 事件的绑定

```jsx
import React from "react";
import ReactDom from "react-dom";

import BindEvent from "@/components/BindEvent";

ReactDom.render(
  <div>
    <BindEvent></BindEvent>
  </div>,
  document.getElementById("app")
);
```

##### BindEvent 组件内容

```jsx
import React from "react";
export default class BindEvent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        我是BindEvent组件
        <hr />
        {/* 在react中有一套自己的事件绑定机制，事件名小驼峰命名，参数必须为一个函数*/}
        <button
          onClick={function () {
            console.log("我是react当中的点击事件");
          }}
        >
          onclick点击
        </button>
        <hr />
        <button
          onMouseOver={function () {
            console.log("我是react当中的onmouseover事件");
          }}
        >
          onmouseover事件
        </button>
        <hr />
        <button
          onMouseMove={function () {
            console.log("我是react当中的onmousemove事件");
          }}
        >
          onmousemove事件
        </button>
        <hr />
        {/* 调用该实例对象下的clickEvent方法，点击才会执行 */}
        <button onClick={this.clickEvent}>点击</button>
        <hr />
        {/* 调用该实例对象下的clickEvent方法，初始化时就执行一次 */}
        <button onClick={this.clickEvent()}>点击</button>
        <hr />
        {/* react中绑定事件常用方式（箭头函数） 箭头函数内部，this指向外部环境的this，因此这里的this指向的是该实例 */}
        <button
          onClick={() => {
            this.clickEvent();
          }}
        >
          点击
        </button>
      </div>
    );
  }
  // clickEvent(){
  //     console.log('哈哈哈哈哈')
  // }
  //将clickEvent改变为一个箭头函数
  clickEvent = () => {
    console.log("哈哈哈哈");
  };
}
```

#### 12.React 中修改组件实例的私有属性以及注意事项

```jsx
import React from "react";

export default class BindEventTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "哈哈哈哈哈",
      name: "tom",
      age: 20,
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.changeState(1, 2);
          }}
        >
          点击按钮修改state的message
        </button>
        <p>{this.state.message}</p>
      </div>
    );
  }
  changeState = (n1, n2) => {
    //这里的n1,n2是接收的调用该方法时的参数
    //在react，想要修改或者为state重新赋值，不能使用this.state.xxxx = 值的方式，应该调用react提供的this.setState({属性:值})的方式
    this.setState(
      {
        message: "我被修改了" + n1 + n2,
      },
      function () {
        //修改状态值后的回调
        console.log(this.state.message);
      }
    );
    console.log(this.state.message);
    //在React中推荐使用this.setState({})来修改状态值，并且在setState中，只会把对应的state状态更新，而不会覆盖其他的state状态
    //另外this.setState是一个异步的操作，所以在通过这种方式修改state后，如果希望第一时间得到修改过后的状态值，需要在this.setState({},callback)执行回调函数callback这里获取
  };
}
```

#### 13.模拟 Vue 在 React 中实现数据的双向绑定

```jsx
import React from "react";

export default class BindEventThree extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "哈哈哈哈哈",
      name: "tom",
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.changeState();
          }}
        >
          点击按钮修改state的message
        </button>
        <p>{this.state.message}</p>
        {/* react中当为input绑定value值后，必须要做的事情，要么为input 添加readOnly属性，要么为input添加onChange处理事件 */}
        {/* <input type="text" style={{width:'100%'}} value={this.state.message} readOnly /> */}
        <input
          type="text"
          style={{ width: "100%" }}
          value={this.state.message}
          onChange={(e) => {
            this.textChange(e);
          }}
          ref="txt"
        />
      </div>
    );
  }

  //每当文本框的内容变化，自然会调用该事件
  textChange = (e) => {
    //onChange事件中用于获取文本框的值有两种方案
    //方案1、通过参数e来获取
    console.log(e.target.value);
    //方案2、通过refs来获取
    console.log(this.refs.txt.value);
    const newValues = e.target.value;
    this.setState({
      message: newValues,
    });
  };
  changeState = () => {
    this.setState(
      {
        message: "啦啦啦啦啦啦",
      },
      console.log("我其实应该是一个回调函数")
    );
  };
}
```

#### 14.React 中 通过 static defaultProps 来为组件接受的某个属性设置默认值

```jsx
/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2019-10-30 17:00:24
 * @LastEditors: Chengya
 * @LastEditTime: 2025-07-16 17:50:30
 */
import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //在封装一些组件的时候，组件内部肯定有一些数据是必须的，哪怕用户并没有传递一些相关的启动参数，这个时候在组件的内部，尽量给自己提供一个默认值
  //在组件中通过static defaultProps来为组件设置默认属性值
  static defaultProps = {
    oneCount: 10,
    //设置默认属性值之后，如果外界没有传递相关参数，那么设置的该属性值在组件初始化的时候就会派上用场，当有相关参数传递的时候，那么外界传递的参数就会替代该设置的默认值。
  };
  render() {
    return (
      <div>
        <h3>这是一个Counter计数器组件</h3>
        <button>点击+1</button>
        <hr />
        <h3>当前的数量是{this.props.oneCount}</h3>
      </div>
    );
  }
}
```

#### 15.React 中 通过 static propTypes 对组件接受的某个属性的类型进行约束和校验

```jsx
/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2019-10-30 17:00:24
 * @LastEditors: Chengya
 * @LastEditTime: 2025-07-16 17:55:44
 */
import React from "react";
//导入参数传递校验的模块
import dataRules from "prop-types";

export default class CounterTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //在封装一些组件的时候，组件内部肯定有一些数据是必须的，哪怕用户并没有传递一些相关的启动参数，这个时候在组件的内部，尽量给自己提供一个默认值
  //在组件中通过static defaultProps来为组件设置默认属性值
  static defaultProps = {
    oneCount: 10,
    //设置默认属性值之后，如果外界没有传递相关参数，那么设置的该属性值在组件初始化的时候就会派上用场，当有相关参数传递的时候，那么外界传递的参数就会替代该设置的默认值。
  };

  //封装组件的目的是为了方便高效的开发,在封装组件的时候通常会为组件的一些必要数据进行校验，保证传递的参数是符合要求的，如果不符合要求，就在控制台给出警告。

  //React中通常会使用static propTypes对象对于外界传递的参数做类型校验，在React15的版本之前，prop-types并没有从React中抽离出来，在15的版本之后，才从React中抽离了出来，作为单独的一部分。
  //也就是说，在React15的版本之前，不需要安装该模块，可以直接使用，但是在15版本之后，需要手动安装，才可以使用。 npm install prop-types
  static propTypes = {
    //定义该组件传递的参数类型为number类型
    oneCount: dataRules.number,
  };
  render() {
    return (
      <div>
        <h3>这是一个Counter计数器组件</h3>
        <button>点击+1</button>
        <hr />
        <h3>当前的数量是{this.props.oneCount}</h3>
      </div>
    );
  }
}
```

#### 16.React 类组件的生命周期中 组件创建阶段的生命周期函数

```jsx
import React from "react";
//导入参数传递校验的模块
import dataRules from "prop-types";

export default class CounterThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      //将props.oneCount赋值给state中的一个属性
      count: props.oneCount,
    };
  }
  static defaultProps = {
    oneCount: 10,
  };
  static propTypes = {
    oneCount: dataRules.number,
  };
  //componentWillMount 组件将要挂载到页面时触发该函数,此时组件还没有挂载到页面上
  //而且内存中，虚拟的Dom结构还没有被创建出来，但是初始化时的默认属性和this.state的属性是可以在函数中访问到的，可以调用组件中定义的方法
  UNSAFE_componentWillMount() {
    console.log(document.getElementById("oneDom")); //null 此时虚拟dom还未创建
    console.log(this.props.oneCount); //100
    console.log(this.state.message); //hello
    this.oneMethod(); //我是oneMethod方法
  }
  render() {
    console.log(document.getElementById("oneDom"));
    console.log("-------------------");
    //在return之前 虚拟Dom还未创建完成，页面是空的，拿不到任何元素
    return (
      <div>
        <h3 id="oneDom">这是一个Counter计数器组件</h3>
        <button id="btn" onClick={() => this.changeData()}>
          点击+1
        </button>
        <hr />
        <h3>当前的数量是{this.state.count}</h3>
      </div>
    );
    //return 执行完毕之后，虚拟Dom结构已经创建完，但还没有挂载到页面上
  }
  componentDidMount() {
    //该阶段类比Vue中生命周期的mounted
    //如果我们想操作dom元素，最早可以在该阶段去操作
    console.log(document.getElementById("oneDom"));

    // document.getElementById('btn').onclick = ()=>{
    //     // console.log('原生js在react绑定的事件')
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }
  }
  oneMethod() {
    console.log("我是oneMethod方法");
  }
  changeData = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}
```

#### 17. React 类组件的生命周期中 组件运行阶段的生命周期函数

```jsx
import React from "react";
//导入参数传递校验的模块
import dataRules from "prop-types";

export default class CounterThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
      count: props.oneCount,
    };
  }
  static defaultProps = {
    oneCount: 10,
  };
  static propTypes = {
    oneCount: dataRules.number,
  };
  UNSAFE_componentWillMount() {
    console.log(document.getElementById("oneDom")); //null 此时虚拟dom还未创建
    console.log(this.props.oneCount); //100
    console.log(this.state.message); //hello
    this.oneMethod(); //我是oneMethod方法
  }
  render() {
    //在组件运行阶段，componentWillUpdate()过后还会再次调用render()函数，在render()执行完毕之前，页面上的dom还是旧的。
    console.log(
      this.refs.h3 &&
        this.refs.h3.innerHTML + "--------------运行阶段调用render()时"
    );

    return (
      <div>
        <h3 id="oneDom">这是一个Counter计数器组件</h3>
        <button id="btn" onClick={() => this.changeData()}>
          点击+1
        </button>
        <hr />
        <h3 ref="h3">当前的数量是{this.state.count}</h3>
      </div>
    );
  }
  componentDidMount() {
    console.log(document.getElementById("oneDom"));
  }
  shouldComponentUpdate(nextProps, nextState) {
    //shouldComponentUpdate()判断组件是否需要更新 返回布尔值 返回true则会调用render()重新渲染页面，之后数据和页面都是最新的
    //如果返回false，不会执行后续的生命周期函数，render()函数也不会调用，将会继续返回组件的运行中的状态，数据得到更新，组件的state状态会被修改，但是页面并没有重新渲染，是旧的。
    //在该组件中，通过this.state.count拿到的属性值是旧的，并不是最新的，在这里可以通过nextProps和nextState去获取到对应的最新的属性值
    // return this.state.count%2?false:true
    return nextState.count % 2 ? false : true;
    //只有偶数时才更新页面
  }
  //组件将要更新阶段的状态，在该状态下，内存中的虚拟dom和页面上的dom还都是旧的，所以在该阶段要谨慎操作dom，因为很可能只是操作的旧的Dom
  componentWillUpdate() {
    console.log(this.refs.h3.innerHTML + "---------------componentWillUpdate");
    //打印出来的是旧dom的innerHTML
  }
  //组件完成了更新的状态，在该状态下，数据和内存中的虚拟dom以及页面上的dom都是最新的，此时可以放心大胆的去操作dom
  componentDidUpdate() {
    console.log(this.refs.h3.innerHTML + "---------------componentDidUpdate");
  }
  oneMethod() {
    console.log("我是oneMethod方法");
  }
  changeData = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}
```

#### 18.React 中 类组件的生命周期中 组件运行阶段的生命周期函数 componentWillReceiveProps 的示例

```jsx
import React from "react";
import DataTypes from "prop-types";

export default class CounterFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "我是子组件",
    };
  }
  render() {
    return (
      <div>
        <h3>我是父组件</h3>
        <button onClick={() => this.changeData()}>点击改变数据</button>
        <hr />
        <Son msg={this.state.message} oneCount={100}></Son>
      </div>
    );
  }
  changeData = () => {
    this.setState({
      message: "哈哈哈，哈哈哈",
    });
  };
}
class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    oneCount: 10,
  };
  static propTypes = {
    oneCount: DataTypes.number,
  };
  render() {
    return (
      <div>
        <h5>{this.props.msg}</h5>
        <p>{this.props.oneCount}</p>
      </div>
    );
  }
  //第一次渲染时是不会触发该状态的，在传递的参数被修改后才会触发
  UNSAFE_componentWillReceiveProps(nextProps) {
    //想要获得最新的属性值，要通过其参数列表来获取
    console.log(this.props.msg + "------" + nextProps.msg);
    //我是子组件 -------哈哈哈，哈哈哈
  }
}
```

#### 19.React 中 类组件卸载阶段的生命周期函数 componentWillUnMount

```text
React类组件卸载阶段 只有一个卸载相关的生命周期钩子 componentWillUnMount.
可以在这里执行清理操作，比如清除定时器、取消网络请求、取消订阅等。
```

#### 20. React 类组件中绑定 this 并传参的三种方式

```jsx
import React from "react";
import DataTypes from "prop-types";

export default class CounterSix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "绑定this并传参的几种方式",
      datamsg: "我是数据",
    };
    //绑定this并传参的方式二:在构造函数中绑定并传参
    //当为一个函数绑定bind,改变this的指向后，bind函数调用的结果，有一个返回值，这个返回值是改变this指向的函数的引用
    this.changedata2 = this.changedata2.bind(this, 1000, 2000);
  }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        {/* bind的作用，为前面的函数，修改函数内部的this指向，让函数内部的this指向bind参数列表中的第一个参数。
            bind和call和apply之间的区别
            call和apply在修改完this的指向后会立即调用前面的函数
            但是bind不会立即调用。bind参数列表中的第一个参数是用来修改this指向的，之后的参数，会被当做将来调用前面的函数的参数传递进去。 */}
        <button onClick={this.changedata.bind(this, 100, 200)}>
          绑定this并传参的方式一
        </button>
        <hr />
        <button onClick={this.changedata2}>绑定this并传参的方式二</button>
        <hr />
        <button onClick={() => this.changedata3(200, 500)}>
          绑定this并传参的方式三
        </button>
        <hr />
        <p>{this.state.datamsg}</p>
      </div>
    );
  }
  //值的注意的是，因为上面绑定处理方法的时候，使用了bind，所以这里可以不再使用箭头函数。
  changedata(num1, num2) {
    this.setState({
      datamsg: "我被改变了" + num1 + num2,
    });
  }
  changedata2(num1, num2) {
    this.setState({
      datamsg: "我被改变了" + num1 + num2,
    });
  }
  changedata3(num1, num2) {
    this.setState({
      datamsg: "我被改变了" + num1 + num2,
    });
  }
}
```

#### 21.使用 react 类组件 创建的一个评论列表的实例

```jsx
import React from "react";
import Plitem from "@/components/Plitem";
import Sendpl from "@/components/Sendpl";
export default class PList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 0, name: "tom", words: "hello" },
        { id: 1, name: "jack", words: "world" },
        { id: 2, name: "cat", words: "byebye" },
      ],
    };
  }
  render() {
    return (
      <div>
        {/* 评论标题 */}
        <h3>评论列表</h3>

        {/* 发表评论组件 */}
        {/* 在react中传递给组件数据或者方法都可以使用this.props.属性（或者方法名）来调用 ，这与Vue中数据传递使用props，方法传递使用this.$emit(方法名)是有不同的*/}
        {/* 在该组件点击发表评论时应该再一次调用UNSAFE_componentWillMount中执行的方法getPL()，刷新评论列表 */}
        <Sendpl reloadlist={this.getPL}></Sendpl>

        {/* 评论列表组件 */}
        {this.state.list.map((item) => {
          return <Plitem {...item} key={item.name}></Plitem>;
        })}
      </div>
    );
  }
  //获取评论数组
  getPL = () => {
    var getpl = JSON.parse(localStorage.getItem("lists") || "[]");
    this.setState({
      list: getpl,
    });
  };
  //虚拟Dom挂载到页面之前调用getPL该方法，从本地取出数据替换掉之前的假数据
  UNSAFE_componentWillMount() {
    this.getPL();
  }
}
```

##### 以上例子中发表评论的组件 Sendpl

```jsx
import React from "react";
export default class Sendpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <label htmlFor="pinglunren">评论人</label>
        <br />
        <input type="text" name="pinglunren" ref="pinglunren" />
        <br />
        <label htmlFor="contentBox">评论内容</label>
        <br />
        <textarea
          name="contentBox"
          id="contentBox"
          cols="30"
          rows="10"
          ref="contentBox"
        ></textarea>
        <button onClick={() => this.Addpl()}>发表评论</button>
      </div>
    );
  }
  Addpl = () => {
    //1、获取评论人和评论内容
    //2、从本地存储中获取获取之前的评论数组
    //3、把最新的评论人和评论内容放到数组中
    //4、把最新的数组存储在本地并清空相关区域
    const content = {
      name: this.refs.pinglunren.value,
      words: this.refs.contentBox.value,
    };
    const pllist = JSON.parse(localStorage.getItem("lists") || "[]");
    pllist.unshift(content);
    localStorage.setItem("lists", JSON.stringify(pllist));
    console.log(localStorage.getItem("lists"));
    this.refs.pinglunren.value = this.refs.contentBox.value = "";
    //调用传递的getPL方法刷新评论列表
    this.props.reloadlist();
  };
}
```

##### 以上例子中 评论列表展示组件

```jsx
import React from "react";
export default class Plitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ border: "1px solid #ccc", margin: "15px 0" }}>
        <h3>评论人：{this.props.name}</h3>
        <p>评论内容：{this.props.words}</p>
      </div>
    );
  }
}
```

#### 22.React 中使用 context 来实现父子/父孙组件之间的数据的共享和传递

```jsx
import React from "react";
export default class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  render() {
    return (
      <div>
        <h2>我是父组件</h2>
        <Son color={this.state.color}></Son>
      </div>
    );
  }
}
class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h4>我是子组件</h4>
        <Grandson color={this.props.color}></Grandson>
      </div>
    );
  }
}
class Grandson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ color: this.props.color }}>
        <h5>我是孙子组件</h5>
      </div>
    );
  }
}
```

##### 以上案例,孙组件如果想用到父组件的 state 里的值，是经过了多次传导才得到的，而且子组件并没有使用该值，但是也参与了其中，这样子看上去过于繁琐，所以为了避免有时候出现这种状况，可以使用 react 中的 Context 的属性。

```jsx
/*使用context来实现父孙组件间的数据传递和共享*/
import React from "react";
import ReactTypes from "prop-types";
export default class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  // react中Context的使用
  //1、在父组件中，创建一个function，它有个固定的名称,getChildContext,这个方法内部返回一个对象，将需要共享给其他子组件的数据包含在其中。
  //2、需要使用属性校验，规定共享给子组件的数据的类型,childContextTypes
  getChildContext() {
    return {
      color: this.state.color,
    };
  }
  static childContextTypes = {
    color: ReactTypes.string,
  };
  render() {
    return (
      <div>
        <h2>我是父组件</h2>
        <Son></Son>
      </div>
    );
  }
}
class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h4>我是子组件</h4>
        <Grandson></Grandson>
      </div>
    );
  }
}
class Grandson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //使用父组件共享的数据时同样也是必须先进行校验
  static contextTypes = {
    color: ReactTypes.string,
  };
  render() {
    return (
      <div>
        <h5 style={{ color: this.context.color }}>
          我是孙子组件----{this.context.color}
        </h5>
      </div>
    );
  }
}
```

## tsx 中创建组件的方式

### 1. 类组件的方式创建组件

### 2. 函数组件的方式创建组件

#### 类组件方式创建组件

```tsx
import React, { Component } from "react";
/*使用接口来约束将来接收到的props的参数类型 默认空对象*/
interface Props {}
/*约束当前类组件状态的类型*/
interface State {
  title: string;
  text?: string; //可选状态的写法，该状态在当前组件中可有可无
}
class Test extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { title: "hello world", text: "你好，世界" };
  }
  changeTitle = () => {
    this.setState({
      title: "hello new world",
    });
  };
  render() {
    return (
      <div className="test_container">
        <div className="text_box">
          {this.state.title}-{(this.state.text && this.state.text) || "--"}
        </div>
        <div className="button_container" onClick={this.changeTitle}>
          <div>更改title</div>
        </div>
      </div>
    );
  }
}
export default Test;

/*
    tsx 中 如果定义的组件只是用于内容的展示，本身没有复杂的状态需要管理、组件内部也不需要使用生命周期、也不需要访问实例ref
    没有必要创建类组件，可以使用函数组件来代替，并通过 React Hooks 来管理状态.
*/
```

#### 函数组件的方式创建组件: 使用 React.FC 来创建组件/直接以函数形式创建

#### React.FC 形式

#### 示例 1

```tsx
import React, { useState } from "react";
interface Props {}
const Test: React.FC<Props> = () => {
  const [state, setState] = useState<{ title: string; text?: string }>({
    title: "hello world",
    text: "你好，世界",
  });
  const changeTitle = () => {
    setState((pre) => ({
      ...pre,
      title: "hello new world",
    }));
  };
  return (
    <div className="test_container">
      <div className="text_box">
        {state.title}-{state.text || "--"}
      </div>
      <div className="button_container">
        <div onClick={changeTitle}>更改title</div>
      </div>
    </div>
  );
};
export default Test;
```

#### 示例 2

```tsx
/*
const [state, setState] = useState<{ title: string; text?: string }>({
    title: 'hello world',
    text: '你好，世界',
  }); 当函数组件中的状态较多时，这种方式约束状态类型会让代码冗长，此时可以将其用一个接口来维护状态类型的约束
*/
import React, { useState } from "react";
interface Props {}
interface State {
  title: string;
  text?: string;
}
const Test: React.FC<Props> = () => {
  const [state, setState] = useState<State>({
    title: "hello world",
    text: "你好，世界",
  });
  const changeTitle = () => {
    setState((pre) => ({
      ...pre,
      title: "hello new world",
    }));
  };
  return (
    <div className="test_container">
      <div className="text_box">
        {state.title}-{state.text || "--"}
      </div>
      <div className="button_container">
        <div onClick={changeTitle}>更改title</div>
      </div>
    </div>
  );
};
export default Test;
```

#### 示例 3

```tsx
/*
当状态较多时除了可以可以用上面的方式对组件状态类型统一约束外，如果组件状态之间不是强关联的情况下 也可以拆分为多个 useState
*/
import React, { useState } from "react";
//如果不需要Props状态，可以不写
const Test: React.FC = () => {
  const [title, setTitle] = useState("hello world"); //在 TypeScript 中，useState 会根据你传入的初始值自动推断类型
  const [text, setText] = useState<string | undefined>("你好，世界"); //在初始值为 null、undefined 或类型不明确时，才建议手动指定类型
  const changeTitle = () => {
    setTitle("hello new world");
  };
  return (
    <div className="test_container">
      <div className="text_box">
        {title}-{text || "--"}
      </div>
      <div className="button_container">
        <div onClick={changeTitle}>更改title</div>
      </div>
    </div>
  );
};
export default Test;
```

#### React.FC（React.FunctionComponent）的写法 是 React 官方为函数组件提供的类型定义，使用这种方式定义组件，会有类型推断 props 和 自动包含 children 属性

#### props 类型推断:在父组件中使用 React.FC 定义的组件时，如果漏写了属性，或者类型写错了，在当前组件中编辑器会自动报错和提示(props 参数会自动有类型提示和校验)

#### 自动包含 children 属性:用 React.FC 定义的组件，props 里会自动有 children 属性，无需手动声明，否则就需要在 Props 中来手动管理 children 的类型。

#### TypeScript 版本较高时或者 项目中 配置了 @types/react 18+的 版本，children 就不会再自动包含在 props 中了，需要手动在 props 中添加。

#### 示例 4

```tsx
import React, { useState } from "react";
interface Props {
  title: string;
  text?: string;
  count: number;
  changeTitle: (str?: string) => void;
  changeCount: (num: number) => void;
  children: React.ReactNode;
}
const Test: React.FC<Props> = (props) => {
  const changeCurrentTitle = () => {
    props.changeTitle();
  };
  const changeCount = () => {
    props.changeCount(10);
  };
  return (
    <div className="test_container">
      <div className="text_box">
        {props.title}-{props.text || "--"}-{props.count}
      </div>
      <div className="button_container">
        <div onClick={changeCurrentTitle}>更改title</div>
        <div onClick={changeCount}>更改count</div>
      </div>
      {props.children}
    </div>
  );
};

interface State {
  title: string;
  text?: string;
  count: number;
}
const FTest: React.FC = () => {
  const [state, setState] = useState<State>({
    title: "hello world",
    text: "你好，世界",
    count: 23,
  });
  const changeTitle = () => {
    setState((pre) => ({
      ...pre,
      title: "hello new world",
    }));
  };
  const changeCount = (num: number) => {
    setState((pre) => ({
      ...pre,
      count: num ? pre.count + num : pre.count + 1,
    }));
  };
  return (
    <div>
      <Test
        title={state.title}
        text={state.text}
        count={state.count}
        changeTitle={changeTitle}
        changeCount={changeCount}
      >
        <span>我是children</span>
      </Test>
    </div>
  );
};
export default FTest;
```

#### 直接以函数形式创建组件

#### 示例

```tsx
/*将以上示例改写为不用 React.FC的方式 直接以函数的形式创建*/
import React, { useState } from "react";
interface Props {
  title: string;
  text?: string;
  count: number;
  changeTitle: (str?: string) => void;
  changeCount: (num: number) => void;
  children: React.ReactNode;
}
/*
function Test(props: Props) {
  const changeCurrentTitle = () => {
    props.changeTitle();
  };
  const changeCount = () => {
    props.changeCount(10);
  };
  return (
    <div className="test_container">
      <div className="text_box">
        {props.title}-{props.text || '--'}-{props.count}
      </div>
      <div className="button_container">
        <div onClick={changeCurrentTitle}>更改title</div>
        <div onClick={changeCount}>更改count</div>
      </div>
      {props.children}
    </div>
  );
}
*/
/*以上直接写成箭头函数的形式 更简洁一些*/
const Test = (props: Props) => {
  const changeCurrentTitle = () => {
    props.changeTitle();
  };
  const changeCount = () => {
    props.changeCount(10);
  };
  return (
    <div className="test_container">
      <div className="text_box">
        {props.title}-{props.text || "--"}-{props.count}
      </div>
      <div className="button_container">
        <div onClick={changeCurrentTitle}>更改title</div>
        <div onClick={changeCount}>更改count</div>
      </div>
      <div style={{ marginTop: "20px" }}> {props.children}</div>
    </div>
  );
};

interface State {
  title: string;
  text?: string;
  count: number;
}
export default function FTest() {
  const [state, setState] = useState<State>({
    title: "hello world",
    text: "你好，世界",
    count: 23,
  });
  const changeTitle = () => {
    setState((pre) => ({
      ...pre,
      title: "hello new world",
    }));
  };
  const changeCount = (num: number) => {
    setState((pre) => ({
      ...pre,
      count: num ? pre.count + num : pre.count + 1,
    }));
  };
  return (
    <div>
      <Test
        title={state.title}
        text={state.text}
        count={state.count}
        changeTitle={changeTitle}
        changeCount={changeCount}
      >
        <span>我是children</span>
      </Test>
    </div>
  );
}
```

## 高阶组件

### 高阶组件是一个函数，接收一个组件作为参数，返回一个新的组件。它本质上是“组件的工厂”，用于复用组件逻辑、增强功能

#### 示例

```tsx
/*实现一个高阶组件（HOC），名字叫 withLogger，它的作用是为任何传入的组件增加“渲染时打印 props 日志”的功能*/
/*
function withLogger<P extends Record<any, any>>(
  WrappedComponent: React.ComponentType<P>
) {
  return (props: P) => {
    console.log("组件渲染，props:", props);
    return <WrappedComponent {...props} />;
  };
}
*/
//以上可以改写为如下方式
interface AnyObj {
  [key: string]: any;
}
function withLogger<P extends AnyObj>(
  WrappedComponent: React.ComponentType<P>
) {
  return (props: P) => {
    console.log("组件渲染，props:", props);
    return <WrappedComponent {...props} />;
  };
}
interface Props {
  name: string;
}
const Test = (props: Props) => {
  return <div>{props.name}</div>;
};
const Other = (props: { age: number }) => <div>{props.age}</div>;
const TestWithLogger = withLogger(Test);
const OtherWithLogger = withLogger(Other);
export default function HocTest() {
  return (
    <div>
      <TestWithLogger name={"tom"} />
      <OtherWithLogger age={100} />
    </div>
  );
}
/*
  以上封装的这个高阶组件会为传入的组件使用时打印日志

  P:代表着传入的组件的props类型,当前定义的该高阶组件没有限制传入组件的props类型，意味着传入组件的props可以是任何类型。
  这里的P代表着泛型参数的名字，可以用任何其他的名称代替

  当前封装的这个高阶组件保证了返回的新组件的props类型同传入的组件的props类型保持一致。保证了类型安全。

  React.ComponentType<P> 是React提供的一个类型工具，表示可以接收props类型为P的React 组件，无论它是函数组件还是类组件
*/
```

#### 封装的以上的高阶组件没有去限制传入的组件的 props 类型，但其实可以对传入组件的 props 类型做一个限制，如果传入组件的 props 类型不满足这个限制条件，就会触发警告 如以下示例

```tsx
import React from "react";
interface Props {
  name: string;
}
interface T {
  name: string;
}
/*
传入高阶组件的prosp 类型 必须满足 泛型T的要求 此处不使用接口 使用extends
function MyHocTestLogger<T extends { name: string }>(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => {
    console.log('当前传入组件的props是:', props);
    return <WrappedComponent {...props} />;
  };
}
*/
//以上改写为使用接口T的形式
function MyHocTestLogger(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => {
    console.log("当前传入组件的props是:", props);
    return <WrappedComponent {...props} />;
  };
}
const MyTest = (props: { name: number }) => {
  return <div>{props.name}</div>;
};
const Other = (props: Props) => {
  return <div>{props.name}</div>;
};
let MyTestWithLogger = MyHocTestLogger(MyTest); // props 类型不满足要求 会有警告
let MyOtherWithLogger = MyHocTestLogger(Other);
export default function HocTest() {
  return (
    <div>
      {/* nmae={100} 这里不满足对于props的约束 会有警告 标红 */}
      <MyTestWithLogger name={100} />
      <MyOtherWithLogger name="tom" />
    </div>
  );
}
```
