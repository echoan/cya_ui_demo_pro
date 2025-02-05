/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-01-15 15:06:17
 * @LastEditors: Chengya
 * @LastEditTime: 2025-02-05 13:56:37
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  /*全局使用时 注释掉按需引入的配置*/
  // plugins: [
  //   [
  //     "babel-plugin-import",
  //     {
  //       libraryName: "cyaui", // 组件库名称
  //       libraryDirectory: "dist", // 组件主目录
  //       camel2DashComponentName: false, // 驼峰转短横线
  //       style: (name) => {
  //         const componentName = name.split("/").pop(); // 获取组件名
  //         return `cyaui/dist/${componentName}/${componentName}.css`;
  //       },
  //     },
  //   ],
  // ],
};
