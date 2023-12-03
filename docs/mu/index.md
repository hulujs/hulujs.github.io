---
toc: content
nav:
  title: 方法
  order: 4
---

# 介绍

Mu 是hulu的方法库，基于 `lodash-es` , 对其进行二次封装，部分方法进行增强

## 特点

### 主数据格式

Mu 主要对 Collection 的数据格式进行了增强，定义为 DataRow[]，使其更符合前端开发习惯

```ts
type DataRow = {
  [key: string]: any;
};
```

### 对象属性链 PropPath

***PropPath***，用于表示对象属性链，可以表示对象属性的路径，如 `a.b.c`

mu 主要的方法都是通过 PropPath ，对 DataRow 进行转换
