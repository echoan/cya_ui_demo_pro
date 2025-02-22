/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-01-23 16:02:51
 * @LastEditors: Chengya
 * @LastEditTime: 2025-02-06 17:49:37
 */
/*
    由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 .vuepress/enhanceApp.js
    文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。enhanceApp.js 应
    该 export default 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可
    以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等
*/
import "./styles/index.scss";
import cyaui from "cyaui";
import "cyaui/dist/styles/main.css";
import VueHighlightJS from "vue-highlightjs";
import Button from "./components/Button.vue";
const componentObj = { Button };
export default ({ Vue }) => {
  Vue.use(cyaui);
  Vue.use(VueHighlightJS);
  Object.keys(componentObj).forEach((key) => {
    Vue.component(key, componentObj[key]);
  });
};
