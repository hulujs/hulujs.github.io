---
title: MetDynamic
order: 1
toc: content
group:
  title: 功能组件
  order: 100
---

# MetDynamic

动态加载组件

## 设计理念

MetDynamic 组件是 Met 组件库中最重要的组件之一，它可以动态加载组件，并且支持属性配置。

## 基础用法

```tsx
import { MetCenter, MetDynamic } from '@hulu/met';
import { Button } from 'antd';

export default () => {
    return (
        <MetCenter vertical bg={'lightcyan'} h={300}>
            <MetDynamic component="div">这是一个动态加载的div标签</MetDynamic>
            <MetDynamic component={Button}>这是加载第三方的组件</MetDynamic>
            <MetDynamic component={Button} type={'primary'}>
                属性配置
            </MetDynamic>
        </MetCenter>
    );
};

```

## 直接使用ReactElement

```tsx
import { MetCenter, MetDynamic } from '@hulu/met';
import { Button, Result } from 'antd';

export default () => {
    const result = (
        <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
                <Button type="primary" key="console">
                    Go Console
                </Button>,
                <Button key="buy">Buy Again</Button>
            ]}
        />
    );
    return (
        <MetDynamic component={result} title={'这是被修改后的属性值'} propCover />
    );
};

```

## Props 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| component | 要加载的组件 | React. ReactElement | - |
| propCover | 当组件是ReactElement时，是否覆盖组件的属性 | boolean | false |
| inactive | 组件是否失效 | boolean | false |
| x | 跟随component的属性名 | any | - |
