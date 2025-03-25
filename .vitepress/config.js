import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',

    lang: 'zh-CN',
    title: "Mr.Shang Awesome Project",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // Nav 是显示在页面顶部的导航栏。它包含站点标题、全局菜单链接等。
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],
        // 可以定义此选项以在导航栏中展示带有图标的社交帐户链接。
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        // 侧边栏
        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'},
                ]
            }
        ],

    }
})
