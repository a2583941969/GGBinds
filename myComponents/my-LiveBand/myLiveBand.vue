<template>
  <!-- 歌手图片 -->
  <view class="Live-Band">
    <view class="Singer-info">
      <!-- 歌手信息 -->
      <navigator url="/pages/SingerDetails/SingerDetails" open-type="navigate">
        <!-- 歌手头像 -->
        <view class="Singer-avatar">
          <image :src="SingerAvatar" mode="widthFix"></image>
        </view>
        <!-- 歌手名字 -->
        <view class="Leigh-Nash">{{LeighNash}}</view>
        <!-- 收藏人数 -->
        <view class="collect-num">{{collectNum}}w+人已收藏</view>
      </navigator>
      <!-- 收藏按钮 -->
      <view class="collect">
        <text @click="handleCollect" :class="{collectActive:collect}">{{collect?"已收藏":"收藏"}}</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    // SingerAvatar:歌手头像
    // LeighNash:歌手名字
    // collectNum:收藏人数
    // singerId:歌手ID
    props: ["SingerAvatar", "LeighNash", "collectNum", "singerId"],
    data() {
      return {
        // collect代表当前歌手是否被收藏,true代表已收藏,false代表未收藏
        collect: false
      }
    },
    methods: {
      handleCollect() {
        if (this.collect == true) {
          this.collect = false;
          uni.showToast({
            title: "取消收藏成功",
            mask: true
          })
        } else {
          this.collect = true;
          uni.showToast({
            title: "收藏成功",
            mask: true
          })
        }
      },
    },
  }
</script>

<style>
  .Live-Band {
    margin-bottom: 100rpx;
  }

  .Live-Band>.Singer-info {
    width: 196rpx;
    height: 314rpx;
  }

  .Live-Band>.Singer-info>navigator>.Singer-avatar {
    width: 196rpx;
    height: 196rpx;
    border-radius: 50%;
    overflow: hidden;
  }

  .Live-Band>.Singer-info>navigator>.Singer-avatar>image {
    width: 100%;
    height: 100%;
  }

  .Live-Band>.Singer-info>navigator>.Leigh-Nash {
    width: 196rpx;
    height: 44rpx;
    margin-top: 24rpx;
    text-align: center;
    font-size: 28rpx;
    font-weight: 600;
    color: #333333;
  }

  .Live-Band>.Singer-info>navigator>.collect-num {
    width: 196rpx;
    height: 44rpx;
    text-align: center;
    font-size: 22rpx;
    color: #AAAAAA;
    font-weight: 100;
  }

  .Live-Band>.Singer-info>.collect {
    text-align: center;
  }

  .Live-Band>.Singer-info>.collect>text {
    font-size: 20rpx;
    border-radius: 40rpx;
    border: 1px solid #af9b7c;
    padding: 6rpx 36rpx;
    color: #af9b7c;
  }

  .Live-Band>.Singer-info>.collect>text.collectActive {
    color: #FFFFFF;
    background-color: #af9b7c;
  }
</style>
