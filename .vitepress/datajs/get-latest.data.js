import {createContentLoader} from 'vitepress'
import _ from 'lodash-es'

export default createContentLoader('src/*/*.md', {
    transform(rawData) {
        const groupsData = {
            technology: [],
            goodfood: [],
            life: [],
            test: [],
            randomthoughts: []
        }
        const mapData = rawData.sort((a, b) => {
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


/*
export default {
    load() {
        return [
            {title: '在 Settings → Pages 中，将 Source 设置为 GitHub Actions，而非分支，避免重复', date: '2025.03.25'},
            {title: 'github的actions到底什么鬼？', date: '2025.03.24'},
            {title: '使用node加puppeteer构建生成pdf的docker镜像', date: '2025.03.20'},
            {title: '搭建个人博客的一个想法', date: '2025.03.06'},
        ]
    }
}*/
