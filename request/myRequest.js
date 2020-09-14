//设置默认端口号
const baseUrl ='http://localhost:3000/';
//封装一个请求的函数
export const myRequest=(options)=>{
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