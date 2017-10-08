<template>
	<div id="user">
		<h1>个人信息</h1>
		<div id="form">
			<form action="">
				<div class="line">
					<label for="name">博客名称</label>
					<input type="text" id="name" class="text" v-model="name">
				</div>
				<div class="line">
					<label for="sign">博客说明</label>
					<input type="text" id="sign" class="text" v-model="sign">
				</div>
				<div class="line" id="intro">
					<div id="introLabel">个人介绍</div>
					<div id="introText">
						<textarea  wrap="soft" maxslength="100" v-model="intro"></textarea>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';

export default{
	data(){
		return {
			name: '欢欢欢欢欢....',
			sign: '自己搭建的博客系统',
			intro: '前端使用了vue，后端使用了node.js'
		}
	},
	methods:{
		
	}
}
</script>
<style scoped>
#user{
	display: inline-block;
	float: left;
	flex: 1;
	font-family: Microsoft YaHei;
}
h1{
	position: relative;
	top: 30px;
	width: 100%;
	text-align: center;
}
.line{
	text-align: center;
	line-height: 50px;
}
#form{
	width: 500px;
	margin: auto;
	position: relative;
	top: 100px;
}
label{
	display: inline-block;
	width: 100px;
	font-size: 17px;
}
.text{
	display: inline-block;
	width: 350px;
	height: 30px;
	font-size: 15px;
	color: #4e4848;
}
#intro{
	/* vertical-align:middle; */
}
#introLabel{
	display: inline-block;
	width: 100px;
	vertical-align:middle;
	font-size: 17px;
}
#introText{
	height: 100px;
	width: 354px;
	display: inline-block;
	vertical-align: middle;
}
textarea{
	resize: none;
	width: 348px;
	height: 100px;
	font-size: 15px;
	color: #4e4848;
}

</style>