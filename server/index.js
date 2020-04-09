const express = require('express')

const app = express()

// socket.io 的引入
const server = require('http').createServer(app);
const io = require('socket.io')(server);


//设置全局属性
app.set('secret', 'suijiyichuan')

// 跨域处理
app.use(require('cors')())
// json格式数据处理
app.use(express.json())
//开放uploads文件中的静态资源
app.use('/uploads', express.static(__dirname + '/./uploads'))

//链接数据库
require('./plugins/db')(app)
//admin 加载路由
require('./routes/admin/index')(app)
//web 加载路由
require('./routes/web/index')(app)




// 覆盖默认方法以生成您的自定义套接字ID
let custom_id = 1
io.engine.generateId = (req) => {
    return custom_id++; // custom id must be unique
}


// 建立 socket.io 连接事件
// io.on('connection', socket => {
//     console.log('有新用户连接上 socket')
//     socket.on('message', function(from,msg){
//         console.log('message: ', from,msg);
//         io.emit('message', msg);
//       });
//     socket.on('disconnect', () => { 
//         console.log('user disconnected')
//      });
// });

let chat = io.of('/chat')
    .on('connection', socket => {
        // console.log('有新用户连接上',socket,chat)
        // 获取连接到此命名空间的客户机ID（跨所有节点（如果适用））。
        chat.clients((error, clients) => {
            if (error) throw error;
            console.log(clients); // => [PZDoMHjiu8PYfRiKAAAF, Anw2LatarvGVVXEIAAAD]
        })

        socket.emit('message', {
            that: 'only'
            , '/chat': 'will get'
        })
        chat.emit('message', {
            everyone: 'in'
            , '/chat': 'will get'
        })

        socket.on('disconnect', () => {
            console.log('user disconnected')
        });
    });
    // 注册一个中间件，这是一个为每个传入执行的功能Socket，并且接收套接字和可选地将执行延迟到下一个注册的中间件的参数。
    io.use((socket, next) => {
        // console.log(socket.request.headers)
        if (socket.request.headers.cookie) return next();
        next(new Error('Authentication error'));
      });


server.listen(3000, () => {
    console.log('http://localhost:3000/ is running!!!')
})