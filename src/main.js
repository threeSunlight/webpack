
//首先先来载入css文件
import './foo.css';
import './main.css';
import img from './1.jpg';
import './less/main.less';
import Vue from 'vue'
import App from './App.vue';
const foo = 'bar'


var myimg = new Image();
myimg.src = img
document.querySelector('span').appendChild(myimg);


//组件系统启动入口
new Vue({
	el:'#app',
	render: function (create) {
		return create(App);
	}
})
console.log(foo);
console.log(123);
console.log(456);

