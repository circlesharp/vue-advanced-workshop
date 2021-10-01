# 与 plugin 相关的概念

## plugin

plugin 是一个函数，第一个参数是 Vue, 可选参数为 options

```js
function(Vue, options) {
  // plugin code
}
```

## Vue.mixin(options)

mixin 是可重复使用的代码片段， 可以混合到现有组件中的组件选项
是全局的，会应用到每个组件

如果使用 plugin 包装之后，会有很多好处：

1. 不会重复设置
2. 风格更加统一

## $options

各种 options 合并之后，成为一组件的最终 options 对象
