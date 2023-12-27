import React from 'react';
import { MetEcharts, MetBox, Met } from '@hulujs/met';
import { mapping } from '@hulujs/mu';

const data = [
    { year: '2018', province: '北京', value: 80 },
    { year: '2018', province: '上海', value: 150 },
    { year: '2018', province: '广州', value: 120 },
    { year: '2018', province: '四川', value: 190 },
    { year: '2018', province: '湖北', value: 100 },
    { year: '2018', province: '福建', value: 140 },
    { year: '2018', province: '贵州', value: 60 },
    { year: '2019', province: '北京', value: 820 },
    { year: '2019', province: '上海', value: 1150 },
    { year: '2019', province: '广州', value: 1230 },
    { year: '2019', province: '四川', value: 1920 },
    { year: '2019', province: '湖北', value: 1200 },
    { year: '2019', province: '福建', value: 640 },
    { year: '2019', province: '贵州', value: 760 }
];

export default () => {
    return (
        <MetBox gap={16}>
            <Met>线形图</Met>
            <MetEcharts
                data={data}
                type={'line'}
                mappers={{ x: 'province', y: 'value', d: 'year' }}
                h={400}
                p={16}
                comment={'type 修改图表类型 -> line'}
            />
            <Met>饼图</Met>
            <MetEcharts
                data={data.filter(({ year }) => year === '2019')}
                type={'pie'}
                mappers={{ x: 'province', y: 'value', d: 'year' }}
                h={400}
                p={16}
                comment={'type 修改图表类型 -> pie'}
            />
            <Met>仪表盘</Met>
            <MetEcharts
                data={data.slice(0, 1)}
                type={'gauge'}
                mappers={{ x: 'province', y: 'value', d: 'year' }}
                h={400}
                p={16}
                comment={'type 修改图表类型 -> pie'}
            />
        </MetBox>
    );
};
