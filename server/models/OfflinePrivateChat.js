const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    toId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }, //收消息用户id
    offlineMessages: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Message' }], //离线私聊信息
    status: {
        type:Number,
        default:0 // 0用户未收到， 1用户已收到
    },
    createTime: {  //创建时间
        type: Date,
        default: Date.now
    },

})

// 模型会自动变成复数
module.exports = mongoose.model('OfflinePrivateChat', schema)