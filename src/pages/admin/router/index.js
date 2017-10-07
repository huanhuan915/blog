
import Vue from 'vue';
import Router from 'vue-router';
import login from '../../../components/login';
import reg from '../../../components/reg';

Vue.use(Router);
export default new Router({
	routes: [
		// {
		// 	path: '/',
		// 	name: '',
		// 	component: login
		// },
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/reg',
			name: 'reg',
			component: reg
		}
	]
})