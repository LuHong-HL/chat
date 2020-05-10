module.exports = {
    //打包编译的时候输出的文件夹
    outputDir: __dirname + '/../server/public/admin',
    // 生成的静态文件路径
    publicPath: process.env.NODE_ENV === 'production'
      ? '/admin'
      : '/'
  }