
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
<<<<<<< HEAD
var __uniConfig = {"pages":["pages/index/index","pages/song/song","pages/mine/mine"],"window":{"navigationBarBackgroundColor":"#FFFFFF00","backgroundColor":"#FFFFFF","navigationBarTextStyle":"black"},"tabBar":{"color":"#707070","selectedColor":"#2c2c2c","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"static/icon/home.png","selectedIconPath":"static/icon/homeselect.png"},{"text":"我的","pagePath":"pages/mine/mine","iconPath":"static/icon/mine.png","selectedIconPath":"static/icon/mineselect.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"LazyMusic","compilerVersion":"2.8.11","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"black","titleNView":false}},{"path":"/pages/song/song","meta":{},"window":{"titleNView":false}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"black","titleNView":false}}];
=======
var __uniConfig = {"pages":["pages/index/index","pages/mine/mine","pages/song/song"],"window":{"navigationBarBackgroundColor":"#FFFFFF00","backgroundColor":"#FFFFFF","navigationBarTextStyle":"black"},"tabBar":{"color":"#707070","selectedColor":"#2c2c2c","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"static/icon/home.png","selectedIconPath":"static/icon/homeselect.png"},{"text":"我的","pagePath":"pages/mine/mine","iconPath":"static/icon/mine.png","selectedIconPath":"static/icon/mineselect.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"LazyMusic","compilerVersion":"2.8.11","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"black","titleNView":false}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"black","titleNView":false}},{"path":"/pages/song/song","meta":{},"window":{"titleNView":false}}];
>>>>>>> Lee
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
