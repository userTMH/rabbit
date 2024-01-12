<template>
  <view class="classify">
    <view class="box" v-for="(item, index) in texList" :key="index">
      <img :src="item.icon" alt="" style="width: 100%;height: 70%;">
      <view>{{ item.name }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { CResult } from '@/api/type/homeType'

defineProps<{ texList: CResult[] }>();
</script>

<style lang="scss" scoped>
.classify {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .box {
    width: 13%;
    height: 66px;
    padding: 10px;
    text-align: center;
  }
}
</style>
