import DefaultTheme from 'vitepress/theme'
import naive from 'naive-ui'
import AllBlogPageData from '/.vitepress/components/AllBlogPageData/index.vue'
import './custom.css'

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        app.use(naive)
        app.component('AllBlogPageData', AllBlogPageData)
    }
}
