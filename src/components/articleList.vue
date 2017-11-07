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
			<ul id="list-article" >
				<li v-for='item in items' v-bind="{id:item._id}" @mouseenter="show($event)" @mouseleave="hide($event)">
					<div class="tit" @click="articlePreview(item)">{{item.title}}</div>
					<div class ="delArticle" ref="delArticle" style="display: none;"><img src="./images/del.svg" alt="删除" @click="del(item)"></div>
					<div class="time">{{item.date}}</div>
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
			ev_left: 0,
			ev_right: 0
		}
	},
	methods:{
		add: function(){
			var item={
				_id: '0',
				title: this.title,
				articleContent:'',
				status: 'writing',
				tags: [],
				date: ''
			};
			if (!this.items[0]) {
				this.items[0] = item;
				this.$router.push('articleList/'+item._id);
				console.log(this.$route.params);
			}else if(0 == this.items[0]._id){
				return;
			}else{
				this.items.unshift(item);
			}
			var d = new Date();
			item.date = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes();
			bus.$emit('addArticle',item);

		},
		articlePreview: function(item){
			if(this.$route.path=='/admin/articleList'){
				this.$router.push('articleList/'+item._id);
			}else{
				this.$router.replace({ path: item._id });
			}
			console.log(this.$route.path);
			bus.$emit('change',item);
		},
		// showRightMenu:function(ev){
		// 	ev.preventDefault;
		// 	this.seen = true;
		// 	this.ev_left = ev.layerX;
		// 	this.ev_top = ev.layerY;
		// },
		// closeRightMenu:function(ev){
		// 	this.seen = false;
		// },
		del:function(item){
			if (0==item._id) {
				if (this.items.length==1) {
					this.items.shift(item);
					console.log('this.items.length==1')
					//将添加文章时在路由上新增的0去掉
					//..........................
					//..........................
					//..........................
					//..........................
					//..........................
					//..........................
					//..........................
					// this.$router.replace({path: ''});
					this.$router.back();
					// delete this.$route.params.id;
					console.log(this.$route.params);
					return;
				}else{
					console.log('111');
					this.items.shift(item);
					bus.$emit('init',this.items[0]);
				}
				
				// this.$router.replace({ path: '/admin/articleList'});
				
			}
			axios.post('/article/del',{
				params: {
					id:item._id
				}
			}).then(function(res){
				bus.$emit('init',this.items[0]);
			}.bind(this)).catch(function(err){
				console.log(err);
			});
		},
		show:function(ev){
			var hoverItem = ev.target.id;
			var targetEle = document.getElementById(hoverItem);
			targetEle.childNodes[2].style.display = 'inline-block';
		},
		hide:function(ev){
			var hoverItem = ev.target.id;
			var targetEle = document.getElementById(hoverItem);
			targetEle.childNodes[2].style.display = 'none';
		}
	},
	mounted(){
		axios.get('/article/articleList').then(function(res){
			this.items = res.data;
			if (this.items.length==0) {
				this.$router.replace({ path: '/admin/articleList'});
				//不显示文章详情组件，去除
			}else{
				bus.$emit('init',this.items[0]);
			}
		}.bind(this)).catch(function(error){
			console.log(error);
		});
		// console.log(this.$refs.delArticle.style);
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
	
	position: relative;
}
#list ul li .tit{
	display: inline-block;
	width: 160px;
	height: 20px;
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
.delArticle{
	display: inline-block;
	border-radius: 13px;
	border: 1px solid lightgray;
	width: 18px;
	height: 18px;
}
.delArticle img{
	width: 18px;
	height: 18px;
}
</style>