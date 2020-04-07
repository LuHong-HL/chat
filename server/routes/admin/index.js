module.exports = app => {
    const express = require('express')
    // 错误处理 中间件
    const assert = require('http-assert')
    // token 处理中间件
    const jwt = require('jsonwebtoken')
    // AdminUser 模型导入
    const AdminUser = require('../../models/AdminUser')
    // 登录中间件
    const authorizationMiddleware = require('../../middleware/authorization')
    // 获取资源中间件
    const resourceMiddleware = require('../../middleware/resource')

    //创建子路由实例
    const router = express.Router({
        // mergeParams:true
        useUnifiedTopology: true
    })
    
    //新建对应模型资源
    router.post('/', async (req, res) => {
        const model = await req.model.create(req.body)
        res.send(model)
    })
    //根据 id 编辑对应模型资源
    router.put('/:id', async (req, res) => {
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

    //挂载子路由
    app.use('/admin/api/rest/:resource', authorizationMiddleware(), resourceMiddleware(), router)

    //处理图片文件
    // const multer = require('multer')
    // const upload = multer({ dest: __dirname +'/../../uploads'})
    // app.post('/admin/api/upload', upload.single('file'), async (req, res) =>{
    //     const file = req.file
    //     file.url = `http://localhost:3000/uploads/${file.filename}`
    //     res.send(file)
    // })

    // 登录校验处理
    app.post('/admin/api/login', async (req, res) => {
        // 1. 根据用户名找用户
        const { username, password } = req.body
        const user = await await AdminUser.findOne({ username: username }).select('+password')
        assert(user, 422, '用户不存在')
        // 2. 校验密码
        const isValid = require('bcryptjs').compareSync(password, user.password)
        assert(isValid, 422, '密码错误')
        // 3. 返回 token
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send({ token })
    })

    //错误统一处理函数
    app.use( (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        });
    });
}