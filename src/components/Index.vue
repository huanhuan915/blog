<template>
	<div id="layout">
		<div id="top-bar">
			<div id="icon"></div>
			<ul>
				<li><a href="javascript:void(0)">Home</a></li>
				<li><a href="javascript:void(0)">Tags</a></li>
				<li><a href="javascript:void(0)">About</a></li>
			</ul>
		</div>
		<div id="content">
			<div id="artical-list">
				<ul>
					<li>
						<h3>time</h3>
						<h2><a href="javascript:void(0)">title</a></h2>
					</li>
					<li>
						<h3>time</h3>
						<h2><a href="javascript:void(0)">title</a></h2>
					</li>
					<li>
						<h3>time</h3>
						<h2><a href="javascript:void(0)">title</a></h2>
					</li>
					<li>
						<h3>time</h3>
						<h2><a href="javascript:void(0)">title</a></h2>
					</li>
					<li>
						<h3>time</h3>
						<h2><a href="javascript:void(0)">title</a></h2>
					</li>
					<li>
						<h3>time</h3>
						<h2><a href="javascript:void(0)">title</a></h2>
					</li>
					<li>
						<h3>time</h3>
						<h2><a href="javascript:void(0)">title</a></h2>
					</li>
					<li>
						<h3>time</h3>
						<h2><a href="javascript:void(0)">title</a></h2>
					</li>
					<li>
						<h3>time</h3>
						<h2><a href="javascript:void(0)">title</a></h2>
					</li>
				</ul>
			</div>
		</div>
		<div id="footer"></div>
	</div>
</template>
<script>
import Vue from "vue";
import axios from "axios";

export default{
	data(){
		articalInfo:[
			{
				title:''
			}
		]
	}
}
</script>
<style scoped>
a{
	text-decoration: none;
	color: black;
}
#top-bar{
	/* background-image: url('../assets/bar-cat.svg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center; */
	width: 100%;
	height: 125px;
}
#top-bar ul{
	/* text-decoration: none; */
	float: right;
	right: 20px;
}
#top-bar li{
	list-style: none;
	display: inline-block;
	padding: 30px;

}
#artical-list{
	width: 60%;
	margin: 0 auto;
}#artical-list ul{
	margin: 0;
}

#artical-list li{
	list-style: none;
	height: 80px;
	padding-top: 25px;
	border-bottom: 1px solid lightgray;
}
#artical-list h3{
	display: inline-block;
	color: lightgray;
}
#artical-list h2{
	display: inline-block;
	margin-left: 50px;
}
</style>