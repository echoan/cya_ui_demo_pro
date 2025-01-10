var CyaButton = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn_cya",class:[_vm.type, { disabled: _vm.disabled, loading: _vm.loading }],attrs:{"disabled":_vm.disabled || _vm.loading},on:{"click":_vm.handleClick}},[(_vm.loading)?_c('span',{staticClass:"btn_spinner"}):_vm._e(),_vm._v(" "),_vm._t("default")],2)},
staticRenderFns: [],
  name: 'CyaButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      console.log('按钮点击事件');
      this.$emit('click');
    },
  },
};

/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-12-13 09:42:51
 * @LastEditors: Chengya
 * @LastEditTime: 2024-12-13 16:52:49
 */
CyaButton.install = function (Vue) {
  if (CyaButton.install.installed) return;
  if (!CyaButton.name) {
    console.error("Component is missing a name:");
  } else {
    Vue.component(CyaButton.name, CyaButton);
  }
  CyaButton.install.installed = true;
};

export { CyaButton, CyaButton as default };
