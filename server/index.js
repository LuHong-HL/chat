const express = require('express')

const app = express()

//设置全局属性
app.set('secret', 'suijiyichuan')

// 跨域处理
app.use(require('cors')())
// json格式数据处理
app.use(express.json())
//开放uploads文件中的静态资源
app.use('/uploads', express.static(__dirname + '/uploads'))

//链接数据库
require('./plugins/db')(app)
//加载路由
require('./routes/admin/index')(app)

app.listen(3000,()=>{
    console.log('http://localhost:3000/ is running!!!')
})