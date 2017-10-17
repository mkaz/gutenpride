module.exports = {
	entry: './gutenpride.js',
	output: {
		path: __dirname,
		filename: 'block.built.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	}
};
