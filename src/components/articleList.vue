<template>
<div id="main-wrapper">
	<div id="articleList">
		<div id="articleListHeader">
			<div id="titleIcon"></div>
			<div id="articleListTitle">
				文章列表
			</div>
			<div id="addArticle"><img src="./images/add.svg" alt="新建" @click="add"></div>
		</div>
		<div id="list">
			<ul id="list-article">
				<li v-for='item in items'>
					<div @click="articlePreview(item)">{{item.title}}</div>
					<!-- <router-link @click="articlePreview(item._id)">{{item.title}}</router-link> -->
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
import bus from './assets/Bus.js';

export default{
	data(){
		return {
			items: [],
			title: '请输入文章标题......',
		}
	},
	methods:{
		add: function(){
			var item={
				_id: '0',
				title: this.title,
				articleContent:'',
				status: 'writing',
				tags: []
			};
			this.items.unshift(item);
		},
		articlePreview: function(item){
			if(this.$route.path=='/admin/articleList'){
				this.$router.push('articleList/'+item._id);
			}else{
				this.$router.replace({ path: item._id });
			}
			console.log(this.$route.path);
			bus.$emit('change',item);
		}
	},
	mounted(){
		axios.get('/article/articleList').then(function(res){
			this.items = res.data;
		}.bind(this)).catch(function(error){
			console.log(error);
		});
		console.log(this.items);
		console.log(this.items[0]);

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
	height: 32px;
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
	margin-left: 55px;
	border: 1px solid #fff;
}
#articleListHeader img:hover{
	border-radius: 13px;
	border: 1px solid lightgray;
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