const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: { type: String },
    password: {
        type: String,
        select:false,
        set(value){
            return require('bcryptjs').hashSync(value, 10)
        }
    }
})

// 模型会自动变成复数
module.exports = mongoose.model('AdminUser', schema)