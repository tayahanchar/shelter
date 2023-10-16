const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

module.exports = {
	entry: {
    main: './src/pages/main/script.js',
    pets: './src/pages/pets/pets.js',
  },
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'assets/images/[name][ext]'
	},
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, './src/pages/main/index.html')
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/pages/main/index.html'),
      inject: true,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
        filename: 'pets.html',
        template: path.resolve(__dirname, './src/pages/pets/pets.html'),
        inject: true,
        chunks: ['pets'],
    }),
    new HtmlWebpackInlineSVGPlugin,
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
  ],
  module: {
    rules: [
       {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
      },
      {
        test:/\.(?:ico|gif|png|jpg|jpeg|)$/i,
        type: 'asset/resource',
     },
     {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]',
        },
      },
    ],
  },
  devServer: {
    open: true,
    hot: true,
    port: 8080,
  },  
};