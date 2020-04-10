const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    fromId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }, //发消息用户id
    toId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }, //收消息用户id
    messages: [{ // 用户收到信息
        type: String,
        default: ''
    }]
})

// 模型会自动变成复数
module.exports = mongoose.model('Socket', schema)