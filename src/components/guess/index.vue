<template>
  <view class="guess">
    <view class="guess-top">
      <view class="circle"></view>
      <view>猜你喜欢</view>
      <view class="circle"></view>
    </view>
    <view class="guess-box">
      <view class="guess-text" v-for="(item, index) in guessList" :key="index">
        <img class="text-img" :src="item.picture" alt="" style="width: 100%;">
        <view class="text-botton">
          <view class="botton-top">{{ item.name }}</view>
          <view class="botton-botton">￥{{ item.price }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { Item } from '@/api/type/homeType';

defineProps<{ guessList: Item[] }>();
</script>

<style lang="scss" scoped>
.guess {
  width: 100%;
  padding: 5px;

  .guess-top {
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    .circle {
      width: 10px;
      height: 10px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAC9ElEQVQ4jY3Vz2sdVRQH8O9LQkTBlVRrG1RqEBc1trQFXQTFv+AVjRtt1a5TpYipFZelSKQIsW5dVFcmtlXElRt3oqaNsRSUBEESU7Qm79e892buOd+vzHszL/OSYHrgcGdzP5w5586dkiRsDUbNYZfKDpZNetakfSYmQVwJ0o0gXg3iV08+sDfZuncbaFF03KRpF0dNQhCRr8VMxKVEPPvMg49c2RG0KBp06YJJU5YiEKwHCIE9aDPpiMXpRHyvvP8JT52hXE7ICwZOpdVYjhQr4laMiNUBp9JnAGd7FdbrtZdMnA0qVtVBf0nETxP6zQw6mIinYvLppIshzuA2OXHmwOG50ka1MhzEZRNHClV5Ir6diDNH94z0NfnLld9KsfhmTL8Yi4MZhra4GtMPlNY2/n0liJ/n/cnWt47sGZnZNv5CzPyxcLpNn0mr7IKeoicGWrRyk45CLjRpH/8flkbNw6UabaHmhioDqm6oeCgPNOnHmjTk2aBdHn/ose2Hc0u8P3pMNbfPKgyouGGDAetuR4eatL355OLuJH/dDcuj4mGxJaIpR0SiIT48FNGSWLynewy6E7vb2KAhoiMSURVxh8RQg7YWk/cnGRaTTwH47m7MO25jNTnWSdwWAXFtoOG22KCh7gF1N9RoJ88v/VTaDRu78W1pheHVW264TQPSdPt5oE671sFoSCdW83Co6nZ6N/AmbXLF7TA2sXS9Vrq4fH24LV+OyZF2dkhbcm+RZ1ripbmDL/RN/L75r0stcRLkRxAHkb4qO6+7CvHxzqf37u8/TLTpX7TVwdBiOjmmDZ+PxMtVcvFvOSriGMiTEI+g2zNsgnpZ4ydme7fN67e+n27R30mPQdTFUMsm909no+eVZKnCMz/U+GtTqdO7bSoezkXivRE5WRexLsdfRaAP60M/gXQud7ZdsI9e/+bFP+kfQBzdGetVtpRCeu6NueL+HX8BpR+vDEM+AfE4qLRf+zNkFdI8xKuQZvX8qf5fAID/AFmtLrvIuO9TAAAAAElFTkSuQmCC);
      background-size: 100% 100%;
    }
  }

  .guess-box {

    display: flex;
    flex-wrap: wrap;

    .guess-text {
      width: 41%;
      height: 236px;
      margin: 5px;
      padding: 10px;
      background-color: #fff;
      border-radius: 10px;

      .text-img {
        height: 70%;
      }

      .text-botton {
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .botton-top {
          font-size: 12px;
        }

        .botton-botton {
          color: red;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
