---
toc: content
group: 
  title: 属性链方法
  order: 1
---

# mget

`mget` 方法用于从DataRow中获取指定属性链的值

## 基础语法

```ts
/**
 * 从DataRow中获取指定属性链的值
 * @param data DataRow | DataRow[]: 要被检索的对象
 * @param propPath 属性链
 * @param defaultValue 默认值, 如果解析值是 undefined ，这值会被返回
 */
mget(data: DataRow | DataRow[], propPath: PropPath, defaultValue?: any ): any;
```

该方法是 es2015 属性可选链的方法实现

### 例子

```ts
const  data = { 'a': [{ 'b': { 'c': 3 } }] };
 
mget(data, 'a[0].b.c');
// => 3
 
mget(data, ['a', '0', 'b', 'c']);
// => 3
 
mget(data, 'a.b.c', 'default');
// => 'default'
```

## 通配符 `*`

```ts
const  data = [{ 'a': [{ 'b': { 'c': 3 } }] }];
```
