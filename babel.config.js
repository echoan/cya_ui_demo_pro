module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
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
};
