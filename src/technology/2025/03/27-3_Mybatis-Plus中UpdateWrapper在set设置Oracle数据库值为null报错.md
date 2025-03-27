---
{
  title: "Mybatis-Plus使用wrapper将Oracle中字段设置为null报错",
  createDate: "2025-03-27 11:15",
  tabs: [ 'technology' ],
  sidebar: false,
  layout: 'doc'
}
---

## 问题描述说明

::: info
Mybatis-Plus中UpdateWrapper在set设置Oracle数据库值为null报错
:::

## 解决方案

::: tip
更改配置中的jdbc-type-for-null 为 'null'
:::

```yaml
mybatis-plus:
  configuration:
    jdbc-type-for-null: 'null'
``` 

<SimpleImgPreview src="/assets/2025/03/27-2.png" height="20vw"/>