---
title: hulu dev
order: 2
toc: content
group: 
    title: 命令行
---

# hulu dev 

## 简介
启动开发服务

## 用法
```
hulu dev [--off-git] [--off-montage]
```

在终端执行命令

```shell
$ │
$ ◇  hulu dev
$ │  启动本地开发服务
$ │
$ ◇  正在读取配置文件
$ │  /Users/Mizi/works/hulu/demo31/hulu/config.ts
$ │
$ ◇  当前编译器
$ │  vite
$ │
$ ◇  正在生成超控体系
$ │
$ ◇  正在生成辅助体系
$ │
$ ◇  正在启动服务
$ │  vite --config /Users/Mizi/works/hulu/demo31/hulu/config.ts
$ Port 5173 is in use, trying another one...
$ 
$   VITE v5.0.2  ready in 192 ms
$ 
$   ➜  Local:   http://localhost:5174/
$   ➜  Network: use --host to expose
$   ➜  Inspect: http://localhost:5174/__inspect/
$   ➜  press h + enter to show help
```

## hulu 新生成文件

hulu dev 启动时，会自动生成以下目录结构

```
├── hulu
│   ├── .assists
│   │   ├── layout.tsx
│   │   ├── routes.tsx
│   │   └── vite.config.ts
│   ├── .caokong
│   │   ├── hulu
│   │   │   └── auto-imports.json
│   │   └── src
│   │       ├── app.tsx
│   │       ├── global.less
│   │       ├── hooks
│   │       ├── index.ts
│   │       ├── layout.tsx
│   │       ├── normal.less
│   │       ├── report-web-vitals.ts
│   │       ├── root.tsx
│   │       ├── routes.ts
│   │       ├── vconsole.ts
│   │       ├── views
│   │       └── widgets
│   └── config.ts
```

### .assists 辅助体系

辅助体系是 hulu 项目的辅助文件夹，是将某些具体的功能封装或转换成一个新的文件，供hulu体系使用

- 可以通过别名 `~ass` 访问
- 如 `~ass/vite.config.ts` 就是通过 `hulu/config.ts` + 当前的编译器 计算生成，供vite使用

### .caokong 超控体系代码

超控体系是 hulu 项目的核心

- 可以通过别名 `~ck` 访问

具体查看 [超控体系](/ck)

### config.ts 配置文件

配置文件是 hulu 项目的核心，主要是一些项目配置，比如端口号、编译器等。



## 命令参数

```
hulu dev 启动本地开发服务

Options:
      --off-montage  montage服务                             [boolean] [default: true]
      --off-git      Git代理                                 [boolean] [default: true]
```

### off-montage 

关闭  montage 服务

```bash
$ hulu dev --off-montage
```

### off-git

关闭 Git 代理

```bash
$ hulu dev --off-git
```