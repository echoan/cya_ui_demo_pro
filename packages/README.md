<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-01-14 16:56:10
 * @LastEditors: Chengya
 * @LastEditTime: 2025-01-15 15:16:31
-->

# 构建按需加载的组件库的尝试

## 安装

```
npm install cyaui_pro

```

## 按需加载的配置 (vue2.x .babel.config.js 中配置添加配置)

```
plugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "cyaui_pro", // 组件库名称
        libraryDirectory: "dist", // 组件主目录
        camel2DashComponentName: false, // 驼峰转短横线
        style: (name) => {
          const componentName = name.split("/").pop(); // 获取组件名
          return `cyaui_pro/dist/${componentName}/${componentName}.css`;
        },
      },
    ],
  ],

```

## 使用示例 main.js 中

```
import { CyaButton } from "cyaui_pro";
Vue.use(CyaButton);

```
