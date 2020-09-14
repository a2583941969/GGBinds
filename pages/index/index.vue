<template>
	<view class="index">
		<!-- 顶部搜索框 -->
		<view class="inputbox">
			<view class="input" @click="goSerch">
				搜索热门的心情电台
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="banner">	
			
		</view>
		<!-- 测试组件 -->
		<my-tabbar active="首页"></my-tabbar>
	</view>
</template>

<script>
	import myAlnum from "../../myComponents/my-alnum/myAlnum.vue"
	import mySonglist from "../../myComponents/my-songlist/mySongList.vue"
	import myTabbar from "../../myComponents/my-tabbar/myTabbar.vue"

	export default {
		components: {
			myAlnum,
			mySonglist,
			myTabbar
		},
		data(){
			return {

				
			}
		},



		methods: {
			// 请求方法
			async getMsg(){
				let res=await this.$myReq({
					url:"banner/type=2",
					
				})
			},
			// 跳转搜索页面的事件
			goSerch() {
				uni.navigateTo({
					url:"/pages/mine/mine",
					animationType:"zoom-fade-out"
				})
			}
		},
	}
</script>

<style>
	view.index>view.inputbox {
		border: 1px solid gray;
		padding: 22rpx 15rpx;
		width: 80%;
		border-radius: 5rpx;
		margin: 90rpx auto;
		border: 0;
		box-shadow: 10rpx 5rpx 30rpx #C0C0C0;
	}

	view.index>view.inputbox>view.input {
		font-size: 25rpx;
		color: #aaa;
		display: flex;
		align-items: center;
	}
	view.index>view.inputbox>view.input::before{
		content: '';
		display: inline-block;
		width: 40rpx;
		height: 40rpx;
		background: url("../../static/icon/serch.png") center center no-repeat;
		background-size: cover;
		margin:0 20rpx;
	}
	
</style>
