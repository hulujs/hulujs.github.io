---
toc: content
group: 
  title: 属性链方法
  order: 1
---

# mapping

对数据或数据集进行数据映射

## 基础语法

```ts
/**
 * mapping
 * 数据映射
 * @param data
 * @param mapper
 * @param type: mapping 以映射为主，映射项为几项，返回就为几项，无值不返回
 *      | replace 为替换模式，将当前符合条件的key更换为mapper提供的key
 */
const mapping = (data: DataRow | DataRow[], mapper: Mapper, type: MappingType = 'replace')
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
mapping(users, {
    '姓名': 'name',
    '地址': 'address.area.info',
})
// [{
//     name: '张三',
//     age: 18,
//     gender: 'male',
//     hobby: ['羽毛球', '足球'],
//     work: { '2022-2023': { info: '前端开发', salary: 10000 } },
//     address: { 'city.name': '北京市', province: '北京', area: { info: '东城区', postcode: '10001' } },
//     姓名: '张三',
//     地址: '东城区'
// },
// {
//     name: '李四',
//     age: 20,
//     gender: 'female',
//     hobby: ['电竞', '电影'],
//     address: { 'city.name': '上海市', province: '上海', area: { info: '黄浦区', postcode: '20001' } },
//     姓名: '李四',
//     地址: '黄浦区'
// },
// {
//     name: '王五',
//     age: 22,
//     gender: 'male',
//     hobby: ['旅行', '吃'],
//     address: { 'city.name': '广州市', province: '广东', area: { info: '越秀区', postcode: '30001' } },
//     姓名: '王五',
//     地址: '越秀区'
// }];


mapping(users, {
    '姓名': 'name',
    '地址': 'address.area.info',
}, 'mapping')
// [
//     {
//         "姓名": "张三",
//         "地址": "东城区"
//     },
//     {
//         "姓名": "李四",
//         "地址": "黄浦区"
//     },
//     {
//         "姓名": "王五",
//         "地址": "越秀区"
//     }
// ]
```

## 示例

```tsx
/**
 * compact: true 
 */
import React, { useState } from 'react';
import { Table, Segmented } from 'antd';
import { Met, MetLeft } from '@hulujs/met';
import { mapping, rid } from '@hulujs/mu';

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
export default function Demo() {
    
    const [dataSource, setDataSource] = useState(users);

    const getColumns = (dataSource) => {
      return Object.keys(dataSource[0]).map(key => {
        return {
          title: key,
          dataIndex: key,
          key: key,
          render: (text, record) => {
            return <span>{JSON.stringify(text, null, 2)}</span>
          }
        }
      })
    }

    const onChange = (type) => {
      if(type ==='source') return setDataSource(users);

      const dataSource = mapping(users, {
        '姓名': 'name',
        'address': 'address.area.info',
      }, type);

      setDataSource(dataSource);
    }

    return <>
      <MetLeft p={16}>
        MappingType: <Segmented options={['source', 'replace', 'mapping']} onChange={onChange} />
      </MetLeft>
      <Table dataSource={dataSource} columns={getColumns(dataSource)} pagination={false} />
    </>
}
```

## 注意

mapping 是针对DataRow的数据的，所以它所需要的属性链值 Row 与 DataRow 是一致的· 

```ts
mapping(users, {
    '姓名': 'name',
    '地址': 'address.area.info',
}, 'mapping')
// ->
// [
//     {
//         "姓名": "张三",
//         "地址": "东城区"
//     },
//     {
//         "姓名": "李四",
//         "地址": "黄浦区"
//     },
//     {
//         "姓名": "王五",
//         "地址": "越秀区"
//     }
// ]

mapping(users[0], {
    '姓名': 'name',
    '地址': 'address.area.info',
}, 'mapping')
// ->
// {
//   "姓名": "张三",
//   "地址": "东城区"
// }
```