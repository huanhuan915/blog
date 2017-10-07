// import Vue from "vue";
// import App from "./app";
// import router from "./router/index";
// import VueRouter from "vue-router";

// Vue.config.debug = true;
// ///////////
// Vue.use(VueRouter);
// new Vue({
// 	el:"#app",
// 	router:router,//添加路由配置
// 	render:h=>h(App)
// });

import Vue from "vue";
import App from "./app";
import router from "./router";

Vue.config.debug = true;
Vue.config.productionTip = false;
///////////
// Vue.use(VueRouter);
// new Vue({
// 	el:"#app",
// 	router:router,//添加路由配置
// 	render:h=>h(App)
// });

new Vue({
	el:'#app',
	router,
	template: '<App/>',
	components: { App }
})
