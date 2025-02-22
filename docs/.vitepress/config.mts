import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "计算机学习资源",
  description: "专注于提供优质的计算机学习资源",
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resourse', link: '/markdown-examples' },
      { text: 'AboutMe', link: '/about' },
    ],

    sidebar: [
      {
        text: '计算机基础课程',
        items: [
          { text: 'C语言/C++', link: '/pages/Computer-basics/c' },
          { text: '数据结构', link: '/pages/Computer-basics/ds' },
          { text: '离散数学', link: '/pages/Computer-basics/dm' },
          { text: '数字逻辑电路', link: '/pages/Computer-basics/logic' },
          { text: '面向对象程序设计', link: '/pages/Computer-basics/oc' },
          { text: '计算机组成原理', link: '/api-examples' },
          { text: '操作系统', link: '/api-examples' },
          { text: '计算机体系结构', link: '/api-examples' },
          { text: '计算机网络', link: '/api-examples' },
          { text: '软件工程', link: '/api-examples' },
          { text: '编译原理', link: '/api-examples' },
        ]
      },
      {
        text: '高级计算机基础',
        items: [
          { text: '数值分析', link: '/markdown-examples' },
          { text: '应用运筹学基础', link: '/api' },
          { text: '汇编与接口', link: '/markdown-examples' },
          { text: '嵌入式系统', link: '/api' },
          { text: '计算机应用', link: '/markdown-examples' },
        ]
      },
      {
        text: '其它课程',
        items: [
          { text: '计算机应用', link: '/markdown-examples' },
          { text: '计算机应用', link: '/api' }
        ]
      },
      {
        text: '计算机考研408',
        items: [
          { text: '数据结构', link: '/markdown-examples' },
          { text: '计算机组成原理', link: '/api' },
          { text: '操作系统', link: '/markdown-examples' },
          { text: '计算机网络', link: '/api' },
          { text: '计算机复试', link: '/api' },
        ]
      }, {
        text: '前端开发',
        items: [
          { text: '前端开发指南', link: '/pages/frontend/guide' },
          { text: 'Vue', link: '/api-examples' },
          { text: 'React', link: '/api-examples' }
        ]
      },
      {
        text: '后端开发',
        items: [
          { text: 'Node.js', link: '/api-examples' },
          { text: 'Python', link: '/api-examples' },
          { text: 'Java', link: '/api-examples' },
          { text: 'Go', link: '/api-examples' },
          { text: 'Rust', link: '/api-examples' },
          { text: 'PHP', link: '/api-examples' },
        ]
      },
      {
        text: '数据与人工智能',
        items: [
          { text: '机器学习', link: '/api-examples' },
          { text: '深度学习', link: '/api-examples' },
          { text: '自然语言处理', link: '/api-examples' },
          { text: '计算机视觉', link: '/api-examples' },
          { text: '推荐系统', link: '/api-examples' },
          { text: '图神经网络', link: '/api-examples' },
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'gitee', link: 'https://gitee.com/' },
      { icon: 'qq', link: 'https://qq.com/' }
    ],
  },
  base: '/resourse/',
  appearance: false,
})
