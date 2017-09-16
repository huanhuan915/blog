import Vue from "vue";
import App from "./app";
import router from "./router/index";
import VueRouter from "vue-router";

Vue.config.debug = true;
///////////
Vue.use(VueRouter);
new Vue({
	el:"#app",
	router:router,//添加路由配置
	render:h=>h(App)
});

