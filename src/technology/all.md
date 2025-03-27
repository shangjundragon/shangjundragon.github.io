---
{
  "title": "全部技术列表",
  "date": "2025-03-26",
  "tabs": [],
  "layout": 'page',
  "exclude": true

}
---

<script setup>
import {data} from '@/.vitepress/data-js/get-all-technology.data.js'
</script>

<AllBlogPageData :sourceData="data">
<span style="font-size: 2rem;font-weight: bold">全部技术文档</span>
</AllBlogPageData>
