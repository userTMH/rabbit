<template>
  <view class="hot">
    <view class="hot-text" @click="prefer(index)" v-for="(item, index) in hotList" :key="index">
      <view class="text-top">
        <view>{{ item.title }}</view>
        <view class="top-right">{{ item.alt }}</view>
      </view>
      <view class="text-botton">
        <view class="botton-tex" v-for="(e, index) in item.pictures" :key="index">
          <img :src="e" alt="" style="width: 100%;height: 100%;">
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { HResult } from '@/api/type/homeType';
import { ref } from 'vue';

defineProps<{ hotList: HResult[] }>();

const prefer = (id: number) => {
  uni.navigateTo({
    url: `/subpkg_home/prefer/index?id=${id}`,
  })
}


</script>

<style lang="scss" scoped>
.hot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;

  .hot-text {
    width: 156px;
    height: 127px;
    padding: 10px;
    margin-top: 3px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .text-top {
      display: flex;
      align-items: flex-end;

      .top-right {
        color: #7f7f7f;
        font-size: 12px;
        margin-left: 10px;
      }
    }

    .text-botton {
      height: 90px;
      display: flex;
      justify-content: space-between;

      .botton-tex {
        width: 48%;
      }
    }
  }
}
</style>
