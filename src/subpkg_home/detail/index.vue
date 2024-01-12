<template>
  <view class="detail"></view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import { detail } from '@/api/home'

//id
const id = ref<string>("")
//详情shuju
const detailList = ref()
//获取详情数据
const getDetail = async () => {
  try {
    const res = await detail({
      id: id.value
    })
    console.log(res);

  } catch (error) {
    console.log(error);

  }
}


onLoad((options) => {
  id.value = options.id
  getDetail()
})
</script>

<style lang="scss" scoped></style>
