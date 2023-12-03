---
title: MetFlex 水平布局
order: 2
toc: content
group:
  title: 布局组件
---

# MetFlex 

基于Flex & FlexWrap: 'nowarp' 样式布局组件 

其特点为'满格布局', 其子项所有为宽度加起来为‘180%’

灵活的配置宽度对比，没有所谓 `24栅格` , `16栅格` 的说法, 子项按照flex-basis进行比例分配

## 基础用法

```tsx 
import React from 'react'; 
import { Met, MetFlex } from '@hulu/met'; 

export default () => {

    return <>
        <MetFlex gap={8} h={64}>
            <Met bg={"lightblue"} flex={1}>flex: 1</Met>
            <Met bg={"lightgreen"} flex={2}>flex: 2</Met>
        </MetFlex>
        <MetFlex gap={8} h={64} mt={8}>
            <Met bg={"lightblue"} flex={10}>flex: 10</Met>
            <Met bg={"lightgreen"} flex={20}>flex: 20</Met>
            <Met bg={"lightpink"} flex={15}>flex: 15</Met>
        </MetFlex>
        <MetFlex gap={8} h={64} mt={8}>
            <Met bg={"lightblue"} w={180}>width: 180px</Met>
            <Met bg={"lightgreen"} flex={1}>flex: 1</Met>
        </MetFlex>
        <MetFlex gap={8} h={64} mt={8}>
            <Met bg={"lightblue"} w={180}>width: 180px</Met>
            <Met bg={"lightgreen"} flex={20}>flex: 20</Met>
        </MetFlex>
        <MetFlex gap={8} h={64} mt={8}>
            <Met bg={"lightblue"} w={'30%'}>width: 30%</Met>
            <Met bg={"lightgreen"} flex={1}>flex: 1</Met>
        </MetFlex>
        <MetFlex gap={8} h={64} mt={8}>
            <Met bg={"lightblue"} w={'30%'}>width: 30%</Met>
            <Met bg={"lightgreen"} w={180}>width: 180px</Met>
        </MetFlex>
        <MetFlex gap={8} h={64} mt={8}>
            <Met bg={"lightblue"} w={'30%'}>width: 30%</Met>
            <Met bg={"lightgreen"} w={180}>width: 180px</Met>
            <Met bg={"lightpink"} flex={1}>flex: 1</Met>
        </MetFlex>
    </>

}

```

## scroll 滚动

flexItem 自行设置scroll, 不设置会撑开

```tsx 
import React from'react';
import { Met, MetFlex } from '@hulu/met';

export default () => {
    return <>
        <MetFlex gap={8} h={150}>
            <Met bg={"lightblue"} flex={1}>
                知其雄，守其雌，为天下溪。<br />
                为天下溪，常德不离，复归于婴儿。<br />
                知其白，守其黑，为天下式。<br />
                为天下式，常德不忒，复归于无极。<br />
                知其荣，守其辱，为天下谷。<br />
                为天下谷，常德乃足，复归于朴。<br />
                朴散则为器，圣人用之则为官长。<br />
                故大制不割。
            </Met>
            <Met flex={1} bg={"lightgreen"} scroll>
                昔之得一者，天得一以清，地得一以宁，神得一以灵，谷得一以盈，万物得一以生，侯王得一以为天下贞。<br />
                其致之。<br />
                天无以清将恐裂，地无以宁将恐发（fèi，“发”通“废”），神无以灵将恐歇，谷无以盈将恐竭，万物无以生将恐灭，侯王无以贵高将恐蹶（jué）。<br />
                故贵以贱为本，高以下为基。<br />
                是以侯王自谓孤寡不穀（谷gǔ）。<br />
                此非以贱为本邪（yé）？<br />
                非乎？<br />
                故致数（shuò）舆（yù）无舆。<br />
                不欲琭（lù）琭如玉，珞（luò）珞如石。<br />
            </Met>
        </MetFlex>
    </>
}
```

## full 继承父级宽高 `100%`

```tsx
import React from'react';
import { Met, MetFlex } from '@hulu/met';
import { Switch } from 'antd';

export default () => {
    const [full, setFull] = React.useState(false);
    const onChange = (checked: boolean) => {
        setFull(checked);
    }
    return <>
        <MetFlex gap={8}>
           <span>Full</span> <Switch checked={full} onChange={onChange} />
        </MetFlex>
        <Met bg={"grey"} h={200} mt={8}>
            <MetFlex bg={"lightcyan"} full={full}>Content</MetFlex>
        </Met> 
    </>
}
```

## 布局

MetFlex 默认属性配置为 

### 方向

```tsx
import React from'react';
import { Met, MetFlex } from '@hulu/met';
import { Switch } from 'antd';

export default () => {
    const [vertical, setVertical] = React.useState(false);

    return <>
        <MetFlex gap={8} placement="left">
            <span>Vertical</span>
            <Switch checked={vertical} onChange={setVertical} />
        </MetFlex>
        <MetFlex bg={"lightcyan"} h={200} mt={8} vertical={vertical}>
            <Met bg={"lightblue"} flex={1}>one</Met>
            <Met bg={"lightgreen"} flex={2}>two</Met>
            <Met bg={"lightpink "} flex={3}>three</Met>
        </MetFlex>
    </>
}
```

### placement 方位 

```tsx
import React from'react';
import { Met, MetFlex } from '@hulu/met';
import { Select } from 'antd';

const options = [
    'normal',
    'top',
    'topCenter (同 top)',
    'topLeft',
    'topRight',
    'left',
    'leftMiddle (同 left)',
    'leftTop',
    'leftBottom',
    'right',
    'rightMiddle (同 right)',
    'rightTop',
    'rightBottom',
    'bottom',
    'bottomCenter (同 bottom)',
    'bottomLeft',
    'bottomRight',
    'center',
    'betweenTop',
    'between',
    'betweenMiddle (同 between)',
    'betweenBottom'
].map((label) => {
    return { value: label.replace(/\(.*\)/, '').trim(), label }
});

export default () => {
    const [placement, setPlacement] = React.useState('normal');
    const onChange = (value) => {
        setPlacement(value);
    }

    return <>
        <MetFlex gap={8}>
           <span>Placement</span> <Select options={options} value={placement} onChange={onChange} style={{ width: 200 }} />
        </MetFlex>
        <MetFlex bg={"lightcyan"} h={200} mt={8} placement={placement}>
            <Met bg={"lightblue"} w={200}>one</Met>
            <Met bg={"lightgreen"} w={300}>two</Met>
        </MetFlex>
    </>
}
```

### align, justify 精细调整

```tsx
import React from'react';
import { Met, MetFlex } from '@hulu/met';
import { Segmented } from 'antd';

const justifyOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];

const alignOptions = ['flex-start', 'center', 'flex-end', 'stretch'];

export default () => {
    const [align, setAlign] = React.useState('stretch');
    const [justify, setJustify] = React.useState('flex-start');

    return <>
        <MetFlex gap={8}>
            <span>justify</span>
            <Segmented options={justifyOptions} onChange={setJustify} />
        </MetFlex>
        <MetFlex gap={8} mt={8}>
            <span>align</span>
            <Segmented options={alignOptions} onChange={setAlign} />
        </MetFlex>
        <MetFlex bg={"lightcyan"} h={200} mt={8} align={align} justify={justify}>
            <Met bg={"lightblue"} w={200}>one</Met>
            <Met bg={"lightgreen"} w={300}>two</Met>
            <Met bg={"lightpink "} w={100}>three</Met>
        </MetFlex>
    </>
}
```

## Props 属性

```typescript
// 属性继承自Met
interface MetFlexProps extends MetProps {
    gap?: number;
    vertical?: boolean;
    placement?: string;
    align?: string;
    justify?: string;
    full?: boolean;
    scroll?: boolean;
}
```

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gap | 间距 | number | 0 |
| vertical | 垂直布局 | boolean | false |
| placement | 方位 | string | 'normal' |
| align | 垂直对齐 | string |'stretch' |
| justify | 水平对齐 | string | 'flex-start' |
| full | 继承父级宽高 | boolean | false |
| scroll | 内容超出时滚动 | boolean | false |

## 注意事项

* 由于 MetFlex 继承了 Met 的属性，所以 MetFlex 组件的属性会覆盖 Met 的属性。
