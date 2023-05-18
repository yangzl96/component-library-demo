# 按钮

这是一个按钮组件

:::demo

```vue
<template>
  <jinke-button @click="handleClick">普通按钮</jinke-button>
  <jinke-button ref="button" type="success">成功按钮</jinke-button>
  <jinke-button type="danger">危险按钮</jinke-button>
  <jinke-button type="info">信息按钮</jinke-button>
  <jinke-button type="primary">主题按钮</jinke-button>
  <jinke-button type="primary" rounded>主题按钮</jinke-button>
  <jinke-button type="primary" @iconClick="iconClick">
    图标按钮
    <template #icon="{ type }">
      <span>{{ type }}</span>
      <plus-outlined />
    </template>
  </jinke-button>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const button = ref(null);
onMounted(() => {
  console.log(button.value);
  console.log(button.value.test());
});
const handleClick = e => {
  console.log(e);
};
const iconClick = e => {
  console.log("iconClick: ", e);
};
</script>
```

:::
