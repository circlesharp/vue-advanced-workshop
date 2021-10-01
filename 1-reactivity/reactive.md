# 响应式的概念声明

## 命令式的

```js
let a = 3;
let b = a * 10;

a = 4;
b = a * 10;
```

## 抽象成声明式 onAChange

```js
onAChange(() => {
  b = a * 10;
});
```

## onAChange 应用到 web 的形式

```html
<span class="cell b1"></span>
```

```js
onAChange(() => {
  document.querySelector('.cell.b1');
  textContent = state.a * 10;
});
```

## DOM 操作 => 模板语法

```html
<span class="cell b1">{{ state.a * 10 }}</span>
```

```js
onStateChange(() => {
  view = render(state);
});
```

## 在 React 的实现原理: 用特定的函数来变更状态

```js
let update;
const onStateChange = (_update) => {
  update = _update;
};

const setState = (newState) => {
  state = newState;
  update();
};
```

## React 的模板渲染

```js
onStateChanged(() => {
  view = render(state);
});

setState({ a: 5 });
```

## Vue 的模板渲染: 不是调用函数，而是将对象改变为响应式对象

essentially a basic form of dependency tracking

```js
onStateChanged(() => {
  view = render(state);
});

state.a = 5;
```
