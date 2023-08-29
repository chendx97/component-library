<script setup lang="ts">
defineProps({
  // 卡片宽度
  width: {
    type: Number,
    default: 0,
  },
  // 卡片上的图片地址
  imgSrc: {
    type: String,
    default: "",
  },
  // 图片高度
  imgHeight: {
    type: Number,
    default: 0,
  },
  // 概要
  summary: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="my-card" :style="width ? { width: width + 'px' } : {}">
    <div
      class="my-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div class="my-card-summary">
      <span v-if="summary">{{ summary }}</span>
      <slot v-else></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
</style>
