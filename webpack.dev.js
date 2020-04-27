const { resolve } = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')

module.exports = {
	// mode: 'development',

	entry: config.entry,
	module: config.module,
	resolve: config.resolve,

	output: Object.assign(config.output, {
		hotUpdateChunkFilename: '[id].[hash].hot-update.js',
		hotUpdateMainFilename: '[hash].hot-update.json',
	}),

	plugins: [
		...config.plugins,
		// new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally
	],

	devtool: 'cheap-eval-source-map',
	// devtool: 'eval',

	devServer: {
		// hot: true,
		// enable HMR on the server

		contentBase: resolve(__dirname, 'public'),
		// match the output path

		publicPath: '/',
		// match the output `publicPath`
	},
}
