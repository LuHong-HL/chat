<template>
  <div class="userProfile">
    <!-- 顶部 bar  -->
    <my-top-bar left-arrow>
      <template v-slot:right>
        <div>
          <van-icon name="ellipsis" />
        </div>
      </template>
    </my-top-bar>
    <!-- 用户信息部分 -->
    <van-cell-group class>
      <van-cell class="cell-container d-flex jc-between fs-lg py-2" to>
        <template v-slot:icon>
          <van-image
            width="1.555555rem"
            height="1.555555rem"
            radius=".133333rem"
            :src="friend.avatar"
            fit="cover"
          />
        </template>
        <template v-slot:title>
          <span class="cell-title pl-1 fs-xxl text-dark flex-grow-1">{{friend.username}}</span>
        </template>
        <template v-slot:label>
          <div class="d-flex flex-column">
            <span
              class="cell-title fs-md pl-1 text-dark-3 flex-grow-1 pt-0-5"
            >昵称：{{friend.username}}</span>
            <span class="cell-title fs-md pl-1 text-dark-3 flex-grow-1 pt-0-5">通信号：{{friend.phone}}</span>
          </div>
        </template>
      </van-cell>

      <van-cell class="cell-container d-flex ai-center jc-between fs-lg py-1-5" to>
        <template v-slot:title>
          <span class="cell-title fs-lg text-dark flex-grow-1">设置备注和标签</span>
        </template>
        <template v-slot:right-icon>
          <van-icon name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
      <van-cell class="cell-container d-flex ai-center jc-between fs-lg py-1-5" to>
        <template v-slot:title>
          <span class="cell-title fs-lg text-dark flex-grow-1">朋友圈权限</span>
        </template>
        <template v-slot:right-icon>
          <van-icon name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="mt-1">
      <van-cell class="cell-container d-flex ai-center jc-between fs-lg py-1-5" to>
        <template v-slot:title>
          <div class="d-flex">
            <span class="fs-lg text-dark">个性签名</span>
            <span class="pl-1 fs-lg text-dark-3 text-ellipsis sign">{{friend.signature}}</span>
          </div>
        </template>
        <template v-slot:right-icon>
          <van-icon name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="mt-1">
      <van-cell
        class="cell-container d-flex ai-center jc-between fs-lg py-1-5"
        @click="toChat"
      >
        <template>
          <div class="d-flex jc-center ai-center">
            <van-icon class-prefix="iconfont iconchat_bubble" size=".55rem" color="#60739b" class="pr-1"/>
            <span class="fs-lg text-blue-1">发消息</span>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friend: this.$route.query // 要添加朋友的信息
    };
  },
  methods: {
    // 跳转添加朋友页面
    toChat() {
      this.$router.push({
        path: "/address_book/chat",
        query: this.friend
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_variables.scss";

.userProfile {
  ::v-deep .bg-gray {
    background-color: map-get($colors, "white");
  }
  .sign {
    width: 7rem;
  }
}
</style>