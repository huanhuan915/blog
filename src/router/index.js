import VueRouter from  "vue-router";
import Index from "../views/Index/Index";
import User from "../views/User/User";

const routes = [
{
	path:'/',
	component:Index
},
{
	path:'/user',
	component:User
}];
const router = new VueRouter({
	mode: 'history',
	routes
});
module.exports = router;