

import Vue from "vue";
import App from "./app";
import router from "./router";
import axios from 'axios';
import bus from '../../components/assets/Bus.js'
// import VueRouter from "vue-router";

Vue.config.debug = true;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted:function(){
  	var loc = window.location.hash.slice(2);
  	/*如果是在admin的根路径下，向后端发送请求，如果用户已经登陆re_code==0，则直接跳到/admin
  	如果没有登陆则跳到/login,re_code==1_*/
  	if (loc=='') {
  		axios.get('/admin').then(function(res){
  			console.log('/请求success');
  			if (res.data.re_code===0) {
          bus.$emit('userName',res.data.userName);
  				window.location.hash = '#/admin';
  			}else{
  				window.location.hash = '#/login';
  			}
  		}).catch(function(err){
  			console.log(err);
  		});
  	}
  	// alert(temp);
  }
})