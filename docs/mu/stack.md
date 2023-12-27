---
toc: content
order: 7
group: 
  title: 属性链方法
---

# stack

将对象属性集合转为一个对象；

可以将[tile](/mu/tile)后的属性链集合，还原成一个对象

## 基础语法

```ts
stack(propPaths: Record<string, any>)
```

## 示例数据

```ts
const props = {
    "grid.left": "left",
    "grid.right": 20,
    "grid.bottom": 20,
    "grid.width": "98%",
    "grid.containLabel": true,
    "grid.top": "6%",
    "legend.data.0.name": "2018",
    "legend.data.1.name": "2019",
    "legend.show": false,
    "tooltip.trigger": "axis",
    "yAxis.0": {},
    "series.0.name": "2018",
    "series.0.type": "line",
    "series.0.data.0.x": "北京",
    "series.0.data.0.z": "2018",
    "series.0.data.0.y": 80,
    "series.0.data.0.value": 80,
    "series.0.data.1.x": "上海",
    "series.0.data.1.z": "2018",
    "series.0.data.1.y": 150,
    "series.0.data.1.value": 150,
    "series.0.data.2.x": "广州",
    "series.0.data.2.z": "2018",
    "series.0.data.2.y": 120,
    "series.0.data.2.value": 120,
    "series.0.data.3.x": "四川",
    "series.0.data.3.z": "2018",
    "series.0.data.3.y": 190,
    "series.0.data.3.value": 190,
    "series.0.data.4.x": "湖北",
    "series.0.data.4.z": "2018",
    "series.0.data.4.y": 100,
    "series.0.data.4.value": 100,
    "series.0.data.5.x": "福建",
    "series.0.data.5.z": "2018",
    "series.0.data.5.y": 140,
    "series.0.data.5.value": 140,
    "series.0.data.6.x": "贵州",
    "series.0.data.6.z": "2018",
    "series.0.data.6.y": 60,
    "series.0.data.6.value": 60,
    "series.0.lineStyle.width": 20,
    "series.0.z": -1,
    "series.1.name": "2019",
    "series.1.type": "bar",
    "series.1.data.0.x": "北京",
    "series.1.data.0.z": "2019",
    "series.1.data.0.y": 820,
    "series.1.data.0.value": 820,
    "series.1.data.1.x": "上海",
    "series.1.data.1.z": "2019",
    "series.1.data.1.y": 1150,
    "series.1.data.1.value": 1150,
    "series.1.data.2.x": "广州",
    "series.1.data.2.z": "2019",
    "series.1.data.2.y": 1230,
    "series.1.data.2.value": 1230,
    "series.1.data.3.x": "四川",
    "series.1.data.3.z": "2019",
    "series.1.data.3.y": 1920,
    "series.1.data.3.value": 1920,
    "series.1.data.4.x": "湖北",
    "series.1.data.4.z": "2019",
    "series.1.data.4.y": 1200,
    "series.1.data.4.value": 1200,
    "series.1.data.5.x": "福建",
    "series.1.data.5.z": "2019",
    "series.1.data.5.y": 640,
    "series.1.data.5.value": 640,
    "series.1.data.6.x": "贵州",
    "series.1.data.6.z": "2019",
    "series.1.data.6.y": 760,
    "series.1.data.6.value": 760,
    "series.1.barWidth": 40,
    "xAxis.0.type": "category",
    "xAxis.0.boundaryGap": true,
    "xAxis.0.data.0.value": "北京",
    "xAxis.0.data.1.value": "上海",
    "xAxis.0.data.2.value": "广州",
    "xAxis.0.data.3.value": "四川",
    "xAxis.0.data.4.value": "湖北",
    "xAxis.0.data.5.value": "福建",
    "xAxis.0.data.6.value": "贵州",
    "title.text": "图表测试"
}
```

## 基本用法

```ts
stack(propPaths)
// {
//     grid: {
//         left: 'left',
//         right: 20,
//         bottom: 20,
//         width: '98%',
//         containLabel: true,
//         top: '6%'
//     },
//     legend: {
//         data: [{ name: '2018' }, { name: '2019' }],
//         show: false
//     },
//     tooltip: {
//         trigger: 'axis'
//     },
//     yAxis: [{}],
//     series: [
//         {
//             name: '2018',
//             type: 'line',
//             data: [
//                 { x: '北京', z: '2018', y: 80, value: 80 },
//                 { x: '上海', z: '2018', y: 150, value: 150 },
//                 { x: '广州', z: '2018', y: 120, value: 120 },
//                 { x: '四川', z: '2018', y: 190, value: 190 },
//                 { x: '湖北', z: '2018', y: 100, value: 100 },
//                 { x: '福建', z: '2018', y: 140, value: 140 },
//                 { x: '贵州', z: '2018', y: 60, value: 60 }
//             ],
//             lineStyle: { width: 20 },
//             z: -1
//         },
//         {
//             name: '2019',
//             type: 'bar',
//             data: [
//                 { x: '北京', z: '2019', y: 820, value: 820 },
//                 { x: '上海', z: '2019', y: 1150, value: 1150 },
//                 { x: '广州', z: '2019', y: 1230, value: 1230 },
//                 { x: '四川', z: '2019', y: 1920, value: 1920 },
//                 { x: '湖北', z: '2019', y: 1200, value: 1200 },
//                 { x: '福建', z: '2019', y: 640, value: 640 },
//                 { x: '贵州', z: '2019', y: 760, value: 760 }
//             ],
//             barWidth: 40
//         }
//     ],
//     xAxis: [
//         {
//             type: 'category',
//             boundaryGap: true,
//             data: [
//                 { value: '北京' },
//                 { value: '上海' },
//                 { value: '广州' },
//                 { value: '四川' },
//                 { value: '湖北' },
//                 { value: '福建' },
//                 { value: '贵州' }
//             ]
//         }
//     ],
//     title: { text: '图表测试' }
// };
```

## 说明

`stack` 与 `tile` 是一组功能相对的方法，`stack` 用于堆叠对象，`tile` 用于平铺对象。

对象的平铺值可以使用stack进行”恢复“

```ts
const data = {...}
const data$ = stack(tile(data));
JSON.stringify(data) === JSON.stringify(data$)
```

又 stack 恢复的data值的JSON.stringify 与 原数据data的JSON.stringify的值是一样的；
可以说 `stack(tile(data))` 是最深层次的拷贝，即可以视为 `cloneDeep(data) = stack(tile(data))`，
但性能上略差
