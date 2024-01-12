<template>
  <view class="Navigation" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="top">
      <view class="top-top">
        <img class="top-left" src="@/static//images/logo.png" alt="">
        <view>|</view>
        <view class="top-right">新鲜·亲民·快捷</view>
      </view>
      <view class="top-botton">
        <input class="input" type="text" placeholder-style="color: #fff;" placeholder="搜索商品">
        <uni-icons class="top-icon-left" type="search" color="#fff" size="18"></uni-icons>
        <uni-icons class="top-icon-right" type="scan" color="#fff" size="18"></uni-icons>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const { safeAreaInsets } = uni.getSystemInfoSync()
const props = defineProps();
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 65px;
  background-image: url(@/static//images//navigator_bg.png);
  padding: 10px;

  .top-top {
    display: flex;
    align-items: center;
    color: #fff;

    .top-left {
      width: 83px;
      height: 20px;
      padding-right: 10px;
    }

    .top-right {
      padding-left: 10px;
      font-size: 16px;
    }
  }

  .top-botton {
    width: 95%;
    margin-top: 10px;
    position: relative;

    .input {
      padding: 5px 25px;
      border-radius: 20px;
      background-color: #80e2d0;
    }

    .top-icon-left {
      position: absolute;
      top: 8px;
      left: 8px;
    }

    .top-icon-right {
      position: absolute;
      top: 8px;
      right: 8px;
    }
  }
}
</style>
