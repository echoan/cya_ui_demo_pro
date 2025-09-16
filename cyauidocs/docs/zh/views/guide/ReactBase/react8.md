<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-09-16 14:24:31
 * @LastEditors: Chengya
 * @LastEditTime: 2025-09-16 14:28:22
-->

### React 中表单的处理

- 1. 受控组件（Controlled Component）：表单元素的值由 React state，和绑定在受控组件的 onChange 事件控制， 为了方便使用统一的方法对受控表单组件进行更新，通常会为受控组件添加 name 的属性，使他们的 name 值与绑定的 state 中的值相同。

- 2. 非受控组件（Uncontrolled Component）：表单元素自己维护值，React 只通过 ref 获取值。

示例

```jsx
import React from "react";
import ReactDOM from "react-dom";

class MyDom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100,
      text: "hello",
      checked: false,
    };
    this.txtRef = React.createRef(); //方式2 非受控组件
  }
  onchange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  getInputValue = () => {
    let value = this.refs.myInput.value; //方式1
    let value1 = this.txtRef.current.value; //方式2
    console.log(value, value1, "==");
  };
  render() {
    return (
      <div>
        <p>
          {this.state.value} {this.state.text} {this.state.checked ? 1 : 0}
        </p>
        {/* 受控组件的处理 */}
        <input
          name="value"
          value={this.state.value}
          onChange={(e) => this.onchange(e)}
        />
        <input
          name="text"
          value={this.state.text}
          onChange={(e) => this.onchange(e)}
        />
        <input
          name="checked"
          type="checkbox"
          checked={this.state.checked}
          onChange={(e) => this.onchange(e)}
        />
        {/* 非受控组件的处理 */}
        {/* 方式一 */}
        <input name="text" ref="myInput" />
        {/* 方式二 */}
        <input name="text" ref={this.txtRef} />
        <button onClick={this.getInputValue}>获取input的值</button>
      </div>
    );
  }
}

ReactDOM.render(<MyDom />, document.getElementById("root"));
```
