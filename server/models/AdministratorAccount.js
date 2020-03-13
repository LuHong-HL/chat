const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    account:{type:String},
    password:{type:String}
})

// 模型会自动变成复数
module.exports = mongoose.model('AdministratorAccount',schema)