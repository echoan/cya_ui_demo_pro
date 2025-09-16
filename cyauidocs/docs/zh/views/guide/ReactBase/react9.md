<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-09-16 14:42:00
 * @LastEditors: Chengya
 * @LastEditTime: 2025-09-16 15:45:19
-->

### React 中组件实例

- 1. React 中的一个列表组件

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

实际上 我们可以将以上组件进一步拆分

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

- 2. React 中的一个评论列表

```jsx
import React from "react";
import ReactDOM from "react-dom";

//使用react 创建的第一个实例 评论组件
class ListText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textList: [
        { id: "0", author: "lucky", content: "今天天气真好" },
        { id: "1", author: "tom", content: "今天的A股真是吃了屎" },
        { id: "2", author: "jerry", content: "明天A股大涨" },
      ],
      author: "",
      content: "",
    };
  }
  sendText = () => {
    let length = this.state.textList.length;
    let { author, content } = this.state;
    if (author.trim() === "" || content.trim() === "") {
      alert("评论人和评论内容不能为空");
      return;
    }
    let item = {
      author,
      content,
      id: length,
    };
    this.setState(
      {
        textList: [item, ...this.state.textList],
      },
      () => {
        this.setState({
          author: "",
          content: "",
        });
      }
    );
  };
  onChange = (e) => {
    let name = e.target.name;
    this.setState(
      {
        [name]: e.target.value,
      },
      () => {
        console.log(this.state.author, this.state.text);
      }
    );
  };
  renderList = () => {
    let { textList } = this.state;
    if (textList.length > 0) {
      return textList.map((item) => {
        return (
          <div key={item.id}>
            <span>评论人：{item.author}</span>
            <p>评论内容：{item.content}</p>
          </div>
        );
      });
    } else {
      return (
        <div>
          <h3>暂无评论内容</h3>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <h3>评论列表</h3>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="author"
            placeholder="请输入评论人"
            value={this.state.author}
            onChange={(e) => this.onChange(e)}
          />
        </div>
        <div>
          <textarea
            cols="20"
            rows="10"
            name="content"
            placeholder="请输入评论内容"
            value={this.state.content}
            onChange={(e) => this.onChange(e)}
          />
        </div>
        <button onClick={this.sendText}>发表评论</button>
        {this.renderList()}
      </div>
    );
  }
}
ReactDOM.render(<ListText />, document.getElementById("root"));
```
