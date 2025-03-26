import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',
    lang: 'zh-CN',
    title: "Mr.Shang Awesome Project",
    description: "A VitePress Site",
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    themeConfig: {
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        // Nav 是显示在页面顶部的导航栏。它包含站点标题、全局菜单链接等。
        nav: [
            {text: '首页', link: '/'},
        ],
        // 可以定义此选项以在导航栏中展示带有图标的社交帐户链接。
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],

    }
})
