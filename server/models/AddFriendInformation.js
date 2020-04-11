const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    toId: { // 要添加的好友 id
        type: mongoose.SchemaTypes.ObjectId, ref: 'User'
    },
    fromId: { // 求情加好友用户 id
        type: mongoose.SchemaTypes.ObjectId, ref: 'User'
    },
    checkMessage: { //验证信息
        type: String,
    },
    status:{ // 请求状态： 0已拒绝 1已接受 2已过期 3请求中
        type: Number,
        default:3 
    },
    createTime: {  //创建时间
        type: Date,
        default: Date.now
    },
    updateTime: {  // 更新时间
        type: Date,
        default: Date.now
    }
},{
    // versionKey: false,
    // timestamps选项会在创建文档时自动生成createAt和updateAt两个字段，值都为系统当前时间。并且在更新文档时自动更新updateAt字段的值为系统当前时间。
    timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
})

// 模型会自动变成复数
module.exports = mongoose.model('AddFriendInformation', schema)