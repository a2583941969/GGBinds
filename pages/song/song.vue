<template>
	<view class="song">
		<image :src="bgimage" mode="" class="bg-set"></image>
		这里是音乐播放页面
		</view>
</template>

<script>
	export default {
		data() {
			return {
				bgimage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599923234700&di=31b452aebe8b4812963fd36e63e14f82&imgtype=0&src=http%3A%2F%2Fbos.pgzs.com%2Frbpiczy%2FWallpaper%2F2013%2F2%2F3%2F897cadfc9409480db13ab11f6f61be21-4.jpg'
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	color: #FFFFFF;
}

.bg-set{
	position: fixed;
	   width: 100%;
	   height: 100%;
	   top: 0;
	   left: 0;
	   z-index: -1;
}
</style>
