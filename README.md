# 即时通信项目  

## 项目搭建  

### express 后台框架搭建  

+ 初始化项目 **package.json** 文件 ，新增 **index.js** 文，做入口文件

  ```shell
   npm init -y
  ```
  - 配置 **package.json** 的 **nodemon** ，配置完启动项目输入 `npm run serve` 命令
  
    ```javascript
    {
      "scripts": {
        "serve": "nodemon index.js",
      }
    }
    ```
  
+ 安装 **express** 插件 `npm install express` 命令  [express中文](http://expressjs.com/zh-cn/)  [express官网](http://expressjs.com/)

  - 启动服务

    ```javascript
    //index.js文件 入口文件
    const express = require('express')
    
    const app = express()
    
    //加载路由
    require('./routers/admin/index')(app)
    
    app.listen(3000,()=>{
        console.log('http://localhost:3000/ is running!!!')
    })
    ```

  - 配置路由

    ```javascript
    // admin文件下的 index.js
    module.exports = app => {
        const express = require('express')
        //创建子路由实例
        const router = express.Router()
    
        //新建管理员账号
        router.post('/admin', async (req, res) => {
            res.send('请求成功')
        })
    
        router.get('/admin', async (req, res) => {
            res.send('get请求')
        })
    
        //挂载子路由
        app.use('/admin/api', router)
    }
    ```

    

+ 安装 **mongoose** 插件 npm install mongoose 命令  [mongoose.js中文网](http://www.mongoosejs.net/)

  - mongoose菲关系型数据库
  
  - mongodb的链接方式：打开命令行窗口 cd进 MongoDB/bin 文件夹 运行 **mongod** 默认在根路基找data/db 文件，存放数据
  
  - 创建mongoose 链接数据库的配置文件
  
    ```javascript
    // 在 plugins 文件下 创建db.js文件
    module.exports = app => {
        const mongoose = require('mongoose')
        mongoose.connect('mongodb://127.0.0.1:27017/chat', {
            useNewUrlParser: true
        })
    }
    //在需要用到数据的文件中导入 require() 这个文件，此处在index.js 服务器入口文件的用到
    ```
  
  - 创建models文件
  
    ```javascript
    //在 models 文件夹中创建不同的 models
    // 创建 AdministratorAccount 模型，在需要用到的地方require()
    const mongoose = require('mongoose')
    
    const schema = new mongoose.Schema({
        account:{type:String},
        password:{type:String}
    })
    
    // 模型会自动变成复数
    module.exports = mongoose.model('AdministratorAccount',schema)
    ```
    
  - 关联上级 创建 schema
  
    ```javascript
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    ```
  
  - 获取关联的文档内容 通过 **populate**
  
    ```javascript
    .populate('author', 'name') // only return the Persons name
    ```
  
    
  
+ 安装 **cors** 中间件 npm install cors 命令

  - 解决跨域问题

+ 服务器入口 配置中间件

  ```javascript
  // index.js文件，在链接数据库，处理路由前
  // 跨域处理
  app.use(require('cors')())
  // json格式数据处理
  app.use(express.json())
  ```

  

### vue.js 前端框架搭建  

+ 使用 **vue-cli** 搭建前端vue框架 

  - 以下使用 `vue create 项目名` 的命令创建的项目
  - 也可以用 `vue ui ` 命令进入 UI 界面搭建框架
  - 注意 vue-cli  版本号要 3.0 以上
  - history 选择 No
  - 其余默认选项

  ```shell
  D:\vueWorkSpace\chat>vue create admin
  
  Vue CLI v4.2.2
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Linter
  ? Use history mode for router? (Requires proper server setup for index fallback in production) No
  ? Pick a linter / formatter config: Basic
  ? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
  ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
  ? Save this as a preset for future projects? No
  ```

+ 安装 element-ui 使用 `vue add element`  命令

+ 安装 **axios** 使用 `npm install axios -S` 命令

  - npm 和 vue 安装插件的区别

    + npm 要写配置文件、vue 会自动配置文件  

  - **axios** 配置文件

    ```javascript
    // http.js 文件
    import axios from 'axios'

    // 自定义配置创建 axios 实例
    const http = axios.create({
        baseURL: 'http://localhost:3000/admin/api'
    })
    
    export default http
    ```
    
    ```javascript
    //  main.js 文件
    import http from './plugins/http'
    
    // 在原型上挂载http
    Vue.prototype.$http = http
    ```
    
## git 的使用总结 [廖雪峰Git教程](https://www.liaoxuefeng.com/wiki/896043488029600) [Git官网Book](https://git-scm.com/book/zh/v2)

+ 创建版本库

  - 初始化一个Git仓库，使用`git init`命令。

  - 添加文件到Git仓库，分两步：

    >使用命令`git add `，注意，可反复多次使用，添加多个文件；
    >
    >使用命令`git commit -m `，完成。

+ 查看状态

  - 要随时掌握工作区的状态，使用`git status`命令。

  - 如果`git status`告诉你有文件被修改过，用`git diff`可以查看修改内容。

+ 版本回退

  - `HEAD`指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。
  - 穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本。
  - `git log` 查看日志，默认enter是继续展示历史日志信息,英文状态下按Q 即可退出。
  - 要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。

+ 工作区和暂存区

  - 工作区（Working Directory）=> `git add` 加入版本库（Repository）的暂存区 => `git commit -m`  提交到当前本地分支

+ 撤销修改（修改，删除）

  - 场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令 `git restore <file>`。
  - 场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令 `git restore --stages <file>`，就回到了场景1，第二步按场景1操作。
  - 场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。

+ 远程仓库

  - 第1步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有`id_rsa`和`id_rsa.pub`这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：

    如果一切顺利的话，可以在用户主目录里找到`.ssh`目录，里面有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，不能泄露出去，`id_rsa.pub`是公钥，可以放心地告诉任何人。

    ```bash
    $ ssh-keygen -t rsa -C "youremail@example.com"
    ```

  - 第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面：然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴`id_rsa.pub`文件的内容。

  - 最后友情提示，在GitHub上免费托管的Git仓库，任何人都可以看到喔（但只有你自己才能改）。所以，不要把敏感信息放进去。如果你不想让别人看到Git库，有两个办法，一个是交点保护费，让GitHub把公开的仓库变成私有的，这样别人就看不见了（不可读更不可写）。另一个办法是自己动手，搭一个Git服务器，因为是你自己的Git服务器，所以别人也是看不见的。这个方法我们后面会讲到的，相当简单，公司内部开发必备。

+ 添加远程仓库

  - 要关联一个远程库，使用命令 `git remote add origin git@server-name:path/repo-name.git`;
  - 关联后，使用命令`git push -u origin master`第一次推送master分支的所有内容；如果当前分支与多个主机存在追踪关系，则可以使用`-u`选项指定一个默认主机，这样后面就可以不加任何参数使用`git push`
  - 此后，每次本地提交后，只要有必要，就可以使用命令`git push origin master`推送最新修改；

+ 远程仓库克隆

  - 要克隆一个仓库，首先必须知道仓库的地址，然后使用`git clone 仓库地址`命令克隆，把仓库克隆到本地。

+ 查看远程仓库信息

  - 如果想要查看某一个远程仓库的更多信息，可以使用 `git remote show <remote>` 命令。

+ 创建与合并分支

  - 查看分支：`git branch`

  - 创建分支：`git branch <name>`

  - 切换分支：`git checkout <name>`或者`git switch <name>`

  - 创建+切换分支：`git checkout -b <name>`或者`git switch -c <name>` 

  - 合并某分支到当前分支：`git merge <name>`

  - 删除分支：`git branch -d <name>`

+ 分支管理策略

  - 强制禁用`Fast forward`模式，并合并分支，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。`git merge --no-ff -m "<message>" dev`  

  - 查看分支历史 `git log --graph --pretty=oneline --abbrev-commit`

  - **分支策略：**首先，`master`分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；那在哪干活呢？干活都在`dev`分支上，也就是说，`dev`分支是不稳定的，到某个时候，比如1.0版本发布时，再把`dev`分支合并到`master`上，在`master`分支发布1.0版本；你和你的小伙伴们每个人都在`dev`分支上干活，每个人都有自己的分支，时不时地往`dev`分支上合并就可以了。

    所以，团队合作的分支看起来就像这样：

    ![分支策略图](https://www.liaoxuefeng.com/files/attachments/919023260793600/0)

+ Bug 分支

  - 工作一半要处理其他问题，可以先提交再切换到一个新的分支处理问题，当然不能提交的话可以用 `git stach`把当前工作现场“储藏”起来，等以后恢复现场后继续工作;

  - 用`git stash list`命令查看“储藏“的内容

  - 恢复 `stash`  内容：

    > 一是用`git stash apply`恢复，但是恢复后，stash内容并不删除，你需要用`git stash drop`来删除；
    >
    > 另一种方式是用`git stash pop`，恢复的同时把stash内容也删了;

  - `git cherry-pick <commit>`  复制一个特定的提交到当前分支

    ```bash
    $ git cherry-pick 4c805e2
    ```

  - 出现冲突 **conflict** ，需要解决冲突再合并

+ 查看分支

  ```bash
  //查看本地分支
  git branch
  //查看远程分支
  git branch -r
  //查看全部分支
  git branch -a	
  ```

+ 删除分支

  - 如果要丢弃一个没有被合并过的分支，可以通过`git branch -D <name>`  强行删除。

+ 远程分支

  - `$ git push <远程主机名> <本地分支名>:<远程分支名>`  `git push`命令用于将本地分支的更新，推送到远程主机。
  - `$ git push origin master`  将本地的`master`分支推送到`origin`主机的`master`分支。如果`master`不存在，则会被新建。
  - `$ git push origin :master` 等同 `$ git push origin --delete master`  如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支。
  - 建立本地分支和远程分支的关联，使用`git branch --set-upstream-to 本地branch-name origin/远程branch-name`；注：本地新建分支， push到远程服务器上之后，使用git pull或者git pull 拉取或提交数据时会报错，必须使用命令：git pull origin dev（指定远程分支）；如果想直接使用git pull或git push拉去提交数据就必须创建本地分支与远程分支的关联。
  - 关联后，使用命令`git push -u origin master`第一次推送master分支的所有内容；如果当前分支与多个主机存在追踪关系，则可以使用`-u`选项指定一个默认主机，这样后面就可以不加任何参数使用`git push`

+ 创建远程分支

  ```bash
  git checkout -b my-test  //在当前分支下创建my-test的本地分支分支
  git push origin my-test  //将my-test分支推送到远程
  git branch --set-upstream-to my-test origin/my-test //将本地分支my-test关联到远程分支my-test上
  git branch -a //查看远程分支 
  ```
  
+ 合并远程分支

  - 本地合并，然后推送到远程仓库即可 `git merge <branch-name>`

+ 删除远程分支

  - `git branch -d <branch-name>` 删除本地分支
  - `git branch -d -r <branchname>` 删除远程分支，删除后还需推送到服务器
  - `git push origin :<branch-name>` 删除后推送至服务器

+ 多人协助

  - 查看远程库信息，使用`git remote -v`；
  
  - 本地新建的分支如果不推送到远程，对其他人就是不可见的；
  
  - 从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用`git pull`抓取远程的新提交；
  
  - 在本地创建和远程分支对应的分支，使用`git checkout -b 本地branch-name origin/远程branch-name`，本地和远程分支的名称最好一致；
  
  - 建立本地分支和远程分支的关联，使用`git branch --set-upstream-to branch-name origin/branch-name`；注：本地新建分支， push到远程服务器上之后，使用git pull或者git pull 拉取或提交数据时会报错，必须使用命令：git pull origin dev（指定远程分支）；如果想直接使用git pull或git push拉去提交数据就必须创建本地分支与远程分支的关联。
  
  - 从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。
  
    >前面提到，`git pull` 的过程可以理解为：
    >
    >1. `git fetch origin master` 从远程主机的master分支拉取最新内容
    >
    >2. `git merge FETCH_HEAD`    将拉取下来的最新内容合并到当前所在的分支中,即将远程主机的某个分支的更新取回，并与本地指定的分支合并，完整格式可表示为：`$ git pull <远程主机名> <远程分支名>:<本地分支名>`,当前分支简写操作 `$ git pull <远程主机名> <远程分支名>`
  
  - git fetch 命令：
  
    > 1. `$ git fetch <远程主机名> `  这个命令将某个远程主机的更新全部取回本地,更新远程跟踪分支
    > 2. `$ git fetch`  将某个远程主机的更新，全部取回本地。所取回的更新，在本地主机上要用”远程主机名/分支名”的形式读取。比如`origin`主机的`master`分支，就可以用`origin/master`读取。
    > 3. `$ git checkout -b newBrach origin/master`  取回远程主机的更新以后，可以在它的基础上，使用git checkout命令创建一个新的分支。
    > 4. `$ git merge origin/master`  或者 `$ git rebase origin/master`  表示在当前分支上，合并`origin/master` 。
    >
    > 2. `$ git fetch <远程主机名> <分支名>`  取回特定分支的更新，可以指定分支名
    >
    > 3. `$ git log -p FETCH_HEAD`  取回更新后，会返回一个`FETCH_HEAD` ，指的是某个branch在服务器上的最新状态，我们可以在本地通过它查看刚取回的更新信息,我们可以通过这些信息来判断是否产生冲突，以确定是否将更新merge到当前分支
  
+ Rebase 变基

  - `git rebase`  操作可以把本地未push的分叉提交历史整理成直线；
  - `git rebase`  的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。
  
+ 创建标签

  - 命令`git tag <tagname> `用于新建一个标签，默认为`HEAD`，也可以指定一个commit id, 命令 `git tag <tagname> <commit id>`
  - 命令`git tag -a <tagname> -m "blablabla..."`可以指定标签信息；
  - 命令`git tag`可以查看所有标签。

+ 操作标签 

  - 删除一个本地标签 `git tag -d <tagname>`
  - 推送一个标签到远程仓库 `git push origin <tagname>` 
  - 一次推送全部未推送过的本地标签 `git push origin --tags`
  - 删除一个远程标签 `git push origin :refs/tags/<tagname>`
  - 查看标签列表 `git tag`
  - 查看标签版本信息 `git show <tagname>`
  - 切换到标签版本 `git checkout <tagname>`
  
+ 使用GitHub

  - 在GitHub上，可以任意Fork开源仓库；
  - 自己拥有Fork后的仓库的读写权限；
  - 可以推送pull request给官方仓库来贡献代码。

+ 使用Gitee

  - 查看远程库信息 `git remote -v`
  - 在Gitee 码云上创建国内远程仓库
  - 再关联Gitee的远程库: `git remote add <origin-name> <origin-path>`
  - 删除已关联的名为origin的远程库：`git remote rm <origin-name>`
  - 实现一个本地仓库关联多个远程仓库
  
+ 忽略特殊文件

  - 忽略某些文件时，需要编写`.gitignore`；参考：[github官方文档](https://github.com/github/gitignore)
  - `.gitignore`文件本身要放到版本库里，并且可以对`.gitignore`做版本管理！

+ 配置别名

  - 配置别名,例如: `$ git config --global alias.st status`
  - 每个仓库的Git配置文件都放在`.git/config`文件中
  - 当前用户的Git配置文件放在用户主目录下的一个隐藏文件`.gitconfig`中
  
  ```bash
  $ cat .gitconfig
  [alias]
      co = checkout
      ci = commit
      br = branch
      st = status
  [user]
      name = Your Name
      email = your@email.com
  ```
  
+ 搭建Git服务器 [搭建Git服务器](https://www.liaoxuefeng.com/wiki/896043488029600/899998870925664)

## Admin 前端功能设计

1. 用户账号管理

   + 冻结账号
   + 正常账号

2. 管理员账号管理

   + 添加管理员账号
   + 冻结管理员账号
   + 正常管理员账号

## Web 前端功能设计

1. 登录模块
2. 聊天模块
3. 个人中心模块
4. 好友管理模块
5. 互动模块

## Server 后台 API 接口设计

## 数据库设计



## Admin 前端具体开发过程 

+  **baseURL: 'http://localhost:3000/admin/api'**

+ 首页整体页面设计
  - 使用 element-ui 的 布局容器进行改造及使用
  - router 的基本使用
    + router 的匹配规则的理解
    + 子路由的理解
  
+ 管理员账号密码的创建、查看、修改、删除
  - 使用表单中的  input、button 进行简单布局
  
  - 引入了 axios 组件 准备进行与后台的数据交互 ，具体导入与配置可以参照上文
  
  - 完成与后台的创建、查看、修改、删除管理员账号密码接口的交互
  
  - element-ui 全局定义 $message、$confirm 的配置 ,之后可以通过this.$message()、this.$confirm()使用(因为是局部引用组件，不能直接使用)
  
    ```javascript
    // element.js 的配置文件中
    import Vue from 'vue'
    //局部引用组件
    import {
        Message,
        MessageBox 
    } from 'element-ui'
    
    // Element 为 Vue.prototype 添加了全局方法 $message
    Vue.prototype.$message = Message
    // Element 为 Vue.prototype 添加了全局方法 $confirm
    Vue.prototype.$confirm = MessageBox.confirm
    
    ```
  
+  富文本编辑器的使用 [富文本编辑器地址](https://www.npmjs.com/package/vue2-editor)

   - 安装 vue2-editor 插件 命令 **npm install vue2-editor**  
   - 因为图片大小比较大，直接用会是base64的方法保存，所以要处理一下，保存在相应的地方，再返回相应的地址，这样优化内存大小，插件提供相应的处理方法

+  检测变化的注意事项 

   - Vue **无法检测到对象属性的添加或删除**。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 `data` 对象上存在才能让 Vue 将它转换为响应式的。例如：

   ```javascript
   var vm = new Vue({
     data:{
       a:1
     }
   })
   // `vm.a` 是响应式的
   vm.b = 2
   // `vm.b` 是非响应式的
   ```

   - 您还可以使用 `vm.$set` 实例方法，这也是全局 `Vue.set` 方法的别名：

   ```javascript
   this.$set(this.someObject,'b',2)
   ```

   - 有时你可能需要为已有对象赋值多个新属性，比如使用 `Object.assign()` 或 `_.extend()`。但是，这样添加到对象上的新属性不会触发更新。在这种情况下，你应该用原对象与要混合进去的对象的属性一起创建一个新的对象。

   ```javascript
   // 代替 `Object.assign(this.someObject, { a: 1, b: 2 })`
   this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
   ```

+  前端全局捕获错误处理

   - axios 提供的 interceptor 拦截器处理
   - 后端之后返回的错误信息统一，放在message属性中，前端就可以统一处理了。例：

   ```javascript
   //后端 返回 message 例 
   res.status(422).send({ message: "用户名不存在" })
   ```

   

   ```javascript
   // 前端 http.js 文件
   import axios from 'axios'
   import Vue from 'vue'
   // 自定义配置创建 axios 实例
   const http = axios.create({
       baseURL: 'http://localhost:3000/admin/api'
   })
   
   // 定义拦截器，全局捕获错误
   http.interceptors.response.use(res => {
       //属于 2XX 范围的状态代码触发此功能
       return res
   }, err => {
       //超出 2XX 范围的状态代码触发此功能
       if (err.response.data.message) {
           Vue.prototype.$message({
               type: 'error',
               message: err.response.data.message
           })
       }
       return Promise.reject(err)
   })
   
   export default http
   ```

+  前端 **token** 信息的保存

   - cookies
   - sessionStorage
   - localStorage
   
+  设置全局请求头 headers

   - 使用 axios 的 interceptors 拦截器
   - 设置请求头 headers
   - 前端请求头的属性是大写开头的,例如:`Authorization` ；后端是小写的的 `authorization`
   - 为了符合标准,拼接上 `Bearer `，后端通过字符串截取拿到想要的 token 部分即可

   ```javascript
   //http.js 文件
   // 添加请求拦截器 
   http.interceptors.request.use(function (config) {
       // Do something before request is sent
       if(sessionStorage.token){
           config.headers.Authorization = 'Bearer ' + sessionStorage.token
       }
       return config;
     }, function (error) {
       // Do something with request error
       return Promise.reject(error);
     });
   ```

+  401 状态跳转首页

   - 后端遇到任何接口需要登录的情况，都返回 401 状态码 ，前端收到 401 跳转到登录页面，提前和后端协商好

   ```javascript
   //http.js 文件 
   // http.interceptors.response.use() 响应拦截器中
   // 后端遇到任何接口需要登录的情况，都返回 401 状态码 ，前端收到 401 跳转到登录页面
       if(err.response.status === 401){
           router.push('/login')
       }
   ```

+  前端导航守卫

   - 设置路由元信息 `meta`
   
   ```javascript
   //router/index.js
const routes = [
     {
       path: '/login',
       component: Login,
       meta: {
         isPublic: true
       }
     }
   ]
   ```
   
   - 注册全局前置守卫
- **`to: Route`**: 即将要进入的目标 [路由对象](https://router.vuejs.org/zh/api/#路由对象)
   - **`from: Route`**: 当前导航正要离开的路由
   - **`next: Function`**: 一定要调用该方法来 **resolve** 这个钩子。执行效果依赖 `next` 方法的调用参数。
   
   ```javascript
   // router/index.js
   //注册全局前置守卫
   router.beforeEach((to, from, next) => {
     //to and from are Route Object,next() must be called to resolve the hook
     if (!to.meta.isPublic && !sessionStorage.token) {
       return next({ path: '/login' })
     }
     next()
   })
   ```
   
+  全局混入的使用 `vue.mixin()`

   - 第三方上传组件，全局请求头的设置，没有生效，需要手动添加，考虑全局混入，把需要的数据添加上去。

   - 请谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例 (包括第三方组件)。大多数情况下，只应当应用于自定义选项。

   ```javascript
   // main.js
   //全局混入
   Vue.mixin({
     computed: {
       uploadUrl(){
         return this.$http.defaults.baseURL + '/upload'
       }
     },
     methods: {
       getAuthorizationHeaders(){
         return{
           Authorization: `Bearer ${sessionStorage.token || ''}`
         }
       }
     }
   })
   ```

   


## server 后台具体开发过程

+ 完成基本的整体架构
  - 路由的搭建
  - 数据库的链接
  - 跨域的处理
  - 请求数据的 **JSON** 格式的处理
  
+ 管理员账号信息管理接口

  ```javascript
  //admin文件中的 index.js
  
  module.exports = app => {
      const express = require('express')
      //创建子路由实例
      const router = express.Router()
      // 加载administratorAccount 模型
      const AdministratorAccount =require('../../models/AdministratorAccount')
  
      //新建管理员账号信息
      router.post('/administratorAccounts', async (req, res) => {
          const model = await AdministratorAccount.create(req.body)
          res.send(model)
      })
      //根据 id 编辑管理员账号信息
      router.put('/administratorAccounts/:id', async (req, res) => {
          const model = await AdministratorAccount.findByIdAndUpdate(req.params.id,req.body)
          res.send(model)
      })
      //根据 id 删除管理员账号信息
      router.delete('/administratorAccounts/:id', async (req, res) => {
          await AdministratorAccount.findByIdAndDelete(req.params.id,req.body)
          res.send({
              success:true
          })
      })
      // 获取管理员账号信息列表
      router.get('/administratorAccounts', async (req, res) => {
          const items =await AdministratorAccount.find().limit(10)
          res.send(items)
      })
      // 根据 id 获取对应的管理员账号信息
      router.get('/administratorAccounts/:id', async (req, res) => {
          const model =await AdministratorAccount.findById(req.params.id)
          res.send(model)
      })
  
      //挂载子路由
      app.use('/admin/api', router)
  }
  ```
  
 + 路由通用 CRUD 接口的设计

   ```javascript
   // 1. 安装 inflection 插件 命令 npm install inflection --save 
   // inflection 的github地址 https://github.com/dreamerslab/node.inflection
   // 2. 改写路由 path  例：app.use('/admin/api/rest/:resource', router)
   // 3. 在express.Router()添加参数用来合并 URL 参数 例：express.Router({mergeParams:true})
   // 4. 改 app.METHOD(PATH, HANDLER) 中的 PATH 和 加载不同路劲的模型
   // 5. 因为模型的文件名为单数，请求路劲为复数，所以用到第1步的中间件，把复数转成单数,在接口请求的时候统一处理，所以加个处理中间件 例：
   app.use('/admin/api/rest/:resource',async (req, res, next) => {
       //小写复数转成首写大写的单数
       const modelName = require('inflection').classify(req.params.resource)
       //在请求对象中挂载 Model 通过相对路径获取资源
       req.Model = require(`../../models${modelName}`)
       next()
   }, router)
   
   // 6. 因为查询的时候可能条件不一样所以需要条件判断 然后再进行相应的查询 例:
   router.get('/', async (req, res) => {
       const queryOptions = {}
       if (req.Model.modelName === '模型名字（首写大写单数）'){
           queryOptions.populate = '关联名称'
       }
       // 查询 填充 限制条数  
       const items = await req.Model.find().setOptions(queryOptions).limint(10)
       res.send(items)
   })
   
   ```

+ 图片接口处理

  - 前后端图片处理大致流程

    > 1. 前端选择需要上传的图片 （涉及：ui框架的上传组件）
    > 2. 发起异步请求，请求后端的接口
    > 3. 后端处理，保存图片，保存在一个文件夹里  （涉及：**multer** 中间件的处理、建立保存图片的文件夹 uploads）
    > 4. 经过一系列的处理，返回客户端一个访问图片的完整URL地址 （涉及：express.static() 静态资源的开放）
    > 5. 前端获取到异步请求的数据，展示URL相应的图片

  - 代码实现过程

    1.  处理图片文件

    ```javascript
    // routers/admin/index.js文件
    
    //处理图片文件
        const multer = require('multer')
        const upload = multer({ dest: __dirname +'/../../uploads'})
        app.post('/admin/api/upload', upload.single('file'), async (req, res) =>{
            const file = req.file
            file.url = `http://localhost:3000/uploads/${file.filename}`
            res.send(file)
        })
    ```

    2.  开放uploads文件中的静态资源

    ```javascript
    // index.js 主入口文件中 
    // 在index.js入口文件同级的地方创建一个新的文件夹 uploads 保存上传文件
    // 开放uploads文件中的静态资源
    app.use('/uploads', express.static(__dirname + '/uploads'))
    ```

    3.  VUE 前端如果没有触发响应式，可以用显式赋值主动触发,向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。

    ```javascript
    //前端代码 知识点补充
    this.$set(target, propertyName/index, value)
    ```

+ 密码加密（散列 hash）

  - 推荐加密中间件 **bcrypt** 、bcryptjs、md5 
  - 出于安全考虑和职业操守，密码或者一些重要信息不会直接明文保存到数据库，一般经过加密再保存到数据，优先用 bcrypt 中间件 安装命令： npm install bcrypt ，无法使用的小伙伴可以用 bcryptjs
  - 数据库数据加密，例：

  ```javascript
  // mongodb 模型
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
  ```

+ 登录接口的处理

  1. 根据用户名找用户
     - 因为用户密码在 schema 中设置了不可查找的，所以要用到 select('+path') 强制选择，路径有前缀 `+`，将被强制选择 ，详情查看 mongoose 中的 [Query.prototype.select()](http://www.mongoosejs.net/docs/api.html#query_Query-select) 
  2. 校验密码
     - bcrypjs 中间件的方法校验
  3. 给客户端返回 token
     - 需要用到 **jsonwebtoken**  中间件编码令牌token，详情参考 [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
     - 通过 app.set('变量'， '字符串') 设置全局变量，通过app.get('变量') 获取全局变量，从而用这个字符串来编码，实际用环境变量来代替

  ```javascript
  // admin/index.js 文件
  // 登录校验处理
      app.post('/admin/api/login', async (req, res) => {
          // 1. 根据用户名找用户
          const { username, password } = req.body
          const AdminUser = require('../../models/AdminUser')
          const user = await await AdminUser.findOne({ username: username }).select('+password')
          if (!user) {
              return res.status(422).send({
                  message: "用户名不存在"
              })
          }
  
          // 2. 校验密码
          const isValid = require('bcryptjs').compareSync(password, user.password)
          if (!isValid) {
              return res.status(422).send({
                  message: '密码错误'
              })
          }
  
          // 3. 返回 token
          const jwt = require('jsonwebtoken')
          const token = jwt.sign({ id: user._id }, app.get('secret'))
          res.send({ token })
      })
  ```

+ 后端错误统一处理函数

  - 和 `http-assert` 中间件配合使用，安装命令：`npm install http-assert`
  - `assert(req.user, 401, "请先登录")` 有错误它会抛出异常，下面函数会统一捕获到异常，交给前端处理
  - 例如：需要用户登录才能访问的接口，统一返回 401 的 statusCode 状态码给前端

  ```javascript
  // routers/admin/index.js 文件中
  //错误统一处理函数
      app.use( (err, req, res, next) => {
          res.status(err.statusCode || 500).send({
              message: err.message
          });
      });
  ```

+ 用户获取资源权限验证

  - 提取代码放在统一的中间件文件中，方便维护。例如：创建一个 middleware 文件夹，之后自定义的中间件全部放在里面

  ```javascript
  // middleware/authorization 中间件文件中
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
  ```

+ 资源获取中间件

  ```javascript
  // middleware/resource 
  module.exports = options => {
      return async (req, res, next) => {
          //复数 转为大驼峰单数 模型文件名
          const modelName = require('inflection').classify(req.params.resource)
          // 加载相应模型文件名的模型
          req.model = require(`../models/${modelName}`)
          next()
      }
  }
  ```

  

