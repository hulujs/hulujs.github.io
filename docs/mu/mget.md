---
toc: content
group: 
  title: 属性链方法
  order: 1
---

# mget

`mget` 方法用于从对象中获取指定属性链的值

## 基础语法

```ts
/**
 * 从对象中获取指定属性链的值
 * @param data Record<string, any> | Record<string, any>[]: 要被检索的对象
 * @param propPath 属性链
 * @param type MgetType: 'normal' | 'detail'
 */
mget(data: Record<string, any> | Record<string, any>[], propPath: PropPath, type: MgetType): any;
```

该方法是 es2015 属性可选链的方法实现

## 示例数据

```ts
const users = [
    {
        name: '张三',
        age: 18,
        gender: 'male',
        hobby: ['羽毛球', '足球'],
        work: { '2022-2023': { info: '前端开发', salary: 10000 } },
        address: { 
          'city.name': '北京市', 
          province: '北京', 
          area: { info: '东城区', postcode: '10001' } 
        }
    },
    {
        name: '李四',
        age: 20,
        gender: 'female',
        hobby: ['电竞', '电影'],
        address: { 
          'city.name': '上海市', 
          province: '上海', 
          area: { info: '黄浦区', postcode: '20001' } 
        }
    },
    {
        name: '王五',
        age: 22,
        gender: 'male',
        hobby: ['旅行', '吃'],
        address: { 
          'city.name': '广州市', 
          province: '广东', 
          area: { info: '越秀区', postcode: '30001' } 
        }
    }
];
```

## 基本用法

### 普通用法

```ts
console.log(mget(users, `0.address.province`));
// -> 北京 
// 等效于 users[0].address.province

console.log(mget(users, `[1][hobby][1]`));
// -> 电影
// 等效于 users[1].hobby[1]

console.log(mget(users, [1, 'hobby', 1]));
// -> 电影
// 等效于 users[1].hobby[1]
```

#### 若对象中该属性链不存在，则返回 undefined

```ts
console.log(mget(users, `0.address.info.name`));
// -> undefined
```

### 特殊字符

```ts
console.log(mget(users, `1.address.["city.name"]`));
// -> 上海市
// 等效于 users[1].address["city.name"]

console.log(mget(users, `2.address.[city.name]`));
// -> 广州市
// 等效于 users[2].address["city.name"]
// 标准用法为["{key}"], 但也兼容[{key}]
```

## 泛型通配符 

史上最强的get方法匹配

### 占位通配符 `*`

占位通配符 `*`, 占某个位置, 只匹配当前所在节点的所有兄弟节点数据

```ts
console.log(mget(users, `*.hobby.[0]`));
// -> ['羽毛球', '电竞', '旅游']
// 等效于 
// - users[0].hobby[0]
// - users[1].hobby[0]
// - users[2].hobby[0]
// - users[3].hobby[0]

console.log(mget(users, `*.hobby.*`));
// -> ["羽毛球", "足球", "电竞", "电影", "旅行", "吃"]
// -> 多通配符匹配结果数组
```

占位通配符不仅支持数组，还支持对象属性

```ts
console.log(mget(users, `1.*`));
// -> [
//  "李四",
//  40,
//  "female",
//  [ "电竞", "电影" ],
//  { "city.name": "上海市", "province": "上海", "area": { "info": "黄浦区", "postcode": "20001" }}
// ]
// 等效于 Object.values(users[0])
```

因为是占位符 `*` 与 `*.*` 的结果不一样

```ts
console.log(mget(users, `*.*`));
// [
//     "张三",
//     38,
//     "male",
//     [
//         "羽毛球",
//         "足球"
//     ],
//     {
//         "2022-2023": {
//             "info": "前端开发",
//             "salary": 10000
//         }
//     },
//     {
//         "city.name": "北京市",
//         "province": "北京",
//         "area": {
//             "info": "东城区",
//             "postcode": "10001"
//         }
//     },
//     "李四",
//     40,
//     "female",
//     [
//         "电竞",
//         "电影"
//     ],
//     {
//         "city.name": "上海市",
//         "province": "上海",
//         "area": {
//             "info": "黄浦区",
//             "postcode": "20001"
//         }
//     },
//     "王五",
//     42,
//     "male",
//     [
//         "旅行",
//         "吃"
//     ],
//     {
//         "city.name": "广州市",
//         "province": "广东",
//         "area": {
//             "info": "越秀区",
//             "postcode": "30001"
//         }
//     }
// ]

console.log(mget(users, `*`));
// [
//     {
//         "name": "张三",
//         "age": 38,
//         "gender": "male",
//         "hobby": [
//             "羽毛球",
//             "足球"
//         ],
//         "work": {
//             "2022-2023": {
//                 "info": "前端开发",
//                 "salary": 10000
//             }
//         },
//         "address": {
//             "city.name": "北京市",
//             "province": "北京",
//             "area": {
//                 "info": "东城区",
//                 "postcode": "10001"
//             }
//         }
//     },
//     {
//         "name": "李四",
//         "age": 40,
//         "gender": "female",
//         "hobby": [
//             "电竞",
//             "电影"
//         ],
//         "address": {
//             "city.name": "上海市",
//             "province": "上海",
//             "area": {
//                 "info": "黄浦区",
//                 "postcode": "20001"
//             }
//         }
//     },
//     {
//         "name": "王五",
//         "age": 42,
//         "gender": "male",
//         "hobby": [
//             "旅行",
//             "吃"
//         ],
//         "address": {
//             "city.name": "广州市",
//             "province": "广东",
//             "area": {
//                 "info": "越秀区",
//                 "postcode": "30001"
//             }
//         }
//     }
// ]
```

### 模糊通配符 `**`

通配符 `**` 匹配任意层级的子属性

注意只匹配任一节点的完整名称

```ts
console.log(mget(users, `0.**.info`));
// -> ['前端开发', '东城区']
// 匹配到 ['0.work.[2022-2023].info', '0.address.area.info']

console.log(mget(users, `**.info`));
// -> ['前端开发', '东城区', '黄浦区', '越秀区']
// 匹配到 ['0.work.[2022-2023].info', '0.address.area.info', '1.address.area.info', '2.address.area.info']

console.log(mget(users, `**.**.info`));
// -> ['前端开发', '东城区', '黄浦区', '越秀区']
// 连续 "**" 匹配，结果一致
```

### 匹配详情

`mget(obj, path, 'detail')`

```ts
console.log(mget(users, `0.**.info`, 'detail'));
// ->[
//     {
//         value: '前端开发',
//         cash: [0, 'work', '2022-2023', 'info']
//     },
//     {
//         value: '东城区',
//         cash: [0, 'address', 'area', 'info']
//     },
//     {
//         value: '黄浦区',
//         cash: [1, 'address', 'area', 'info']
//     },
//     {
//         value: '越秀区',
//         cash: [2, 'address', 'area', 'info']
//     }
// ];
```

## PropPath 属性链

### 链式表达式

属性链是指从根节点开始，沿着树的路径，经过的每个节点的名称。
属性链式对象获取属性的字符串表现形式 `address.area.info`
每个节点可以为字节文本形式 `{name}`, 但其标准形式 `[{name}]`, 
在mget的标准格式为`[address][area][info]`, 兼容引号`["address"]["area"]["info"]`
若节点属性有特殊字符直接用中挂号包裹 `[address][city.name][info]` `[address][city&8-qwwname][info]`
其链式写法为 `address.[city.name].info`
若有数字 `[address][0][info]` 其链式写法可以为 `address.[0].info` 或 `address.0.info`

### Cash表达式 

`cash` 是链式表达式的数组形式 

- `address.area.info` -> `['address', 'area', 'info']`
- `address.0.info` -> `['address', 0, 'info']`
- `[address][city.name][info]` -> `['address', 'city.name', 'info']`