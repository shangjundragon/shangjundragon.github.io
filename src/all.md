---
{
  "title": "全部文档列表",
  "date": "2025-03-28",
  "tabs": [ ],
  "layout": 'page',
  "exclude": true
}
---

<script setup>
import {data} from '@/.vitepress/data-js/getAllUnExcludeDataAndSort.data.js'
</script>

<AllBlogPageData :sourceData="data">
<span style="font-size: 2rem;font-weight: bold">全部数据</span>
</AllBlogPageData>
