---
title: MetEcharts 图表
order: -1
toc: content
group:
  title: 业务组件
---

# MetEcharts 图表

MetEcharts 是基于 Echarts 的React封装组件
其特点是数据驱动，不注重图表类型，各同一数据模型的图形可以相互转换
可自定义类型注册，适应各种业务场景
封装 Echarts 图表组件, 配合PropPath概念，灵活生成图表

<code src="./demos/echart-type-1.tsx"></code>

## 示例数据

```ts
const data = [
    { year: '2018', name: '北京', value: 80 },
    { year: '2018', name: '上海', value: 150 },
    { year: '2018', name: '广州', value: 120 },
    { year: '2018', name: '四川', value: 190 },
    { year: '2018', name: '湖北', value: 100 },
    { year: '2018', name: '福建', value: 140 },
    { year: '2018', name: '贵州', value: 60 },
    { year: '2019', name: '北京', value: 820 },
    { year: '2019', name: '上海', value: 1150 },
    { year: '2019', name: '广州', value: 1230 },
    { year: '2019', name: '四川', value: 1920 },
    { year: '2019', name: '湖北', value: 1200 },
    { year: '2019', name: '福建', value: 640 },
    { year: '2019', name: '贵州', value: 760 }
];
```

## 基本用法

```tsx
/**
 * compact: true 
 */
import React from 'react';
import { MetEcharts } from'@hulujs/met';
import { mapping } from '@hulujs/mu';

const data = [
    { year: '2018', province: '北京', value: 80 },
    { year: '2018', province: '上海', value: 150 },
    { year: '2018', province: '广州', value: 120 },
    { year: '2018', province: '四川', value: 190 },
    { year: '2018', province: '湖北', value: 100 },
    { year: '2018', province: '福建', value: 140 },
    { year: '2018', province: '贵州', value: 60 },
    { year: '2019', province: '北京', value: 820 },
    { year: '2019', province: '上海', value: 1150 },
    { year: '2019', province: '广州', value: 1230 },
    { year: '2019', province: '四川', value: 1920 },
    { year: '2019', province: '湖北', value: 1200 },
    { year: '2019', province: '福建', value: 640 },
    { year: '2019', province: '贵州', value: 760 }
];

export default () => {
  return <MetEcharts data={data} type={'bar'} mappers={{ x: 'province', y: 'value', d: 'year' }} h={400} p={16} 
    comment={'基本用法'} />
}
```

### mappers 数据映射修改

```tsx
/**
 * compact: true 
 */
import React from 'react';
import { MetEcharts } from'@hulujs/met';
import { mapping } from '@hulujs/mu';

const data = [
    { year: '2018', province: '北京', value: 80 },
    { year: '2018', province: '上海', value: 150 },
    { year: '2018', province: '广州', value: 120 },
    { year: '2018', province: '四川', value: 190 },
    { year: '2018', province: '湖北', value: 100 },
    { year: '2018', province: '福建', value: 140 },
    { year: '2018', province: '贵州', value: 60 },
    { year: '2019', province: '北京', value: 820 },
    { year: '2019', province: '上海', value: 1150 },
    { year: '2019', province: '广州', value: 1230 },
    { year: '2019', province: '四川', value: 1920 },
    { year: '2019', province: '湖北', value: 1200 },
    { year: '2019', province: '福建', value: 640 },
    { year: '2019', province: '贵州', value: 760 }
];

export default () => {
  return <MetEcharts data={data} type={'bar'} mappers={{ x: 'year', y: 'value', d: 'province' }} h={400} p={16} 
    comment={'mappers 数据映射修改'} />
}
```

### type 修改图表类型

```tsx
/**
 * compact: true
 */
import React from 'react';
import { MetEcharts, MetBox, Met } from '@hulujs/met';
import { mapping } from '@hulujs/mu';

const data = [
    { year: '2018', province: '北京', value: 80 },
    { year: '2018', province: '上海', value: 150 },
    { year: '2018', province: '广州', value: 120 },
    { year: '2018', province: '四川', value: 190 },
    { year: '2018', province: '湖北', value: 100 },
    { year: '2018', province: '福建', value: 140 },
    { year: '2018', province: '贵州', value: 60 },
    { year: '2019', province: '北京', value: 820 },
    { year: '2019', province: '上海', value: 1150 },
    { year: '2019', province: '广州', value: 1230 },
    { year: '2019', province: '四川', value: 1920 },
    { year: '2019', province: '湖北', value: 1200 },
    { year: '2019', province: '福建', value: 640 },
    { year: '2019', province: '贵州', value: 760 }
];

export default () => {
    return (
        <MetBox gap={16}>
            <Met>线形图</Met>
            <MetEcharts
                data={data}
                type={'line'}
                mappers={{ x: 'province', y: 'value', d: 'year' }}
                h={400}
                p={16}
                comment={'type 修改图表类型 -> line'}
            />
            <Met>饼图</Met>
            <MetEcharts
                data={data.filter(({ year }) => year === '2019')}
                type={'pie'}
                mappers={{ x: 'province', y: 'value', d: 'year' }}
                h={400}
                p={16}
                comment={'type 修改图表类型 -> pie'}
            />
            <Met>仪表盘</Met>
            <MetEcharts
                data={data.slice(0, 1)}
                type={'gauge'}
                mappers={{ x: 'province', y: 'value', d: 'year' }}
                h={400}
                p={16}
                comment={'type 修改图表类型 -> pie'}
            />
        </MetBox>
    );
};

```

### setting 修改默认设置

将柱形图编程堆叠图

```tsx
/**
 * compact: true 
 */
import React from 'react';
import { MetEcharts } from'@hulujs/met';
import { mapping } from '@hulujs/mu';

const data = [
    { year: '2018', province: '北京', value: 80 },
    { year: '2018', province: '上海', value: 150 },
    { year: '2018', province: '广州', value: 120 },
    { year: '2018', province: '四川', value: 190 },
    { year: '2018', province: '湖北', value: 100 },
    { year: '2018', province: '福建', value: 140 },
    { year: '2018', province: '贵州', value: 60 },
    { year: '2019', province: '北京', value: 820 },
    { year: '2019', province: '上海', value: 1150 },
    { year: '2019', province: '广州', value: 1230 },
    { year: '2019', province: '四川', value: 1920 },
    { year: '2019', province: '湖北', value: 1200 },
    { year: '2019', province: '福建', value: 640 },
    { year: '2019', province: '贵州', value: 760 }
];

export default () => {
  return <MetEcharts data={data} type={'bar'} 
    mappers={{ x: 'province', y: 'value', d: 'year' }} h={400} p={16} 
    setting={{ 'series.*.stack': '堆叠' }}
    comment={'setting 修改默认设置'} />
}
```

### setting 按顺序修改配置

```tsx
/**
 * compact: true 
 */
import React from 'react';
import { MetEcharts } from'@hulujs/met';
import { mapping } from '@hulujs/mu';

const data = [
    { year: '2018', province: '北京', value: 80 },
    { year: '2018', province: '上海', value: 150 },
    { year: '2018', province: '广州', value: 120 },
    { year: '2018', province: '四川', value: 190 },
    { year: '2018', province: '湖北', value: 100 },
    { year: '2018', province: '福建', value: 140 },
    { year: '2018', province: '贵州', value: 60 },
    { year: '2019', province: '北京', value: 820 },
    { year: '2019', province: '上海', value: 1150 },
    { year: '2019', province: '广州', value: 1230 },
    { year: '2019', province: '四川', value: 1920 },
    { year: '2019', province: '湖北', value: 1200 },
    { year: '2019', province: '福建', value: 640 },
    { year: '2019', province: '贵州', value: 760 }
];

export default () => {
  return <MetEcharts data={data} type={'bar'} 
    mappers={{ x: 'province', y: 'value', d: 'year' }} h={400} p={16} 
    setting={[{ 'series.*.stack': '堆叠' }, { 'series.*.barWidth': 30 } ]}
    comment={'setting 按顺序修改配置'} />
}
```

setting 具体配置查看 [msetx](/mu/msetx)

## subtypes 子类型

### 什么是子类型 subtype ?

类似对象的封装，我们将某一组特定功能的 sttting, 封装成一个子类型subtype，
并注册到Hulu MSC注册中心，供MetEcharts组件调用

### 如何封装注册？

MetEcharts提供注册方法`registerSubtype`方便注册到Hulu MSC注册中心

```ts
/**
 * 提供方法快速注册subtype到注册中心
 * @param scopes subtype的作用域, 支持多个作用域配置
 * @param name subtype的名称
 * @param fn subtype的处理函数
 * @param warn subtype是否关闭提醒
 */
export const registerSubtype = (scopes: SubTypeScopes, name: SubType, fn: (params) => KvParis, warn?: 'close')
```

- scopes 子类型作用域，支持多个作用域配置，如：`['bar', 'line']`
-- scope 可以是图表类型，或所有`all`
-- scope 定义作用域，若只设置`bar`, 那该子类型在`line`或其他的图表想下失效

### 注册一个简单subtype 

```ts
// 注册作用域为所有的子类型 stack,
// 它的功能是堆叠图表
registerSubtype('all', 'stack', ({ key = '堆叠' }) => {
  return {'series.*.stack': key }
})

// 注册subtype: line::bg, 
// 修改背景颜色，其作用于line图表
registerSubtype('line', 'bg', () => {
  return {'backgroundColor': 'rgba(155, 155, 155, .3)'}
})
```

### 使用 subtype 

在MetEcharts组件中，通过`subtype`属性指定subtype名称,
subtype 名称需要加上 `::` 前缀，如`line::bg`

```tsx
import React from 'react';
import { MetEcharts, Met, registerSubtype } from'@hulujs/met';

const data = [
    { year: '2018', province: '北京', value: 80 },
    { year: '2018', province: '上海', value: 150 },
    { year: '2018', province: '广州', value: 120 },
    { year: '2018', province: '四川', value: 190 },
    { year: '2018', province: '湖北', value: 100 },
    { year: '2018', province: '福建', value: 140 },
    { year: '2018', province: '贵州', value: 60 },
    { year: '2019', province: '北京', value: 820 },
    { year: '2019', province: '上海', value: 1150 },
    { year: '2019', province: '广州', value: 1230 },
    { year: '2019', province: '四川', value: 1920 },
    { year: '2019', province: '湖北', value: 1200 },
    { year: '2019', province: '福建', value: 640 },
    { year: '2019', province: '贵州', value: 760 }
];

registerSubtype('all', 'stack', ( { key = '堆叠' } ) => {
  return {'series.*.stack': key }
})

registerSubtype('line', 'bg', () => {
  return {'backgroundColor': 'rgba(155, 155, 155, .3)'}
})

export default () => {
  return <>
    <Met>柱形堆叠图</Met>
    <Met fw={200}>根据作用域子类型 ::stack生效, ::bg不生效</Met>
    <MetEcharts data={data} type={'bar'} 
      subtypes={['::stack', '::bg']}
      mappers={{ x: 'province', y: 'value', d: 'year' }} h={300} p={16} 
      comment={'使用 subtype 1'} />
    <Met>线形堆叠图</Met>
    <Met fw={200}>根据作用域子类型 ::stack生效, ::bg生效</Met>
    <MetEcharts data={data} type={'line'} 
      subtypes={['::stack', '::bg']}
      mappers={{ x: 'province', y: 'value', d: 'year' }} h={300} p={16} 
      comment={'使用 subtype 1'} />
  </>
}
```

### 在setting使用subtype

`subtype`是`setting`的封装, 即 subtype 是 setting 的补充

```tsx
/**
 * compact: true 
 */
import React from 'react';
import { MetEcharts } from'@hulujs/met';

const data = [
    { year: '2018', province: '北京', value: 80 },
    { year: '2018', province: '上海', value: 150 },
    { year: '2018', province: '广州', value: 120 },
    { year: '2018', province: '四川', value: 190 },
    { year: '2018', province: '湖北', value: 100 },
    { year: '2018', province: '福建', value: 140 },
    { year: '2018', province: '贵州', value: 60 },
    { year: '2019', province: '北京', value: 820 },
    { year: '2019', province: '上海', value: 1150 },
    { year: '2019', province: '广州', value: 1230 },
    { year: '2019', province: '四川', value: 1920 },
    { year: '2019', province: '湖北', value: 1200 },
    { year: '2019', province: '福建', value: 640 },
    { year: '2019', province: '贵州', value: 760 }
];

export default () => {
  return <MetEcharts data={data} type={'line'} 
    mappers={{ x: 'province', y: 'value', d: 'year' }} h={400} p={16} 
    setting={[{'series.1.lineStyle.width': 20, '::bg': {}, 'series.0.lineStyle.width': 5 }]}
    comment={'setting 按顺序修改配置'} />
}
```

## demension 图表维度

图表维度指图表数据与呈现方式;

### 二维图表

一般我们认为基于`笛卡尔坐标系`的图表, 如 散点图，折线图，柱状图，饼图，K线图，箱型图，热力图，气泡图，雷达图，极坐标图，它们不仅拥有`x,y坐标轴` 还拥有 `grid` 画布布局

### 一维图表

如我们常见的`漏斗图`，`仪表盘`，`地图`，`关系图` 等，它们拥有 `radius` 和 `center` 的配置

### 图表类型与维度的映射关系

```ts
/**
 * 默认的数据类型
 * 默认数据类型是 two
 */
export const typeDemensionMap = {
    pie: 'one',
    wordCloud: 'one',
    map: 'one',
    graph: 'one',
    scatter: 'one',
    gauge: 'one',
    funnel: 'one'
};
```

## subtype 高阶用法 

### 支持参数调用

```tsx
/**
 * compact: true 
 */
import React from 'react';
import { Met, MetEcharts, registerSubtype } from'@hulujs/met';
import { mapping } from '@hulujs/mu';
import { InputNumber } from 'antd';

const data = [
    { year: '2018', province: '北京', value: 80 },
    { year: '2018', province: '上海', value: 150 },
    { year: '2018', province: '广州', value: 120 },
    { year: '2018', province: '四川', value: 190 },
    { year: '2018', province: '湖北', value: 100 },
    { year: '2018', province: '福建', value: 140 },
    { year: '2018', province: '贵州', value: 60 },
    { year: '2019', province: '北京', value: 820 },
    { year: '2019', province: '上海', value: 1150 },
    { year: '2019', province: '广州', value: 1230 },
    { year: '2019', province: '四川', value: 1920 },
    { year: '2019', province: '湖北', value: 1200 },
    { year: '2019', province: '福建', value: 640 },
    { year: '2019', province: '贵州', value: 760 }
];

registerSubtype('all', 'width', (params) => {
  const { width = 10, type = 'bar' } = params;
  return type === 'bar' ? { 'series.*.barWidth': width } : { 'series.*.lineStyle.width': width }
})

export default () => {
  const [width, setWidth] = React.useState(10);
  return <>
    <Met p={16}>Width: <InputNumber value={width} onChange={setWidth} /></Met>
    <MetEcharts data={data} type={'bar'} 
      subtypes={[['::width', { width }]]}
      mappers={{ x: 'province', y: 'value', d: 'year' }} 
      h={300} 
      p={16} />

    <MetEcharts data={data} type={'line'} 
      mappers={{ x: 'province', y: 'value', d: 'year' }} 
      setting={{'::width': { width, type: 'line'}}}
      h={300} 
      p={16} />
  </>
}
```

### 多个subtype 

```tsx
/**
 * compact: true 
 */
import React from 'react';
import { Met, MetEcharts } from'@hulujs/met';
import { mapping } from '@hulujs/mu';
import { InputNumber } from 'antd';

const data = [
    { year: '2018', province: '北京', value: 80 },
    { year: '2018', province: '上海', value: 150 },
    { year: '2018', province: '广州', value: 120 },
    { year: '2018', province: '四川', value: 190 },
    { year: '2018', province: '湖北', value: 100 },
    { year: '2018', province: '福建', value: 140 },
    { year: '2018', province: '贵州', value: 60 },
    { year: '2019', province: '北京', value: 820 },
    { year: '2019', province: '上海', value: 1150 },
    { year: '2019', province: '广州', value: 1230 },
    { year: '2019', province: '四川', value: 1920 },
    { year: '2019', province: '湖北', value: 1200 },
    { year: '2019', province: '福建', value: 640 },
    { year: '2019', province: '贵州', value: 760 }
];

export default () => {
  const [width, setWidth] = React.useState(30);
  return <>
    <Met p={16}>Width: <InputNumber value={width} onChange={setWidth} /></Met>
    <MetEcharts data={data} type={'bar'} 
      subtypes={[['::width', { width }], '::stack']}
      // 或
      // subtypes={[['::width', { width }], ['::stack']]}
      // subtypes={[{ '::width': { width }}, ['::stack', {}]]}
      mappers={{ x: 'province', y: 'value', d: 'year' }} 
      comment={'多个subtype'}
      h={300} 
      p={16} />
  </>
}
```

### subtype 与 setting 混用 

```tsx
/**
 * compact: true 
 */
import React from 'react';
import { Met, MetLeft, MetEcharts, registerSubtype } from'@hulujs/met';
import { mapping } from '@hulujs/mu';
import { InputNumber, Switch } from 'antd';

registerSubtype('all', 'hideLegend', ({ toggle = true }) => {
  return { 'grid.top': toggle ? '130px' : '10px', 'legend.show': toggle }
});

registerSubtype('all', 'stack', ({ key = '堆叠' }) => {
  return {'series.*.stack': key }
});

registerSubtype('all', 'width', (params) => {
  const { width = 10, type = 'bar' } = params;
  return type === 'bar' ? { 'series.*.barWidth': width } : { 'series.*.lineStyle.width': width }
})

const data = [
    { year: '2018', province: '北京', value: 180 },
    { year: '2018', province: '上海', value: 350 },
    { year: '2018', province: '广州', value: 520 },
    { year: '2018', province: '四川', value: 490 },
    { year: '2018', province: '湖北', value: 300 },
    { year: '2018', province: '福建', value: 240 },
    { year: '2018', province: '贵州', value: 60 },
    { year: '2019', province: '北京', value: 820 },
    { year: '2019', province: '上海', value: 1150 },
    { year: '2019', province: '广州', value: 1230 },
    { year: '2019', province: '四川', value: 1920 },
    { year: '2019', province: '湖北', value: 1200 },
    { year: '2019', province: '福建', value: 640 },
    { year: '2019', province: '贵州', value: 760 }
];

export default () => {
  const [width, setWidth] = React.useState(30);
  const [hideLegend, setHideLegend] = React.useState(false);
  const [stack, setStack] = React.useState(false);

  return <>
    <MetLeft gap={16} p={16}>
      <span>Width 宽度</span> 
      <InputNumber value={width} onChange={setWidth} step={10} />
      <span>Legend 图例</span>
      <Switch checked={hideLegend} onChange={setHideLegend} />
      <span>Stack 堆叠</span>
      <Switch checked={stack} onChange={setStack} />
    </MetLeft>
    <MetEcharts 
      data={data} 
      type={'bar'} 
      subtypes={[
        ['::width', { width }], 
        ['::stack', { key: stack ? '堆叠key' : null } ]
      ]}
      mappers={{ x: 'province', y: 'value', d: 'year' }} 
      setting={{ 
        'series.*.itemStyle.borderRadius': 20, 
        '::hideLegend': { toggle: hideLegend },
        'series.0.type': 'line'
      }}
      comment={'subtype 与 setting 混用'}
      h={300} 
      p={16} />
  </>
}
```

## Props 属性

```ts
export interface MetEchartsProps extends MetProps {
    /**
     * DataRow 的数据格式
     * 将data转成echarts的需要格式
     * - 不使用dataset的原因是数据转换的时候不方便
     * - data 转换的权重值大于 options 的权重
     * - setting 的权重大于 data 的权重
     */
    data?: MetEchartsDataRow[];

    /**
     * 图表维度
     * 数据会根据不同的维度转换成不同的 optionByDimension
     */
    demension?: 'one' | 'two' | 'three';
    /**
     * echarts options
     */
    options?: EChartsOption;

    /**
     * echarts 图表类型
     */
    type: EchartType;

    /**
     * 预制的setting集合
     * 快速配置图表
     */
    subtyps?: SubTypes;

    /**
     * mapper
     * mapping 方法需要的参数
     */
    mappers?: Mapper | [Mapper, MapperValue];

    /**
     * 配置信息
     * - 该配置信息通过mset对options进行设置
     * - 若有需求非常强烈的顺序要求, 使用数组格式
     */
    setting?: Record<string, any> | Record<string, any>[];

    /**
     * notMerge
     * - 不建议使用
     * options 的某一层级的值设置为 undefined 返回默认值，
     * 但 echert v5.4.3 依然不能判断识别其本质是删除组件，而notMerge不能正常工作，
     * 而 replaceMerge 需要自动计算
     */
    notMerge?: boolean;
}
```

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 图表数据 | `Array<any>` | - |
| type | 图表类型 | `string` | `bar` |
| subtypes | 图表子类型 | `Array<Array<string>>` | - |
| demension | 图表维度 | `Array<Array<string>>` | - |


