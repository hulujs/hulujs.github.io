---
title: MetGene 基因组件
order: 1
toc: content
group:
  title: 功能组件
---

# MetGene 基因组件

向子组件遗传属性信息

## 设计理念

基因组件是Met体系的核心组件，它主要的功能是向子组件传递传递属性信息，所以叫基因组件
它可以显性和隐性传递信息

## 基础用法

```tsx
import { MetGene } from '@hulujs/met';
import { Table } from 'antd';

const dataSource = [
    { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
    { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园1号' }
];

const columns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '住址', dataIndex: 'address', key: 'address' }
];

export default () => {
    return (
        <MetGene dominant={{ dataSource }}>
            <Table columns={columns} />
        </MetGene>
    );
};
```

## 通过子函数调用 

```ts
/**
 * dominant 显性基因
 * recessive 隐性基因
 * extra 额外的信息，只在childFunc中进行传递
 */
type childFunc = (dominant: Record<string, any>, recessive: Record<string, any>, extra: Record<string, any>) => ReactNode;
```

```tsx
import { MetGene } from '@hulujs/met';
import { Table } from 'antd';

const dataSource = [
    { key: '3', name: '王蓉', age: 32, address: '西湖区湖底公园1号' },
    { key: '4', name: '黄蓉', age: 42, address: '西湖区湖底公园1号' }
];

const columns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '住址', dataIndex: 'address', key: 'address' }
];

export default () => {
    return (
        <MetGene dominant={{ dataSource }} recessive={{ columns }}  pagination={false}>
            {(dominant, recessive, extra) => {
                return <Table dataSource={dominant.dataSource} columns={recessive.columns} pagination={extra.pagination} />
            }}
        </MetGene>
    );
};
```

## 属性覆盖

Met 权重规则是越接近权重越高
所以, 子组件已设置的权重值最高，无法覆盖
需要设置 propCover 来提升基因属性权重

```tsx
import React from 'react';
import { MetBox, MetCenter, MetGene } from '@hulujs/met';
import { Table, Switch } from 'antd';

const dataSource = [
    { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
    { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园1号' }
];

const dataSource2 = [
    { key: '3', name: '王蓉', age: 32, address: '西湖区湖底公园1号' },
    { key: '4', name: '黄蓉', age: 42, address: '西湖区湖底公园1号' }
];

const columns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '住址', dataIndex: 'address', key: 'address' }
];

export default () => {
    const [cover, setCover] = React.useState(false);
    return (
        <MetBox gap={8}>
            <MetCenter placement="left">
                <span>PropCover</span>
                <Switch checked={cover} onChange={setCover} />
            </MetCenter>
            <MetGene dominant={{ dataSource }} propCover={cover}>
                <Table dataSource={dataSource2} columns={columns} />
            </MetGene>
        </MetBox>
    );
};
```

## 批量修改属性

任意子组件拥有属性 `nogene = true` 则会拒绝接受基因组件的基因信息

```tsx
import React from 'react';
import { MetBox, Met, MetGene, MetCenter } from '@hulujs/met';
import { Switch } from 'antd';

export default () => {
    const [cover, setCover] = React.useState(false);
    return (
        <MetBox gap={8}>
            <MetCenter placement="left">
                <span>PropCover</span>
                <Switch checked={cover} onChange={setCover} />
            </MetCenter>
            <MetGene dominant={{ p: 8, br: 8, bg: 'lightcyan', fs: 24 }} propCover={cover}>
                <MetCenter nogene>唐.李白 - 静夜思 </MetCenter>
                <MetCenter bg={'lightcoral'} fs={14}>窗前明月光</MetCenter>
                <MetCenter bg={'lightgreen'} fs={16}>疑似地上霜</MetCenter>
                <MetCenter bg={'lightpink'} fs={18}>举头望明月</MetCenter>
                <MetCenter bg={'lightskyblue'}>低头思故乡</MetCenter>
            </MetGene>
        </MetBox>
    );
};

```

## Props 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dominant | 显性基因 | Record<string, any> | - |
| recessive | 隐性基因 | Record<string, any> | - |
| x | 跟随子属性的属性 | any | - |

## 适用场景

一般用于组件的封装，传递数据使用
