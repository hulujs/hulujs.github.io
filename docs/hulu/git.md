---
title: hulu git
order: 5
toc: content
group: 
    title: 命令行
---

# hulu git

## 简介

一些git的组合命令，可以简单操作git

## 用法

```
hulu git [command]
```

在终端中输入命令

```bash
│
◇  hulu git
│
◆  请选择要执行的命令
│  ○ 提交文件，并推送
│  ○ 添加commit message
│  ○ 添加commit message, 并推送远程
│  ○ 选择文件提交暂存区
│  ● 选择文件提交, 并推送 (hulu git acp --select)
└
```

### example 1: 提交文件，并推送

```bash
◇  请选择要执行的命令
│  提交文件，并推送
│
◆  ? 请选择 Convertional Commit 类型
│  ● feat: 新功能、新特性
│  ○ fix: 修改 bug
│  ○ chore: 其他修改（不在上述类型中的修改）
│  ○ build: 影响项目构建或依赖项修改
│  ○ ci: 持续集成相关文件修改
│  ○ docs: 文档修改
│  ○ perf: 更改代码，以提高性能
│  ○ refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
│  ○ revert: 恢复上一次提交
│  ○ style: 代码格式修改, 注意不是 css 修改（例如分号修改）
│  ○ test: 测试用例新增、修改
└
```

下一步

```bash
◇  ? 请选择 Convertional Commit 类型
│  feat: 新功能、新特性
│
◆  ? 请输入 Commit Message
│  _
└
```

你可以通过使用命令跳过选择命令

```bash
hulu git acp 
```

### example 2: 添加commit message, 并推送远程

有时候我们只想提交部分文件到远程，但原始的git add 需要手动添加文件地址，比较麻烦

该方便优化了这一过程，将手动添加文件地址变成了选择

```bash
│
◇  hulu git
│
◇  请选择要执行的命令
│  选择文件提交, 并推送
│
◇  ? 请选择 Convertional Commit 类型
│  feat: 新功能、新特性
│
◇  ? 请输入 Commit Message
│  测试选择文件
│
◆  选择待提交的文件
│  ◻ .commitlintrc.json
│  ◻ .dockerignore
│  ◻ .eslintignore
│  ◻ .eslintrc.json
│  ◻ .gitignore
│  ◻ .husky/commit-msg
│  ◻ .husky/pre-commit
│  ◻ .lintstagedrc.json
│  ◻ .prettierignore
│  ◻ .prettierrc.json
│  ◻ .stylelintignore
│  ◻ .stylelintrc.json
│  ◻ .vscode/extensions.json
│  ◻ .vscode/settings.json
│  ◻ .yarn/releases/yarn-berry.cjs
│  ◻ .yarnrc.yml
```

你可以通过使用命令跳过选择命令

```bash
hulu git acp --select
```

## 参数

```bash
hulu git [command] <params>
```

目前支持

- 提交文件，并推送: `hulu git acp`
- 添加commit message: `hulu git commit`
- 添加commit message, 并推送远程: `hulu git cp`
- 选择文件提交暂存区: `hulu git stash --select`
- 选择文件提交, 并推送: `hulu git acp --select`
