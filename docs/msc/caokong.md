---
ttile: 超控体系
toc: content
order: 1
---

# 超控体系 CaoKong

> 超控体系是Hulu v5的一大特色，和核心的服务

## 超驰控制

超控的概念来源自 `选择性控制` 也叫 `超驰控制`

选择性控制系统也叫超驰控制系统，也有人称其为自保护系统或软保护系统。
在生产过程中对某些工业参数的限制条件所构成的逻辑关系迭加到正常的自动控制系统上去的组合控制方案。
系统由正常控制部分和取代控制部分组成，正常情况下正常控制部分工作，取代控制部分不工作；
当生产过程某个参数趋于危险极限时但还未进入危险区域时, 取代控制部分工作，而正常控制部分不工作，直到生产重新恢复正常，然后正常控制部分又重新工作。
这种能自动切换使控制系统在正常和异常情况下均能工作的控制系统叫选择性控制系统。

### hulu的超控体系

根据 `选择性控制` 理念，hulu也分为两条明暗作用域：

* ***开发明域***: 顾名思义，开发体系是由实际开发者提供的代码，符合Hulu工作流, 开发者可编辑
* ***控制暗域***: 控制暗域由hulu提供底层代码，来保证项目的正常运行，该代码开发者不可编辑

开发明域关心业务开发，而暗域保证系统正常运行；
而超控暗域与开发明域的关系是，而在实际业务时，暗域底层不能满足或需要调整时，在明域取代控制暗域的某个节点或方法，
而这一过程，就是 `超控` 的过程

### hulu的超控实现

hulu repo 下的文件结构 

```text
src
├── components
│   ├── asa
│   │   ├── asa.less
│   │   ├── asa.tsx
│   │   └── index.ts
│   └── index.ts
├── hooks
│   └── index.ts
├── main.tsx
├── routes.ts
├── typings
│   ├── auto-imports.d.ts
│   ├── ck.d.ts
│   ├── env.d.ts
│   ├── global.d.ts
│   └── type.d.ts
├── utils
│   └── index.ts
├── views
│   └── home
│       ├── home.tsx
│       └── index.ts
├── vite-env.d.ts
└── widgets
    └── index.ts
```

hulu/.caokong/src

```text
hulu/.caokong/src
├── app.tsx
├── global.less
├── hooks
│   ├── use-navigate.ts
│   ├── use-params.ts
│   ├── use-query.ts
│   └── use-route.ts
├── index.ts
├── layout.tsx
├── normal.less
├── report-web-vitals.ts
├── root.tsx
├── routes.ts
├── vconsole.ts
├── views
│   ├── demo
│   │   ├── demo.tsx
│   │   └── index.ts
│   ├── no-match
│   │   ├── .ck-ignore
│   │   ├── index.ts
│   │   └── no-match.tsx
│   └── no-permission
│       ├── .ck-ignore
│       ├── index.ts
│       └── no-permission.tsx
└── widgets
    └── recoil
        ├── recoil-nest-root.tsx
        ├── recoil-url-sync.tsx
        ├── url-sync-atom-family.ts
        ├── url-sync-atom.ts
        ├── url-sync-store.ts
        └── use-recoil-url-sync.ts
```

会发现 `./src` 与 `./hulu/.caokong/src` 目录结构基本一致

而实际上 `./src` 目录下的文件，是开发者开发明域的代码，
而 `./hulu/.caokong/src` 目录下的文件，就是是hulu提供的底层控制暗域代码

在hulu运行的时候，会优先查找明域下的文件 `.src/xxx` 是否存在，若不存在则会调用暗域下的文件 `.hulu/.caokong/src/xxx` ；
* 即 域名文件的权重大于暗域的权重
* 暗域提供底层的实现，其实暗域也提供了常用的方法，hooks, UI组件等
* 当开发者发现底层的实现不满足需求时，可以直接在明域下创建相同的相对路径文件，替换暗域的方法实现
    - 而这个文件就是`超控文件`

### 控制暗域的部分功能

```bash
hulu/.caokong/src
├── app.tsx  # React App 入口文件
├── global.less # 全局样式
├── hooks # hulu 提供的魔偶hooks
│   ├── use-navigate.ts
│   ├── use-params.ts
│   ├── use-query.ts
│   └── use-route.ts
├── index.ts # hulu计算的导出index文件
├── layout.tsx # 主框架文件
├── normal.less # 样式格式化文件
├── report-web-vitals.ts # vitals
├── root.tsx # root 文件，主要配置各类 provider 
├── routes.ts # routers 配置文件
├── vconsole.ts # 控制台 devtools 
├── views # demo 演示页面
│   ├── demo
│   ├── no-match
│   └── no-permission
└── widgets # 一些小工具
    └── recoil
        ├── recoil-nest-root.tsx
        ├── recoil-url-sync.tsx
        ├── url-sync-atom-family.ts
        ├── url-sync-atom.ts
        ├── url-sync-store.ts
        └── use-recoil-url-sync.ts
```

## 在开发域直接调用暗域方法

在 tsconfig 配置了 

```json
{
    "compilerOptions": {
        "paths": { "~ck/*": ["./hulu/.caokong/*"] }
    }
}
```

使用 `~ck` alias来调用暗域的方法

```ts
import { useNavigate, useRoute } from "~ck";
```

### 超控文件调用原理

在控制暗域中会自动计算超控文件，并写入 `./hulu/.caokong/src/index.ts`

```ts
// 超控文件
export * from '/Users/Mizi/works/hulu/demo28/src/layout';  
export * from '/Users/Mizi/works/hulu/demo28/hulu/.caokong/src/report-web-vitals';  
// 超控文件
export * from '/Users/Mizi/works/hulu/demo28/src/routes';  
export * from '/Users/Mizi/works/hulu/demo28/hulu/.caokong/src/vconsole';  
export * from '/Users/Mizi/works/hulu/demo28/src/hooks/use-navigate';  
export * from '/Users/Mizi/works/hulu/demo28/hulu/.caokong/src/hooks/use-params';  
export * from '/Users/Mizi/works/hulu/demo28/hulu/.caokong/src/hooks/use-query';  
export * from '/Users/Mizi/works/hulu/demo28/hulu/.caokong/src/hooks/use-route';  
export * from '/Users/Mizi/works/hulu/demo28/hulu/.caokong/src/widgets/recoil/recoil-url-sync';  
export * from '/Users/Mizi/works/hulu/demo28/hulu/.caokong/src/widgets/recoil/url-sync-atom-family';  
export * from '/Users/Mizi/works/hulu/demo28/hulu/.caokong/src/widgets/recoil/url-sync-atom';  
export * from '/Users/Mizi/works/hulu/demo28/hulu/.caokong/src/widgets/recoil/url-sync-store';  
export * from '/Users/Mizi/works/hulu/demo28/hulu/.caokong/src/widgets/recoil/use-recoil-url-sync';  

import '/Users/Mizi/works/hulu/demo28/hulu/.caokong/src/global.less';
import '/Users/Mizi/works/hulu/demo28/hulu/.caokong/src/normal.less';
```

如上所示，其中layout和route两个文件就是超控文件

## 超控命令

我们可以使用超控的命令来快速创建超控文件

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

更多的超控实现请参考 [超控实现](/hulu/caokong)
