<template>
<div>
	<div id="articleDetail">
		article {{ $route.params.id }}
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos quod harum officiis dolorem eius! Voluptates repellendus provident, quos eos dolore assumenda voluptatibus atque, officiis doloribus hic, tempora dolorem maiores!
	</div>
</div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';

export default{
	data(){
		return {

		}
	},
	methods:{

	}

}
</script>
<style scoped>
#articleDetail{
	flex: 1;
	
}

</style>