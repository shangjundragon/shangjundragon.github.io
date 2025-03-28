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
Mybatis-Plus中UpdateWrapper在set设置Oracle数据库值为null报错，
原因是JdbcType为Other，不被支持。而在Mysql数据库中此操作正常。
解决方案包括修改全局配置为field-strategy:IGNORE或针对特定字段设置jdbcType。
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
<n-image width="300" object-fit="contain" src="/assets/2025/03/27-2.jpg"/>
