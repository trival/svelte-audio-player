const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'production',

	entry: path.resolve(__dirname, 'lib', 'main.js'),

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'audio-player.js',
		library: 'audioPlayer',
		libraryTarget: 'umd',
	},

	module: {
		rules: [
			{
				test: /\.(html|svelte)$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true,
					},
				},
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},

	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte'),
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main'],
		modules: ['node_modules'],
	},

	plugins: [new MiniCssExtractPlugin()],
}
