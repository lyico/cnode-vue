# cnode-vue

### 技术栈
```
基于vue2 + vue-router + ES6 + less + axios + vuex 重写PC版cnode社区,基于webpack打包
```
>查看[demo](https://chenbeta.github.io/cnode-view/)

### 安装
```
1.克隆项目：      git clone https://github.com/chenbeta/cnode-vue.git
2.安装依赖：      npm i (or yarn)
3.启动服务：      npm run dev (or yarn run dev)
4.发布代码：      npm run build (or yarn run build)
```

### 项目目录说明
```
.
|-- src                              // 源码目录
|   |-- api                          // API调用
|       |-- api.js                   // api调用与请求拦截
|   |-- components                   // 公共组件
|       |-- headerBox.vue            // 页面头部组件
|       |-- infoBox.vue              // 右侧展示组件
|       |-- listItemBox.vue          // 主题列表展示组件
|       |-- msgList.vue              // 消息展示组件
|       |-- pagination.vue           // 分页组件
|   |-- img                          // 公共图片
|   |-- router                       // 路由
|       |-- index.js                 // 路由配置和拦截
|   |-- style                        // 样式文件
|       |-- common.less              // 全局通用css文件
|       |-- markdown.css             // md显示样式
|   |-- util                         // 公共方法
|       |-- common.js                // 公共JS方法
|   |-- view                         // page
|       |-- articleDetails           // 详情页面
|       |-- index                    // 主页列表
|       |-- login                    // 登录页面
|       |-- msg                      // 消息页面
|       |-- newTopic                 // 创建新主题
|       |-- user                     // 用户详情页面
|   |-- vuex                         // vuex的状态管理
        |-- modules                  // 各种store模块
|       |-- store.js                 // 加载各种store模块
|       |-- types.js                 // 定义各种type
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- index.html                       // 页面模板
...
```