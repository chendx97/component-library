<script setup lang="ts">
</script>

<template>
  <h1>xxx</h1>
  <my-demo />
  <my-card imgSrc="test.jpeg" summary="这里是卡片的摘要" />
  <my-card imgSrc="test.jpeg" summary="这里是卡片的摘要">
    <template #footer>footer</template>
  </my-card>
  <my-card
    :width="370"
    imgSrc="test.jpeg"
    :imgHeight="90"
    summary="这里是卡片的摘要"
  />
</template>

<style scoped>
</style>
