<template>
  <view class="prefer">
    <view class="top">
      <img class="top-img" :src="preferList?.bannerPicture" alt="" style="width: 100%; height: 100%;">
    </view>

    <view class="text">
      <view class="text-top">
        <view class="top-tex" @click="tab(index, item.id)" v-for="(item, index) in preferList?.subTypes" :key="index">
          <view>{{ item.title }}</view>
          <view v-show="act == index" class="tex-botton"></view>
        </view>
      </view>
      <scroll-view class="scroll-view" scroll-y :refresher-triggered="scrollinto" refresher-enabled
        @refresherrefresh="scrollintoview" @scrolltolower="onScrollToLower">
        <view class="text-botton">
          <view class="botton-tex" @click="detail(item.id)" v-for="(item, index) in items" :key="index">
            <img :src="item.picture" alt="" style="width: 100%;height: 65%;">
            <view class="tex-botton">
              <view>{{ item.name }}</view>
              <view class="botton-botton">￥{{ item.price }}</view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { preference } from '@/api/home';
import type { GoodsItem, SubType, pItem, pResult } from '@/api/type/homeType';
import { onLoad, onReady } from '@dcloudio/uni-app';
import { ref } from 'vue';
//#region
//页码
const page = ref<number>(1)
//数量
const pageSize = ref<number>(10)
const subType = ref<string>("")
//页面数据
const preferList = ref<pResult>()
//列表
const act = ref(0)
const subTypes = ref<SubType[]>([])
const goodsItems = ref<GoodsItem>()
const items = ref<pItem[]>([])
//url
const http = [
  {
    id: 0,
    url: "/hot/preference"
  },
  {
    id: 1,
    url: "/hot/inVogue"
  },
  {
    id: 2,
    url: "/hot/oneStop"
  },
  {
    id: 3,
    url: "/hot/new"
  }
]
const id = ref<number>()
let currHot = http.find((e) => e.id == id.value)

//请求页面数据
const getPrefer = async () => {
  try {
    const res = await preference(currHot!.url, {
      page: page.value,
      pageSize: pageSize.value
    })
    // console.log(res);
    preferList.value = res.result
    subTypes.value = res.result.subTypes
    goodsItems.value = subTypes.value[act.value].goodsItems
    items.value = goodsItems.value.items
    // if (res.code != 1) {
    //   uni.utile.toast('获取列表失败，请重试！')
    // }
    if (goodsItems.value.page == 1) {
      items.value = []
    }
    items.value = [...items.value || [], ...goodsItems.value.items]
    page.value++
    if (page.value > goodsItems.value.pages) {
      hasMore.value = false
    }

    uni.setNavigationBarTitle({
      title: preferList.value?.title,
    })

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
  await getPrefer()
  scrollinto.value = false
}
//上拉加载
const onScrollToLower = () => {
  if (!hasMore.value) {
    return
  }
  getPrefer()
}
//#endregion


//#region 详情事件
const detail = (id: string) => {
  uni.navigateTo({
    url: `/subpkg_home/detail/index?id=${id}`,
  })
}
//#endregion

const tab = (index: number, id: any) => {
  act.value = index
  subType.value = id
  getPrefer()
}


onLoad((options) => {
  id.value = options?.id
  currHot = http.find((e) => e.id == id.value)
  getPrefer()
})
</script>

<style lang="scss" scoped>
.prefer {
  height: 100vh;
  background-color: #f4f4f4;
  position: relative;

  .top {
    width: 95%;
    height: 110px;
    margin: auto;

    .top-img {
      border-radius: 0px 0px 20px 20px;
    }
  }

  .text {
    position: absolute;
    margin-top: -30px;
    width: 90%;
    left: 20px;
    top: 120px;

    .text-top {
      height: 50px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      .top-tex {
        width: 50%;
        text-align: center;
        position: relative;

        .tex-botton {
          width: 25px;
          height: 3px;
          background-color: #3bc0a4;
          border-radius: 5px;
          position: absolute;
          left: 43%;
          top: 25px;
        }
      }
    }

    .scroll-view {
      height: calc(100vh - 142px);

      .text-botton {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .botton-tex {
          width: 140px;
          height: 200px;
          padding: 10px;
          margin: 10px 0px;
          background-color: #fff;
          border-radius: 10px;

          .tex-botton {
            height: 35%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 14px;

            .botton-botton {
              color: red;
            }
          }
        }
      }
    }


  }
}
</style>
