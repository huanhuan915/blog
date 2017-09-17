import VueRouter from  "vue-router";
import Index from "../views/Index/Index";
import login from "../views/User/login";

const routes = [
{
	path:'/',
	component:Index
},
{
	path:'/login',
	component:login
}];
const router = new VueRouter({
	mode: 'history',
	routes
});
module.exports = router;