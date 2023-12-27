---
title: Met 遇见
order: -1
nav:
  title: 组件
  order: 1
---

# Met 遇见

Met 是Hulu的UI组件库，它更偏向于业务功能，解决实际生产中的问题，而不是单独再造轮子
市面有太多太多优秀的UI Design, 我们直接站在巨人的肩膀上，成就自己
Met默认使用Antd Design, 其优点是组件丰富，涵盖了大部分的场景，同时也有完备的中文文档和活跃的社区
但部分组件可能不符合我们的需求，所以我们提供了一种机制，可以让你在不改动源码的情况下，对其组件进行定制扩展

## 特点

* 基于 Ant Design 组件扩展
* 基于 Echarts 图表组件扩展
* 内联式组件样式
* 大量布局和功能性组件
* 偏向业务实现
* 追求原子化开发模式
* 提供 withMet, 地方时组件内联化

## 为什么使用内联式组件样式

这是一个轮回，最先CSS脱离HTML的原因就是大量的HTML和内联式式样式维护起来比较麻烦
所有所用 样式选择器+css属性，管理样式比较方便

但是在原子化开发模式下，我们更希望组件的样式直接写在组件标签上，而不是写在组件的样式文件中，这样可以减少样式文件的数量，提高编译速度，同时也方便我们对组件进行定制扩展

## withMet

withMet 是一个高阶组件，它可以让你在不改动源码的情况下，对其组件进行定制扩展

```ts
import React from'react'; 
import { withMet } from '@hulujs/met'; 
import { Select } from 'antd'; 

// with met 
const Met$Select = withMet(Button, {}); 

export default () => {
  return <MetCenter>
    <Met$Select w={100}>按钮</Met$Select>
  </MetCenter>
}
```
