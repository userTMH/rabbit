<template>
  <view class="individual">
    <view>

    </view>
    <view class="top">
      <img :src="stores.result!.avatar" alt="" style="border-radius: 50%;width: 80px;height: 80px;">
      <view>点击修改头像</view>
    </view>
    <view></view>
  </view>
</template>

<script lang="ts" setup>
import { userUserStore } from '@/stores/user'

const stores = userUserStore()
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 200px;
  text-align: center;
  background-image: url(../../static/images/order_bg.png);
}
</style>
