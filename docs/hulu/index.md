---
nav:
  title: Hulu
  order: -1
title: 什么是hulu
order: -2
---

# 什么是hulu

Hulu 一个专注于 React 的可视化开发效率平台.

旨在开发者通过hulu平台提高开发效率，减少开发成本，避免成本冗余，提高开发质量。

![Alt text](./assets/hulu.png)

## 功能 

Hulu v5 新版本不再关注前端代码的工程化，如编译，构建打包，测试，部署等，而是专注于提升开发者的开发效率，让开发更简单，交互更友好。

- ***Hulu CLI***: 提供命令行工具，快速创建项目, 构建项目, 生成代码, Git版本管理等
- ***Montage***: 基于 React 的可视化开发工具，可以让开发者“本地云开发”，快速定位问题，编辑源码；项目配置文件可视化操作等 
- ***Material***: 物料市场，由开发者提供的组件，快速复用和本地化`编辑`，减少“造轮子”
- ***Met***: Met遇见, UI组件库, 更贴近开发者实际生产，更为友好；部分组件优化antd组件库，让使用起来更为简单方便
- ***Mu***: 方法库，继承自lodash, 主要基于`PropPath`和`Row`封装更为方法的小工具更贴近实际的业务开发
- ***Hulu Flow***: 基于Git Flow, 对实际工作流进行流程化配置，配合CLI工具，减少多人协作开发冲突，增强版本管理
- ***Hulu Repo***: 项目开发管理
    - Auto Imports / One Imports : 减少代码代码文件import的量，让开发简单，代码看起来更为优雅
    - Atomic: 配合Recoil，原子化开发，减少State的复杂度，开发更为流畅和简便
    - 配置式路由: 基于React Router, 配置式路由，让路由管理更简单
    - 辅助文件 assists: 生成大量的辅助文件，供开发者调试，理解架构
- ***CaoKong***: 葫芦操控体系，Hulu V5 一大特色，集合Met, Mu等；Hulu能让整个体系无配置化运行，开发者可以根据实际业务，可以在任意一个节点更改hulu底层提供的UI组件，代码，hooks 或运行流程等
- ***插件化***: 基于插件机制，让开发者可以快速扩展hulu的功能，满足开发者的个性化需求

## 特性

### 默认推荐使用vite
- 默认使用Vite, 当然你也可以使用 webpack, umi, cra, next, remix 等编译器；
    - hulu对编译器无感知，只要你有能力使用即可
    - hulu对Vite做了部分加强，推荐使用Vite

### Import less 更少的导入

- Import all in hulu, 所有功能都集成在hulu中，无需额外安装

```ts
// 绝大部分的第三方组件和葫芦的组件内置，让开发者减少import
import { useForm, useLocation, generatePath, history ... } from '@hulujs/msc'
```

### Auto Imports 

- 常用方法或组件，自动导入，全局声明，使用的时候 无需再声明

```tsx | pure
import { demoState } from '../store';

// 在 auto imports 中，常用组件，无需再次声明
// import { Button, Input, Select, Radio, Checkbox, Switch } from 'antd';
// import { FC, ChildWithProps } from 'react';
// import { useNavigate } from 'react-router';
// import clx from 'classnames';

interface DemoProps extends ChildWithProps {}
const Demo: FC<DemoProps> = () => {
    const navigate = useNavigate();
    const to = useRecoulValue(demoState);

    const onClick = () => {
        navigate(to);
    }

    return <div className={clx('demo', 'xxx')}>
        <Button onClick={onClick}>按钮</Button>
        <Input />
        <Select />
        <Radio />
        <Checkbox />
        <Switch />
    </div>
}

export default Demo;

```

### React 18, React Router 6 

- 基于React v18
- 基于 React Router v6 的完备路由, 默认使用配置路由
- 基于 Recoil v0.7.7, 默认使用 Recoil 作为状态管理，hulu并对其加强
- 基于 antd v4
- 默认使用 echart v5
- 默认使用 dayjs, classnames


### 本地化

- 本地化组件库, 工具库，hooks库，完备的文档，以及可以超控制定，让开发者更方便使用  
- 第三方库文档快速阅读，全局搜索