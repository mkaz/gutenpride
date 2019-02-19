// sets mode webpack runs under
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	mode: NODE_ENV,

	// entry is the source script
	entry: './src/gutenpride.js',

	// output is where to write the built file
	output: {
		path: __dirname,
		filename: 'block.build.js',
	},

	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	}
};
