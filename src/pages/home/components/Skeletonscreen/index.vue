<template>
  <view class="Skeletonscreen">
    <template name="skeleton">
      <view class="sk-container">
        <view class="home data-v-2c5296db">
          <view class="data-v-2c5296db">
            <view class="Navigation Navigation-index--Navigation data-v-f73eefe1 Navigation-index--data-v-f73eefe1"
              style="padding-top:20px">
              <view class="top Navigation-index--top data-v-f73eefe1 Navigation-index--data-v-f73eefe1">
                <view class="top-top Navigation-index--top-top data-v-f73eefe1 Navigation-index--data-v-f73eefe1">
                  <image
                    class="top-left Navigation-index--top-left data-v-f73eefe1 Navigation-index--data-v-f73eefe1 sk-image">
                  </image>
                  <view class="data-v-f73eefe1 Navigation-index--data-v-f73eefe1 sk-transparent sk-opacity">|</view>
                  <view
                    class="top-right Navigation-index--top-right data-v-f73eefe1 Navigation-index--data-v-f73eefe1 sk-transparent sk-text-14-2857-566 sk-text">
                    新鲜·亲民·快捷</view>
                </view>
                <view class="top-botton Navigation-index--top-botton data-v-f73eefe1 Navigation-index--data-v-f73eefe1">
                  <view class="input Navigation-index--input data-v-f73eefe1 Navigation-index--data-v-f73eefe1 sk-image"
                    placeholder="搜索商品" placeholder-style="color: #fff;" type="text"></view>
                  <view is="node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons"
                    class="top-icon-left Navigation-index--top-icon-left data-v-f73eefe1 Navigation-index--data-v-f73eefe1">
                    <text class="uni-icons icons--uni-icons uniui-search icons--uniui-search sk-pseudo sk-pseudo-circle"
                      style="color:#fff;font-size:18px"></text>
                  </view>
                  <view is="node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons"
                    class="top-icon-right Navigation-index--top-icon-right data-v-f73eefe1 Navigation-index--data-v-f73eefe1">
                    <text class="uni-icons icons--uni-icons uniui-scan icons--uniui-scan sk-pseudo sk-pseudo-circle"
                      style="color:#fff;font-size:18px"></text>
                  </view>
                </view>
              </view>
            </view>
          </view>
          <scroll-view refresher-enabled="true" scroll-y="true" class="scroll-view data-v-2c5296db">
            <view is="components/carousel/index" class="data-v-2c5296db">
              <view class="carousel carousel-index--carousel">
                <view>
                  <swiper circular="true" class="swiper carousel-index--swiper" indicator-color="true" current="0"
                    autoplay="false">
                    <swiper-item
                      style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                      <image style="width:100%;height:100%" class="sk-image"></image>
                    </swiper-item>
                  </swiper>
                </view>
              </view>
            </view>
            <view is="pages/home/components/classify/index" class="data-v-2c5296db">
              <view class="classify classify-index--classify data-v-7e533d16 classify-index--data-v-7e533d16">
                <view class="box classify-index--box data-v-7e533d16 classify-index--data-v-7e533d16">
                  <image class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-image" style="width:100%;height:70%">
                  </image>
                  <view class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-transparent sk-text-14-2857-126 sk-text"
                    style="background-position-x: 50%;">居家</view>
                </view>
                <view class="box classify-index--box data-v-7e533d16 classify-index--data-v-7e533d16">
                  <image class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-image" style="width:100%;height:70%">
                  </image>
                  <view class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-transparent sk-text-14-2857-896 sk-text"
                    style="background-position-x: 50%;">锦鲤</view>
                </view>
                <view class="box classify-index--box data-v-7e533d16 classify-index--data-v-7e533d16">
                  <image class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-image" style="width:100%;height:70%">
                  </image>
                  <view class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-transparent sk-text-14-2857-72 sk-text"
                    style="background-position-x: 50%;">服饰</view>
                </view>
                <view class="box classify-index--box data-v-7e533d16 classify-index--data-v-7e533d16">
                  <image class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-image" style="width:100%;height:70%">
                  </image>
                  <view class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-transparent sk-text-14-2857-581 sk-text"
                    style="background-position-x: 50%;">母婴</view>
                </view>
                <view class="box classify-index--box data-v-7e533d16 classify-index--data-v-7e533d16">
                  <image class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-image" style="width:100%;height:70%">
                  </image>
                  <view class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-transparent sk-text-14-2857-587 sk-text"
                    style="background-position-x: 50%;">个护</view>
                </view>
                <view class="box classify-index--box data-v-7e533d16 classify-index--data-v-7e533d16">
                  <image class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-image" style="width:100%;height:70%">
                  </image>
                  <view class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-transparent sk-text-14-2857-351 sk-text"
                    style="background-position-x: 50%;">严选</view>
                </view>
                <view class="box classify-index--box data-v-7e533d16 classify-index--data-v-7e533d16">
                  <image class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-image" style="width:100%;height:70%">
                  </image>
                  <view class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-transparent sk-text-14-2857-276 sk-text"
                    style="background-position-x: 50%;">数码</view>
                </view>
                <view class="box classify-index--box data-v-7e533d16 classify-index--data-v-7e533d16">
                  <image class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-image" style="width:100%;height:70%">
                  </image>
                  <view class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-transparent sk-text-14-2857-492 sk-text"
                    style="background-position-x: 50%;">运动</view>
                </view>
                <view class="box classify-index--box data-v-7e533d16 classify-index--data-v-7e533d16">
                  <image class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-image" style="width:100%;height:70%">
                  </image>
                  <view class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-transparent sk-text-14-2857-227 sk-text"
                    style="background-position-x: 50%;">杂项</view>
                </view>
                <view class="box classify-index--box data-v-7e533d16 classify-index--data-v-7e533d16">
                  <image class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-image" style="width:100%;height:70%">
                  </image>
                  <view class="data-v-7e533d16 classify-index--data-v-7e533d16 sk-transparent sk-text-14-2857-50 sk-text"
                    style="background-position-x: 50%;">品牌</view>
                </view>
              </view>
            </view>
            <view is="pages/home/components/hot/index" class="data-v-2c5296db">
              <view class="hot hot-index--hot data-v-33f53b20 hot-index--data-v-33f53b20">
                <view class="hot-text hot-index--hot-text data-v-33f53b20 hot-index--data-v-33f53b20">
                  <view class="text-top hot-index--text-top data-v-33f53b20 hot-index--data-v-33f53b20">
                    <view class="data-v-33f53b20 hot-index--data-v-33f53b20 sk-transparent sk-text-14-2857-418 sk-text">
                      特惠推荐</view>
                    <view
                      class="top-right hot-index--top-right data-v-33f53b20 hot-index--data-v-33f53b20 sk-transparent sk-text-14-2857-203 sk-text">
                      精选全攻略</view>
                  </view>
                  <view class="text-botton hot-index--text-botton data-v-33f53b20 hot-index--data-v-33f53b20">
                    <view class="botton-tex hot-index--botton-tex data-v-33f53b20 hot-index--data-v-33f53b20">
                      <image class="data-v-33f53b20 hot-index--data-v-33f53b20 sk-image" style="width:100%;height:100%">
                      </image>
                    </view>
                    <view class="botton-tex hot-index--botton-tex data-v-33f53b20 hot-index--data-v-33f53b20">
                      <image class="data-v-33f53b20 hot-index--data-v-33f53b20 sk-image" style="width:100%;height:100%">
                      </image>
                    </view>
                  </view>
                </view>
                <view class="hot-text hot-index--hot-text data-v-33f53b20 hot-index--data-v-33f53b20">
                  <view class="text-top hot-index--text-top data-v-33f53b20 hot-index--data-v-33f53b20">
                    <view class="data-v-33f53b20 hot-index--data-v-33f53b20 sk-transparent sk-text-14-2857-251 sk-text">
                      爆款推荐</view>
                    <view
                      class="top-right hot-index--top-right data-v-33f53b20 hot-index--data-v-33f53b20 sk-transparent sk-text-14-2857-729 sk-text">
                      最受欢迎</view>
                  </view>
                  <view class="text-botton hot-index--text-botton data-v-33f53b20 hot-index--data-v-33f53b20">
                    <view class="botton-tex hot-index--botton-tex data-v-33f53b20 hot-index--data-v-33f53b20">
                      <image class="data-v-33f53b20 hot-index--data-v-33f53b20 sk-image" style="width:100%;height:100%">
                      </image>
                    </view>
                    <view class="botton-tex hot-index--botton-tex data-v-33f53b20 hot-index--data-v-33f53b20">
                      <image class="data-v-33f53b20 hot-index--data-v-33f53b20 sk-image" style="width:100%;height:100%">
                      </image>
                    </view>
                  </view>
                </view>
                <view class="hot-text hot-index--hot-text data-v-33f53b20 hot-index--data-v-33f53b20">
                  <view class="text-top hot-index--text-top data-v-33f53b20 hot-index--data-v-33f53b20">
                    <view class="data-v-33f53b20 hot-index--data-v-33f53b20 sk-transparent sk-text-14-2857-139 sk-text">
                      一站买全</view>
                    <view
                      class="top-right hot-index--top-right data-v-33f53b20 hot-index--data-v-33f53b20 sk-transparent sk-text-14-2857-221 sk-text">
                      精心优选</view>
                  </view>
                </view>
                <view class="hot-text hot-index--hot-text data-v-33f53b20 hot-index--data-v-33f53b20">
                  <view class="text-top hot-index--text-top data-v-33f53b20 hot-index--data-v-33f53b20">
                    <view class="data-v-33f53b20 hot-index--data-v-33f53b20 sk-transparent sk-text-14-2857-19 sk-text">
                      新鲜好物</view>
                    <view
                      class="top-right hot-index--top-right data-v-33f53b20 hot-index--data-v-33f53b20 sk-transparent sk-text-14-2857-91 sk-text">
                      生活加分项</view>
                  </view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </template>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps();
</script>

<style lang="scss" scoped>
.sk-transparent {
  color: transparent !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-566 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-126 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-896 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-72 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-581 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-587 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-351 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-276 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-492 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-227 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-50 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-418 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-203 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-251 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-729 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-139 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-221 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-19 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-91 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-image {
  background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #EFEFEF !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
