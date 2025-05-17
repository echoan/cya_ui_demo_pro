<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-01-17 15:38:29
 * @LastEditors: Chengya
 * @LastEditTime: 2025-05-17 17:33:00
-->

# CSS 相关

## css 中清除浮动常用方式

```html
<!--
 * @Author: chengya
 * @Description: Modify here please
 * @Date: 2022-02-15 15:09:04
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-08 13:42:57
-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>清除浮动的6种方式</title>
    <style>
      .box {
        width: 100%;
      }

      .left {
        width: 40%;
        height: 100px;
        float: left;
        background-color: pink;
      }

      .right {
        width: 50%;
        height: 100px;
        float: right;
        background-color: green;
      }

      .bottom {
        background-color: khaki;
      }
      .box1 {
        overflow: hidden;
        /* display: table; */
      }

      .box2 {
        height: 100px;
      }

      .box3_clear {
        clear: both;
      }

      .box4 {
        display: table;
      }

      .box5:after {
        content: "";
        /* height: 0;
        line-height: 0; */
        display: block;
        /* visibility: hidden; */
        clear: both;
      }
      /* 为了兼容低版本ie浏览器  */
      .box5 {
        zoom: 1;
      }

      .box6:before,
      .box6:after {
        content: "";
        display: block;
        clear: both;
      }
    </style>
  </head>

  <body>
    <!-- 方式1 overflow hidden -->
    <div class="bottom">方式1</div>
    <div class="box1 box">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="bottom">方式2</div>
    <!-- 方式二 给父元素固定高度 -->
    <div class="box2 box">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="bottom">方式3</div>
    <!-- 方式三 在父元素内部或者父元素同级添加一个空盒子 添加 clear:both清除浮动的操作 -->
    <div class="box3 box">
      <div class="left"></div>
      <div class="right"></div>
      <!-- <div class="box3_clear"></div> -->
    </div>
    <div class="box3_clear"></div>
    <div class="bottom">方式4</div>
    <!-- 方式四 父元素 设置 display:table的属性 -->
    <div class="box4 box">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="bottom">方式5</div>
    <!-- 方式五 使用伪类 -->
    <div class="box5 box">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="bottom">方式六</div>
    <!-- 方式六 伪类的升级用法 -->
    <div class="box6 box">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </body>
</html>
```

#### 方式 1:浮动元素父元素添加 overflow:hidden

#### 方式 2:浮动元素父元素 height 添加固定高度

#### 方式 3:浮动元素父元素内部或者父元素同级添加一个空盒子 添加 clear:both 清除浮动的操作

#### 方式 4:浮动元素父元素设置 display:table

#### 方式 5:浮动元素父元素 使用伪类 ::after 来处理

#### 方式 6:浮动元素父元素 使用双伪类 ::before,::after 来处理

#### 方式 5 和 6 的差异在于，5 使用单伪类，6 使用双伪类，6 的兼容性更好，方式 5 为兼容低版本浏览器 要额外添加 zoom:1 的属性。 但是无论 5 或者 6，使用伪类清除浮动的核心属性都是 content:'',display:block,clear:both
