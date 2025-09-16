<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-09-16 14:08:48
 * @LastEditors: Chengya
 * @LastEditTime: 2025-09-16 14:14:40
-->

### React 中事件处理对象

React 事件处理过程中获取到的对象就是事件对象，React 中对事件对象进行了处理，使其能够兼容所有浏览器，无需再考虑兼容性问题。

使用过程中，通过事件对象来处理阻止默认行为和事件冒泡等问题。

示例

```jsx
import React from "react";
import ReactDOM from "react-dom";

//react中的事件对象

class MyDom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  divClick = () => {
    console.log("div被点击");
  };
  btnClick = (e) => {
    e.stopPropagation(); //阻止冒泡
    console.log("btn被点击");
  };
  goBu = (e) => {
    e.preventDefault(); //阻止a标签的默认行为
  };
  render() {
    return (
      <div onClick={this.divClick}>
        <a href="http://www.baidu.com" onClick={(e) => this.goBu(e)}>
          百度
        </a>
        <button onClick={(e) => this.btnClick(e)}>点击</button>
      </div>
    );
  }
}
ReactDOM.render(<MyDom />, document.getElementById("root"));
```
