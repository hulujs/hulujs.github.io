---
ttile: 注册中心
toc: content
order: 2
---

# 注册中心 Regc

注册中心类似Window的注册表，注册各模块的配置信息，方便各模块进行配置信息的获取。

## 注册服务

由 `Regc` 类提供注册服务的能力，可通过 `Regc.register` 方法注册服务。

```ts
import { Regc } from '@hulujs/msc';

Regc.register('HULU_RUYI_RESPONSE_INTERCEPTORS', () => {
    return (res) => {
        const {
            response: {
                data: { code, msg, data },
                status
            }
        } = res;
        handlerError(+code, msg, data);
        return Promise.reject(res);
    };
})
```

### 注册服务说明

```ts
Regc.register(regKey: string, fn: (prevValue: any) => any);
```

## 获取注册信息

```ts
import { Regc } from '@hulujs/msc';
Regc.get('HULU_RUYI_RESPONSE_INTERCEPTORS');
```

### RegKey 规则

hulu 内置部分注册表，以 `HULU_` 作为注册表前缀；

开发者也可以自定义注册，保证regKey唯一性即可；

### 注册表实现规则

注册信息实现原理通过单例实现，符合单例规则；

即在注册信息注册后，才可使用，注册信息后系统不会重新载入应用注册信息；
所以注册信息建议在beforeInit中注册

### 部分RegKey

| 注册表名 | 说明 |
| --- | --- |
| HULU_RUYI_RESPONSE_INTERCEPTORS | 响应拦截器 |
| HULU_RUYI_REQUEST_INTERCEPTORS | 请求拦截器 |
| HULU_NODATA | 无数据组件 |
| HULU_LOADING | 加载组件 |
| HULU_ECHARTS_COLORS | 图表颜色默认列表 |
| HULU_ECHARTS_THEME | 图表主题配置 |
