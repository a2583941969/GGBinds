<template>
	<view class="songlist">
		<!-- 左侧图片 -->
		<view class="songlist-leftimg" v-if="!isAlnum">
			<image :src="sing_img" mode="widthFix"></image>
		</view>
		<!-- 歌曲信息 -->
		<view class="songlist-info">
			<view>{{sname}}</view>
			<view>{{alnumName||singer}}</view>
		</view>
		<!-- 右侧内容  -->
		<!-- 插槽 默认显示歌曲下载 -->
		<view class="sing-count">	
			<slot>
				<view class="songlist-right-btn" @click="openDownLoad">
				</view>
				<uni-popup ref="popup" type="bottom">
					<view class="bottom">
						<view class="singname">
							<text>
								{{sname}}
							</text>
						</view>
						<view class="downLoad">
							<view>收藏</view>
							<view>下载</view>
							<view>分享</view>
						</view>
					</view>
				</uni-popup>
			</slot>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		// 歌曲id
		// 歌曲名字
		// 所属专辑名
		// 歌手
		// 是否为专辑列表显示 
		// 歌曲图片
		props: ["sid", "sname", "alnumName", "singer", "isAlnum", "sing_img"],
		data() {
			return {

			}
		},
		methods: {
			openDownLoad() {
				this.$refs.popup.open()
			}
		}
	}
</script>
<style>
	view.songlist {
		width: 700rpx;
		margin-right: 20rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}

	view.songlist>view.songlist-leftimg {
		width: 130rpx;
		height: 130rpx;
		margin-right: 30rpx;
		border-radius: 130rpx;
	}

	view.songlist>view.songlist-leftimg>image {
		width: 100%;
	}

	view.songlist>view.songlist-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	view.songlist>view.songlist-info>view {
		overflow: hidden;
		line-height: 2;
		text-overflow: ellipsis;
		whitewhite-space: nowrap;
	}

	view.songlist>view.songlist-info>view:first-child {
		font-size: 28rpx;
		font-weight: 900;
	}

	view.songlist>view.songlist-info>view:last-child {
		font-size: 26rpx;
		color: #666;

	}

	view.songlist view.songlist-right-btn {
		width: 30rpx;
		height: 100%;
		background-image: url(../../static/icon/singdetail.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 60rpx 60rpx;
	}

	view.songlist view.sing-count {
		font-size: 28rpx;
		color: #666;
		display: flex;
		align-items: center;
	}

	view.bottom {
		background-color: #fff;
		border-top-left-radius: 50rpx;
		border-top-right-radius: 50rpx;
		z-index: 200;
	}

	view.bottom>view.singname {
		text-align: center;
		font-size: 28rpx;
		padding: 40rpx 0;
		border-bottom: 1px solid #ccc;
	}

	view.bottom>view.downLoad {
		display: flex;
		justify-content: space-around;
		font-size: 28rpx;
	}

	view.bottom>view.downLoad>view {
		position: relative;
		flex: 1;
		text-align: center;
		padding: 50rpx 0;
	}

	view.bottom>view.downLoad>view::before {
		content: '';
		display: block;
		width: 100rpx;
		height: 80rpx;
		background: url(../../static/icon/G_soucang.png) center no-repeat;
		background-size: 60rpx;
		margin: 0 auto;
	}

	view.bottom>view.downLoad>view:nth-child(2)::before {
		background-image: url(../../static/icon/G_xiazai.png);
	}

	view.bottom>view.downLoad>view:nth-child(3)::before {
		background-image: url(../../static/icon/G_fenxiang.png);
	}	
</style>
