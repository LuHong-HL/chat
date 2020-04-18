module.exports = (server) => {
    const io = require('socket.io')(server);
    const AddFriendInformation = require('../../models/AddFriendInformation')
    const User = require('../../models/User')



    let chat = io.of('/chat')
        .on('connection', socket => {
            console.log('有新用户连接上', socket.id)
            // 获取连接到此命名空间的客户机ID（跨所有节点（如果适用））。
            chat.clients((error, clients) => {
                if (error) throw error;
                console.log(clients); // => [PZDoMHjiu8PYfRiKAAAF, Anw2LatarvGVVXEIAAAD]
            })

            // 添加好友
            socket.on('addFriend', async (socketId, body) => {
                console.log('addFriend', socketId, body)
                // console.log('socket.id',socket.id)
                // console.log('socketId, body',socketId ,body)
                // socket.emit('addFriend', body)
                // chat.emit('addFriend', body )
                // socket.broadcast.emit('addFriend', body)
                // 1. 建立 AddFriendInformation 数据, 有则更新无则新建
                // 2. 有数据的话，更新 AddFriendInformation 就可以了
                // 3. 无的话，还要更新 User 的 addFriendInformations
                const condition = await AddFriendInformation.findOneAndUpdate({ toId: body.toId, fromId: body.fromId }, body, { upsert: true })

                if (condition === null) {
                    // 查找 AddFriendInformation 数据
                    const addFriendInformation = await AddFriendInformation.findOne({ toId: body.toId, fromId: body.fromId })
                    const toUser = await User.findById(body.toId)
                    let addFriendInformations = toUser.addFriendInformations
                    addFriendInformations.unshift(addFriendInformation._id)
                    // 更新 User addFriendInformations
                    await User.findOneAndUpdate({ _id: body.toId }, { addFriendInformations: addFriendInformations })
                }
                // User 表找出 addFriendInformations 信息
                const model = await User.findById(body.toId, { addFriendInformations: 1 }).populate({ path: 'addFriendInformations', populate: { path: 'fromId' } })

                // 向对应 socketId 的用户广播信息
                socket.broadcast.to(socketId).emit('addFriend', model)
            })

            // 发送私聊
            socket.on('privateChat', (socketId, body) => {
                console.log('privateChat', socketId, body)

                // 向对应 socketId 的用户广播信息
                socket.broadcast.to(socketId).emit('privateChat', body)
            })
            // 加入 room
            socket.on('join', (data) => {
                socket.join(`${data.room}`, () => {
                    let rooms = Object.keys(socket.rooms);
                    console.log(`${socket.id} joinRooms:`, rooms); // [ <socket.id>, 'room 237' ]
                    console.log(`a new user join world ${socket.id}`)
                })
            })
            // 离开 room
            socket.on('leave', (data) => {
                socket.leave(`${data.room}`, () => {
                    let rooms = Object.keys(socket.rooms);
                    console.log(`${socket.id} leaveRooms:`, rooms); // [ <socket.id>, 'room 237' ]
                    console.log(`a new user leave world ${socket.id}`)

                })
            })
            // 发送worldMessage 除发送者
            socket.on('worldMessage', (data) => {
                socket.to(data.room).emit('worldMessage', data)
            })


            socket.on('disconnect', (data) => {
                console.log('user disconnected', data)
            });
        });
    // 注册一个中间件，这是一个为每个传入执行的功能Socket，并且接收套接字和可选地将执行延迟到下一个注册的中间件的参数。
    io.use((socket, next) => {
        // console.log(socket.request.headers)
        if (socket.request.headers.cookie) return next();
        next(new Error('Authentication error'));
    });
}