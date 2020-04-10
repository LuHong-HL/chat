module.exports = app => {
    const express = require('express')
    // 错误处理 中间件
    const assert = require('http-assert')
    // token 处理中间件
    const jwt = require('jsonwebtoken')
    // User 模型导入
    const User = require('../../models/User')
    // 权限验证中间件
    const userAuthorizationMiddleware = require('../../middleware/userAuthorization')
    // 获取资源中间件
    const resourceMiddleware = require('../../middleware/resource')

    //创建子路由实例
    const router = express.Router({
        // mergeParams:true
        useUnifiedTopology: true
    })

    //新建对应模型资源
    router.post('/', async (req, res) => {
        console.log('socket', req.body)
        const model = await req.model.create(req.body)
        res.send(model)
    })
    //根据 id 编辑对应模型资源
    router.put('/:id', async (req, res) => {
        console.log(req.body)
        const model = await req.model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    //根据 id 删除对应模型资源
    router.delete('/:id', async (req, res) => {
        await req.model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })
    // 获取对应模型资源列表
    router.get('/', async (req, res) => {
        const items = await req.model.find().limit(10)
        res.send(items)
    })
    // 根据 id 获取对应模型的资源
    router.get('/:id', async (req, res) => {
        const model = await req.model.findById(req.params.id)
        res.send(model)
    })


    //根据用户提供的 userId 编辑对应模型资源 有则更新无则新建
    router.put('/', async (req, res) => {
        console.log(req.body)
        assert(req.body.userId, 400, '数据格式不正确')
        const model = await req.model.findOneAndUpdate({ userId: req.body.userId }, req.body, {upsert: true})
        res.send(model)
    })

    //挂载子路由
    app.use('/web/api/rest/:resource', userAuthorizationMiddleware(), resourceMiddleware(), router)

    //处理图片文件
    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/web/api/upload', upload.single('img'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    // 登录校验处理
    app.post('/web/api/login', async (req, res) => {
        // 1. 根据用户名找用户
        const { phone, password } = req.body
        let user = {}
        let userAndPassword = await User.findOne({ phone: phone }).select('+password')
        assert(userAndPassword, 422, '用户不存在')
        // // 2. 校验密码
        const isValid = require('bcryptjs').compareSync(password, userAndPassword.password)
        assert(isValid, 422, '密码错误')
        // // 3. 返回 token
        const token = jwt.sign({ id: userAndPassword._id }, app.get('secret'))
        for (let [key, value] of Object.entries(userAndPassword._doc)) {
            if (key !== 'password') {
                user[key] = value
            }
        }
        res.send({ token, user })
    })

    //错误统一处理函数
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        });
    });
}