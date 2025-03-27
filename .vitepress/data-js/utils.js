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
            return {title, createDate, tabs, url: page.url}
        })
}