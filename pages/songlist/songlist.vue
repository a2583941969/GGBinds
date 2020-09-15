<template>
	<view class="ablum">
		<view class="up" style="background: url(../../static/122.jpg) repeat  0 -180rpx ; background-size: 100% 100%;">
		</view>
		
		<scroll-view class="main" >
		<!-- <movable-area class="aa">
		<movable-view class="main"  direction="vertical" out-of-bounds="true" :y="y"> -->
			<view class="empty">
		
			</view>
			<!-- 信息展示 -->
			<view class="mianinfo">
				<!-- 专辑/歌手标题 -->
				<view class="ablumtitle">
					<text>还如梦中,幽幽古风</text><br>
					<text>40首单曲</text>
				</view>
				<!-- 专辑/歌手标题结束 -->
				<!-- 操作按钮 -->
				<view class="ablumbtn">
					<view class="playall">
						❤  播放全部
					</view>
					<view class="smbtn">
						<text>❤</text>
						<text>☆</text>
						<text>☆</text>
					</view>
				</view>
				<!-- 操作按钮结束 -->
				<!-- 歌曲列表 -->
				<view class="songlist" v-for="(i,k) of 5" :key="k">
					
					<!-- 歌曲列表项 -->
					<view class="songitem">
						<!-- 歌曲小图片 -->
						<view class="songpic">
							<image src="../../static/122.jpg" mode=""></image>
						</view>
						<!-- 歌曲信息 -->
						<view class="songinfo">
							<text>1</text>
							<text>2</text>
						</view>
						<!-- 歌曲时长	 -->
						<view class="songtime">
							
						</view>
						<!-- 歌曲操作 -->
						<view class="">
							
						</view>
					</view>
				</view>
			</view>
		<!-- </movable-view>
		</movable-area> -->
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				 
			}
		},
		methods:{
			async getsong(){
				let res = await this.$myReq({
					url:"song/url?id=1407551413"
				})
				console.log(res)
			}
		}
	}
</script>

<style>
	.songlist{
		width: 90%;
		display: flex;
		flex-flow: column nowrap;
		margin-top: 40rpx;
	}
	.ablumbtn .smbtn{
		width: 200rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.ablumbtn .playall{
		width: 150rpx;
		background-color: #f9f9f9;
		border-radius: 50rpx;
		font-size: 24rpx;
		padding: 15rpx 25rpx;
		color: #333;
		text-align: center;
	}
	.ablumbtn{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
	}
	.ablumtitle{
		width: 90%;
		background-color: #fff;
		margin: 50rpx 0;
	}
	.ablumtitle text:first-child{
		font-size: 40rpx;
		font-weight: bold;
		color: #000;
	}
	.ablumtitle text:last-child{
		font-size:15rpx ;
		color: #999;
	}
	.mianinfo{
		width: 100%;
		/* height: 1400rpx; */
		height: 100%;
		background-color: #fff;
		display: flex;
		flex-flow: column nowrap;
		/* justify-content: space-evenly; */
		align-items: center;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
	}
	.empty{
		width: 100%;
		height:450rpx ;
		/* height: 450rpx; */
		/* background-color: rgba(150,38,85,0.3); */
	}
	.mian{
		width: 100%;
		/* height: 2400rpx; */
		height: 100%;
		background-color: rgba(50,36,185,0.0);
		position: absolute;
		z-index: 99;
		/* -webkit-overflow-scrolling:touch; */
		/* top: -200px; */
		/* bottom: ; */
	}
	.ablum{
		width: 100%;
		/* position: relative; */
		/* height: 100%; */
		/* overflow: scroll; */
	} 
	.up{
		position: fixed;
		/* z-index: 1; */
		width: 100%;
		height: 750rpx;
		/* overflow: scroll; */
		/* top: 0rpx; */
		
	}
</style>
