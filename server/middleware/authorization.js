module.exports = options => {
    const assert = require('http-assert')
    // token 处理中间件
    const jwt = require('jsonwebtoken')
    // AdminUser 模型导入
    const AdminUser = require('../models/AdminUser')
    return async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        // 验证 token 是否存在
        assert(token, 401, "请先登录")
        const tokenData = jwt.verify(token, req.app.get('secret'))
        // 验证 token 是否有效
        assert(tokenData, 401, "请先登录")
        // 查找数据库中的用户 
        req.user = await AdminUser.findById(tokenData.id)
        // 是否存在此用户
        assert(req.user, 401, "请先登录")
        next()
    }
}