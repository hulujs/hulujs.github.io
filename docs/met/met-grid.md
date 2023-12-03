---
title: MetGrid 布局
order: 5
toc: content
group:
  title: 布局组件
---

# MetGrid 

MetGrid 基于Css Grid的布局组件

Flex布局是单维度的，它只能沿着一条主轴和一条交叉轴来布局元素。
而Grid布局是双维度的，它允许你创建一个具有行(rows)和列(cols)的网格，
若超过不可见

## 基本用法

Grid固定高度, 单元格(cell)不设置宽高, 自由设置 cols, rows；
单元格数不能超过 cell count <= rows * cols

```tsx
/**
 * compact: true 
 */
import React from'react';
import { Met, MetGrid, MetBox, MetCenter } from '@hulu/met';
import { InputNumber} from 'antd';

export default () => {
    const [cols, setCols] = React.useState(3);
    const [rows, setRows] = React.useState(3);
    return <>
        <MetCenter placement={'left'} p={8}>
            <span>Rows</span>
            <InputNumber min={1} onChange={setRows} value={rows} />
            <span>Cols</span>
            <InputNumber min={1} onChange={setCols} value={cols} />
        </MetCenter>
        <MetGrid gap={8} h={300} rows={rows} cols={cols} bg={"lightcyan"}>
          <Met bg={"lightpink"}></Met>
          <Met bg={"lightpink"}></Met>
          <Met bg={"lightpink"}></Met>
          <Met bg={"lightpink"}></Met>
          <Met bg={"lightpink"}></Met>
          <Met bg={"lightpink"}></Met>
          <Met bg={"lightpink"}></Met>
        </MetGrid>
    </>
}
```

## 行数不定，列数改变，自增高

```tsx
/**
 * compact: true 
 */
import React from'react';
import { Met, MetGrid, MetBox, MetCenter } from '@hulu/met';
import { InputNumber, Switch } from 'antd';
import { random } from 'lodash-es';

export default () => {
    const [cols, setCols] = React.useState(3);
    return <>
        <MetCenter placement={'left'} p={8}>
            <span>Cols</span>
            <InputNumber min={1} onChange={setCols} value={cols} />
        </MetCenter>
        <MetGrid gap={8} bg={"lightcyan"} width={'100%'} cols={cols}>
          <MetCenter bg={"lightpink"} h={150} fs={28} color={'white'}>1</MetCenter>
          <MetCenter bg={"lightpink"} h={150} fs={28} color={'white'}>2</MetCenter>
          <MetCenter bg={"lightpink"} h={150} fs={28} color={'white'}>3</MetCenter>
          <MetCenter bg={"lightpink"} h={150} fs={28} color={'white'}>4</MetCenter>
          <MetCenter bg={"lightpink"} h={150} fs={28} color={'white'}>5</MetCenter>
          <MetCenter bg={"lightpink"} h={150} fs={28} color={'white'}>6</MetCenter>
          <MetCenter bg={"lightpink"} h={150} fs={28} color={'white'}>7</MetCenter>
          <MetCenter bg={"lightpink"} h={150} fs={28} color={'white'}>8</MetCenter>
        </MetGrid>
    </>
}
```

## 行高度，列宽度自定义

每个单元格宽高都不一致，都是由 gridTemplate 来控制
单元格宽高超过Grid时，会溢出显示，而不会主动换行

```tsx
/**
 * compact: true 
 */
import React from'react';
import { Met, MetGrid, MetBox, MetCenter } from '@hulu/met';
import { random, rows, map } from 'lodash-es';
import { InputNumber} from 'antd';

export default () => {
    const [cols, setCols] = React.useState(3);
    const [rows, setRows] = React.useState(3);

    const templateCols = map(Array.from({length: cols}), () => { return `${random(50, 150)}px` }).join(' ');
    const templateRows = map(Array.from({length: rows}), () => { return `${random(50, 150)}px` }).join(' ');

    return <>
        <MetCenter placement={'left'} p={8}>
            <span>Rows</span>
            <InputNumber min={1} onChange={setRows} value={rows} />
            <span>Cols</span>
            <InputNumber min={1} onChange={setCols} value={cols} />
        </MetCenter>
        <MetGrid gap={8} rows={templateRows} cols={templateCols} bg={"lightcyan"}>
            {map(Array.from({length: rows * cols}), (value, inx) => { 
                return <Met key={`cell-${inx}`} bg={"lightpink"}></Met> 
            })}
        </MetGrid>
    </>
}
```

## 行高非固定

可配合align属性，实现不种的呈现方式

```tsx
/**
 * compact: true 
 */
import React from'react';
import { Met, MetGrid, MetBox, MetCenter } from '@hulu/met';
import { InputNumber, Switch, Segmented } from 'antd';
import { random } from 'lodash-es';

export default () => {
    const [cols, setCols] = React.useState(3);
    const [align, setAlign] = React.useState('top');
    return <>
        <MetCenter placement={'left'} p={8}>
            <span>Cols</span>
            <InputNumber min={1} onChange={setCols} value={cols} />
            <span>Align</span>
            <Segmented options={['top', 'center', 'bottom']} onChange={setAlign} value={align} />
        </MetCenter>
        <MetGrid gap={8} bg={"lightcyan"} width={'100%'} cols={cols} align={align} inline>
          <MetCenter bg={"lightpink"} h={random(80, 300)} w={random(80, 300)} fs={28} color={'white'}>1</MetCenter>
          <MetCenter bg={"lightpink"} h={random(80, 300)} w={random(80, 300)} fs={28} color={'white'}>2</MetCenter>
          <MetCenter bg={"lightpink"} h={random(80, 300)} w={random(80, 300)} fs={28} color={'white'}>3</MetCenter>
          <MetCenter bg={"lightpink"} h={random(80, 300)} w={random(80, 300)} fs={28} color={'white'}>4</MetCenter>
          <MetCenter bg={"lightpink"} h={random(80, 300)} w={random(80, 300)} fs={28} color={'white'}>5</MetCenter>
          <MetCenter bg={"lightpink"} h={random(80, 300)} w={random(80, 300)} fs={28} color={'white'}>6</MetCenter>
          <MetCenter bg={"lightpink"} h={random(80, 300)} w={random(80, 300)} fs={28} color={'white'}>7</MetCenter>
          <MetCenter bg={"lightpink"} h={random(80, 300)} w={random(80, 300)} fs={28} color={'white'}>8</MetCenter>
        </MetGrid>
    </>
}
```

## 页面布局

比[Flex 布局](/met/met-box#配合metflex进行页面布局) 更为简便 

可以查看源码进行对比

```tsx
/**
 * compact: true 
 */
import React from'react';
import { Met, MetGrid, MetBox, MetFlex, MetCenter } from '@hulu/met';
import { InputNumber, Switch, Segmented } from 'antd';
import { random } from 'lodash-es';

export default () => {
    const [cols, setCols] = React.useState(3);
    const [align, setAlign] = React.useState('top');
    return <>
        <Met p={8}>Grid</Met>
        <Met h={400} p={4} bg={"lightgrey"}>
            <MetGrid rows={'48px 1fr'} cols={`200px 1fr`} gap={4} full>
                <Met tag="header" bg={"lightcyan"} gridArea={'auto / span 2'} comment={"header"}></Met>
                <Met tag="aside" bg={"lightcyan"} comment={"leftside"}></Met>
                <Met tag="main" bg={"lightcyan"} comment={"main"}></Met>
            </MetGrid>
        </Met>

        <Met p={8}>Flex</Met>
        <Met h={400} p={4} bg={"lightgrey"}>
             <MetBox gap={4} full>
                <Met tag="header" h={48} bg={"lightcyan"}></Met>
                <MetFlex flex={1} gap={4}>
                    <Met tag="aside" width={200} bg={"lightcyan"} comment={"leftside"}></Met>
                    <Met tag="main" flex={1} bg={"lightcyan"} comment={"main"}></Met>
                </MetFlex>
            </MetBox>
        </Met>
    </>
}
```

如果需要更改布局结构，grid布局只需修改样式，而flex就需要修改代码结果

```tsx
/**
 * compact: true 
 */
import React from'react';
import { Met, MetGrid, MetBox, MetFlex, MetCenter } from '@hulu/met';
import { InputNumber, Switch, Segmented } from 'antd';
import { random } from 'lodash-es';

export default () => {
    const [cols, setCols] = React.useState(3);
    const [align, setAlign] = React.useState('top');
    return <>
        <Met p={8}>Grid</Met>
        <Met h={400} p={4} bg={"lightgrey"}>
            <MetGrid rows={'48px 1fr'} cols={`200px 1fr`} gap={4} full>
                <Met tag="header" bg={"lightcyan"}  comment={"header"}></Met>
                <Met tag="aside" bg={"lightcyan"} gridArea={'1 / auto / 3'} comment={"leftside"}></Met>
                <Met tag="main" bg={"lightcyan"} comment={"main"}></Met>
            </MetGrid>
        </Met>
        <Met p={8}>Flex (注意查看代码，改变了代码结构)</Met>
        <Met h={400} p={4} bg={"lightgrey"}>
             <MetFlex gap={4} full>
                <Met tag="aside" width={200} bg={"lightcyan"} comment={"leftside"}></Met>
                <MetBox flex={1} gap={4}>
                    <Met tag="header" h={48} bg={"lightcyan"}></Met>
                    <Met tag="main" flex={1} bg={"lightcyan"} comment={"main"}></Met>
                </MetBox>
            </MetFlex>
        </Met>
    </>
}
```

## 网格式布局

使用 gridAutoFlow 进行网格式布局，
按照其原理堆栈式读取单元格大小，进行网格式布局
而不是按照最佳的放置问题，所以会出现空格会凸出的情况

```tsx
/**
 * compact: true 
 */
import React from'react';
import { Met, MetGrid, MetBox, MetCenter } from '@hulu/met';
import { random, rows, map } from 'lodash-es';
import { InputNumber, Button, Segmented } from 'antd';

export default () => {
    const [cols, setCols] = React.useState(7);
    const [, refresh] = React.useState(Math.random());

    return <>
        <MetCenter placement={'left'} p={8}>
            <span>Cols</span>
            <InputNumber min={1} onChange={setCols} value={cols} />
            <Button onClick={() => refresh(Math.random())}>重新渲染</Button>
        </MetCenter>
        <MetGrid gap={8} rows={'100px'} cols={cols} bg={"lightcyan"} gridAutoFlow={`row dense`}>
            {map(Array.from({length: random(10, 50)}), (value, inx) => { 
                const area = { gridArea: `span ${random(1, 3)} / span ${random(1, 3)}` }
                return <MetCenter 
                    key={`cell-${inx}`} 
                    bg={"lightpink"} 
                    fs={28} 
                    color={'white'}
                    {...area}>
                        {inx + 1}
                    </MetCenter> 
            })}
        </MetGrid>
    </>
}
```

## MetGrid 与 MetFlex 使用场景

一般我们会使用MetGrid用于模块最外层Layout，比较大的框架
而 MetFlex 则用于比较小的模块，用于“行”结构

## Props 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 行数 | number / string / [number, string] / string[] |  |
| cols | 列数 | number / string / [number, string] / string[] |  |
| gap | 单元格间距 | number | 0 |
| full | 单元格是否占满 | boolean | false |
| inline | 网格式布局 | string | false |
| align | 垂直对齐 | string |'stretch' |
| justify | 水平对齐 | string | 'flex-start' |

### rows 与 cols 的用法

* 当 rows 为一个数字时, 输出 `gridTemplateRows: repeat(${rows}, 1fr)`
* 当 rows 为一个字符串时, 中间有空格的时候，输出 `gridTemplateRows: ${rows}` , 
    - 如: `rows: 100px 200px 300px`, 输出 `gridTemplateRows: 100px 200px 300px`
* 当 rows 为一个字符串时, 中间没有空格的时候，输出 `gridAutoRows: ${rows}`
    - 如: `rows: 100px`, 输出 `gridTemplateRows: 100px`
* 当 rows 为一个元组时[number, string], 输出 `gridTemplateRows: repeat(${number}, ${string})}`
* 当 rows 为一个字符串数组时, 输出 `gridTemplateRows: ${rows.join(' ')}`

***注意***

* cols 用法与 grid 一致
* rows 与 cols 只是封装了Grid属性常见的一些用法，若实际需求不满足的时候，需要自己写Grid的属性进行配合
