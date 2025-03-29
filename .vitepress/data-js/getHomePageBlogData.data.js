import {createContentLoader} from 'vitepress'
import {transAllData} from "./utils.js";


export default createContentLoader('src/**/*.md', {
    transform(rawData) {
        const group = {
            technology: [],
            goodfood: [],
            life: [],
            test: [],
            randomthoughts: []
        }
        const allData = transAllData(rawData);

        allData.forEach(f => {
            f.tabs.forEach((tab) => {
                // 只要5条最新数据
                if (group[tab].length < 5) {
                    group[tab].push(f)
                }
            })
        })
        const latest = allData.slice(0, 5);
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
