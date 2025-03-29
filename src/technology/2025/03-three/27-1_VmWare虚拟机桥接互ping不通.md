---
{
  title: "VMware虚拟机设置桥接和宿主机互ping不同",
  createDate: "2025-03-27 11:09",
  tabs: [ 'technology' ],
  sidebar: false,
  layout: 'doc'
}
---

## 问题描述

::: info
虚拟机桥接 IP、网段正常，但和宿主机互ping不通
:::

## 解决步骤

::: info

- 尝试关闭主机和虚拟机防火墙 互相ping尝试
- VmWare 点击编辑 -- 虚拟网络编辑器 -- 更改设置，设置桥接模式网卡为当前宿主机网卡名称
  :::

## 如果宿主机不想关闭防火墙可以开机imcp（虚拟机未尝试）
<n-image width="300" object-fit="contain" src="/assets/2025/03/27-1.jpg"/>
