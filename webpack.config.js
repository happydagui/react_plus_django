var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './media'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			loader: 'babel-loader?presets[]=es2015&presets[]=react'
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.less$/,
			loader: 'style!css!less'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'
		}]
	}
}