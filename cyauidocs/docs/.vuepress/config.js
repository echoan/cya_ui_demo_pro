/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2025-01-16 17:16:31
 * @LastEditors: Chengya
 * @LastEditTime: 2025-02-05 14:55:08
 */
module.exports = {
  base: "/cyaui/",
  title: "cyaui",
  description: "build vue2.x components",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  ],
  //多语言配置
  locales: {
    "/": {
      base: "/cyaui/",
      //lang: "en-US",
      title: "cyaui",
      description: "How to build a vue2.x components from 0 to 1",
    },
    "/zh/": {
      base: "/cyaui/",
      //lang: "zh-CN",
      title: "cyaui",
      description: "从0开始构建一个基于vue2.x的组件库",
    },
  },
  //主题配置
  themeConfig: {
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        search: true,
        searchMaxSuggestions: 10,
        ariaLabel: "Languages",
        // editLinkText: "Edit this page on GitHub",
        // serviceWorker: {
        //   updatePopup: {
        //     message: "New content is available.",
        //     buttonText: "Refresh",
        //   },
        // },
        //algolia: {},
        nav: [
          { text: "Home", link: "/" },
          { text: "Git", link: "" },
          {
            text: "  v1.0.0",
            items: [
              {
                text: "v 1.0.0",
                link: "/",
              },
            ],
          },
        ],
        sidebar: [
          {
            title: "Guide",
            collapsable: false,
            children: [
              {
                title: "install",
                collapsable: false,
                path: "views/guide/install.md",
              },
              {
                title: "quick start",
                collapsable: false,
                path: "views/guide/start.md",
              },
            ],
          },
        ],
      },
      "/zh/": {
        // 多语言下拉菜单的标题
        selectText: "选择语言",
        // 该语言在下拉菜单中的标签
        label: "简体中文",
        search: true,
        searchMaxSuggestions: 10,
        // 编辑链接文字
        //editLinkText: "在 GitHub 上编辑此页",
        //Service Worker 的配置
        // serviceWorker: {
        //   updatePopup: {
        //     message: "发现新内容可用.",
        //     buttonText: "刷新",
        //   },
        // },
        //当前 locale 的 algolia docsearch 选项
        //algolia: {},
        nav: [
          { text: "主页", link: "/" },
          { text: "Git仓库", link: "" },
          {
            text: "  v1.0.0",
            items: [
              {
                text: "v 1.0.0",
                link: "/",
              },
            ],
          },
        ],
        sidebar: [
          {
            title: "开发指南",
            collapsable: false,
            children: [
              {
                title: "安装",
                collapsable: false,
                path: "/zh/views/guide/install.md",
              },
              {
                title: "快速开始",
                collapsable: false,
                path: "/zh/views/guide/start.md",
              },
            ],
          },
        ],
      },
    },
  },
};
