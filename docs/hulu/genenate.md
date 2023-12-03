---
title: hulu genenate
order: 4
toc: content
group: 
    title: 命令行
---

# hulu genenate

## 简介

`hulu genenate` 用于生成 hulu 视频的字幕文件。

## 用法

```bash
hulu genenate 
# 别名
hulu g
```

### 在终端运行命令

```bash
$ │
$ ◇  hulu generate
$ │  代码生成
$ │  别名: hulu g
$ │
$ ◆  选择待创建代码模板类型
$ │  ● ✣ hooks: React hooks + less (文件夹)
$ │  ○ ✣ Wiget: React Function 标准组件 (文件夹)
$ │  ○ ✣ View: React 页面级组件 (文件夹)
$ │  ○ ✳︎ command: 命令行工具 (单文件)
$ │  ○ ✳︎ Single: 简单组件 (单文件)
$ └
```

### 选择待创建代码模板类型

```bash
$ ◇  选择待创建代码模板类型
$ │  ✣ Wiget: React Function 标准组件 (文件夹)
$ │
$ ? 选择代码文件写入位置
$   ./hulu/.caokong/src/widgets
$   ./hulu/.caokong/src/widgets/recoil
$   ./public
$   ./public/assets
$   ./src
$   ./src/components
$ ❯ ./src/hooks
$   ./src/typings
$   ./src/utils
$   ./src/views
$   ./src/views/home
$   ./src/widgets
$   ./
$   ./.cache
$   ./.cache/ts-import
```

### 输入文件夹名称

```bash
$ ? 选择代码文件写入位置 ./src/components
$ │
$ ◆  请输入模块名称
$ │  名称为kebab(中划线)形式，如: tpl-info
$ └
```

### 输出

```bash
$ ◇  选择待创建代码模板类型
$ │  ✣ Wiget: React Function 标准组件 (文件夹)
$ │
$ ? 选择代码文件写入位置 ./src/components
$ │
$ ◇  请输入模块名称
$ │  asa
$ │
$ ◆  写入位置:
$ │  /Users/Mizi/works/hulu/demo31/src/components/asa
$ │
$ └  文件已生成
```

## 代码模版

hulu 预设下面的代码模版，你可以根据需要选择。

```bash
● ✣ hooks: React hooks + less (文件夹)
○ ✣ Wiget: React Function 标准组件 (文件夹)
○ ✣ View: React 页面级组件 (文件夹)
○ ✳︎ command: 命令行工具 (单文件)
○ ✳︎ Single: 简单组件 (单文件)
```

其代码模板组成如下

```bash
├── command
│   ├── generator.json
│   └── {kebab}.ts.ejs
├── css-module
│   ├── generator.json
│   └── {kebab}
│       ├── index.ts.ejs
│       ├── {kebab}.module.less.ejs
│       └── {kebab}.tsx.ejs
├── single
│   ├── generator.json
│   └── {kebab}.ts.ejs
├── view
│   ├── generator.json
│   └── {kebab}
│       ├── index.ts.ejs
│       ├── {kebab}.module.less.ejs
│       └── {kebab}.tsx.ejs
└── widget
    ├── generator.json
    └── {kebab}
        ├── index.ts.ejs
        ├── {kebab}.less.ejs
        └── {kebab}.tsx.ejs
```

开发者可以根据自己的需求，创建代码模板

- 在 hulu 文件夹下创建 `genenator` 文件夹
- 在 `genenator` 文件夹下创建自己代码模板的文件
- 在代码模板文件夹按模板规则创建相应的文件
- 代码模板采用的是`ejs`模板引擎

### genenate.json 规则

```json
{
    "name": "Wiget",
    "description": "React Function 标准组件",
    "author": "mizi <mizi.lin@miaozhen.com>",
    "address": "{kebab}",
    "type": "dir",
    "target": "repo",
    "extra": {}
}
```

`genenate.json` 规则基本与 `package.json` 一致，

- `type` 字段，用于指定代码模板类型
    - dir 文件夹
    - single 单文件
- `address` 字段，用于指定模板的入口文件
- `extra` 字段，用于指定模板的额外配置(参数变量)
- 如果需要引入新的npm包，则与package.json一样，使用`dependencies` 字段








