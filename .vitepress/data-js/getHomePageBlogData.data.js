import {createContentLoader} from 'vitepress'

export default createContentLoader('src/**/*.md', {
    transform(rawData) {
        const group = {
            technology: [],
            goodfood: [],
            life: [],
            test: [],
            randomthoughts: []
        }
        const mapData = rawData
            .filter(f => {
                // 过滤掉排除的文档
                if (f.frontmatter.exclude && f.frontmatter.exclude === true) {
                    return false
                }
                return true
            })
            .sort((a, b) => {
                // 时间倒叙
                return +new Date(b.frontmatter.createDate) - +new Date(a.frontmatter.createDate)
            }).map((page) => {
                const {title, createDate, tabs} = page.frontmatter
                return {title, createDate, tabs, url: page.url}
            })

        mapData.forEach(f => {
            f.tabs.forEach((tab) => {
                if (group[tab].length < 5) {
                    group[tab].push(f)
                }
            })
        })
        const latest = mapData.slice(0, 5);
        // 在最新首部插入置顶数据
        latest.unshift({
            createDate: '2025-03-23',
            title: '我为什么想/需要搭建一个博客',
            url: '/src/randomthoughts/我为什么想-需要搭建一个博客.html'
        })
        return {
            group,
            latest
        }
    }
});
