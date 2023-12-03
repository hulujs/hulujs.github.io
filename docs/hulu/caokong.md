---
title: hulu caokong
order: 3
toc: content
group: 
    title: 命令行
---

# hulu caokong

## 简介

通过命令将[超控体系](/caokong)的文件安装到前台

## 用法

``` bash
hulu caokong
# 别名
hulu ck
```

仅在hulu repo的项目根目录下运行

```bash
$ │
$ ◇  hulu caokong
$ │  安装超控文件
$ │  别名: hulu ck
$ │
$ ◆  选择需安装到前台的超控文件
$ │  ● ~ck/app.tsx
$ │  ○ ~ck/global.less
$ │  ○ ~ck/layout.tsx
$ │  ○ ~ck/normal.less
$ │  ○ ~ck/report-web-vitals.ts
$ │  ○ ~ck/root.tsx
$ │  ○ ~ck/routes.ts
$ │  ○ ~ck/vconsole.ts
$ │  ○ ~ck/hooks/use-navigate.ts
$ │  ○ ~ck/hooks/use-params.ts
$ │  ○ ~ck/hooks/use-query.ts
$ │  ○ ~ck/hooks/use-route.ts
$ │  ○ ~ck/widgets/recoil/recoil-nest-root.tsx
$ │  ○ ~ck/widgets/recoil/recoil-url-sync.tsx
$ │  ○ ~ck/widgets/recoil/url-sync-atom-family.ts
$ │  ○ ~ck/widgets/recoil/url-sync-atom.ts
$ │  ○ ~ck/widgets/recoil/url-sync-store.ts
$ │  ○ ~ck/widgets/recoil/use-recoil-url-sync.ts
$ │  ○ ~ck/views/demo
$ │  ○ ~ck/views/no-match
$ │  ○ ~ck/views/no-permission
$ └
```

选择一个超控文件安装

```bash
$ │
$ ◇  hulu caokong
$ │  安装超控文件
$ │  别名: hulu ck
$ │
$ ◇  选择需安装到前台的超控文件
$ │  ~ck/routes.ts
$ │
$ └  文件已安装
$   @/routes.ts
```

若该文件已安装

```bash
$ ◆  选择需安装到前台的超控文件
$ │  ● ~ck/app.tsx
$ │  ○ ~ck/global.less
$ │  ○ ~ck/layout.tsx
$ │  ○ ~ck/normal.less
$ │  ○ ~ck/report-web-vitals.ts
$ │  ○ ~ck/root.tsx
$ │  ○ ~ck/routes.ts (已安装)
$ │  ○ ~ck/vconsole.ts
$ │  ○ ~ck/hooks/use-navigate.ts
```

会有标识`已安装`

若再次选择，会提醒是否覆盖安装

```bash
$ ◇  选择需安装到前台的超控文件
$ │  ~ck/routes.ts (已安装)
$ │
$ ◆  @/routes.ts已存在，是否覆盖安装
$ │  ● Yes / ○ No
$ └
```