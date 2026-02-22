// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import DownloadBox from '../components/DownloadBox.vue' // 引入你的组件
import DownloadHero from '../components/DownloadHero.vue' // 引入你的组件
import SystemRequirements from '../components/SystemRequirements.vue' // 引入你的组件

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('DownloadBox', DownloadBox)
    app.component('DownloadHero', DownloadHero)
    app.component('SystemRequirements', SystemRequirements)
  }
}