import {createContentLoader} from 'vitepress'

export default createContentLoader('src/**/*.md', {
    transform(rawData) {
        const groupsData = {
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
                return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
            }).map((page) => {
                const {title, date, tabs} = page.frontmatter
                return {title, date, tabs, url: page.url}
            })

        mapData.forEach(f => {
            f.tabs.forEach((tab) => {
                if (groupsData[tab].length < 5) {
                    groupsData[tab].push(f)
                }
            })
        })
        return {
            groupsData,
            latestData: mapData.slice(0, 5),
        }
    }
});
