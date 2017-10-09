<template>
<div id="articleDetail-wrapper">
	<div id="articleDetail">
		<div id="title">
			<input type="text" placeholder="请输入文章标题">
		</div>
		<div id="toolbar">
			
		</div>
		<div id="editor">
			<textarea ref="area" cols="30" rows="10" id="field" v-model="message"></textarea>
			<!-- <simple-mde v-model="message"></simple-mde> -->
		</div>
	</div>
</div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';
import marked from 'marked';
import simplemde from 'simplemde';
// import SimpleMde from './simple-mde.vue' 
export default {
	data() {
      return { 
      	message: 'ssssssssssssssssHello !!' 
      }
    },
    // components: { 
    // 	SimpleMde 
    // },
    methods:{

    },
    mounted(){
    	this.mde = new simplemde({
    		element: document.getElementById("field"),
    		autoDownloadFontAwesome: true,
    		status: false
    	}),
    	this.mde.value(this.message);
    }
}
</script>
<style scoped>
@import '../../node_modules/simplemde/src/css/simplemde.css';
#articleDetail-wrapper{
	flex: 1;
}
#articleDetail{
	
}

#title{
	width: 100%;
	height: 50px;

}
#title input{
	display: inline-block;
	width: 100%;
	height: 90%;
	vertical-align: middle;
}

</style>