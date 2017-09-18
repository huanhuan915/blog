<template>
<div id="main-wrapper" >
<header>
	<div id="logo"></div>
</header>
<section>
	<div id="main-form">
		<form method="post" id="submitForm">
		<span></span>
		<label for="uaername">
		用户名<p id="tip1" class="tip">{{ tip1 }}</p>
		</label>
		<input type="text" name="userInfo" class="formElement text" id="username" @blur="testUserName" v-model="username" />		
		<label for="password">
		密&nbsp;&nbsp;&nbsp;码<p id="tip2" class="tip">{{ tip2 }}</p>
		</label>
		<input type="password" name="userInfo" class="formElement text" id="password" placeholder="为6~12位字母或数字" v-model="password" @blur="testPassword()">
		<label for="checkbox" class="formSpecial">
		<input type="checkbox" value="记住登陆状态" name="checkbox" id="checkbox" class="formSpecial">
		记住登陆状态
		</label>
		<input type="submit" name="submit" value="登陆" class="formSpecial" id="button" @click.prevent="login()">
		</form>
	</div>
	<div class="Other">
	<div id="toReg" class="more">
		<a href="reg">注册</a>|
		<a href="#">找回密码</a>
	</div>
	<div id="toHome" class="more">
	<a href="#">回到主页</a>
	</div>
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
			tip1: '',
			tip2: '',
			username: '',
			password: ''
		}
	},
	methods:{
		login:function(ev){
			if (this.username.length>=6 && this.username.length<=12 && this.password.length>=6 && this.password.length<=12) {
				console.log(1111);
				//发送登陆post请求
				axios.post('/login/login',{
					params: {
						username: this.username,
						password: this.password
					}
				})
				.then(function(res){
					//成功回掉
					console.log("success");
					console.log(res);
				}, function(){
					console.log("error");
				})
				.catch(function(){
					console.log("error");
				});
			}
		},
		testUserName: function(){
			if (this.username == '') {
				this.tip1 = '请输入用户名';
			}else if (this.username.length<6 || this.username.length>12) {
				this.tip1 = '用户名为6-12位字符';
			}else{
				this.tip1 = '';
			}
		},
		testPassword: function(){
			if (this.password.length<6 || this.password.length>12) {
				this.tip2 = '密码为6-12位数字或字母';
			}else{
				this.tip2 = '';
			}
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
	height: 230px;
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
    margin-right: 23px;
    background-color: rgba(0,0,0,0.2);
    height: 40px;
    width: 80px;
    background-color: silver;
}
#button:hover{
	background-color: #336666;
	width: 82px;
	height: 42px;
}
section .other{
	width: 350px;
	height: 60px;
	margin: 0 auto;
}
section .more{
	width: 350px;
	height: 30px;
	display: block;
	margin: auto;
	margin-top: 20px;
	margin-bottom:0;
}
section .more a{
	text-decoration: none;
	font-size: 15px;
	color: lightgray;
}
section .more a:hover{
	color: gray;
	font-size: 17px;
	font-weight: 20;
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
