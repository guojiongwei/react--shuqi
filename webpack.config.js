var path = require("path");
const baseUrl= "./course/";

//暴露出去后，命令行中通过webpack命令即可执行
module.exports = {
  entry: baseUrl +"entry.jsx",//入口文件
  output:{//输出文件及目录
    path: path.resolve(__dirname, ""),
    filename: "bundle.js"
  },
  //查看源代码,断点调试
  devtool:"source-map",
  //配置转换器，不需要在代码中携带很长的解析器
  module:{
    rules:[
//    {//.vue文件    -------  
//      test: /\.vue$/,
//      loader: "vue-loader"
//    },
      {//es6解析器
        test: /\.js|.jsx$/,
        loader: "babel-loader",
        //顶替.babelrc
        query:{
          presets:["es2015","react"]
        }
      },
//    {
//      test: /\.jsx$/,
//       exclude: /node_modules/,
//      loader: "jsx-loader"
//    },
      {//css文件解析器
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {//scss文件解析器
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
     
      {//背景图片的处理
        
      },
      {//字体文件的处理
        
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
  //插件
  //爬虫--解决跨域问题
  //...
}
