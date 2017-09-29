# vuejs-boilerplate
vuejs boilerplate for  vue2.x and webpack 3.x

 > 该脚手架是自己team在一年时间里实践总结出来的，实际情况可能比这个还复杂，还要考虑hybrid和bridge这种情况，这里抽象出来几个常用功能，各位自取

## 一、脚手架新特征

1、支持多个lib、css和业务文件的分离

> 不采用commonChunk插件，单独为lib和css生成一个配置文件。
> dev环境下自动注入页面，保证css的热更新起作用。其他环境下
> 单独打包手动注入css到view

2、本地server + hot update + data mock

> 本地启动server利用热更新插件来实现无刷新开发（不是新东西）
> 本地通过简单配置可以实现数据的mock，详见代码。
> 最主要的也可以来proxy

3、支持数据写入localstorage

> 这里采用了ele的bowl库实现js写入localstorage，上线效果domready时间减少了23%（1.97->1.51）


## 二、目录结构



