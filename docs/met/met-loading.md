---
title: MetLoading 加载
order: 1
toc: content
group:
  title: 业务组件
  order: 2
---

# MetLoading

当页面内容正在加载中时，用于提示用户页面正在加载中，避免用户进行重复操作

默认使用 antd 的 Spin 组件，开发者可以通过 Regc 的配置修改 loading 动画

## 基本使用

MetLoading 默认垂直居中

```tsx
import React from 'react';
import { Met, MetLoading } from '@hulu/met';

export default () => {
    return (
        <Met h={300} bg={'lightcyan'}>
            <MetLoading />
        </Met>
    );
};

```

## 添加Loading文本

```tsx
import { Met, MetLoading } from '@hulu/met';

export default () => {
    return (
        <Met h={300} bg={'lightcyan'}>
            <MetLoading>加载中...</MetLoading>
        </Met>
    );
};

```

## 改变方位

外层包裹着MetCenter, 所以可以使用MetCenter的属性配置

```tsx
import { Met, MetLoading } from '@hulu/met';

export default () => {
    return (
        <Met h={300} bg={'lightcyan'}>
            <MetLoading gap={32} placement={'left'} vertical>加载中...</MetLoading>
        </Met>
    );
};
```

## 更换加载动画

```tsx
import { Met, MetLoading } from '@hulu/met';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default () => {
    const Loading = <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} />} spinning />;
    return (
        <Met h={300} bg={'lightcyan'}>
            <MetLoading component={Loading} />
        </Met>
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
interface MetLoadingProps extends MetCenterProps {
    /**
     * 加载动画组件
     */
    component?: ReactNode;
 }
```

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| component | 自定义加载动画 | ReactNode | `<Spin />` |
