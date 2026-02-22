import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YuanEngine",
  titleTemplate: "YuanEngine",
  description: "一个开源的游戏引擎",
  ignoreDeadLinks: true,
  lang: "zh-CN",
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local' // 指定使用本地搜索
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: "/download" },
      { text: '关于', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '认识引擎',
        collapsed: false,
        items: [
          { text: '快速开始', link: '/getting-started' },
          { text: '编辑器概述', link: '/editor-ui' },
          {
            text: '核心概念', 
            collapsed: false,
            items: [
              { text: '节点概述', link: '/node' },
              { text: '组件概述', link: '/component' }
            ]
          }
        ],
      },
      {
        text: '动手试试',
        collapsed: false,
        items: [
          { text: "概述", link: "/learn/intro" },
          { text: '创建一个有物理效果的小球', link: '/learn/learn1' }
        ],
      },
      {
        text: 'API',
        collapsed: true,
        items: [
          { text: '概述', link: '/api/intro' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
  head: [['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }]]
})
