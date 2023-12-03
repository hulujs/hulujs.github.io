---
title: 离线包安装
toc: content
order: 2
group:
  title: 其他
---

# 离线包安装

## 原理

在`yarn v3`执行`yarn install`时，会将所有依赖的包下载到`.yarn/cache`目录下

```bash
.yarn/cache
├── .gitignore
├── @aashutoshrathi-word-wrap-npm-1.2.6-5b1d95e487-ada901b9e7.zip
├── @ant-design-colors-npm-7.0.0-eab6673884-419e98d9cb.zip
├── @ant-design-cssinjs-npm-1.17.5-44dcf8d8e0-e87063170d.zip
├── @ant-design-icons-npm-5.2.6-ee127dafcf-2f571699b1.zip
├── @ant-design-icons-svg-npm-4.3.1-b454467b9c-47f0474277.zip
├── @ant-design-react-slick-npm-1.0.2-7af1d8d832-c2a2d14270.zip
├── @antfu-utils-npm-0.7.6-beeb78b1d6-92bf38ded4.zip
├── @babel-code-frame-npm-7.23.4-6d00006250-29999d08c3.zip
├── @babel-helper-validator-identifier-npm-7.22.20-18305bb306-136412784d.zip
├── @babel-highlight-npm-7.23.4-2a9f2d2538-643acecdc2.zip
├── @babel-runtime-npm-7.23.4-2e68957572-8eb6a6b236.zip
├── @commitlint-cli-npm-17.6.5-1dd10cbe12-acc57bdb73.zip
├── @commitlint-config-conventional-npm-17.6.5-ef8d82de49-f2c637a993.zip
├── @commitlint-config-validator-npm-17.8.1-486ceb93a4-487051cc36.zip
├── @commitlint-ensure-npm-17.8.1-4b1aee4dfd-a4a5d3071d.zip
├── @commitlint-execute-rule-npm-17.8.1-71a6c6816e-73354b5605.zip
```

yarn 将 npm 包缓存在 `.yarn/cache`

### yarn install 执行步骤

- 生成依赖树：Yarn会根据package.json中的dependencies和devDependencies生成一个依赖树。
- 下载依赖包：Yarn会根据依赖树下载所有的依赖包，并将其存储在本地的yarn.lock文件中。
- 解压缩依赖包：Yarn会将下载的依赖包进行解压缩，以便在项目中使用。
- 安装本地依赖包：如果项目中存在本地的依赖包，Yarn会优先使用本地的依赖包，避免重复下载。
- 安装本地依赖树：Yarn会根据依赖树安装所有的本地依赖包。
- 检查依赖包：Yarn会检查所有依赖包的版本是否符合要求，并记录在yarn.lock文件中。
- 完成安装：当所有的依赖包都安装完成后，Yarn会输出安装结果，并提示是否可以开始使用项目。

其中，当依赖树生成后，Yarn会先检查缓存中是否存在已下载的依赖包。

如果缓存中存在该依赖包，则Yarn会直接从缓存中取出依赖包并安装，避免重复下载。这可以大大提高依赖包的安装速度。

### 离线包制作

根据 yarn install 执行原理，我们只需将需要离线安装的包存储在`.yarn/cache`目录下即可。

通过`.gitignore`配置，将关联压缩包上传至git服务，

其他开发者git clone后，就可以运行`yarn install`离线安装包

### gitignore 配置

一般情况下，我们不会将`.yarn/cache`上传服务器

```text
.yarn/*
```

但需要需要将本地宝做离线安装，需要修改配置，

如下，我们需要将 `@hulujs/*` 系列的包做离线安装 

修改 `.gitignore` 如下

```text
!.yarn
/.yarn/*
!/.yarn/cache
/.yarn/cache/*
!/.yarn/cache/@hulujs-*
```

## 应用场景

- 本地安装包，没有发布到 npm 源
- npm访问慢
- 在外网中使用私有源，或不能访问，或速度慢
- 包过大，下载慢
- 构建服务器不支持访问公网
- ...

## 新理念

其实在基于docker的CI/CD过程，我们通常是将每次构建的时候从新install，
大部分情况下docker中访问网络的速度通常较慢，
但太多的依赖包会导致构建时间过长，所以我们可以将依赖包做离线安装，
这样每次构建都可以快速的从缓存中获取依赖包，从而加快构建速度。

所以建议将`.yarn/cache`全部上传，通常一个站点cache包的大小在100m左右，（根据项目的复杂程序，决定cache大小）
牺牲部分git空间大小，和首次构建时间，可以大大提高CI/CD构建速度, 根据所在docker访问服务器的速度, 
据我在上家公司的经验，可以每次节省 5~10 分钟时间，越大的公司节省的时间越多；

## why not pnp?

### pnp 是什么

pnp 是 yarn v2 引入的新特性，它是一种新的依赖解析算法，它将依赖解析的过程从依赖安装的过程中分离出来，
并将解析过程存储在一个缓存中，这样在下次安装依赖的时候，就可以直接从缓存中获取依赖，
从而加快安装速度。

- 更快的安装速度：Yarn 3使用了Rust编写的yarn命令行工具，并对PnP模式进行了优化，从而实现了更快的依赖包安装速度。
- 更好的tree-shaking效果：Yarn 3的PnP模式支持ES Module规范，并使用了新的--mode=pnpm选项来启用PnP模式。这可以带来更好的tree-shaking效果，减小打包后的文件大小。
- 更好的版本控制：Yarn 3的PnP模式使用了.pnp.js文件来管理依赖包，该文件会被添加到版本控制中，从而更好地跟踪依赖包的变化。

### 为什么不适用pnp

目前pnp还存在部分问题

- 缓存问题：pnp的缓存机制是基于文件系统的，如果在不同的机器上使用，可能会导致缓存不一致。
- pnp 没有 node_modoules 目录, 本地调试方面不方便
- 安装也不太稳定

待解决这些问题，hulu 会在第一时间上pnp机制， 敬请期待