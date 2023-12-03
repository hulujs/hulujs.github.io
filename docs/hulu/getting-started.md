---
title: 快速上手
order: -1
---

# 快速上手

## 环境准备

- node v16+ 
    - 推荐使用 n 或 nvm 管理 node 版本

- yarn v1.22.10+ 
    - `hulu仅支持yarn, 并对yarn进行了扩展，支持包同步更新和离线安装等特性`
    - hulu 项目中会将yarn升级只v3进行使用

- git v2.17.0 + 
    - git 版本不得低于2.17.0，低于该版本会导致 hulu 无法正常工作

## 全局安装hulu CLI

```bash
$ yarn global add @hulujs/cli
```

或 使用 yarn create

```bash
$ yarn create hulujs
```

> 推荐全局安装，因为 `@hulujs/cli` 拥有许多非常实用的工具命令

## 创建项目

在你的工作目录下执行以下命令：

```bash
$ hulu repo 
# 或
$ yarn create hulujs
$ 
$ │
$ ◇  hulu repo
$ │  创建标准的葫芦项目
$ │  ---
$ │  默认安装工程化辅助工具，如 eslint, stylelint, pritter等
$ │  若需要按需安装
$ │  请使用命令 "hulu repo -s" or "hulu repo --select" 进行按需安装
$ │
$ ◇  正在检测当前环境
$ │
$ ◇  node版本号
$ │  v18.18.0
$ │
$ ◇  Git版本号
$ │  v2.41.0
$ │
$ ◇  正在配置编译器
$ │
$ ◇  请选择编译器
$ │  Vite v5
$ │
$ ◇  正在创建项目
$ │
$ ●  名词解释
$ │  文件夹名称(repo name): 项目所在文件夹名称
$ │  包名称(pkg name): package.json 的name值，
$ │  建议3~8个字符，只能用英文字符，用作项目开发alias
$ │  ---
$ │  大部分情况下，文件夹名称与包名称一致
$ │
$ ◇  ? 是否在当前目录下创建项目
$ │  - 建议项目创建在空文件夹下
$ │  - 当前目录下拥有23个文件夹
$ │  新建文件夹后创建项目
$ │
$ ◇  ? 输入目录名
$ │  demo30
$ │
$ ◇  ? 输入项目简称(package.name)
$ │  名称尽量简短，建议3~8个字符
$ │  可与目录名，项目名不一样
$ │  demo
$ │
$ ◇  ? 输入项目名称
$ │  可为中文名
$ │  演示项目
$ │
$ ◆  项目创建成功
$ │  项目地址: /Users/Mizi/works/hulu/demo30
$ │
$ ◇  正在安装包
$ │
$ ●  项目地址
$ │  /Users/Mizi/works/hulu/demo30
$ │
$ ◇  ? 选择npm包源管理器
$ │  taobao ------- https://registry.npmmirror.com/
$ │
$ ○  安装包 -> yarn install
$ ➤ YN0000: ┌ Resolution step
$ ➤ YN0000: └ Completed in 3s 281ms
$ ➤ YN0000: ┌ Fetch step
$ ➤ YN0013: │ yargs-parser@npm:21.1.1 can't be found in the cache and will be fetched from the
$ ➤ YN0013: │ yargs@npm:17.7.2 can't be found in the cache and will be fetched from the remote
$ ➤ YN0013: │ yn@npm:3.1.1 can't be found in the cache and will be fetched from the remote regi
$ ➤ YN0013: │ yocto-queue@npm:0.1.0 can't be found in the cache and will be fetched from the re
$ ➤ YN0013: │ zrender@npm:5.4.3 can't be found in the cache and will be fetched from the remote
$ ➤ YN0000: └ Completed in 2s 905ms
$ ➤ YN0000: ┌ Link step
$ ➤ YN0072: │ The application uses portals and that's why --preserve-symlinks Node option is required for launching it
$ ➤ YN0007: │ core-js@npm:3.33.3 must be built because it never has been before or the last one failed
$ ➤ YN0007: │ esbuild@npm:0.19.8 must be built because it never has been before or the last one failed
$ ➤ YN0007: │ @swc/core@npm:1.3.99 [685f3] must be built because it never has been before or the last one failed
$ │
$ ◇
$ │
$ ●  hulu只支持Yarn
$ │  当前Yarn版本为: v0.0.0
$ │
$ ◇  正在初始化Git信息
$ │
$ ●  Git服务代理
$ │  hulu推荐开启Git服务代理
$ │  它可以帮助用户
$ │  - 不定时自动拉取(pull)远程代码, 避免代码冲突
$ │  - 可以自动清理远程删除的分支
$ │  - 可以配合自动推送(push)系统升级文件
$ │  - 可以配合GitFlow管理系统
$ │  - 可以更好的管理版本
$ │
$ ◇  ? 是否委托hulu代理管理Git
$ │  No
$ │
$ ●  不使用代理管理Git
$ │  可以在hulu/config开启服务
$ │  或使用命令 hulu git --useGit 开启
$ │
$ ◆  Hulu Repo 创建成功
$ │
$ └  命令结束
$    可以使用命令启动开发环境
$    cd demo30 && hulu dev
```


## 启动服务

```bash
$ hulu dev    
$ │
$ ◇  hulu dev
$ │  启动本地开发服务
$ │
$ ◇  正在读取配置文件
$ │  /Users/Mizi/works/hulu/demo30/hulu/config.ts
$ │
$ ◇  当前编译器
$ │  vite
$ │
$ ◇  正在生成超控体系
$ │
$ ◇  正在生成辅助体系
$ │
$ ◇  正在启动服务
$ │  vite --config ~hulu/config.ts
$ Port 5173 is in use, trying another one...
$ 
$   VITE v5.0.2  ready in 195 ms
$ 
$   ➜  Local:   http://localhost:5173/
$   ➜  Network: use --host to expose
$   ➜  Inspect: http://localhost:5173/__inspect/
$   ➜  press h + enter to show help
```

在浏览器里打开 http://localhost:5173/，访问项目默认页面


