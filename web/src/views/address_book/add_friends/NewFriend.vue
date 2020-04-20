<template>
  <div class="new_friends">
    <!-- 顶部 bar  -->
    <!-- to="/main/address_book" -->
    <my-top-bar left-arrow left-text="新朋友">
      <template v-slot:right>
        <router-link to="/new_friends/add_friends" tag="div">
          <span>添加朋友</span>
        </router-link>
      </template>
    </my-top-bar>
    <!-- 搜索框 -->
    <van-search
      class="search"
      v-model="phone"
      background="#ededed"
      placeholder="通信号/手机号"
      input-align="center"
      @focus="toSearchPage"
    />
    <!-- 新朋友请求信息 -->
    <div class="container">
      <van-cell
        class="cell-container d-flex ai-center fs-lg"
        v-for="(item, index) in newFriends"
        :key="index"
      >
        <template v-slot:icon>
          <van-image
            width="1.1112rem"
            height="1.1112rem"
            radius=".133333rem"
            :src="item.fromId.avatar"
          />
        </template>
        <template v-slot:title>
          <div class="d-flex">
            <span class="cell-title pl-1 fs-lg text-dark flex-grow-1">{{item.fromId.username}}</span>
          </div>
        </template>
        <template v-slot:label>
          <span class="cell-title fs-sm pl-1 text-dark-3">{{item.checkMessage}}</span>
        </template>
        <template v-slot:default>
          <van-button
            v-if="item.status === 3"
            type="primary"
            size="small"
            @click="agreeToAddFriend(item)"
          >接受</van-button>
          <span v-if="item.status === 1" class="pr-0-5">已添加</span>
          <!-- <span>已拒绝</span> -->
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  sockets: {
    // 监听 addFriend 事件
    addFriend(res) {
      this.newFriends = res.addFriendInformations;
    }
  },
  created() {
    this.getNewFriends();
  },
  data() {
    return {
      phone: "", // 手机号
      newFriends: [] //新朋友信息列表
    };
  },
  methods: {
    // 跳转到搜索页面
    toSearchPage() {
      this.$router.push({
        path: "/new_friends/search_friends"
      });
    },
    // 获取 新朋友列表
    async getNewFriends() {
      let res = await this.$http.get(
        `/rest/users/add_friend_informations/${this.$store.state.user._id}`
      );
      this.newFriends = res.data.addFriendInformations;
    },
    // 同意添加朋友
    async agreeToAddFriend(friend) {
      // 1. 修改 User 数据库的 friends 字段 ,更新 store 中的 user
      // 2. 修改 AddFriendInformation 数据库 status字段 为 1
      // 3. 前端获取最新数据，渲染

      // 添加好友管理
      const res =await this.$http.get(`/rest/users/${this.$store.state.user._id}`)
      let friends = res.data.friends
      friends.push(friend.fromId._id);
      await this.$http.put(`/rest/users/${this.$store.state.user._id}`, {
        friends: friends
      });

      // 好友添加 friends 关联自己
      const res2 = await this.$http.get(`/rest/users/${friend.fromId._id}`)
      let friends2 = res2.data.friends
      friends2.push(this.$store.state.user._id);
      await this.$http.put(`/rest/users/${friend.fromId._id}`, {
        friends: friends2
      });
      await this.$http.put(
          `/rest/add_friend_Informations/${friend._id}`,
        { status: 1 }
      );
      this.getNewFriends();

      // 更新 sessionStorage 及 store 中的 user 
      this.$store.dispatch('updateUser')
      
      //假设好友在线，则通过socket通知好友更新好友列表，不在线就不更新，好友登录自动更新
       // 根据 userId 找出对应的 socketId
      const socketMap = await this.$http.post("/rest/sockets/conditions", {
        userId: friend.fromId._id
      });
      const socketId = socketMap.data[0].socketId;
      this.$socket.emit("updateFriends", socketId, { toId: friend.fromId._id, fromId:this.$store.state.user._id, checkMessage: '我们现在是朋友了', username: this.$store.state.user.username});
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_variables.scss";

.new_friends {
  .search {
    ::v-deep .van-cell--borderless {
      padding: 0.025rem 0.21333rem 0.025rem 0;
    }
  }
  .container {
    margin-top: map-get($spacing-sizes, "2") * $spacing-base-size;
    .icon {
      vertical-align: middle;
    }
  }
}
</style>