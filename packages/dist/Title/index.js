var CyaTitle = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cya_title"},[_vm._v("这里是Title")])},
staticRenderFns: [],
  name: 'CyaTitle',
};

/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-12-13 14:48:11
 * @LastEditors: Chengya
 * @LastEditTime: 2024-12-13 16:52:54
 */
CyaTitle.install = function (Vue) {
  if (CyaTitle.install.installed) return;
  if (!CyaTitle.name) {
    console.error("Component is missing a name:");
  } else {
    Vue.component(CyaTitle.name, CyaTitle);
  }
  CyaTitle.install.installed = true;
};

export { CyaTitle, CyaTitle as default };
