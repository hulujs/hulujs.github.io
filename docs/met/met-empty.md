---
title: MetNodata 空数据
order: 2
toc: content
group:
  title: 业务组件
---

# MetNodata

空状态或无数据时的展示占位图

## 基本使用

MetNodata 默认垂直居中

```tsx
import React from 'react';
import { Met, MetNodata } from '@hulujs/met';

export default () => {
    return (
        <Met h={300} bg={'lightcyan'}>
            <MetNodata />
        </Met>
    );
};

```

## 添加Loading文本

```tsx
import { Met, MetNodata } from '@hulujs/met';

export default () => {
    return (
        <Met h={300} bg={'lightcyan'}>
            <MetNodata>暂无数据</MetNodata>
        </Met>
    );
};

```

## 改变方位

外层包裹着MetCenter, 所以可以使用MetCenter的属性配置

```tsx
import { Met, MetNodata } from '@hulujs/met';

export default () => {
    return (
        <Met h={300} bg={'lightcyan'}>
            <MetNodata gap={16} placement={'right'} vertical>暂无数据</MetNodata>
        </Met>
    );
};
```

## 更换图标

更换空数据图标有两种方案
* 更换图标
* 更换组件

```tsx
import { MetFlex, MetNodata } from '@hulujs/met';
import { EyeInvisibleOutlined } from '@ant-design/icons';

export default () => {
    return (
        <MetFlex h={300} bg={'lightcyan'}>
            <MetNodata component={<EyeInvisibleOutlined style={{ fontSize: 32 }} />} />
            <MetNodata image={<EyeInvisibleOutlined style={{ fontSize: 32 }} />} />
        </MetFlex>
    );
};
```

## 通过 Regc 全局修改 loading 动画效果

```ts
Regc.register(Regc. LOADING, () => {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} />} spinning />
}); 
```

## Props 属性

```ts
// 继承自MetCenterProps
interface MetNodataProps extends MetCenterProps {
    component?: ReactNode;
    image?: ReactNode;
    descrition?: string?
 }
```

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| component | 自定义加载动画 | ReactNode | `<Empty />` |
| image | 自定义加载动画(不推荐与component互斥) | ReactNode | `PRESENTED_IMAGE_SIMPLE` |
| descrition | 空数据描述(不推荐与component互斥) | ReactNode | `<></>` |
