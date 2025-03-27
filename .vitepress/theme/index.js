import DefaultTheme from 'vitepress/theme'
//import naive from 'naive-ui'
import SimpleImgPreview from '/.vitepress/components/SimpleImgPreview/index.vue'

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        //app.use(naive)
        app.component('SimpleImgPreview', SimpleImgPreview)
    }
}