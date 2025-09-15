<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-09-15 15:00:09
 * @LastEditors: Chengya
 * @LastEditTime: 2025-09-15 15:15:01
-->

### jsx 语法的基本使用

#### React 中使用 jsx 语法来创建虚拟 dom

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

#### React 中 jsx 常用方法

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

- #### jsx 列表的渲染

1.  渲染一组数据通常使用 map。
2.  不可缺少 key 属性
