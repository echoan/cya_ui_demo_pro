var CyaButton={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("button",{staticClass:"btn_cya",class:[a.type,{disabled:a.disabled,loading:a.loading}],attrs:{disabled:a.disabled||a.loading},on:{click:a.handleClick}},[a.loading?c("span",{staticClass:"btn_spinner"}):a._e(),a._v(" "),a._t("default")],2)},staticRenderFns:[],name:"CyaButton",props:{type:{type:String,default:"default"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},data(){return{}},methods:{handleClick(){console.log("\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6"),this.$emit("click")}}};CyaButton.install=function(a){CyaButton.install.installed||(CyaButton.name?a.component(CyaButton.name,CyaButton):console.error("Component is missing a name:"),CyaButton.install.installed=!0)};var CyaTitle={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticClass:"cya_title"},[a._v("\u8FD9\u91CC\u662FTitle")])},staticRenderFns:[],name:"CyaTitle"};CyaTitle.install=function(a){CyaTitle.install.installed||(CyaTitle.name?a.component(CyaTitle.name,CyaTitle):console.error("Component is missing a name:"),CyaTitle.install.installed=!0)},console.log("\u5F53\u524D\u7248\u672C\uFF1A","1.0.0");const components=[CyaButton,CyaTitle],install=function(a){install.installed||components.map(b=>{b.name?a.component(b.name,b):console.error("Component is missing a name:",b)})};"undefined"!=typeof window&&window.Vue&&install(window.Vue);var index={install};export{CyaButton,CyaTitle,index as default};
