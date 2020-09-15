<template>
	<view class="index">
		 <!-- 顶部搜索框 -->
		 <view class="inputbox">
			 <input placeholder="搜索热门的心情电台" placeholder-style="color:#C0C0C0" />
		 </view>
		 <!-- 测试组件 -->
		 <my-alnum :name="name" :page_img="page_img" :chanteur="chanteur" :id="aid" :bool="false" :total_songs="total_songs"></my-alnum>
		 <my-songlist :sid="sid" :sname="sname" :alnumName="alnumName" :singer="singer":sing_img="sing_img" :isAlnum="false"></my-songlist>
		 <!-- 测试组件结束 -->
		 <AlbumPlay></AlbumPlay>
	
	</view>
</template>

<script>
	import myAlnum from "../../myComponents/my-alnum/myAlnum.vue"
	import mySonglist from "../../myComponents/my-songlist/mySongList.vue"
	export default {
		components:{
			myAlnum,
			mySonglist
		},
		data() {
			return {
				// 以下为my-alnum组件测试数据
				name:"IWMT",
				page_img:"https://img01.dmhmusic.com/0412/M00/23/27/ChAKEV9NWcGANO1AAGkZ_Pa2DZs986.jpg@w_400,h_400",
				chanteur:"Rider",
				aid:32132,
				total_songs:28,
				// 以下为my-songlist测试数据
				sid:132134,
				sname:"Autumn Leaves",
				alnumName:"Autumn Leaves",
				singer:"Mark Parr",
				sing_img:"https://img01.dmhmusic.com/0412/M00/22/41/ChAKEV9MMKmAeQS0AIyoeZle7xw520.jpg@w_200,h_200"
			}
		},
		
		methods: {
			async test(){
				let res =await this.$myReq({
					url:'song/url?id=1407551413',
					methods:'GET'
				});
				console.log(res)
			}
			
		},
		
		mounted(){
		
		}
	}
</script>

<style>

.index>.inputbox{
	border: 1px solid gray;
	padding: 15rpx 15rpx;
	width: 80%;
	border-radius: 5rpx;
	margin: 90rpx auto;
	border: 0;
	outline: 0;
	box-shadow: 10rpx 5rpx 30rpx #C0C0C0;
	font-size: 20rpx;
}
</style>
