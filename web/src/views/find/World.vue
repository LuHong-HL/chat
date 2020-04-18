<template>
  <div class="chat d-flex flex-column">
    <!-- 头部 -->
    <my-top-bar left-arrow left-text="世界">
      <template v-slot:right>
        <div @click="leaveWorldRoom">
          <div class="d-flex ai-center" v-if="isConnect">
            <van-button type="primary" size="small">拒收</van-button>
            <span class="iconfont iconConnect fs-xxl ml-1"></span>
          </div>
          <div class="d-flex ai-center" v-else>
            <van-button type="primary" size="small">接收</van-button>
            <span class="iconfont iconDisconnect fs-xxl ml-1"></span>
          </div>
        </div>
      </template>
    </my-top-bar>
    <!-- 内容部分 -->
    <div class="chat-container flex-grow-1" ref="chat">
      <div v-for="(item, index) in worldMessage" :key="index">
        <div class="left" v-if="item.fromId !== userId">
          <div class="image">
            <van-image width="1rem" height="1rem" radius=".133333rem" :src="item.avatar" />
          </div>
          <div>
            <span class="fs-sm text-dark-3 va-text-top">{{item.username}}</span>
            <p>{{item.message}}</p>
          </div>
        </div>
        <div class="right" v-else>
          <div>
            <p class="right">{{item.message}}</p>
          </div>
          <div class="image">
            <van-image width="1rem" height="1rem" radius=".133333rem" :src="item.avatar" />
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
  created() {
    this.joinWorldRoom();
  },
  mounted() {
    this.scrollToBottom();
  },
  sockets: {
    // socket 监听 私聊事件
    worldChat(data) {
      console.log("worldChat", data);
    }
  },
  data() {
    return {
      userId: this.$store.state.user._id, //用户 id
      worldFriend: { id: "world" }, // 要添加朋友的信息
      message: "", //输入框信息
      //   privateMessage: this.$store.getters.privateMessage
      // worldMessage: [] //保存从世界中收到的信息
      isConnect:true, //是否连接 默认是
    };
  },
  methods: {
    // 发送信息
    async sendMessage() {
      let message = {};
      message.message = this.message;
      message.fromId = this.$store.state.user._id;
      message.username = this.$store.state.user.username;
      message.avatar = this.$store.state.user.avatar;
      message.toId = this.worldFriend.id;
      message.room = this.worldFriend.id;
      message.createTime = new Date();
      // 更新 store 中的 worldMessage
      this.$store.commit("updateWorldMessageSendBySelf", message);
      // 发送广播到房间的其他用户
      this.$socket.emit("worldMessage", message);
      this.message = "";
      try {
        this.scrollToBottom();
      } catch (err) {
        console.log("scrollToBottomErr", err);
      }
    },
    // 滚动条滚动到底部
    scrollToBottom() {
      this.$nextTick(() => {
        let element = this.$refs.chat;
        document.documentElement.scrollTop = element.scrollHeight; // 滚动高度
      });
    },
    //滚动到顶部
    scrollToTop(scrollDuration) {
      var cosParameter = window.scrollY / 2,
        scrollCount = 0,
        oldTimestamp = performance.now();
      function step(newTimestamp) {
        scrollCount +=
          Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
        if (window.scrollY === 0) return;
        window.scrollTo(
          0,
          Math.round(cosParameter + cosParameter * Math.cos(scrollCount))
        );
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    },
    // 加入 world 的 room
    joinWorldRoom() {
      this.$socket.emit("join", { room: this.worldFriend.id });
    },
    // 离开 world 的 room
    leaveWorldRoom() {

      if(this.isConnect) {
        this.$socket.emit("leave", { room: this.worldFriend.id });
        this.isConnect = false;
      }else{
        this.joinWorldRoom()
        this.isConnect = true;
      }
      // this.$router.push({
      //   path:'/main/find'
      // })
    }
    // 是否接收信息
  },
  computed: {
    worldMessage() {
      this.scrollToBottom();
      return this.$store.state.worldMessage;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";
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