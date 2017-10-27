<template>
<div id="articleDetail-wrapper">
	<div id="articleDetail">
		<div id="title">
			<input type="text" v-model="title">
		</div>
		<div id="toolbar">
			<div @click="save()"><a href="javascript:void(0)">保存草稿</a></div>
			<div @click="post()"><a href="javascript:void(0)">发布文章</a></div>
			<!-- <div>删除</div> -->
		</div>
		<div id="editor">
			<textarea id="field" v-model="message"></textarea>
		</div>
	</div>
</div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';
import marked from 'marked';
import simplemde from 'simplemde';
import highlight from 'highlight.js';

import bus from './assets/Bus.js';
export default {
	data() {
      return { 
        id:'',
      	message: '' ,
      	mde: undefined,
      	title: '      请输入文章标题......',
        status:'writing'
      }
    },
    methods:{
    	save: function(){
            console.log(this.$route.path);
            this.message = this.mde.value();
    		axios.post('/article/save',{
    			params: {
    				ArtTitle: this.title,
    				ArtContent: this.message,
                    ThisData: 'Date',
                    Status: this.status,
                    Tags: [],
                    id: this.id
    			}
    		})
    		.then(function(res){
                if (res.data.isSave==1) {
                    this.$router.replace({ path: res.data.articleId });
                    alert('保存成功');
                }else{
                    alert('保存失败');
                }
    		}.bind(this),function(err){
    			console.log(err);
    		})
    		.catch(function(err){
    			console.log(err)
    		});
    	},
    	post: function(){
            this.status = 'publish'
            axios.post('/article/save',{
                params: {
                    ArtTitle: this.title,
                    ArtContent: this.message,
                    ThisData: 'Date',
                    Status: this.status,
                    Tags: []
                }
            })
            .then(function(res){
                if (res.data.isSave==1) {
                    alert('发布成功');
                }else{
                    alert('发布失败');
                }
                //保存成功回调
                console.log(res);
            },function(err){
                console.log(err);
            })
            .catch(function(){
                console.log("error")
            })
    	}
    },
    mounted(){
    	this.mde = new simplemde({
    		element: document.getElementById("field"),
    		autoDownloadFontAwesome: true,
    		status: true,
    		status: ['autosave','lines','words','cursor'],
    		lineWrapping: false,
    		renderingConfig: {
                codeSyntaxHighlighting: true
    		},
    		initialValue: "",
    		tabSize: 4,
    		autofocus: true,
    		autosave: {
    			enable: true,
    			delay: 2000
    		},
    		toolbar: [
    		  'bold', 'italic', 'heading', 'quote', 'unordered-list', 'ordered-list', 
    		  'link', 'image', 'table', 'code', 'fullscreen', 'side-by-side' , 'guide'
    		],
    	});
    },
    created: function(){
        bus.$on('change',function(item){
            this.title = item.title;
            this.mde.value(item.articleContent);
            this.id = item._id;
        }.bind(this));
    }
}
</script>
<style scoped>
@import '../../node_modules/simplemde/src/css/simplemde.css';
@import '../../node_modules/highlight.js/styles/vs2015.css';
/* @import '../../node_modules/font'; */
.CodeMirror {
	height: 100%;
}
#articleDetail-wrapper{
	flex: 1;
}
#articleDetail{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

#title{
	width: 100%;
	height: 50px;
	flex: none;
}
#title input{
	display: inline-block;
	box-sizing: border-box;
	width: 100%;
	height: 50px;
	text-indent: 30px;
	vertical-align: middle;
	border-radius: 3px;
	border-left: 0;
	padding: 0;

}
#title imput:hover{
	/* border: 2px solid blue; */
}
#toolbar{
	text-align: right;
	flex: none;
}
#toolbar div{
	display: inline-block;
	height: 30px;
	width: 70px;
	text-align: center;
	margin-right: 30px;
	position: relative;
	line-height: 30px;
	border-radius: 2px;
	border: 1px solid #c0c1d5;
	background-color: #e3e5f3;
}
#toolbar div:hover{
    background-color: #b5cbf1;
}
#editor{
	flex: 1;
    display: flex;
    flex-direction: column;
}
#editor .CodeMirror {
    flex:1;
}
a{
	text-decoration: none;
	color: black;
}
</style>