<template>
<div>
	<div id="articleDetail">
		<div id="title">
			
		</div>
		<div id="toolbar">
			
		</div>
		<div id="editor">
			<textarea :value="input" @input="update"></textarea>
			<div v-html="compiledMarkdown"></div>
		</div>
	</div>
</div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';

export default{
	el: '#editor',
	  data: {
	    input: '# hello'
	  },
	  computed: {
	    compiledMarkdown: function () {
	      return marked(this.input, { sanitize: true })
	    }
	  },
	  methods: {
	    update: _.debounce(function (e) {
	      this.input = e.target.value
	    }, 300)
	  }

}
</script>
<style scoped>
#articleDetail{
	flex: 1;

}
textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>