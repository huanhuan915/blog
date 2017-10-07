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
				用户名<p class="tip">{{tip1}}</p>
				</label>
				<input type="text" name="userInfo" class="formElement text" placeholder="为6~12位字母或数字" v-model="username" @blur="testUserName()"/>

				<label for="password">
				密码<p class="tip">{{tip2}}</p>
				</label>
				<input type="password" name="userInfo" class="formElement text" placeholder="为6~12位字母或数字" v-model="password" @blur="testPassword">

				<label for="passwordAgain">
				确认密码<p class="tip">{{tip3}}</p>
				</label>
				<input type="password" name="userInfo" class="formElement text" v-model="passwordA" @blur="testPasswordA">

				<label for="email">
				邮箱<!-- <p id="tip4" class="tip">两次输入的密码不同</p> -->
				</label>
				<input type="email" name="userInfo" class="formElement text" id="email">

			<div id="links">
				<div id="toLogin" class="more">
					<a href="/admin.html#/login">登陆 </a>|
					<a href="#"> 关于本站</a>
				</div>
				<input type="submit" name="submit" value="注册" id="button" @click.prevent="reg()">
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
			tip1:'',
			tip2:'',
			tip3:'',
			username:'',
			password:'',
			passwordA:'',
			email:'',
			regFlag:''
		}
	},
	methods:{
		reg:function(){
			if (!(this.tip1 || this.tip2 || this.tip3)) {
				axios.post('/user/reg',{
					params: {
						username:this.username,
						password:this.password,
						email   :this.email
					}
				})
				.then(function(res){
					if (res.data.isReg==-1) {
						alert('注册失败，请稍后重试或联系管理员');
					}else if (res.data.isReg==0) {
						alert('您已注册,请登陆');
					}else{
						alert('注册成功，请登录');
						window.location = '/login';
					}
				}.bind(this), function(){
					console.log("/user/reg 请求错误");
				})
				.catch(function(error){
					console.log(error);
				});
			}
			
		},
		//注册时检测用户名是否已经被注册
		testUserName:function(){
			var uPattern = /^[a-zA-Z0-9]{6,16}$/;

			if (this.username == '') {
				this.tip1 = '请输入用户名';
			}else if(!uPattern.test(this.username)) {
				this.tip1 = '用户名为6-16位字母或数字';
			}else{
				this.tip1 = '';
				axios.post('user/queUsername',{
					params: {
						username: this.username
					}
				}).then(function(res){
					if (res.data=='exist') {
						this.tip1 = '用户名已存在';
					}else{
						this.tip1 = '';
					}
				}.bind(this), function(){
				}).catch(function(error){
					console.log(error);
				})
			}
		},
		testPassword:function(){
			var pPattern = /^[a-zA-Z0-9]{6,16}$/;
			if (this.password.length == 0) {
				this.tip2 = '请输入密码';
			}else if (!pPattern.test(this.password)) {
				this.tip2 = '密码格式错误';
			}else if (pPattern.test(this.password)){
				this.tip2 = '';
			}else if (this.passwordA !== this.password) {
				this.tip3 = '两次密码不同';
			}
		},
		testPasswordA:function(){
			if (this.password !== this.passwordA) {
				this.tip3 = '两次密码不同';
			}else{
				this.tip3 = '';
			}
		}

	}
}
</script>

<style lang="less" scoped>
body{
	width: 100%;
	height: 100%;
	background-image: url("./images/whitebg.jpg");
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
	background-image: url("./images/mylogo.png");
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
form #button{
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
