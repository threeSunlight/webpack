
// webpack.config.js 是 webpack 的打包配置文件，是给 webpack 使用的
// 而 webpack 是基于 Node 开发，所以我们可以在这里使用 Node 包

const path = require('path')
// 现在执行 webpack 命令就会自动来读取当前文件然后打包
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./src/main.js',

  	// app: './src/main.js',
  	// print: './src/print.js'
 
     devtool: 'inline-source-map',
     devServer: {
     contentBase: './dist' // 配置服务器的 www 目录
   },

  output: {
    // path: 'C:/Users/lpz/Desktop/vuejs/06/code/webpack-demos/demo3/dist/', // 打包的目标文件存储的目录，该目录必须是绝对路径
    path: path.join(__dirname, './dist/'), // 动态的绝对路径
    filename: 'bundle.js' // 打包的文件名称
  },
  plugins: [
  	new HtmlWebpackPlugin({
  	   template: './index.html'
  	})
  ],

  // 针对 webpack-dev-server 的配置选项
  devServer: {
    //contentBase 就是用来配置你的服务的www 目录
    //当你访问这个服务的时候, 会自动放到到 dist 中的 index
    // devServer 默认监听 8080 端口
    contentBase : './dist'
  },
  module: {
  	rules: [
    //以css结束的文件
  	  {
  	  	test: /\.css$/,
  	  	use:[
  	  		'style-loader',
  	  		'css-loader'
  	  	]
  	  },
  	  {
  // 当加载以 .js 结尾的文件的时候使用 babel-loader 编译转换为 EcmaScript 6
  				test: /\.js$/,
 				exclude: /(node_modules|bower_components)/, // 排除掉第三方包
 				use: {
    			loader: 'babel-loader',
    			options: {
      			presets: ['env'] // 配置 babel-loader 的转换规则，babel-preset-dev 是转换规则，这里就配成 env
    			}
  			}
		  },
      //图片
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       //以less结束的文件
      {
        test: /\.less$/,
        use: [
          'style-loader', // 根据模块中的 css 字符串生成 style 节点插入 head 头部
          'css-loader', // 把 css 转成 JavaScript 模块
          'less-loader' // 把 less 转成 css
        ]
      },

       {
        // 当匹配到以 .vue 结尾的文件的时候使用 vue-loader 处理
        // vue-loader 还依赖了 vue-template-compiler
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      }
 	]
  }
};