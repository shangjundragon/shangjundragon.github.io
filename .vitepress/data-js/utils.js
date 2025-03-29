import {v4 as uuidv4} from 'uuid'

export function transAllData(rawData) {
    return rawData
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

            return {
                title,
                createDate,
                tabs: typeof tabs === 'string' ? tabs.split(',').filter(f => f) : tabs,
                url: page.url, _id: uuidv4()
            }
        })
}
