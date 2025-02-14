// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
//引入重置样式
import './style.css'
// 导入elementplus组件
import "element-plus/dist/index.css";
import elementplus from "element-plus"
// 导入elementplus组件-中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 导入elementplus组件-暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 导入elementplus组件-图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(elementplus, {
      locale: zhCn,
      // 是否开启暗黑模式
      // darkMode: true,
    })
    // ...
  }
} satisfies Theme
