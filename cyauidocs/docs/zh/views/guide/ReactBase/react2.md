<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-09-15 14:41:57
 * @LastEditors: Chengya
 * @LastEditTime: 2025-09-15 14:52:23
-->

### React 中使用 jsx

#### 在 React 中 使用 jsx 语法，需要安装和配置对应的 babel 插件 本例使用的 webpack5.x 的版本。

#### 如果使用的 webpack 是 2/3/4 的版本 照如下安装依赖

```bash
npm install babel-core babel-loader@7 babel-plugin-transform-runtime -D

npm install babel-preset-env babel-preset-stage-0 -D

npm install babel-preset-react -D
```

#### 如果使用的 webpack 是 5.x 的版本 照如下安装依赖。 webpack 5 必须用 babel-loader@8+；同时 babel-core 也不需要再装

```bash

npm install  @babel/core babel-loader @babel/preset-env @babel/preset-react -D

```

#### 依赖解读

1️⃣ @babel/core

Babel 的核心包 负责把 ES6+ / JSX / TypeScript 等新语法转译为浏览器能识别的旧语法（ES5）。

2️⃣ babel-loader

Webpack 的加载器 让 Webpack 在打包时调用 Babel 来处理 .js / .jsx 文件。

3️⃣ @babel/preset-env

Babel 的预设（preset），用来转译最新的 JavaScript 语法 ES6（ES2015+）。

4️⃣ @babel/preset-react

Babel 的预设，专门用来转译 React 代码里的 JSX 语法。

比如 把 <div>hello</div> 这种 JSX 语法转译成 React.createElement('div', null, 'hello')。

#### 以上要安装的是必须要有的依赖，此外还有几个其他可选依赖可以安装，他们会让输出更优雅。

```bash
npm install @babel/runtime -S
npm install @babel/plugin-transform-runtime -D
```

1️⃣ @babel/runtime（生产依赖）

这个包里包含了 Babel 在编译时注入的一些辅助函数和 regenerator-runtime（支持 async/await）。

Babel 在把你的 ES6+/JSX 代码转译成 ES5 时，很多语法（如 class、extends、async/await、对象展开等）需要用到一些小工具函数，比如 \_classCallCheck、\_extends、\_asyncToGenerator。

如果不装 @babel/runtime，Babel 默认会把这些小函数直接复制到每个文件里，导致 bundle 变大。

安装 @babel/runtime + 配置 @babel/plugin-transform-runtime 后，Babel 就会把这些小函数按需从 @babel/runtime 里 import，减少重复。

简单说：

让 Babel 转译后的代码更小、更干净，避免每个文件都重复生成相同的 helper 函数。

2️⃣ @babel/plugin-transform-runtime（开发依赖）

这是 Babel 的一个 插件，用来告诉 Babel：

不要在每个文件里内联 helper 函数。

要从 @babel/runtime 引入 helper 函数。

同时还可以选择是否把 core-js（垫片/Polyfill）也通过 runtime 引入（避免污染全局）。

这个插件只在编译阶段用，所以放在 devDependencies 里。

#### 安装完依赖后，我们还需要做两件事

1. 创建并配置 babel 的配置文件。如果使用的 webpack5.x,推荐创建 babel.config.js 文件进行配置，否则 创建 .babelrc 文件

#### .babelrc （老项目一般配置 .babelrc）

```json
{
  "presets": ["env", "stage-0", "react"],
  "plugins": [
    "transform-runtime",
    ["import", { "libraryName": "antd", "style": "css" }]
  ]
}
```

#### babel.config.js(webpack5.x 推荐)

```js
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-transform-runtime"],
};
```

2. 在 webpack.config.js 文件中 配置 babel-loader 加载器 对 js,jsx 文件进行处理 完整文件配置如下

```js
/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 为项目做webpack 打包相关的配置
 * @LastEditors: Chengya
 * @LastEditTime: 2025-09-11 16:12:10
 */

//import path from "path"; //Node.js 内置模块，用来处理路径问题   Node 默认加载 .js 文件时走 CommonJS的模块引入方式 → 只能用 require/module.exports。 这里使用 import 引入 相当于使用的 ES 模块的引入方式(import/export default)会报错
const path = require("path");
/*
html-webpack-plugin 是 Webpack 的一个常用插件，可以基于指定的模板自动生成 HTML 文件，并在打包时自动将生成的 JS、CSS 等资源插入到 HTML 中。
*/
//import HtmlWebpackPlugin from "html-webpack-plugin";
const HtmlWebpackPlugin = require("html-webpack-plugin");
/*
 新建一个 HtmlWebpackPlugin 实例，并赋值给 htmlPlugin
*/
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./src/index.html"), //以src/index.html 这个模板为基础生成最终的 HTML
  filename: "index.html", //生成出来的 HTML 文件名，这里是 index.html 也可以改为其他名字 Webpack 打包后会在 dist 目录下生成这个 index.html，并自动注入打包后的 JS、CSS 文件链接。
});
module.exports = {
  mode: "development", // 可选配置 development/production
  /*
   开发模式会默认启用(不写mode 默认是development模式)：未压缩的输出文件（便于调试），更快的构建速度，有默认的调试信息。

   生成环境(production):会自动压缩代码，Tree Shaking(分析哪些导出的代码没有被用到，打包时剔除未引用的部分) Scope Hoisting（作用域提升,自动把模块包装优化成一个函数块，减少闭包、加快运行速度，体积也变小）等优化
  */

  plugins: [htmlPlugin],
  /*
  webpack 的plugins 接受一个插件数组，要用的插件放在这个数组，webpack 在打包时就会执行plugins中的插件，
  在这里打包时通过HtmlWebpackPlugin的实例 htmlPlugin 基于 src/index.html 模板生成最终的 dist/index.html，
  并自动注入 <script src="bundle.js"> 等资源标签。

  做好配置后，在package.json 添加上打包 命令  "build": "webpack", 执行 npm run build 时 就会使用webpack 基于当前配置来进行打包了

  需要注意的是当期项目安装的 webpack/webpack-cli 版本 和 当前项目使用的 node 版本的关系，如果不匹配(webpack/webpack-cli版本高 node 版本低) 可能会在运行或者打包时报错
  这时需要确定匹配对应关系 降级webpack/webpack-cli 或者 升级 node 到对应版本 重新安装依赖尝试
  */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", "jsx", "ts", "tsx", "json"], //Webpack 自动补全扩展名的规则。避免每次 import 时都写 .jsx、.ts 等后缀。
  },
};
```

#### 初始醒目完整的 package.json 文件

```json
{
  "name": "react_test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "dev": "webpack-dev-server --open --port 3000 --hot --host 127.0.0.1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.28.4",
    "@babel/plugin-transform-runtime": "^7.28.3",
    "@babel/preset-env": "^7.28.3",
    "@babel/preset-react": "^7.27.1",
    "babel-loader": "^10.0.0",
    "html-webpack-plugin": "^5.6.4",
    "webpack": "^5.101.3",
    "webpack-cli": "^6.0.1",
    "webpack-dev-server": "^5.2.2"
  },
  "dependencies": {
    "@babel/runtime": "^7.28.4",
    "react": "^16.14.0",
    "react-dom": "^16.14.0"
  }
}
```

- #### 安装完依赖，配置好 babel.config.js,在 webpack.config.js 中做好以上配置后，我们就可以在 Webpack5 里直接使用 jsx 语法了，这会大大提升我们的开发效率和体验。
