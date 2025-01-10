/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-12-13 14:48:11
 * @LastEditors: Chengya
 * @LastEditTime: 2024-12-13 16:52:54
 */
import CyaTitle from "./Title.vue";
CyaTitle.install = function (Vue) {
  if (CyaTitle.install.installed) return;
  if (!CyaTitle.name) {
    console.error("Component is missing a name:");
  } else {
    Vue.component(CyaTitle.name, CyaTitle);
  }
  CyaTitle.install.installed = true;
};
export { CyaTitle }; //为了能够按需引用
export default CyaTitle; //为了能够全局注册使用
