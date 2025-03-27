---
{
  title: "Vue配置keep-alive缓存不生效",
  createDate: "2025-03-27 11:12",
  tabs: [ 'technology' ],
  sidebar: false,
  layout: 'doc'
}
---

## 问题描述说明

```
1、vue keep-alive include 设置了路由名称 缓存 不生效
```

## 原因分析

```
1、路由组件名称和页面名称不一致
```

## 解决方案思路

::: info

- keep-alive的include缓存页面设置好
- 保持路由组件name名称和页面名称一致
  :::

  ::: info
  vue2设置name选项，vue3设置defineOptions中的name
  :::