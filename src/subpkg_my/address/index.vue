<template>
  <view class="address">
    <view class="box">
      <view :class="{ active: index != addreList.length - 1 }" class="text" v-for="(item, index) in addreList"
        :key="index">
        <view class="text-top">
          <view style="display: flex;">
            <view>{{ item.receiver }}</view>
            <view>{{ item.contact }}</view>
            <view v-show="item.isDefault == 1"
              style="margin-left: 10px;padding: 0px 5px;border: 1px solid red;border-radius: 5px;color: red;">默认
            </view>
          </view>
          <view @click="revise(item.id)">| 修改</view>
        </view>
        <view class="text-botton">{{ item.fullLocation }} {{ item.address }}</view>
      </view>
    </view>
    <view class="botton">
      <button @click="addary">新建地址</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { addre } from '@/api/my';
import type { aResult } from '@/api/type/myType';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';


//地址数据
const addreList = ref<aResult[]>([])
//获取地址数据
const getaddress = async () => {
  try {
    const res = await addre()
    // console.log(res);
    addreList.value = res.result

  } catch (error) {
    console.log(error);

  }
}

//修改事件
const revise = (id: string) => {
  uni.navigateTo({
    url: `/subpkg_my/add/index?id=${id}`,
  })
}

//添加事件
const addary = () => {
  uni.navigateTo({
    url: '/subpkg_my/add/index'
  })
}

onLoad((options) => {
  getaddress()
})
</script>

<style lang="scss" scoped>
.address {
  width: 100vw;
  height: calc(100vh - 20px);
  background-color: #f4f4f4;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .box {
    width: 90%;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;

    .text {
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 12px;

      .text-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  .botton {
    width: 95%;

    button {
      width: 100%;
      height: 38px;
      background-color: #27ba9b;
      border-radius: 20px;
      font-size: 16px;
      color: #fff;

    }
  }
}

.active {
  border-bottom: 1px solid #ccc;
}
</style>
