const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userId: { //求情加好友用户id
        type: mongoose.SchemaTypes.ObjectId, ref: 'User'
    },
    checkMessage: { //验证信息
        type: String,
    },
    status:{ // 请求状态： 0已拒绝 1已接受 2已过期 3请求中
        type: Number,
        default:3 
    }
})

// 模型会自动变成复数
module.exports = mongoose.model('AddFriendInformation', schema)