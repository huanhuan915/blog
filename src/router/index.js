import VueRouter from  "vue-router";
import Index from "../views/Index/Index";
import login from "../views/User/login";
import reg from "../views/User/reg"

const routes = [
{
	path:'/',
	component:Index
},
{
	path:'/login',
	component:login
},{
	path:'/reg',
	component:reg
}];
const router = new VueRouter({
	mode: 'history',
	routes
});
module.exports = router;