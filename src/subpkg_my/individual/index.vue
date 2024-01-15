<template>
  <view class="individual">
    <view class="top">
      <view class="top-title">
        <uni-icons @click="elic" class="uni-icons" type="left" size="20" color="#fff"
          style="margin-left: 10px;"></uni-icons>
        <view style="margin-left: -30px;">个人信息</view>
        <view></view>
      </view>
      <view class="top-img">
        <img :src="avatars" alt="" @click="imgs" style="border-radius: 50%;width: 80px;height: 80px;">
        <view style="color: #fff;">点击修改头像</view>
      </view>
    </view>
    <view class="botton">
      <view class="tex">
        <view class="text">
          <view class="text-left">账号</view>
          <view class="text-right">
            <input type="text" :value="profiList?.account" color="#ccc" :disabled="true">
          </view>
        </view>
        <view class="text">
          <view class="text-left">昵称</view>
          <view class="text-right"><input type="text" :value="(profiList?.nickname as string)" @blur="name"></view>
        </view>
        <view class="text">
          <view class="text-left">性别</view>
          <view class="text-right">
            <view class="uni-form-item uni-column">
              <radio-group name="radio" @change="Radio">
                <label>
                  <radio value="男" :checked="mradio" /><text>男</text>
                </label>
                <label>
                  <radio value="女" :checked="nradio" /><text>女</text>
                </label>
              </radio-group>
            </view>
          </view>
        </view>
        <view class="text">
          <view class="text-left">生日</view>
          <view class="text-right">
            <view class="uni-list">
              <view class="uni-list-cell-db">
                <picker mode="date" :value="stores.result?.birthday" @change="bindDateChange">
                  <view class="uni-input">{{ stores.result?.birthday }}</view>
                </picker>
              </view>
            </view>
          </view>
        </view>
        <view class="text-b">
          <view class="text-left">职业</view>
          <view class="text-right"><input type="text" :value="(profiList?.profession as string)" @blur="profes"></view>
        </view>
      </view>
      <view>
        <button class="Save" @click="Save">保存</button>
      </view>
    </view>

  </view>
</template>

<script lang="ts" setup>
import { profil, profile } from '@/api/my';
import type { Gender, hResult } from '@/api/type/myType';
import { userUserStore } from '@/stores/user'
import { onLoad } from '@dcloudio/uni-app';
const stores = userUserStore()
import { ref } from 'vue';
//昵称
const nickname = ref<string>()
//性别
const gender = ref<Gender>()
//生日
const birthday = ref<string>()
//职业
const profession = ref<string>()
//头像
const avatars = ref()
//数据信息
const profiList = ref<hResult>()

//#region 性别状态
const mradio = ref<boolean>(false)
const nradio = ref<boolean>(false)
//#endregion
//#region 单选事件 日期事件 昵称 职业
//单选
const Radio = (e: any) => {
  gender.value = e.detail.value
}
//日期
const bindDateChange = (e: any) => {
  birthday.value = e.detail.value
}
//昵称
const name = (e: any) => {
  nickname.value = e.detail.value
}
//职业
const profes = (e: any) => {
  profession.value = e.detail.value
}
//#endregion

//返回
const elic = () => {
  uni.navigateBack()
}
//头像
const imgs = () => {
  uni.chooseMedia({
    // ⽂件个数
    count: 1,
    // ⽂件类型
    mediaType: ['image'],
    success: (success) => {
      const { tempFilePath } = success.tempFiles[0]
      wx.uploadFile({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/member/profile/avatar',
        name: 'file',
        filePath: tempFilePath,
        success: (res) => {
          if (res.statusCode == 200) {
            const { avatar } = JSON.parse(res.data).result
            avatars.value = avatar
            console.log(avatars.value);
            uni.showToast({ icon: 'success', title: '更新成功' })
          } else {
            uni.showToast({ icon: 'error', title: '出现错误' })
          }

        }
      })

    },
  })
}
//获取信息数据
const getprofil = async () => {
  try {
    const res = await profil()
    console.log(res);
    profiList.value = res.result
    avatars.value = profiList.value.avatar
    if (profiList.value?.gender == "男") {
      mradio.value = true
    } else {
      nradio.value = true
    }

  } catch (error) {
    console.log(error);

  }
}
//修改事件
const Save = async () => {
  try {
    const res = await profile({
      nickname: nickname.value,
      gender: gender.value,
      birthday: birthday.value,
      profession: profession.value
    })
    console.log(res);
    getprofil()

  } catch (error) {
    console.log(error);

  }
}

onLoad((options) => {
  getprofil()
})

</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 170px;
  text-align: center;
  background-image: url(../../static/images/order_bg.png);
  background-size: 100% 100%;
  position: relative;

  .top-title {
    width: 100%;
    height: 38px;
    position: absolute;
    top: 15px;
    display: flex;
    justify-content: space-between;
    color: #fff;
  }

  .top-img {
    position: absolute;
    bottom: 10px;
    left: 38%;
  }
}

.botton {
  width: 100%;
  height: calc(100vh - 190px);
  background-color: #f4f4f4;
  padding: 10px;

  .tex {
    width: 90%;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;

    .text {
      height: 50px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;

      .text-right {
        margin-left: 50px;
      }
    }

    .text-b {
      height: 50px;
      display: flex;
      align-items: center;

      .text-right {
        margin-left: 50px;
      }
    }
  }

  .Save {
    width: 93%;
    height: 38px;
    background-color: #27ba9b;
    border-radius: 35px;
    text-align: center;
    line-height: 38px;
    color: #fff;
    border: 0;
  }
}
</style>
