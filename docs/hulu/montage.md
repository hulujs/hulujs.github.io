---
title: hulu montage
order: 6
toc: content
group: 
    title: 命令行
---

# hulu montage

## 简介

启动montage本地服务

## 用法

```bash
hulu montage
```

在终端运行命令

```bash
│
◇  hulu montage
│  Montage Server
│
└  服务已启动
   127.0.0.1:4555
```

## 功能

提供可视化界面与本地服务交互API

- 编辑本地源码
- 提供本地node服务
- websocket服务
- 物料中心api
- ....

更多功能详细查看 [Montage 服务](/montage)

## 附注

在使用命令`hulu dev`会自动启动montage服务

`hulu montage`用于关闭`hulu dev`自动启动服务后，调试系统使用

- 若启动多个`hulu dev`服务，也只会启动一个montage服务实例
- montage 服务只支持单一实例工作

