---
title: hulu prod
order: 2
toc: content
group: 
    title: 命令行
---

# hulu prod

## 简介

用于将项目打包成生产环境的静态文件。

## 用法

``` bash
hulu prod [--out-dir <output>]
# 别名
hulu build [--out-dir <output>]
``` 

在终端运行命令

```bash
$ │
$ ◇  hulu prod
$ │  构建生产版本
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
$ │  vite build --config /Users/Mizi/works/hulu/demo31/hulu/config.ts
$ vite v5.0.2 building for production...
$ ✓ 2663 modules transformed.
$ dist/index.html                             0.89 kB │ gzip:  0.46 kB
$ dist/assets/layout-z994TqmE.css             2.19 kB │ gzip:  0.93 kB
$ dist/assets/index-BsI-inrN.js               0.15 kB │ gzip:  0.15 kB
$ dist/assets/index-1eoOP6r9.js               0.16 kB │ gzip:  0.16 kB
$ dist/assets/index-8sH1zuXu.js               0.17 kB │ gzip:  0.16 kB
$ dist/assets/index-bX8l5S5G.js               0.21 kB │ gzip:  0.18 kB
$ dist/assets/jsx-runtime-ha2lDf2f.js         0.92 kB │ gzip:  0.58 kB
$ dist/assets/index-YExFSSyq.js               2.16 kB │ gzip:  1.09 kB
$ dist/assets/root-b7yFZx2M.js                7.52 kB │ gzip:  3.14 kB
$ dist/assets/react-PzSkSLoa.js               7.80 kB │ gzip:  3.07 kB
$ dist/assets/layout-mSOkMavg.js             33.80 kB │ gzip: 11.01 kB
$ dist/assets/react-router-dom-Rfni6nPZ.js   48.37 kB │ gzip: 16.67 kB
$ dist/assets/recoil-fXaAqTPn.js             79.92 kB │ gzip: 24.93 kB
$ dist/assets/app-Z6ugYGkF.js                91.34 kB │ gzip: 33.72 kB
$ dist/assets/react-dom-BLAAZOk6.js         134.00 kB │ gzip: 43.17 kB
$ ✓ built in 2.62s
$ │
$ └  命令结束
```

## 参数说明

`--out-dir <output>` 输出目录，默认 `dist`

