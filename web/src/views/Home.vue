<template>
  <div class="home">
    <my-top-bar left-text="通信">
      <template v-slot:right>
        <div class="nav-bar_right">
          <span class="va-middle iconfont iconsousuo pr-3 fs-xxl"></span>
          <span class="va-middle iconfont icontianjia fs-xl"></span>
        </div>
      </template>
    </my-top-bar>
    <div class="container">
      <van-cell
        class="cell-container d-flex ai-center fs-lg"
        v-for="(item, index) in 15"
        :key="index"
      >
        <template v-slot:icon>
          <van-image
            width="1.1112rem"
            height="1.1112rem"
            radius=".133333rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </template>
        <template v-slot:title>
          <div class="d-flex">
            <span class="cell-title pl-1 fs-lg text-dark flex-grow-1">我是小小明鸭</span>
            <span class="cell-title pl-1 fs-sm text-dark-3">12:35</span>
          </div>
        </template>
        <template v-slot:label>
          <span class="cell-title fs-sm pl-1 text-dark-3">{{item}}有东西聊吗</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // const socket = this.$io("http://localhost:3000");
    //   console.log("socket", socket);
    //   socket.emit('message', 'hello')
    //   socket.on('message', (msg) =>{
    //     console.log('message', msg)
    //   })

// 指定命名空间
    // const chat = this.$io.connect("http://localhost:3000/chat", {
    //   autoConnect: false,
    // });
      // chat.emit('message', 'hello')
      //手动打开 socket
      // chat.connect();
      //手动关闭客户端对服务器的连接
      // socket.disconnect()
      // chat.on('connect', () =>{
      //   chat.on('message', (msg)=>{
      //     console.log('message', msg)
      //   })
      // })
      
  },
};
</script>

<style lang="scss" scoped>
.home {
  .container {
    padding-bottom: 1.333333rem;
    .icon {
    vertical-align: middle;
  }
  }
  
}
</style>