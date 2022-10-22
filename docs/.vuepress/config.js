module.exports = {
  title: 'SRのブログ', // 设置网站标题
  description: 'SR的博客',
  base: '/', // 设置站点根路径
  port: 8086,
  head: [],
  plugins: [],
  markdown: {
    lineNumbers: true,
  },
  theme: 'vuepress-theme-vdoing',
  // theme:"reco",
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    // 配置导航栏
    nav: [
      { text: '主页', link: '/' },
      // {
      //   text: "CSS",link:'/css.md'
      // },
      { text: '知识碎片', link: '/知识碎片/油猴.md' },
      {
        text: 'Bootstrap',
        items: [
          { text: 'Bootstrap插件', link: '/Bootstrap/插件/折叠Collapse.md' },
          { text: 'Bootstrap基础样式', link: '/Bootstrap/基础样式/test.md' },
        ],
      },
    ],
    // 为以下路由添加左侧边栏
    sidebar: {
      '/知识碎片': [
        {
          title: '知识碎片',
          collapsable: true,
          children: [
            { title: '1.油猴', path: '/知识碎片/油猴.md' },
            { title: '2.使用postman', path: '/知识碎片/使用postman.md' },
            { title: '3.npm的多脚本命令执行', path: '/知识碎片/npm的多脚本命令执行.md' },
            { title: '3.彻底卸载vscode', path: '/知识碎片/彻底卸载vscode.md' },
          ],
        },
      ],
      '/Bootstrap/插件': [
        {
          title: 'Bootstrap插件',
          collapsable: true,
          children: [
            { title: '1.折叠Collapse', path: '/Bootstrap/插件/折叠Collapse.md' },
            { title: '2.模态框Modal', path: '/Bootstrap/插件/模态框Modal.md' },
            { title: '2.selectpicker', path: '/Bootstrap/插件/selectpicker.md' },
          ],
        },
      ],
      '/Bootstrap/基础样式': [
        {
          title: 'test',
          collapsable: true,
          children: [{ title: '1.test', path: '/Bootstrap/基础样式/test.md' }],
        },
      ],
    },
    sidebarDepth: 3, // 左侧导航显示的层级
    smoothScroll: true, // 启用页面滚动效果
    lastUpdated: 'Last Updated',
    plugins: {
      // 页面滚动时自动激活侧边栏链接的插件(菜单高亮)
      '@vuepress/active-header-links': {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor',
      },
      // 回到顶部
      '@vuepress/back-to-top': true,
    },
  },
};
