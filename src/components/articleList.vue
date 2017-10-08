<template>
<div id="main-wrapper">
	<div id="articleList">
		<div id="articleListHeader">
			<div id="titleIcon"></div>
			<div id="articleListTitle">
				文章列表
			</div>
			<div id="addArticle"><img src="./images/add.svg" alt=""></div>
		</div>
		<div id="list">
			<ul id="list-article">
				<li>
					<router-link to="/admin/articleList/001">
						恩恩恩恩
					</router-link>
					<div class="time">2017-10-8</div>
				</li>
				<li>
					<router-link to="/admin/articleList/002">
						ssssss哈哈哈aaaaaaaaaaaaaaa
					</router-link>
					<div class="time">2017-10-8</div>
				</li>
				<li>
					<router-link to="/admin/articleList/003">
						好烦啊
					</router-link>
					<div class="time">2017-10-8</div>
				</li>
				<li>
					<router-link to="/admin/articleList/004">
						淡定朋友aaaaaaaaaaaaaaa
					</router-link>
					<div class="time">2017-10-8</div>
				</li>
				<li>
					<router-link to="/admin/articleList/005">
						啊啊啊啊啊啊啊啊啊啊啊啊aaaaaaaaaaaaaaa
					</router-link>
					<div class="time">2017-10-8</div>
				</li>

			</ul>
		</div>
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
			items: [],
		}
	},
	methods:{

	}

}
</script>
<style scoped>
#articleList{
	width: 225px;
	border-right: 1px solid rgba(198, 196, 195, 0.62);
	height: 100vh;
	overflow: auto;
	flex: none;
}
#articleListHeader{
	width: 100%;
	height: 30px;
	text-align: center;
	padding: 25px 0 25px 0;
	vertical-align: middle;
	border-bottom: 1px solid rgba(198, 196, 195, 0.62);
}
#articleListHeader>div{
	display: inline-block;
	height: 30px;
	vertical-align: middle;
	line-height: 30px;
}
#articleListHeader img{
	height: 25px;
	width: 25px;
	padding-left: 20px;
}
#list ul{
	margin: 0;
	width: 100%;
	padding-left: 0;
}
#list ul li{
	list-style: none;
	height: 50px;
	width: 190px;
	border-bottom: 1px solid rgba(198, 196, 195, 0.62);
	margin: 0 15px;
	padding-top: 15px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
#list ul li .time{
	font-size: 13px;
	color: gray;
	text-align: right;
	padding-top: 7px;
	width: 190px;
}
a{
	text-decoration: none;
	color: black;
	font-size: 18px;
	font-weight: 550;
	letter-spacing: 2px;
}
a:hover{
	color: blue;
}
</style>