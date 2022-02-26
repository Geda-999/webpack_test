const path = require("path"); //npm自带的路径管理器
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js", //入口
  output: {
    //出口(只支持绝对路径)
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    //loader的执行顺序是下往上，右往左
    rules: [
      {
        //这里是生成js文件
        test: /\.css$/,
        use: [
          {
            loader: "style-loader", // 可以把css放在页面上
          },
          {
            loader: "css-loader", // 放在后面的先被解析
          },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        // exclude：排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  //这个是生成html文件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
