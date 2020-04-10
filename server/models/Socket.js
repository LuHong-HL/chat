const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }, //用户id
    socketId: { // 用户的 socketId
        type: String,
        default: ''
    }
})

// 模型会自动变成复数
module.exports = mongoose.model('Socket', schema)