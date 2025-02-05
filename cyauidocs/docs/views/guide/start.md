<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-01-17 15:37:48
 * @LastEditors: Chengya
 * @LastEditTime: 2025-02-05 13:59:13
-->

# quick start

## 全局注册使用

### Vue 项目的入口文件 main.js 中

```js
import cyaui from "cyaui";
import "cyaui/dist/styles/main.css";
Vue.use(cyaui);
```

### 全局注册后使用

```vue
<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-12-13 11:16:17
 * @LastEditors: Chengya
 * @LastEditTime: 2024-12-13 13:31:17
-->
<template>
  <div>
    <h2>全局注册引用示例</h2>
    <div class="btn_container">
      <CyaButton @click="handler1">按钮1</CyaButton>
      <CyaButton @click="handler1" type="primary">按钮1</CyaButton>
      <CyaButton @click="handler1" type="danger">按钮1</CyaButton>
      <CyaButton @click="handler1" :disabled="true">按钮1</CyaButton>
      <CyaButton @click="handler1" :loading="true">按钮1</CyaButton>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handler1() {
      console.log("hello world 按钮1");
    },
  },
};
</script>

<style scoped>
.btn_container {
  display: flex;
  justify-content: center;
}
</style>
```

## 配置按需加载

### 项目根目录下修改 babel.config.js 的配置 如下

```js
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "cyaui", // 组件库名称
        libraryDirectory: "dist", // 组件主目录
        camel2DashComponentName: false, // 驼峰转短横线
        style: (name) => {
          const componentName = name.split("/").pop(); // 获取组件名
          return `cyaui/dist/${componentName}/${componentName}.css`;
        },
      },
    ],
  ],
};
```

### 按需加载使用示例

```vue
<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-12-11 13:26:56
 * @LastEditors: Chengya
 * @LastEditTime: 2025-01-17 17:07:47
-->
<template>
  <div>
    <h2>按需引用示例</h2>
    <CyaButton @click="handler">按钮3</CyaButton>
  </div>
</template>
<script>
import { CyaButton } from "cyaui";
export default {
  components: {
    CyaButton,
  },
  methods: {
    handler() {
      console.log("hello world 我是按钮3");
    },
  },
};
</script>
<style></style>
```

### 需要注意的是 如果配置了按需加载，然后又使用全局注册的方式的话，需要将 babel.config.js 配置的按需加载内容注释
