<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-05-25 17:04:51
 * @LastEditors: Chengya
 * @LastEditTime: 2025-05-25 17:58:12
-->

# React 相关内容

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
