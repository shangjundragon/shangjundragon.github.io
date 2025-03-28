import {h} from 'vue'
import DefaultTheme from 'vitepress/theme'
import WalineComponents from '../components/WalineComponents/index.vue'
import naive from 'naive-ui'
import AllBlogPageData from '/.vitepress/components/AllBlogPageData/index.vue'
import IconFont from '/.vitepress/components/IconFont/index.vue'
import './custom.css'
import '@/public/iconfont/index.js'


export default {
    extends: DefaultTheme,
    enhanceApp({app}) {
        app.use(naive)
        app.component('AllBlogPageData', AllBlogPageData)
        app.component('IconFont', IconFont)
    },
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'doc-after': () => h(WalineComponents)
        })
    }
}
