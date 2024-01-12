<template>
  <div class="classify">
    <view class="top">
      <view class="top-sou">
        <input class="input" type="text" placeholder-style="color: #94919b;" placeholder="女鞋">
        <uni-icons class="top-icon-left" type="search" color="#94919b" size="18"></uni-icons>
      </view>
    </view>
    <view class="conent">
      <view class="conent-left">
        <view @click="tab(index)" :class="{ active: act == index }" class="left-text" v-for="(item, index) in leftList"
          :key="index">
          {{ item.name }}
        </view>
      </view>
      <view class="conent-right">
        <scroll-view class="scroll-view" scroll-y>
          <Carousel :Carou="Carou"></Carousel>
          <view class="view" v-for="(item, index) in conentList" :key="index">
            <view class="view-title" style="display: flex;justify-content: space-between;">
              <view>{{ item.name }}</view>
              <view class="title-right">全部></view>
            </view>
            <view class="title-text">
              <view class="text" v-for="(e, index) in item.goods" :key="index">
                <img class="text-img" :src="e.picture" alt="" style="width: 100%;height: 65%;">
                <view class="text-tex">
                  <view class="tex-top">{{ e.name }}</view>
                  <view class="tex-botton">￥{{ e.price }}</view>
                </view>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </div>
</template>

<script lang="ts" setup>
import { classify } from '@/api/classify'
import type { Child, Good, cResult } from '@/api/type/classifyType';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import Carousel from '@/components/carousel/index.vue'
import type { Result } from '@/api/type/homeType';
import { home } from '@/api/home';

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

//#region
const act = ref(0)
//侧边栏数据
const leftList = ref<cResult[]>([])
//标题
const conentList = ref<Child[]>()
//标题数据
const goods = ref<Good>()
//获取数据
const getConent = async () => {
  try {
    const res = await classify()
    console.log(res);
    leftList.value = res.result
    conentList.value = leftList.value[act.value].children
  } catch (error) {
    console.log(error);
  }
}
//#endregion


//Tab
const tab = (index: number) => {
  act.value = index
  getConent()
}

onLoad((options) => {
  getConent()
  getHome()
})

</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: center;

  .top-sou {
    width: 95%;
    margin-top: 10px;
    position: relative;

    .input {
      padding: 5px 30px;
      border-radius: 20px;
      background-color: #f3f4f4;
    }

    .top-icon-left {
      position: absolute;
      top: 7px;
      left: 8px;
    }

  }
}

.conent {
  height: calc(100vh - 53px);
  margin-top: 10px;
  display: flex;
  background-color: #f6f6f6;
  display: flex;

  .conent-left {
    width: 30%;
    display: flex;
    flex-direction: column;

    .left-text {
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      box-sizing: border-box;
    }
  }

  .conent-right {
    width: 70%;
    padding: 10px;
    background-color: #fff;

    .scroll-view {
      height: calc(100vh - 63px);

      .view-title {
        font-size: 14px;
        margin: 10px 0px;

        .title-right {
          color: red;
        }
      }

      .title-text {
        display: flex;
        flex-wrap: wrap;

        .text {
          width: 31%;
          height: 140px;
          margin: 5px 5px 5px 0px;

          .text-tex {
            height: 35%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 12px;

            .tex-top {
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              display: -webkit-box;
              -webkit-box-orient: vertical;
            }

            .tex-botton {
              color: red;
            }
          }
        }
      }
    }
  }
}

.active {
  border-left: 4px solid #27ba9b;
  background-color: #fff;
}
</style>
