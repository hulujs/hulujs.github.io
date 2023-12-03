---
title: hulu yrm
order: 12
toc: content
group: 
    title: 命令行
---

# hulu yrm

## 简介

hulu yrm 是 hulu 内置的npm注册源管理工具。

## 用法

```bash
hulu yrm [register] [--rc]
```

在终端执行命令

```
★  star      修改 yarn 注册源(registry)
⚠  warning   只针对当前的 hulu repo, 不会对全局(global)生效
⚠  warning   集团registry, 已配置scope:@mlamp使用该源，不推荐repo使用

☐  pending   当前源：https://registry.npmmirror.com/

? 请选择该 hulu repo 的注册源 (Use arrow keys or type to search)
❯ taobao(推荐) --------- https://registry.npmmirror.com/
  npm ------------------ https://registry.npmmirror.com/
  cnpm ----------------- https://r.cnpmjs.org/
  tencent -------------- https://mirrors.cloud.tencent.com/npm/
  mlamp(集团，不推荐) -- https://registry.mlamp.cn/
  --
  其他配置
```