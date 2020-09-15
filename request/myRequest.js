//设置默认端口号
const baseUrl ='http://localhost:3000/';
//封装一个请求的函数
export const myRequest=(options)=>{
	if(options.method=="POST"){
		return new Promise((resolve,reject)=>{
			uni.request({
				//访问路径
				url:baseUrl+options.url,
				method:options.method,
				data:options.data || {},
				header:{
					"Content-Type":"application/x-www-form-urlencoded"
				},
				success:res=>{
					resolve(res)
				},
				fail:err=>{
					reject(err)
				}
			})
		})
	}else{
		return new Promise((resolve,reject)=>{
			uni.request({
				//访问路径
				url:baseUrl+options.url,
				//如果没有传入方法，就默认为get请求
				method:options.method || 'GET',
				//如果没有返回数据，就为空对象
				data:options.data || {},
				success:res=>{
					resolve(res)
				},
				fail:err=>{
					reject(err)
				}
			})
		})
	}
}