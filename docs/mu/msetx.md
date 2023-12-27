---
toc: content
group: 
  title: 属性链方法
---

# msetx

通过键值对集合批量配置
它是[mset](/mu/mset) 的`plus`版本，msetx 均使用 mset 的 `nest` 模式

## 基础语法

```ts
function msetx(obj: Record<string, any>, pathValue: Record<string, SetValue>);
function msetx(obj: Record<string, any>, pathValue: Record<string, SetValue>[]);
function msetx(obj: Record<string, any>, pathValue: [string, SetValue][]);
function msetx(obj: Record<string, any>, path: PropPaths, value: SetValue);
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
msetx(users, '0.age', 23)
// -> users.0.age = 23
// {
//     name: '张三',
//     age: 23,
//     gender: 'male',
//     hobby: ['羽毛球', '足球'],
//     work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//     address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
// }

msetx(users, {'0.age': 23})
// -> users.0.age = 23
// {
//     name: '张三',
//     age: 23,
//     gender: 'male',
//     hobby: ['羽毛球', '足球'],
//     work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//     address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
// }

msetx(users, {'0.age': 23, '0.name': '小张三'})
// -> users.0.age = 23
// -> users.0.name = 小张三
// {
//     name: '小张三',
//     age: 23,
//     gender: 'male',
//     hobby: ['羽毛球', '足球'],
//     work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//     address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
// }

msetx(users, [{'0.age': 23, '0.name': '小张三'}])
// -> users.0.age = 23
// -> users.0.name = 小张三
// {
//     name: '小张三',
//     age: 23,
//     gender: 'male',
//     hobby: ['羽毛球', '足球'],
//     work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//     address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
// }

msetx(users, [{'0.age': 23}, {'0.name': '小张三'}])
// -> users.0.age = 23
// -> users.0.name = 小张三
// {
//     name: '小张三',
//     age: 23,
//     gender: 'male',
//     hobby: ['羽毛球', '足球'],
//     work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//     address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
// }

msetx(users, [['0.age', 23], ['0.name', '小张三']])
// -> users.0.age = 23
// -> users.0.name = 小张三
// {
//     name: '小张三',
//     age: 23,
//     gender: 'male',
//     hobby: ['羽毛球', '足球'],
//     work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//     address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
// }
```

## 通配符

```ts
msetx(users, [
    [
        '*.resume',
        (item) => {
            const { get, parent, cash, $0 } = item;
            // 配置PropPath获取
            const name = get(`${cash.at(-2)}.name`);
            // 从 parent 中取值
            const { age, gender } = parent;
            return `${name} (${age}岁，${gender}), 喜欢${$0.hobby}`;
        }
    ]
]);

// -> 0.resume: 张三 (18岁，男), 喜欢游泳
// -> 1.resume: 李四 (20岁，female), 喜欢电竞,电影
// -> 2.resume: 王五 (22岁，male), 喜欢旅行,吃
// [
//     {
//         name: '张三',
//         age: 18,
//         gender: 'male',
//         hobby: ['羽毛球', '足球'],
//         work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//         address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } },
//         resume: '张三 (18岁，male), 喜欢羽毛球,足球'
//     },
//     {
//         name: '李四',
//         age: 20,
//         gender: 'female',
//         hobby: ['电竞', '电影'],
//         address: { 'city.name': '上海市', province: '上海', area: { info: '黄浦区', postcode: '20001' } },
//         resume: '李四 (20岁，female), 喜欢电竞,电影'
//     },
//     {
//         name: '王五',
//         age: 22,
//         gender: 'male',
//         hobby: ['旅行', '吃'],
//         address: { 'city.name': '广州市', province: '广东', area: { info: '越秀区', postcode: '30001' } },
//         resume: '王五 (22岁，male), 喜欢旅行,吃'
//     }
// ]
```

配合 `get`,`$0...` 等属性，灵活配置使用

```ts
msetx(users, [
    [
        '**.resume',
        (item) => {
            const { get, current, $0 } = item;
            // 配置PropPath获取
            const name = get(`${current.cash.at(-2)}.name`);
            // 从 parent 中取值
            const { age, gender } = current.parent;
            return `${name} (${age}岁，${gender}), 喜欢${$0?.hobby}`;
        }
    ]
]);

// -> 没有变动
```

在模糊通配符`**`模式下，自由匹配到字段，才会被写入数据


```ts
msetx(users, [['**.info', '模糊通配符**修改']]);
// -> 0.work.[2022-2023].info = '模糊通配符**修改'
// -> 0.address.area.info = '模糊通配符**修改'
// -> 1.work.[2022-2023].info = '模糊通配符**修改'
// -> 1.address.area.info = '模糊通配符**修改'
// -> 2.work.[2022-2023].info = '模糊通配符**修改'
// -> 2.address.area.info = '模糊通配符**修改'
//
// [
//     {
//         name: '张三',
//         age: 18,
//         gender: 'male',
//         hobby: ['羽毛球', '足球'],
//         work: { '2022-2023': { info: '模糊通配符**修改', salary: 10000 } },
//         address: { 'city.name': '北京市', province: '北京', area: { info: '模糊通配符**修改', postcode: '10001' } }
//     },
//     {
//         name: '李四',
//         age: 20,
//         gender: 'female',
//         hobby: ['电竞', '电影'],
//         address: { 'city.name': '上海市', province: '上海', area: { info: '模糊通配符**修改', postcode: '20001' } }
//     },
//     {
//         name: '王五',
//         age: 22,
//         gender: 'male',
//         hobby: ['旅行', '吃'],
//         address: { 'city.name': '广州市', province: '广东', area: { info: '模糊通配符**修改', postcode: '30001' } }
//     }
// ]
```