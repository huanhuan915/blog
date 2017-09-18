<template>
	<div id="main-wrapper" >
	<header>
		<div id="logo"></div>
	</header>
	<section>
		<div  id="main-form">
			<form method="post" id="submitForm">
				<span></span>
				<label for="username">
				用户名<p id="tip1" class="tip"></p>
				</label>
				<input type="text" name="userInfo" class="formElement text" id="username" placeholder="为6~12位字母或数字" />

				<label for="password">
				密码<p id="tip2" class="blackTip"></p>
				</label>
				<input type="password" name="userInfo" class="formElement text" id="password" placeholder="为6~12位字母或数字">

				<label for="passwordAgain">
				确认密码<p id="tip3" class="blackTip"></p>
				</label>
				<input type="password" name="userInfo" class="formElement text" id="passwordAgain">

				<label for="email">
				邮箱<!-- <p id="tip4" class="tip">两次输入的密码不同</p> -->
				</label>
				<input type="email" name="userInfo" class="formElement text" id="email">

			<div id="links">
				<div id="toLogin" class="more">
					<a href="login">登陆 </a>|
					<a href="#"> 关于本站</a>
				</div>
				<input type="submit" name="submit" value="注册" class="formSpecial" id="button">
			</div>
			</form>
		</div>

	</section>
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

<style lang="less" scoped>
body{
	width: 100%;
	height: 100%;
	background-image: url("../assets/whitebg.jpg");
	background-repeat: repeat;
}
header{
	width: 100%;
	height: 200px;
}
header #logo{
	width: 150px;
	height: 150px;
	margin: auto;
	position: relative;
	top: 45px;
	border-radius: 75px;
	background-image: url("../assets/mylogo.png");
	background-repeat: no-repeat;
	background-size: cover;
	border:1px solid #fff;
}
section #main-form{
	width: 350px;
	height: 350px;
	border:1px solid lightgray;
	margin: 0 auto;
	background-color: rgba(0,0,0,0.02);
}
form{
	display: block;
	top: 20px;
}
span{
	display: block;
	height: 15px;
}
form .formElement{
	display: block;
	width: 300px;
	height: 30px;
}
form .formSpecial{
	display: inline-block;
}
label{
	font-size: 15px;
	line-height: 20px;
	margin: 0;
	margin-left: 23px;
	margin-top: 20px;
}
input{
	margin: 5px auto;
}
#button{
	float: right;
    margin-top: 20px;
    margin: right;
    margin-right: 24px;
    background-color: rgba(0,0,0,0.2);
    height: 40px;
    width: 80px;
    background-color: silver;
    display: inline-block;
}
#button:hover{
	background-color: #336666;
	width: 82px;
	height: 42px;
}
section {
	.more{
		width: 170px;
		height: 30px;
		margin: auto;
		margin-top: 20px;
		margin-bottom:0;
		margin-left: 24px;
		display: inline-block;
		a {
			text-decoration: none;
			font-size: 15px;
			color: lightgray;
		}
		a:hover {
			color: gray;
			font-size: 17px;
			font-weight: 20;
		}
	}
}
.tip{
	display: inline-block;
	margin: 0;
	margin-left: 10px;
	color: red;
}
.blackTip{
	color: black;
	display: inline-block;
	margin: 0;
	margin-left: 10px;
}
</style>
