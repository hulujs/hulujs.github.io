---
order: -1
toc: content
group: 
  title: Montage 可视化
nav:
  title: 可视化
  order: 5
---

# 介绍

Montage, 是hulu编程可视化。

## 介绍

编程可视化是hulu v5提倡的一种开发方式，将编码转换成可视化的形式，通过可视化工具再生成代码，从而提高开发效率。

## 功能

* [点击跳转到组件](/montage/click-to-component)
* 按模板生成代码
* 路由文件的可视化配置
* mock 接口可视化配置
* hulu config 参数可视化配置
* complier config 参数可视化配置
* 第三方库文档列表，快速跳转
* 第三方库文档内容查询，并快速跳转
* 物料市场
* Git 信息可视化 / 与issue相连
* Todo 本人计划
* Report 汇报 (团队汇报)
* Hulu Repo 项目管理
* 包升级/依赖管理
* 实时控制台 console
* 数据状态变换图
* 正则管理器/正则市场
* 网页开发小工具()
* 基于GPT代码优化提醒
* 基于GPT代码备注
* 基于GPT Test Case 
* ...

## 服务

Hulu 会有个基于NodeJs后台服务，服务于Montage的各个功能; 
该服务默认在develpment模式下运行; 

## 命令

CLI命令 `hulu montage` 服务用来启动montage服务, 
通常在 `hulu dev` 时，会自动启动montage服务
具体详情查看 [hulu montage](/hulu/montage)
