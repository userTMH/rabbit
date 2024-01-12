<template>
  <view class="carousel">
    <view>
      <swiper style="height: 120px;" class="swiper" circular indicator-color="true">
        <swiper-item v-for="(item, index) in Carou" :key="index">
          <img :src="item.imgUrl" alt="" style="width: 100%;height: 100%;">
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { ApifoxModel, Result } from '@/api/type/homeType'


defineProps<{ Carou: Result[] }>();

</script>

<style lang="scss" scoped></style>
