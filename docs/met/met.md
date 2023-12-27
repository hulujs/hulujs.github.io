---
title: Met 基础组件
toc: content
group:
  title: 布局组件
  order: 1
---

# Met 基础组件

整个Met UI组件体系中的基础组件

它的特点是可以自由的使用样式，样式属性推荐通过组件属性来配置，而不是由`style`属性来配置。

部分常用的样式支持简称，让使用起来更为方便。


```tsx
/**
 * title: 使用Met画一个方格
 */ 
import { Met } from '@hulujs/met';

export default () => {
    return <Met w={100} h={100} bg="red"></Met>
}
```

### 属性权重

在Met中，权重关系原则是，离实际值越近，权重越高。

所以，其权重关系是: `别名` < `名称` < style[`名称`]

```tsx
import { Met } from '@hulujs/met';

export default () => {
    return <>
        <Met w={100} h={100} bg="red"></Met>
        <Met w={100} h={100} bg="red" width={200} bg="blue"></Met>
        <Met w={100} h={100} bg="red" width={200} bg="blue" style={{ width: 300, background: 'green' }}></Met>
    </>
}
```

### tag 属性

`tag`属性是用来指定组件的html标签，默认是`div`。

```tsx
import { Met } from '@hulujs/met';
import { Button, Input } from 'antd';
import LogoImg from './assets/hulu.png';

export default () => {
    return <>
        <Met tag="div">Tag Div</Met>
        <Met tag="span" w={300}>Tag Span</Met>
        <Met tag="img" src={LogoImg} />
    </>
}
```

### display 转换

属性 inline, none;

inline 为true 的时候，会将display转为 inline-* 属性

`block -> inline`, `flex -> inline-flex`, `grid -> inline-grid`, `table -> inline-table`

```tsx
import { Met } from '@hulujs/met';
import { Select, Switch, Space } from 'antd';

export default () => {
    const [inline, setInline] = React.useState(false)
    const [none, setNone] = React.useState(false)
    const Option = Select.Option

    const onChange = (value) => {
        setInline(value)
    }

    const onChangeNone = (value) => {
        setNone(value)
    }
   
    return <>
        <Met>
            <Space>
                <span>Inline</span>
                <Switch checked={inline} onChange={onChange} />
            </Space>
            <Space style={{ marginLeft: 10 }}>
                <span>None</span>
                <Switch checked={none} onChange={onChangeNone} />
            </Space>
        </Met>
        
        <Met tag={'div'} w={500} h={48} mt={8} bg="red" inline={inline} none={none}>div</Met>
        <Met tag={'span'} mt={8} h={48} bg="blue" w={500} inline={inline} none={none}>span</Met>
        <Met display={'inline-block'} h={48} mt={8} w={500} bg="green" inline={inline} none={none}>inline-block</Met>
        <Met display={'flex'} mt={8} h={48} bg="lightgreen" inline={inline} none={none}>flex</Met>
    </>
}
```

### 调试备注 <Badge>dev only</Badge>

为Met标签添加html备注，debug起来更为方便，只在开发环境生效

```tsx
import { Met } from '@hulujs/met';
import { Button, Input } from 'antd';
import CommentImg from './assets/comment.jpg';

export default () => {
    return <>
        <Met tag="img" w={'100%'} src={CommentImg} comment="这是一张调试备注demo的图片" />
    </>
}
```

## 样式属性简写对照表

| 样式属性 | 简写 |
| --- | --- |
| width | w |
| height | h |
| line-height | lh |
| margin | m |
| margin-left | ml |
| margin-top | mt |
| margin-right | mr |
| margin-bottom | mb |
| padding | p |
| padding-left | pl |
| padding-top | pt |
| padding-right | pr |
| padding-bottom | pb |
| border | bd |
| border-width | bdw |
| border-style | bds |
| border-color | bdc |
| border-top | bdt |
| border-right | bdr |
| border-bottom | bdb |
| border-left | bdl |
| border-radius | br |
| background | bg |
| font-size | fs |
| font-weight | fw |
| font-family | ff |
| overflow | o |
| overflow-x | ox |
| overflow-y | oy |
| VerticalAlign | va |
| textAlign | ta |
| VerticalAlign | va |
| VerticalAlign | va |
| VerticalAlign | va |

## API 属性

| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| tag | 否 | 标签 | string | div |
| display | 否 | 显示 | string | block |
| inline | 否 |内联 | boolean | false |
| none | 否 | 隐藏 | boolean | false |
| comment | 否 | 调试备注 | string | '' |
| scroll | 否 | 滚动 | string | 'overflow: auto' |
| bd | 否 | border | string | '1px solid #ccc' |

### 属性增强

- `bd` 属性值只为颜色的时候，会自动扩展为完整的`border`配置
    - `bd: 'red'` => `bd: '1px solid red'`
    - `border: 'red'` => `border: '1px solid red'`

- `scroll` 为true时，样式自动计算为 `overflow: 'auto'`