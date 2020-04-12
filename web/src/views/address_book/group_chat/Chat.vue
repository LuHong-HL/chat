<template>
  <div class="chat d-flex flex-column">
    <my-top-bar left-arrow :left-text="friend.username" to="/main/home">
      <template v-slot:right>
        <van-icon name="ellipsis" />
      </template>
    </my-top-bar>
    <div class="chat-container flex-grow-1">
      <!-- <p>chat {{privateMessage}}</p> -->
      <p v-for="(item, index) in privateMessage" :key="index">{{item.message}}</p>
    </div>
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
      this.message = ''
    }
    //监听 socket 的 privateChat 事件
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