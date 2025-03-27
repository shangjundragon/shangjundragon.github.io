---
{
  "title": "全部测评列表",
  "date": "2025-03-26",
  "tabs": [],
  "layout": 'page',
  "exclude": true
}
---

<script setup>
import {data} from '@/.vitepress/data-js/get-all-test.data.js'
</script>

<AllBlogPageData :sourceData="data">
<span style="font-size: 2rem;font-weight: bold">全部测评文档</span>
</AllBlogPageData>
