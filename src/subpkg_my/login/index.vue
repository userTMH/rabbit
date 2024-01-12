<template>
  <view class="login">
    <view class="box">
      <img src="../../static/images/logo_icon.png" alt="" style="width: 100px;height: 100px;">
      <view class="text">
        <uni-forms class="uni-forms" ref="form" :modelValue="formData" :rules="rules">
          <uni-forms-item label="" name="name">
            <input class="uni-forms-item" type="text" v-model="formData.account" placeholder="请输入姓名" />
          </uni-forms-item>
          <uni-forms-item label="" name="email">
            <input class="uni-forms-item" type="text" v-model="formData.password" placeholder="请输入邮箱" />
          </uni-forms-item>
        </uni-forms>
        <button class="botton" @click="submit">登录</button>
      </view>
      <view class="other">
        <view class="other-"></view>
        <view class="other-tex">其他登录方式</view>
        <view class="other-"></view>
      </view>
      <view class="mock">
        <view class="mock-box"></view>
        <view>模拟快捷登录</view>
      </view>
      <view class="agreement">登录/注册即视为你同意《服务条款》和《小兔鲜儿隐私协议》</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { rules } from './rules/rules';
import type { EmptyObject } from '@/api/type/myType'
import { login } from '@/api/my'
import { userUserStore } from '@/stores/user'

const stores = userUserStore()
// 表单标识
const form = ref()
const formData = ref<EmptyObject>({
  account: '13123456789',
  password: ''
})

const submit = async () => {
  try {
    await form.value.validate()
    const res = await login(formData.value)
    console.log(res);
    stores.token = res.result.token
    stores.result = res.result
    uni.reLaunch({
      url: '/pages/my/index',
    })
  } catch (error) {
    console.log(error);

  }
}
</script>

<style lang="scss" scoped>
.box {
  margin: 80px 10px 10px 10px;
  text-align: center;

  .text {
    text-align: center;

    .uni-forms-item {
      width: 90%;
      border-radius: 15px;
      background-color: #ffffff;
      padding: 5px;
      margin-left: 10px;
      border: 1px solid #ccc;
    }

    .botton {
      width: 90%;
      height: 38px;
      border-radius: 20px;
      background-color: #28bb9c;
      color: #fff;
    }
  }

  .other {
    margin: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    .other- {
      width: 60px;
      height: 3px;
      color: #a7a29f;
      background-color: #e6e6e6;
    }
  }

  .mock {
    margin-bottom: 50px;

    .mock-box {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #000;
      margin: auto;
    }
  }

  .agreement {
    font-size: 12px;
    color: #ccc;
  }
}
</style>
