
import Vue from 'vue';
import Router from 'vue-router';
import login from '../../../components/login';
import reg from '../../../components/reg';
import admin from '../../../components/admin';
import user from '../../../components/user';
import articleList from '../../../components/articleList';
import tag from '../../../components/tag';
import droped from '../../../components/droped';
import articleDetail from '../../../components/articleDetail';
Vue.use(Router);
export default new Router({
	routes: [
		{
			path: '/admin/:id/:id',
			component: admin,
			children: [
				{
					path: '/admin/user',
					component: user
				},
				{
					path: '/admin/articleList',
					component: articleList,
					children: [
						{
							path: '/admin/articleList/:id',
							component: articleDetail
						}
					]

				},
				{
					path: '/admin/tag',
					component: tag
				},
				{
					path: '/admin/droped',
					component: droped
				}
			]
		},
		{
			path: '/login',
			component: login
		},
		{
			path: '/reg',
			component: reg
		},
		{
			path: '/user',
			component: user
		}
	]
})