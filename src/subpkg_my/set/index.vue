<template>
  <view class="set">
    <view class="box" @click="addr">
      <view>我的收获地址</view>
      <view>></view>
    </view>
    <view class="box">
      <view>关于小兔鲜儿</view>
      <view>></view>
    </view>
    <view>
      <button>退出登录</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
const addr = () => {
  uni.navigateTo({
    url: '/subpkg_my/address/index',
  })
}
</script>

<style lang="scss" scoped>
.set {
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 10px;

  .box {
    width: 90%;
    padding: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
