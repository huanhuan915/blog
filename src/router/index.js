import VueRouter from  "vue-router";
import Index from "../components/Index";
import login from "../components/login";
import reg from "../components/reg";
import admin from "../components/admin";

const routes = [
{
	path:'/',
	component:Index
},
{
	path:'/admin',
	component:admin
},
{
	path:'/admin/login',
	component:login
},{
	path:'/admin/reg',
	component:reg
}];
const router = new VueRouter({
	mode: 'history',
	routes
});
module.exports = router;