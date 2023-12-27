---
toc: content
group: 
  title: 属性链方法
---

# mgetx

根据属性链集合获取该集合在对象属性值的集合

[mget](/mu/mget) 的 plus 版本，返回一个数组，数组中每个元素是`mget`的返回值

## 基础语法

```ts
function mgetx(obj: Record<string, any>, paths: string, type?: MgetType);
function mgetx(obj: Record<string, any>, paths: string[], type?: MgetType);
function mgetx(obj: Record<string, any>, paths: string[][], type?: MgetType);
```

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

```ts
mgetx(users, '0.address.province')
// -> ["北京"]

mgetx(users, ['0.address.province', '1.hobby'])
// -> [ "北京", [ "电竞", "电影" ] ]

mgetx(users, [[0, 'address', 'province'], [1, 'hobby']])
// -> [ "北京", [ "电竞", "电影" ] ]
```

## 通配符

```ts
mgetx(users, ['1.hobby.*', '*.name'])
// -> [
//     ["电竞", "电影"],
//     ["张三", "李四","王五"]
// ]

mgetx(users, ['1.hobby.*', '**.info'])
// -> [
//     ['电竞', '电影'],
//     ['前端开发', '东城区', '黄浦区', '越秀区']
// ]
```

## 详情显示

```ts
mgetx(users, ['1.hobby.*', '**.info'], 'detail')
// -> [
//    [
//        { value: '电竞', cash: [1, 'hobby', 0] },
//        { value: '电影', cash: [1, 'hobby', 1] }
//    ],
//    [
//        { value: '前端开发', cash: [0, 'work', '2022-2023', 'info'] },
//        { value: '东城区', cash: [0, 'address', 'area', 'info'] },
//        { value: '黄浦区', cash: [1, 'address', 'area', 'info'] },
//        { value: '越秀区', cash: [2, 'address', 'area', 'info'] }
//    ]
//]
```