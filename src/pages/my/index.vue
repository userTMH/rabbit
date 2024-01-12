<template>
  <view class="my">
    <view class="top">
      <view class="top-text">
        <view v-if="stores.token" class="text-left" @click="individual">
          <img class="left-img" :src="stores.result?.avatar" alt="">
          <view class="left-tex">
            <view>{{ stores.result?.nickname }}</view>
            <view class="tex-botton">更新头像昵称</view>
          </view>
        </view>
        <view v-else class="text-left">
          <view class="left-img"></view>
          <view class="left-tex" @click="login">
            <view>未登录</view>
            <view class="tex-botton">点击登录账号</view>
          </view>
        </view>
        <view class="text-right">设置</view>
      </view>
    </view>
    <view class="conents">
      <view class="conents-top">
        <view class="top-top">
          <view>我的订单</view>
          <view class="top-right">查看全部订单></view>
        </view>
        <view class="top-botton">
          <view>
            <view>待付款</view>
          </view>
          <view>
            <view>待发货</view>
          </view>
          <view>
            <view>待收货</view>
          </view>
          <view>
            <view>待评价</view>
          </view>
        </view>
      </view>
      <scroll-view class="scroll-view" scroll-y :refresher-triggered="scrollinto" refresher-enabled
        @refresherrefresh="scrollintoview" @scrolltolower="onScrollToLower">
        <Guess :guessList="guessList"></Guess>
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { goods } from '@/api/home'
import Guess from '@/components/guess/index.vue'
import type { Item } from '@/api/type/homeType'
import { onLoad } from '@dcloudio/uni-app'
import { userUserStore } from '@/stores/user'

const stores = userUserStore()
//登录跳转事件
const login = () => {
  uni.navigateTo({
    url: '/subpkg_my/login/index',
  })
}
//个人信息跳转事件
const individual = () => {
  uni.navigateTo({
    url: '/subpkg_my/individual/index',
  })
}

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
    // if (res.code != 1) {
    //   uni.utile.toast('获取列表失败，请重试！')
    // }
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
  getGuess()
})
</script>

<style lang="scss" scoped>
.my {
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f8;
}

.top {
  width: 100%;
  height: 200px;
  background-image: url(../../static/images/center_bg.png);
  background-size: 100% 100%;
  position: relative;

  .top-text {
    width: 90%;
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: #fff;

    .text-left {
      display: flex;

      .left-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #f8f8f8;
      }

      .left-tex {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .tex-botton {
          margin-top: 5px;
          font-size: 12px;
        }
      }
    }
  }
}

.conents {
  position: relative;
  top: -90px;
  padding: 10px;

  .conents-top {
    width: 310px;
    height: 80px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;

    .top-top {
      display: flex;
      justify-content: space-between;
      align-content: center;

      .top-right {
        color: #ccc;
      }
    }

    .top-botton {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

.scroll-view {
  height: calc(100vh - 241px);
}
</style>
