<template>
	<view class="song">
		<image :src="bgimage" mode="" class="bg-set"></image>
		<!-- 歌曲页面状态栏,点击之后返回上一页 -->
		<view class="songStatusBar" @click="navigatorBack">
			<image src="../../static/icon/arrow-down.png" mode=""></image>
		</view>
		<!-- 歌曲页背景文字区域 -->
		<view class="songContent">
			<text class="albumName-title">{{albumName}}</text>
			<text class="albumName">来自专辑：{{albumName}}</text>
			<text class="singer">{{singer}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bgimage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599988611425&di=868b6430664d42152e80dd2a01c4866a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F21%2F20151121140727_JuM5a.jpeg',
				albumName:null,
				singer:null,
				songLength:null
			}
		},
		onLoad(options) {
			//将组建点击之后传过来的参数进行分配，渲染到页面上
			this.albumName=options.AlbumName;
			this.singer =options.singer;
			let singLength = options.songLength;
			let time = new Date(singLength);
			console.log(time)
			let minus = time.getMinutes();
			console.log(minus)
		},
		methods:{
			navigatorBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	.songContent{
		margin: 28% 90rpx;
	}
	.albumName-title{
		font-size:70rpx;
	}
	.albumName,.singer{
		font-size: 25rpx;
	}
	.songContent>text{
		display: block;
		padding-bottom: 15rpx;
	}
	page {
		color: #FFFFFF;
	}
.song{
	margin-top: 90rpx;
}
.songStatusBar{
	width:60rpx;
	height: 60rpx;
	margin-left: 90rpx;
}
.songStatusBar>image{
	width: 100%;
	height: 100%;
}
.bg-set {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
