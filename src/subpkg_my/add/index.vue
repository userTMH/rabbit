<template>
  <view class="ad">
    <view class="box">
      <view class="active">
        <view>收货人</view>
        <input type="text" placeholder="请填写收货人姓名" @blur="recei">
      </view>
      <view class="active">
        <view>手机号码</view>
        <input type="text" placeholder="请填写收货人手机号" @blur="cont">
      </view>
      <view class="active">
        <view>所在地区</view>
        <uni-data-picker :map="{ text: 'name', value: 'code' }" :localdata="items" popup-title="请选择班级"
          @change="picker"></uni-data-picker>
      </view>
      <view class="active">
        <view>详细地址</view>
        <input type="text" placeholder="街道、楼牌号等信息" @blur="addre">
      </view>
      <view class="text" style="width: ;display: flex;justify-content: space-between;">
        <view>设为默认地址</view>
        <view>
          <switch color="#27ba9b" @change="swit" />
        </view>
      </view>
    </view>
    <view class="botton">
      <button>保存并使用</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import arrdess from '../../address/address'
import { onLoad } from '@dcloudio/uni-app';

//#region 数据
//级联器数据
const items = ref()
//收货人
const receiver = ref<string>()
//联系方式
const contact = ref<string>()
//省份编号
const provinceCode = ref<string>()
//城市编号
const cityCode = ref<string>()
//区县编号
const countyCode = ref<string>()
//省市区
const fullLocation = ref<string>()
//详细地址
const address = ref<string>()
//默认状态
const isDefault = ref<number>(0)
//#endregion

//#region 事件
//级联器事件
const picker = (e) => {
  // console.log(e.detail.value);
  provinceCode.value = e.detail.value[0].value
  cityCode.value = e.detail.value[1].value
  countyCode.value = e.detail.value[2].value
  fullLocation.value = e.detail.value[0].text + " " + e.detail.value[1].text + " " + e.detail.value[2].text

}
//收货人
const recei = (e) => {
  receiver.value = e.detail.value
  // console.log(receiver.value);
}
//手机号
const cont = (e) => {
  contact.value = e.detail.value
  // console.log(contact.value);
}
//详细地址
const addre = (e) => {
  address.value = e.detail.value
  // console.log(address.value);
}
//默认状态
const swit = (e) => {
  if (e.detail.value == true) {
    isDefault.value = 1
  } else {
    isDefault.value = 0
  }
  console.log(isDefault.value);
}
//#endregion




onLoad((options) => {
  items.value = arrdess

})

</script>

<style lang="scss" scoped>
.ad {
  width: 100vw;
  height: calc(100vh - 20px);
  background-color: #f4f4f4;
  padding: 10px;

  .box {
    width: 90%;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;

    .text {
      height: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 12px;
    }
  }

  .botton {
    width: 95%;

    button {
      width: 100%;
      height: 38px;
      margin-top: 10px;
      background-color: #27ba9b;
      border-radius: 20px;
      font-size: 16px;
      color: #fff;
    }
  }
}

.active {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
}
</style>
