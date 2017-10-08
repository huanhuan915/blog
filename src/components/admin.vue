<template>
<div id="main-wrapper" >
	<div id="left-list">
		<ul>
			<li>
				<router-link to="/admin/user">
					<img src="./images/user.svg" alt="个人中心">
				</router-link>
			</li>
			<li>
				<router-link to="/admin/articleList">
					<img src="./images/article.svg" alt="文章列表">
				</router-link>
			</li>
			<li>
				<router-link to="/admin/tag">
					<img src="./images/tag.svg" alt="标签">
				</router-link>
			</li>
			<li>
				<router-link to="/admin/droped">
					<img src="./images/droped.svg" alt="标签">
				</router-link>
			</li>
		</ul>
	</div>
	<router-view></router-view>
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
			password: '',
			uPattern: /^[a-zA-Z0-9]{6,16}$/,
			pPattern: /^[a-zA-Z0-9]{6,16}$/
		}
	},
	methods: {

	}
}
</script>

<style lang="less" scoped>
#main-wrapper{
	display: flex;
}
#left-list{
	width:90px;
	height:100vh;
	border-right: 1px solid rgba(198, 196, 195, 0.62);
	display: inline-block;
	flex:none;
	float :left;
	ul{
		margin: 0;
		padding-left: 0;
		padding-top: 100px;
		li{
			list-style: none;
			height:100px;
			width: 70px;
			border
			a{
				display: block;
				height: 50px;
			}
			img{
				width:45px;
				height: 45px;
				padding-left:20px;
			}
		}
	}
}

</style>
