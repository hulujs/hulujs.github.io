---
title: MetNest 嵌套组件
order: 3
toc: content
group:
  title: 功能组件
---

# MetNest 嵌套组件

MetNest 组件可以嵌套在其他组件中，以实现更复杂的应用。

## 基础用法

```tsx
import React from 'react';
import { MetNest, Met, MetCenter, MetBox } from '@hulujs/met';

const Layout1: React.FC<PropsWithChildren> = (props) => {
    return (
        <Met p={16} bg={'lightblue'} {...props}>
            {props.children}
        </Met>
    );
};

const Layout2: React.FC<PropsWithChildren> = (props) => {
    return (
        <Met p={16} bg={'lightcyan'} {...props}>
            {props.children}
        </Met>
    );
};

const Layout3: React.FC<PropsWithChildren> = (props) => {
    return (
        <Met p={16} bg={'lightpink'} {...props}>
            {props.children}
        </Met>
    );
};

export default () => {
    return (
        <MetBox gap={8}>
            <MetCenter placement="left">普通嵌套组件</MetCenter>
            <Layout1>
                <Layout2>
                    <Layout3>main content</Layout3>
                </Layout2>
            </Layout1>
            <MetCenter placement="left">使用MetNest嵌套</MetCenter>
            <MetNest components={[Layout1, Layout2, Layout3]}>main content</MetNest>

            <MetCenter placement="left">MetNest支持各自配置属性</MetCenter>
            <MetNest components={[Layout1, Layout2, <Layout3 bg={'lightskyblue'} />]}>main content</MetNest>

            <MetCenter placement="left">MetNest属性透传到各个Layout</MetCenter>
            <MetNest components={[Layout1, Layout2, <Layout3 bg={'lightskyblue'} />]} bd={'green'} br={8}>
                main content
            </MetNest>
        </MetBox>
    );
};
```

## 应用场景

在一些复杂的应用场景中，我们需要将一些组件排列组合在一起，使用 MetNest 可以减少大量的代码量

```tsx
import React from 'react';
import { MetNest, Met, MetCenter, MetBox, MetProps } from '@hulujs/met';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox/Checkbox';

const Layout1: React.FC<MetProps> = (props) => {
    return (
        <Met p={16} bg={'lightblue'} {...props}>
            <div>Layout1</div>
            {props.children}
        </Met>
    );
};

const Layout2: React.FC<MetProps> = (props) => {
    return (
        <Met p={16} bg={'lightcyan'} {...props}>
            <div>Layout2</div>
            {props.children}
        </Met>
    );
};

const Layout3: React.FC<MetProps> = (props) => {
    return (
        <Met p={16} bg={'lightpink'} {...props}>
            <div>Layout3</div>
            {props.children}
        </Met>
    );
};

const Layout4: React.FC<MetProps> = (props) => {
    return (
        <Met p={16} bg={'lightpink'} {...props}>
            <div>Layout4</div>
            {props.children}
        </Met>
    );
};

export default () => {
    const [show, setShow] = React.useState({
        Layout1: true,
        Layout2: false,
        Layout3: true,
        Layout4: true
    });

    const onChange = (layout: string) => {
        return (e: CheckboxChangeEvent) => {
            setShow({ ...show, [layout]: e.target.checked });
        };
    };

    return (
        <MetBox gap={8}>
            <MetCenter placement="left">
                <Checkbox checked={show.Layout1} onChange={onChange('Layout1')}>
                    Layout1
                </Checkbox>
                <Checkbox checked={show.Layout2} onChange={onChange('Layout2')}>
                    Layout2
                </Checkbox>
                <Checkbox checked={show.Layout3} onChange={onChange('Layout3')}>
                    Layout3
                </Checkbox>
                <Checkbox checked={show.Layout4} onChange={onChange('Layout4')}>
                    Layout4
                </Checkbox>
            </MetCenter>

            <MetNest
                bd={'green'}
                br={8}
                components={[
                    show.Layout1 && Layout1,
                    show.Layout2 && Layout2,
                    show.Layout3 && <Layout3 bg={'lightskyblue'} />,
                    show.Layout4 && Layout4
                ]}
            >
                <MetCenter bg={'lightgreen'} p={32}>
                    main content
                </MetCenter>
            </MetNest>

            <MetNest
                bd={'green'}
                br={8}
                components={[
                    show.Layout2 && Layout2,
                    show.Layout4 && Layout4,
                    show.Layout3 && <Layout3 bg={'lightskyblue'} />,
                    show.Layout1 && Layout1
                ]}
            >
                <MetCenter bg={'lightgreen'} p={32}>
                    main content
                </MetCenter>
            </MetNest>
        </MetBox>
    );
};

```

## Props 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| components | 嵌套的组件数组 | React. ReactNode[] | - |
| propCover | 属性覆盖 | boolean | false |
| x | 组件属性 | any | - |
