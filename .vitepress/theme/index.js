import DefaultTheme from 'vitepress/theme'
//import naive from 'naive-ui'
import SimpleImgPreview from '/.vitepress/components/SimpleImgPreview/index.vue'
import AllBlogPageData from '/.vitepress/components/AllBlogPageData/index.vue'
import './custom.css'

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        //app.use(naive)
        app.component('SimpleImgPreview', SimpleImgPreview)
        app.component('AllBlogPageData', AllBlogPageData)
    }
}
