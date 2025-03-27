---
{
  "title": "全部生活列表",
  "date": "2025-03-26",
  "tabs": [],
  "layout": 'page',
  "exclude": true
}
---

<script setup>
import {data} from '@/.vitepress/data-js/get-all-life.data.js'
</script>

<AllBlogPageData :sourceData="data">
<span style="font-size: 2rem;font-weight: bold">全部生活文档</span>
</AllBlogPageData>
