---
toc: content
group: 
  title: 属性链方法
---

# mset

根据对象属性链写入值

## 语法

```ts
mset(obj: any, path: PropPath, value: any)
```

## 示例数据

```ts
const user = {
    name: '张三',
    age: 18,
    gender: 'male',
    hobby: ['羽毛球', '足球'],
    work: { '2022-2023': { info: '前端开发', salary: 10000 } },
    address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
}
```

## 修改存在值

```ts
mset(user, 'age', 20)
// user.age = 20
// -> {
//    name: '张三',
//    age: 20,
//    gender: 'male',
//    hobby: ['羽毛球', '足球'],
//    work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//    address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
//}

mset(user, 'hobby.1', '乒乓球')
// user.hobby = ['羽毛球', '乒乓球']
// -> {
//    name: '张三',
//    age: 20,
//    gender: 'male',
//    hobby: ['羽毛球', '乒乓球'],
//    work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//    address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
//}


mset(user, ['hobby', 2], '乒乓球')
// user.hobby = ['羽毛球', '足球', '乒乓球']
// -> {
//    name: '张三',
//    age: 20,
//    gender: 'male',
//    hobby: ['羽毛球', '足球', '乒乓球'],
//    work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//    address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
//}
```

## 不存在的值

若该属性链在对象不存在值，则写入新的值

写入值的规则：
- 若属性名为`字符串`且所在层级为对象，则该对象生成一个新的属性
- 若连续属性不存在, 若下级属性名为`数字`，则下级的值新建为`数组`
- 若连续属性不存在, 若下级属性名为`名称`，则下级的值新建为`对象`

```ts
mset(user, 'school', '厦门大学')
// user.school = '厦门大学'
// -> {
//    name: '张三',
//    age: 20,
//    gender: 'male',
//    hobby: ['羽毛球', '足球', '乒乓球'],
//    school: '厦门大学',
//    work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//    address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
// }

mset(user, 'school.name', '厦门大学')
// user.school = { name: '厦门大学' }
// -> {
//    name: '张三',
//    age: 20,
//    gender: 'male',
//    hobby: ['羽毛球', '足球'],
//    school: { name: '厦门大学' },
//    work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//    address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
// }

mset(user, 'school.2', '厦门大学')
// user.school = [empty, empty, '厦门大学']
// -> {
//    name: '张三',
//    age: 20,
//    gender: 'male',
//    hobby: ['羽毛球', '足球'],
//    school: [empty, empty, '厦门大学'],
//    work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//    address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
// }
```

### 函数写入

```ts
mset(user, 'getName', () => void 0)
// user.getName = () => void 0
// -> {
//    name: '张三',
//    getName = () => void 0,
//    age: 20,
//    gender: 'male',
//    hobby: ['羽毛球', '足球'],
//    school: [empty, empty, '厦门大学'],
//    work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//    address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
// }
```

## 基于泛型通配符写入

```ts
mset(user, 'hobby.*', '乒乓球')
// user.hobby = [乒乓球, 乒乓球]
// -> {
//    name: '张三',
//    age: 20,
//    gender: 'male',
//    hobby: [乒乓球, 乒乓球],
//    work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//    address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } }
// }

mset(user, '**.info', 'Modify Info')
// user.work.['2022-2023'].info = 'Modify Info'
// user.address.area.info = 'Modify Info'
// -> {
//     name: '张三',
//     age: 18,
//     gender: 'male',
//     hobby: ['羽毛球', '足球'],
//     work: { '2022-2023': { info: 'Modify Info', salary: 10000 } },
//     address: { 'city.name': '北京市', province: '北京', area: { info: 'Modify Info', postcode: '10001' } }
// }
```

## 高级用法

属性对象修改值的，基础用法只能覆盖原值，而不能对原值进行修改，而高级用法可以对原值进行修改。

### 嵌套函数模式

```ts
mset(user, 'hobby.1', ({ value }) => `${value}(初级)`, 'nest')
// user.hobby = ['羽毛球', '足球(初级)']
// -> {
//     name: '张三',
//     age: 18,
//     gender: 'male',
//     hobby: ['羽毛球', '足球(初级)'],
//     work: { '2022-2023': { info: 'Modify Info', salary: 10000 } },
//     address: { 'city.name': '北京市', province: '北京', area: { info: 'Modify Info', postcode: '10001' } }
// }

mset(user, 'hobby.*', ({ value }) => `${value}(初级)`, 'nest')
// user.hobby = ['羽毛球(初级)', '足球(初级)']
// -> {
//     name: '张三',
//     age: 18,
//     gender: 'male',
//     hobby: ['羽毛球(初级)', '足球(初级)'],
//     work: { '2022-2023': { info: 'Modify Info', salary: 10000 } },
//     address: { 'city.name': '北京市', province: '北京', area: { info: 'Modify Info', postcode: '10001' } }
// }
```

### 参数说明

```ts
mset(obj: object, path: string, value: any, valueMode: SetValueModel): object;
```

***SetValueModel***: `normal` | `nest`;
- `nest`: 嵌套模式

当`valueModel='nest'`时，value 使用嵌套模式，否则 value 为函数的时候，不会自动执行

`valueModel='nest'` 的函数签名为：

```ts
function setValue(params: SetNestValueParams );

interface SetNestValueParams {
  // 属性链匹配值，若无匹配值，则为 undefined
  value: any;
  current: {
    // 当前值
    options: any;
    // 当前属性链 Cash
    cash: PropPaths;
    // 最后一个字段名
    inx: string | number;
  }
  source: {
    // 源对象
    options: Record<string, any> | Record<string, any>[]
    // 源头 Cash
    cash: PropPaths;
    // 源path
    path: PathProp;
    // 对应通配符'*'所在位置的值
    $0 ... $n
  }
  // 取值函数, 基于对象源
  get: (path: PathProp) => any;
}
```

### get 的用法

get 是 `mget` 的用法，它基于对象源，其参数只有一个属性链

```ts
function get(path: PathProp);
```

#### 示例

```ts
mset(
      user,
      'address.area.full',
      (item) => {
          const { value, get, current } = item;
          return `${get('address.province')} ${current.parent.info}`;
      },
      'nest'
  );

// user.address.area.full = '北京 东城区'
// {
//     "name": "张三",
//     "age": 18,
//     "gender": "male",
//     "hobby": [
//         "羽毛球",
//         "足球"
//     ],
//     "work": {
//         "2022-2023": {
//             "info": "前端开发",
//             "salary": 10000
//         }
//     },
//     "address": {
//         "city.name": "北京市",
//         "province": "北京",
//         "area": {
//             "info": "东城区",
//             "postcode": "10001",
//             "full": "北京 东城区"
//         }
//     }
// }
```

## 注意

### 谨慎使用模糊通配符`**` 

mset会全部覆盖模糊匹配到的字段

```ts
mset(user, 'address.**', 11111, 'nest');
// -> {
//     name: '张三',
//     age: 18,
//     gender: 'male',
//     hobby: ['羽毛球', '足球'],
//     work: {
//         '2022-2023': {
//             info: '前端开发',
//             salary: 10000
//         }
//     },
//     address: {
//         'city.name': 11111,
//         province: 11111,
//         area: { info: 11111, postcode: 11111 }
//     }
// }
```

### 性能
mset 性能比 lodash.set 略差，不建议用在在大数据上使用
