---
title: MetCenter 居中
order: 4
toc: content
group:
  title: 布局组件
---

# MetCenter 

MetCenter 由MetBox演化而来 是其常用场景之一，水平垂直居中

```tsx
/**
 * compact: true 
 * title: center 居中
 */
import React from'react';
import { Met, MetCenter } from '@hulujs/met';

export default () => {
    return <>
        <MetCenter gap={8} h={300} bg={"lightcyan"}>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
        </MetCenter>
    </>
}
```

```tsx
/**
 * compact: true 
 * title: left center 靠左居中
 */
import React from'react';
import { Met, MetCenter } from '@hulujs/met';

export default () => {
    return <>
        <MetCenter h={300} bg={"lightcyan"} placement={'left'}>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
        </MetCenter>
    </>
}
```

```tsx
/**
 * compact: true 
 * title: vertical 垂直
 */
import React from'react';
import { Met, MetCenter } from '@hulujs/met';

export default () => {
    return <>
        <MetCenter h={300} bg={"lightcyan"} placement={'left'} vertical>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
        </MetCenter>
    </>
}
```

```tsx
/**
 * compact: true 
 * title: between 两侧 
 */
import React from'react';
import { Met, MetCenter } from '@hulujs/met';

export default () => {
    return <>
        <MetCenter h={300} bg={"lightcyan"} placement={'between'}>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
        </MetCenter>
    </>
}
```

```tsx
/**
 * compact: true 
 * title: inline 
 */
import React from'react';
import { Met, MetCenter } from '@hulujs/met';

export default () => {
    return <>
        <MetCenter h={300} bg={"lightcyan"} placement={'left'} inline>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
          <Met bg={"lightpink"} w={100} h={100} br={'50%'}></Met>
        </MetCenter>
    </>
}
```
