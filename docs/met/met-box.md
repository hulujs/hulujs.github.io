---
title: MetBox 垂直布局
order: 3
toc: content
group:
  title: 布局组件
---

# MetBox 垂直布局

## 介绍

MetBox 布局组件，基于MetFlex[vertical=true]

```tsx | pure
const MetBox: FC<MetBoxProps> = (props) => {

    const { className, ...extra } = props;
    return (
        <MetFlex
            align={'stretch'}
            placement={'top'}
            overflowY={'auto'}
            vertical
            {...extra}
        />
    );

}

```

## 应用场景

适合用在“满屏”设计的页面

## 基础用法

```tsx 
/**
 * compact: true
 */
import React from 'react';
import { MetBox, MetFlex, Met } from '@hulujs/met';

export  default () => {
    return <Met h={400}>
        <MetBox full gap={4}>
            <MetBox h={48} bg={"lightcyan"} placement={'center'} fs={24} >
                东皇太一
            </MetBox>
            <MetBox flex={1} gap={4} bg={"lightcyan"} fs={22} fw={200} placement={'top'} scroll={"auto"}>
                吉日兮辰良，穆将愉兮上皇。<br />
                抚长剑兮玉珥，璆锵鸣兮琳琅。<br />
                瑶席兮玉瑱，盍将把兮琼芳。<br />
                蕙肴蒸兮兰藉，奠桂酒兮椒浆。<br />
                扬枹兮拊鼓。疏缓节兮安歌，<br />
                陈竽瑟兮浩倡。<br />
                灵偃蹇兮姣服，芳菲菲兮满堂。<br />
                五音纷兮繁会，君欣欣兮乐康。<br />
                吉日兮辰良，穆将愉兮上皇。<br />
                抚长剑兮玉珥，璆锵鸣兮琳琅。<br />
                瑶席兮玉瑱，盍将把兮琼芳。<br />
                蕙肴蒸兮兰藉，奠桂酒兮椒浆。<br />
                扬枹兮拊鼓。疏缓节兮安歌，<br />
                陈竽瑟兮浩倡。<br />
                灵偃蹇兮姣服，芳菲菲兮满堂。<br />
                五音纷兮繁会，君欣欣兮乐康。
            </MetBox>
        </MetBox>
    </Met>
}
```

## 配合MetFlex进行页面布局

```tsx 
/**
 * compact: true
 */
import React from 'react'; 
import { MetBox, MetFlex, Met } from '@hulujs/met'; 

export  default () => {

    return <Met h={500} p={4} bg={"lightgrey"}>
        <MetBox gap={4} full>
            <Met tag="header" h={48} bg={"lightcyan"}></Met>
            <MetFlex flex={1} gap={4}>
                <Met tag="aside" width={200} bg={"lightcyan"} comment={"leftside"}></Met>
                <Met tag="main" flex={1} bg={"lightcyan"} comment={"main"}></Met>
            </MetFlex>
        </MetBox>
    </Met>

}

```

### placement 方位 

```tsx
/**
 * compact: true 
 */
import React from'react';
import { Met, MetBox, MetFlex } from '@hulujs/met';
import { Segmented } from 'antd';

const options = [
    'top',
    'right',
    'bottom',
    'left',
    'center'
]

export default () => {
    const [placement, setPlacement] = React.useState('center');
    const onChange = (value) => {
        setPlacement(value);
    }
    return <>
        <MetFlex p={8} gap={8} placement={'left'}>
            <span>placement</span>
            <Segmented options={options} value={placement} onChange={setPlacement} />
        </MetFlex>
        <MetBox gap={8} h={300} mt={16} placement={placement} bg={"lightcyan"}>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
        </MetBox>
    </>
}
```

## Props 属性

同 [MetFlex 组件](/met/met-flex)
