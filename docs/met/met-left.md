---
title: MetLeft 居左
order: 4
toc: content
group:
  title: 布局组件
---

# MetLeft 

MetLeft 由MetFlex演化而来 是其常用场景之一，水平垂直居中

```tsx
/**
 * compact: true 
 */
import React from'react';
import { Met, MetLeft } from '@hulu/met';

export default () => {
    return <>
        <MetLeft gap={8} h={200} bg={"lightcyan"}>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
        </MetLeft>
    </>
}
```

```tsx
/**
 * compact: true 
 */
import React from'react';
import { Met, MetLeft } from '@hulu/met';
import { Button, Select } from 'antd';

export default () => {
    return <>
        <MetLeft gap={8} h={200} bg={"lightcyan"}>
          <span>inline</span>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
          <Button type="primary">primary</Button>
          <Select style={{ width: 120 }} size="large">
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>disabled</Option>
          </Select>
        </MetLeft>
    </>
}
```

## Props 属性

同 [MetFlex](/met/met-flex#props-属性)
