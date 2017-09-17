<template>
	<div>
		<div>this user page</div>
		<input type="test" placeholder="用户名">
		<input type="button" value="click me" @click="login">
	</div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';

export default{
	data(){
		return {

		}
	},
	methods:{
		login:function(){
			console.log(1111);
			axios.get('/user/sss',{
				params: {
					ID: 12345
				}
			})
			.then(function(req,res){
				console.log("success");
				console.log(res);
			}, function(){
				console.log("error");
			})
			.catch(function(){
				console.log("error");
			});
		}
	}
}
</script>
