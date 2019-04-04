

module.exports = {
	entry:'./src/index.js',
	output:{
		filename:'./test.js'
	},
	devServer:{
		contentBase:'./src',
		inline:true,
		hot:true,
		port:8080
	}
}