const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: { type: String }, //用户名
    phone: { type: String }, //手机号
    password: {  //密码
        type: String,
        select: false,
        set(value) {
            return require('bcryptjs').hashSync(value, 10)
        }
    },
    avatar: { //头像
        type: String,
        default: 'https://img.yzcdn.cn/vant/cat.jpeg'
    },
    gender: { //性别
        type: Number,
        default: 0
    },
    signature: { //个性签名
        type: String,
        default: '这人很懒，没留下签名'
    },
    friends: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }], //朋友
    addFriendinformations: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'addFriendinformation' }], //加好友信息
    socketId: { // 用户的 socketId 登录时才有，下线时为空
        type: String,
        default: ''
    }
})

// 模型会自动变成复数
module.exports = mongoose.model('User', schema)