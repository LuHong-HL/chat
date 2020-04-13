<template>
  <div class="chat d-flex flex-column" >
    <!-- 头部 -->
    <my-top-bar left-arrow :left-text="friend.username" to="/main/home">
      <template v-slot:right>
        <van-icon name="ellipsis" />
      </template>
    </my-top-bar>
    <!-- 内容部分 -->
    <div class="chat-container flex-grow-1" ref="chat">
      <div v-for="(item, index) in privateMessage" :key="index">
        <div class="left" v-if="item.fromId === friend._id">
          <div class="image">
            <van-image width="1rem" height="1rem" radius=".133333rem" :src="friend.avatar" />
          </div>
          <div>
            <p>{{item.message}}</p>
          </div>
        </div>
        <div class="right" v-else>
          <div>
            <p class="right">{{item.message}}</p>
          </div>
          <div class="image">
            <van-image
              width="1rem"
              height="1rem"
              radius=".133333rem"
              :src="$store.state.user.avatar"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="chat-bottom">
      <div class="d-flex ai-center py-0-5 px-0-5">
        <van-icon class-prefix="iconfont iconyuyin voice pr-0-5" size="0.6rem" color="#000" />
        <van-field v-model="message" maxlength="50"></van-field>
        <van-icon class-prefix="iconfont icondaxiao pl-0-5 pr-0-5" size="0.6rem" color="#000" />
        <van-icon
          v-show="!message"
          class-prefix="iconfont icontianjia2"
          size="0.6rem"
          color="#000"
        />
        <van-button v-show="message" type="primary" size="small" @click="sendMessage">发送</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
        this.scrollToBottom()
    },
  sockets: {
    // socket 监听 私聊事件
    privateChat(data) {
      console.log("chatSocket", data);
    }
  },
  data() {
    return {
      friend: this.$route.query, // 要添加朋友的信息
      message: "" //输入框信息
      //   privateMessage: this.$store.getters.privateMessage
    };
  },
  methods: {
    // 发送信息
    async sendMessage() {
      let message = {};
      message.message = this.message;
      message.fromId = this.$store.state.user._id;
      message.toId = this.friend._id;
      message.createTime = new Date();
      //   this.$store.dispatch('updateChatMessage', message)
      this.$store.commit("privateChatSelf", message);
      console.log("message", message);
      const res = await this.$http.post(`/rest/sockets/conditions`, {
        userId: this.friend._id
      });
      console.log("res", res);
      this.$socket.emit("privateChat", res.data[0].socketId, message);
      this.message = "";
    try{
      this.scrollToBottom()
    }catch(err){
        console.log('scrollToBottomErr', err)
    }
    },
    // 滚动条滚动到底部
    scrollToBottom() {
        this.$nextTick(() => {
        let element = this.$refs.chat
        document.documentElement.scrollTop = element.scrollHeight; // 滚动高度
      });
    },
    //滚动到顶部
    scrollToTop(scrollDuration) {
    var cosParameter = window.scrollY / 2,
        scrollCount = 0,
        oldTimestamp = performance.now();
    function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
        if (window.scrollY === 0) return;
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

  },
  computed: {
    privateMessage() {
      //聊天信息 []
      return this.$store.state.chatMessage[this.friend._id];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_variables.scss";
.chat {
  min-height: 100vh;
  padding-bottom: 1.304rem;
  .chat-container {
  }

  .chat-bottom {
    background-color: map-get($colors, "gray");
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    .voice {
      font-weight: 700;
    }
    .van-cell {
      padding: 0.145rem 0.2rem;
    }
  }
}
</style>