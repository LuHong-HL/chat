module.exports = options => {
    return async (req, res, next) => {
        //复数 转为大驼峰单数 模型文件名
        const modelName = require('inflection').classify(req.params.resource)
        // 加载相应模型文件名的模型
        req.model = require(`../models/${modelName}`)
        next()
    }
}