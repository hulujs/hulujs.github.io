---
title: 全局命令
toc: content
group:
  title: 其他
  order: 2
---

# Hulu CLI 全局命令

## 全局安装

```bash
yarn global add @hulu/cli@latest
```

## 用法

```bash
hulu <command> [options]
```

### 别名 <Badge>个人喜欢</Badge>

```bash
oo <command> [options]
# 或
oo- <command> [options]
```

> `oo-` 是否更像葫芦呢~

## 使用

```bash
$ ➜  hulujs.github.io git:(main) ✗ oo dev
$ │
$ ◇  hulu dev
$ │  启动本地开发服务
$ │
$ ◇  正在读取配置文件
$ │  /Users/Mizi/works/hulu/hulujs.github.io/hulu/config.ts
$ │
$ ◇  当前编译器
$ │  vite
$ │
$ ◇  正在生成超控体系
$ │
$ ◇  正在生成辅助体系
$ │
$ ◇  正在启动服务
$ │  vite --config /Users/Mizi/works/hulu/hulujs.github.io/hulu/config.ts
$ 
$   VITE v5.0.2  ready in 161 ms
$ 
$   ➜  Local:   http://localhost:5173/docs/
$   ➜  Network: use --host to expose
$   ➜  Inspect: http://localhost:5173/docs/__inspect/
$   ➜  press h + enter to show help
```

## 帮助

```bash
$ oo -h 
# 或
$ oo --help
# 或
$ oo <command> -h | --help

$ oo -h
$ oo [command]
$ 
$ Commands:
$   oo caokong         hulu dev 启动本地开发服务                             [aliases: ck]
$   oo dev             hulu dev 启动本地开发服务                          [aliases: start]
$   oo generate        根据codemod代码模版生成代码模块                            [aliases: g]
$   oo git             Git的某些操作结合的快捷命令
$   oo init            hulu init 初始化配置                                [aliases: i]
$   oo montage         Montage低代码服务
$   oo repo [dirname]  hulu repo 创建标准的葫芦项目                       [aliases: create]
$   oo tools           一些shell小命令或扩展的工具集合                             [aliases: t]
$   oo prod            hulu prod 构建生产版本                           [aliases: build]
$ 
$ Options:
$   -h, --help     Show help                                             [boolean]
$   -v, --version  Show version number                                   [boolean]
```