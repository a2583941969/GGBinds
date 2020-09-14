<template>

		<view class="bottomBox" @click="toSong">
			<!-- 音乐图片 -->
			<view class="albumAvatar">
				<image src="../../static/icon/homeselect.png"></image>
			</view>
			<!-- 音乐名字 -->
			<view class="songName">Shakingnesses/Camarazak</view>
			<!-- 音乐按钮 -->
			<view class="albumPlay">
				<!-- 阻止事件冒泡，点击对应按钮，开始不同的操作 -->
				<image src="../../static/icon/play.png" mode="" @click.stop="playMusic"></image>
				<image src="../../static/icon/skip-forward-filled.png" mode="" @click.stop="playNext"></image>
			</view>
		</view>

</template>

<script>
	export default {
		//     专辑/音乐图片       专辑名字，作者名字，  歌曲长度
		// props: ["AlbumImg", "AlbumName", "singer",songLength],
		data() {
			return {
					AlbumName:'Meshugass',
					singer:'Camarzak',
					songLength:1200
			}
		},
		mounted() {
	
		},
		methods: {
			//点击底部音乐栏就去歌曲单页
		toSong(){
			uni.navigateTo({
				url:`../../pages/song/song?AlbumName=${this.AlbumName}&singer=${this.singer}&songLength=${this.songLength}`
			})
		},
		playMusic(){
			console.log("音乐开始播放")
		},
		playNext(){
			console.log("播放下一首音乐")
		}
		}
	}
</script>

<style>
	.bottomBox {
		flex-direction: row;
		justify-content: end;
		box-shadow: 0rpx -1rpx 15rpx 1rpx #DDDDDD;
		background-color: white;
		width: 750rpx;
		height: 80rpx;
		position: relative;

	}

	.albumAvatar {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		top: -30rpx;
		left: 30rpx;
		z-index: 1000;
		border-radius: 50%;
		background-color: orange;
		
	}

	.albumAvatar>image {
		width: 100%;
		height: 100%;

	}

	.albumPlay {
		display: inline-block;
		flex: 2;
		padding-top: 20rpx;
		position: absolute;
		right: 30rpx;
	}

	.albumPlay>image {
		width: 40rpx;
		height: 40rpx;
	}

	.albumPlay>image:last-child {
		margin-left: 40rpx;
	}

	.songName {
		color: black;
		margin: 0rpx 20rpx 0rpx 180rpx;
		font-size: 30rpx;
		padding-top: 20rpx;
		position: absolute;

	}
</style>
