<template>
  <view class="home">
    <Navigation></Navigation>
    <scroll-view class="scroll-view" scroll-y :refresher-triggered="scrollinto" refresher-enabled
      @refresherrefresh="scrollintoview" @scrolltolower="onScrollToLower">
      <Carousel :Carou="Carou"></Carousel>
      <Classify :texList="texList"></Classify>
      <Hot :hotList="hotList"></Hot>
      <Guess :guessList="guessList"></Guess>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app';
import Navigation from './components/Navigation/index.vue'
import Carousel from '@/components/carousel/index.vue'
import Classify from './components/classify/index.vue'
import Hot from './components/hot/index.vue'
import Guess from '@/components/guess/index.vue'
import { ref } from 'vue';
import { home } from '@/api/home'
import type { Result } from '@/api/type/homeType'
import { category } from '@/api/home'
import type { CResult } from '@/api/type/homeType'
import { hot } from '@/api/home'
import type { HResult } from '@/api/type/homeType';
import type { Item } from '@/api/type/homeType';
import { goods } from '@/api/home'


//#region 轮番图
//轮播图传入数据
const distributionSite = ref<number>(1)
//轮播图数据
const Carou = ref<Result[]>([])
const getHome = async () => {
  try {
    const res = await home({
      distributionSite: distributionSite.value
    })
    // console.log(res);
    if (res.code == 1) {
      Carou.value = res.result
    }
  } catch (error) {
    console.log(error);
  }
}
//#endregion


//#region 分类
//分类数据
const texList = ref<CResult[]>([])
//获取分类数据
const getcategory = async () => {
  try {
    const res = await category()
    // console.log(res);
    if (res.code == 1) {
      texList.value = res.result
    }
  } catch (error) {
    console.log(error);
  }
}
//#endregion


//#region 热门数据
//热门数据
const hotList = ref<HResult[]>([])
//获取热门数据
const getHot = async () => {
  try {
    const res = await hot()
    // console.log(res);
    if (res.code == 1) {
      hotList.value = res.result
    }
  } catch (error) {
    console.log(error);
  }
}
//#endregion


//#region 猜你喜欢
//页码
const page = ref<number>(1)
//页大小
const pageSize = ref<number>(10)
//数据
const guessList = ref<Item[]>([])
//请求数据
const getGuess = async () => {
  try {
    const res = await goods({
      page: page.value,
      pageSize: pageSize.value
    })
    // console.log(res);
    if (res.code != 1) {
      uni.utile.toast('获取列表失败，请重试！')
    }
    if (res.result.page == 1) {
      guessList.value = []
    }
    guessList.value = [...guessList.value || [], ...res.result.items]
    page.value++
    if (page.value > res.result.pages) {
      hasMore.value = false
    }
  } catch (error) {
    console.log(error);
  }
}
//#endregion


//#region 事件
//下拉刷新绑定
const scrollinto = ref<boolean>(false)
//上拉加载状态
const hasMore = ref<boolean>(true)

//下拉刷新事件
const scrollintoview = async () => {
  scrollinto.value = true
  page.value = 1
  await getHome()
  await getcategory()
  await getHot()
  await getGuess()
  scrollinto.value = false
}
//上拉加载
const onScrollToLower = () => {
  if (!hasMore.value) {
    return
  }
  getGuess()
}
//#endregion

onLoad((options) => {
  getHome()
  getcategory()
  getHot()
  getGuess()
})
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-color: #f7f7f7;

  .scroll-view {
    height: calc(100vh - 90px);
  }
}
</style>
