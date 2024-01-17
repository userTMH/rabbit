<template>
  <view class="ad">
    <view class="box">
      <view class="active">
        <view>收货人</view>
        <input type="text" placeholder="请填写收货人姓名" @blur="recei" :value="ModifysList?.receiver">
      </view>
      <view class="active">
        <view>手机号码</view>
        <input type="text" placeholder="请填写收货人手机号" @blur="cont" :value="ModifysList?.contact">
      </view>
      <view class="active">
        <view>所在地区</view>
        <uni-data-picker :map="{ text: 'name', value: 'code' }" :localdata="items" popup-title="请选择班级" @change="picker"
          :value="ModifysList?.countyCode"></uni-data-picker>
      </view>
      <view class="active">
        <view>详细地址</view>
        <input type="text" placeholder="街道、楼牌号等信息" @blur="addre" :value="ModifysList?.address">
      </view>
      <view class="text" style="width: ;display: flex;justify-content: space-between;">
        <view>设为默认地址</view>
        <view>
          <switch color="#27ba9b" @change="swit" :checked="ModifysList?.isDefault == 1" />
        </view>
      </view>
    </view>
    <view class="botton">
      <button @click="add">保存并使用</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import arrdess from '@/address/address'
import { onLoad } from '@dcloudio/uni-app';
import { Modify, Modifys, member } from '@/api/my';
import type { msResult } from '@/api/type/myType';

const id = ref<string>("")

//#region 数据
//级联器数据
const items = ref()
//收货人
const receiver = ref<string>("")
//联系方式
const contact = ref<string>("")
//省份编号
const provinceCode = ref<string>("")
//城市编号
const cityCode = ref<string>("")
//区县编号
const countyCode = ref<string>("")
//省市区
const fullLocation = ref<string>("")
//详细地址
const address = ref<string>("")
//默认状态
const isDefault = ref<number>(0)
//详情数据
const ModifysList = ref<msResult>()
//#endregion

//获取数据
const getmodify = async () => {
  if (id.value != undefined) {
    try {
      const res = await Modifys(id.value)
      console.log(res);
      ModifysList.value = res.result
      receiver.value = ModifysList.value.receiver
      contact.value = ModifysList.value.contact
      provinceCode.value = ModifysList.value.provinceCode
      cityCode.value = ModifysList.value.cityCode
      countyCode.value = ModifysList.value.countyCode
      fullLocation.value = ModifysList.value.fullLocation
      address.value = ModifysList.value.address
      isDefault.value = ModifysList.value.isDefault
    } catch (error) {
      console.log(error);

    }
  }
}

//#region 事件
//级联器事件
const picker = (e: any) => {
  console.log(e.detail.value);
  provinceCode.value = e.detail.value[0].value
  cityCode.value = e.detail.value[1].value
  countyCode.value = e.detail.value[2].value
  fullLocation.value = e.detail.value[0].text + " " + e.detail.value[1].text + " " + e.detail.value[2].text

}
//收货人
const recei = (e: any) => {
  receiver.value = e.detail.value
  // console.log(receiver.value);
}
//手机号
const cont = (e: any) => {
  contact.value = e.detail.value
  // console.log(contact.value);
}
//详细地址
const addre = (e: any) => {
  address.value = e.detail.value
  // console.log(address.value);
}
//默认状态
const swit = (e: any) => {
  if (e.detail.value == true) {
    isDefault.value = 1
  } else {
    isDefault.value = 0
  }
  console.log(isDefault.value);
}
//#endregion

//添加事件
const add = async () => {
  if (id.value == undefined) {
    try {
      const res = await member({
        address: address.value,
        cityCode: cityCode.value,
        contact: contact.value,
        countyCode: countyCode.value,
        isDefault: isDefault.value,
        provinceCode: provinceCode.value,
        receiver: receiver.value
      })
      console.log(res);

    } catch (error) {
      console.log(error);

    }
  } else {
    try {
      const res = await Modify(id.value, {
        address: address.value,
        cityCode: cityCode.value,
        contact: contact.value,
        countyCode: countyCode.value,
        isDefault: isDefault.value,
        provinceCode: provinceCode.value,
        receiver: receiver.value
      })
      console.log(res);

    } catch (error) {
      console.log(error);

    }
  }

}


onLoad((options) => {
  items.value = arrdess
  id.value = options!.id
  getmodify()
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
