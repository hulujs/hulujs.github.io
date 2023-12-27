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

对象属性链式调用 

如下表达一个对象的链式法

- user.address.country

若原对象包含数组，则使用下标进行访问

- user.address.country[0]
- users[1].user.address.country

而对象属性写法也支持下标写法（其实最开始的时候也只支持下标写法）

- ['users'][1]['user']['address']['country']

而 PropPath 就是链式写法的字符串(string)表现形式

- `['users'][1]['user']['address']['country']`

在字符串内部可以省略引号

- `[users][1][user][address][country]`

可以把下标写法(中挂号)换成`.`的链式调用方式

- `users.1.user.address.country`

当然 PropPath 为宽松形式，下标形式和'.'链式调用形式可以混用

- `user[1].user.address.country`
- `user[1]['user'].['address'].country`

注意，如果属性值包含特殊字符`[].-'"`等，就必须使用`[]`包裹起来

- `users[1].user.[address.info].country`

### PropPathCashes 是 PropPath 的数组表形式

- `[users][1][user][address][country]` -> ['users', 1, 'user', 'address', 'country']
- `users[1].user.[address.info].country` -> ['users', 1, 'user', 'address.info', 'country']

