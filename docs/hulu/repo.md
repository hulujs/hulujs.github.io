---
title: hulu repo
order: 1
toc: content
group: 
    title: 命令行
---

# hulu repo 

## 简介

创建hulu仓库

## 用法

```bash
hulu repo [dirname]
```

在终端输入命令


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

## 创建步骤

### 请选择编译器

```bash
$ ◆  请选择编译器
$ │  ● Vite v5 (推荐，默认)
$ │  ○ Umi v4
$ │  ○ Dumi v2
$ │  ○ CRA - React create app
$ │  ○ Next
$ │  ○ Remix
```

hulu v5 本身对编译器不敏感，将构建项目交由成熟的第三方，你可以根据自己的喜好进行选择。

- hulu v4 的构建器 vine 是基于webpack v5, 尚未决定是否加入hulu v5版本
- 若你使用的编译器不在列表中，你可以同于插件的形式加入
- 推荐使用vite，hulu针对vite做了部分增强

### 输入目录名

hulu 支持创建目录，或直接在工作目录下新建项目目录

hulu 嗅探当前目录情况，将会提醒用户

```bash
$ ◆  ? 待创建的项目，在已存在的项目下, 是否确认创建
$ │  - /Users/Mizi/works/hulu/demo30
$ │  - 这是一个npm项目
$ │  ● Yes / ○ No
$ └
```

```bash
$ ◆  ? 是否在当前目录下创建项目
$ │  - 建议项目创建在空文件夹下
$ │  - 当前目录下拥有24个文件夹
$ │  ● 新建文件夹后创建项目
$ │  ○ 直接创建项目
$ └
```

hulu 支持在当前的工作目录下创建项目，或新建空文件夹下创建项目

或 通过快捷命令创建

```bash
$ hulu repo demo31
```

### 输入项目简称(package.name)

名称尽量简短，建议3~8个字符
可与目录名，项目名不一样

### 输入项目名称

可为中文名
用作浏览器Tab名称


### 选择npm包源管理器

```bash
◆  ? 选择npm包源管理器
│  ● taobao ------- https://registry.npmmirror.com/ (推荐)
│  ○ npm ---------- https://registry.npmjs.org/
│  ○ yarn --------- https://registry.yarnpkg.com/
│  ○ tencent ------ https://mirrors.cloud.tencent.com/npm/
│  ○ cnpm --------- https://r.cnpmjs.org/
│  ○ npmMirror ---- https://skimdb.npmjs.com/registry/
└
```
选择后，会自动使用yarn v3安装包


### 是否委托hulu代理管理Git

```bash
◇  正在初始化Git信息
│
●  Git服务代理
│  hulu推荐开启Git服务代理
│  它可以帮助用户
│  - 不定时自动拉取(pull)远程代码, 避免代码冲突
│  - 可以自动清理远程删除的分支
│  - 可以配合自动推送(push)系统升级文件
│  - 可以配合GitFlow管理系统
│  - 可以更好的管理版本
│
◆  ? 是否委托hulu代理管理Git
│  ● Yes / ○ No
```

若选择Yes, 让hulu代理管理Git 

- 每次启动dev的时候，可以自动拉取远程代码
- 每次协作开发者提交代码后，自动检测，若发现冲突，提醒开发者
- 远程删除分支，自动清理远程删除的分支
- 每次提交代码，自动清理本地分支
- ...

## 目录结构

```
.
├── .commitlintrc.json
├── .dockerignore
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .husky
│   ├── commit-msg
│   └── pre-commit
├── .lintstagedrc.json
├── .prettierignore
├── .prettierrc.json
├── .stylelintignore
├── .stylelintrc.json
├── .vscode
│   ├── extensions.json
│   └── settings.json
├── .yarn
│   ├── cache
│   │   ├── .gitignore
│   │   ├── @aashutoshrathi-word-wrap-npm-1.2.6-5b1d95e487-ada901b9e7.zip
│   │   ├── @ant-design-colors-npm-7.0.0-eab6673884-419e98d9cb.zip
│   │   ├── @ant-design-cssinjs-npm-1.17.5-44dcf8d8e0-e87063170d.zip
│   │   ├── @ant-design-icons-npm-5.2.6-ee127dafcf-2f571699b1.zip
│   │   ├── @ant-design-icons-svg-npm-4.3.1-b454467b9c-47f0474277.zip
│   │   ├── ... .. .
│   │   ├── yn-npm-3.1.1-8ad4259784-2c487b0e14.zip
│   │   ├── yocto-queue-npm-0.1.0-c6c9a7db29-f77b3d8d00.zip
│   │   └── zrender-npm-5.4.3-f5573f7bc2-ae89584fbe.zip
│   ├── install-state.gz
│   └── releases
│       └── yarn-berry.cjs
├── .yarnrc.yml
├── README.md
├── hulu
│   └── config.ts
├── index.html
├── package.json
├── public
│   └── assets
│       └── hulu-leaf.png
├── src
│   ├── components
│   │   └── index.ts
│   ├── hooks
│   │   └── index.ts
│   ├── main.tsx
│   ├── typings
│   │   ├── auto-imports.d.ts
│   │   ├── ck.d.ts
│   │   ├── env.d.ts
│   │   ├── global.d.ts
│   │   └── type.d.ts
│   ├── utils
│   │   └── index.ts
│   ├── views
│   │   └── home
│   ├── vite-env.d.ts
│   └── widgets
│       └── index.ts
├── tsconfig.json
├── tsconfig.node.json
└── yarn.lock
```

### 一堆工程化配置文件

hulu 内置了一些工程化配置文件，你可以根据需要进行修改

-.commitlintrc.json
-.dockerignore
-.eslintignore
-.eslintrc.json
-.gitignore
-.husky
-.lintstagedrc.json
-.prettierignore
-.prettierrc.json
-.stylelintignore

### .vscode

vscode 的通用配置, 主要添加了一些插件

```json
{
    "recommendations": [
        "eamodio.gitlens",
        "kamikillerto.vscode-colorize",
        "usernamehw.errorlens",
        "esbenp.prettier-vscode",
        "dbaeumer.vscode-eslint",
        "oderwat.indent-rainbow",
        "clinyong.vscode-css-modules"
    ]
}
```

### .yarn

yarn 的工作目录，预装了 yarn v3 

所以 hulu 下，仅此支持yarn, 在yarn下可以对hulu进行最佳实践

- resolutions 对包版本进行锁定
- install-state.gz 用于记录安装状态
- releases 用于记录安装的yarn版本
- cache 用于缓存安装的包，可以支持部分包的离线安装

### hulu 

hulu的工作目录，具体查看 [hulu dev](/hulu/dev#hulu-新生成文件)
