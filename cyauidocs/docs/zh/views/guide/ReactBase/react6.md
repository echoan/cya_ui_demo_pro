<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-09-15 16:45:41
 * @LastEditors: Chengya
 * @LastEditTime: 2025-09-15 18:02:47
-->

### React 中事件的绑定

示例

```jsx
import React from "react";
import ReactDOM from "react-dom";

class BindEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 100,
    };
    // 方式1：构造器里手动 bind
    this.clickEvent1 = this.clickEvent1.bind(this);
  }

  // 普通方法 + 手动 bind
  clickEvent1() {
    console.log("方式1：constructor bind");
    console.log(this, "this==");
    console.log(this.state.num, "num==");
  }

  // 直接普通方法（没 bind，会丢 this）
  clickEvent2() {
    console.log("方式2：普通方法没 bind");
    console.log(this, "this=="); // undefined
    // console.log(this.state.num) // 报错
  }

  // 类字段写法（箭头函数自动绑定 this）
  clickEvent3 = () => {
    console.log("方式3：类字段箭头函数");
    console.log(this, "this==");
    console.log(this.state.num, "num==");
  };

  render() {
    return (
      <div>
        <h3>不同事件绑定方式对比</h3>
        <hr />

        {/* 方式1：构造器bind的普通方法 */}
        <button onClick={this.clickEvent1}>点击1（bind后普通方法）</button>

        <hr />

        {/* 方式2：普通方法直接传，this 丢失 */}
        <button onClick={this.clickEvent2}>点击2（没bind普通方法）</button>

        <hr />

        {/* 方式3：箭头函数属性，天然绑定 this */}
        <button onClick={this.clickEvent3}>点击3（箭头函数属性）</button>

        <hr />

        {/* 方式4：在事件里用箭头函数调用普通方法 */}
        <button onClick={() => this.clickEvent2()}>
          点击4（事件内箭头函数调用普通方法）
        </button>

        <hr />

        {/* 方式5：onClick={this.clickEvent()}，render时就执行 */}
        <button onClick={this.clickEvent3()}>
          点击5（render时就执行一次）
        </button>
      </div>
    );
  }
}

ReactDOM.render(<BindEvent />, document.getElementById("root"));
```

🔹 效果：

点击 1：正常打印 this 和 num，因为手动 bind 了。

点击 2：this 是 undefined，不能访问 state。

点击 3：正常打印，因为箭头函数属性自动绑定。

点击 4：点击时调用箭头函数，再调用普通方法，此时 this 是组件实例。

点击 5：组件渲染时就执行一次 clickEvent3，点击不会再执行。
