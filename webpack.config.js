const path = require('path');

module.exports = {
	entry: './src/index.js',  // Укажите путь к вашему входному файлу
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,  // Применять к файлам с расширением .js
				exclude: /node_modules/,  // Не применять к файлам в node_modules
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};