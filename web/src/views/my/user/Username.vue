<template>
  <div class="username">
    <my-top-bar left-arrow left-text="更改名字" to="/user">
      <template v-slot:right>
        <div class="nav-bar_right">
          <!-- <span class="va-middle iconfont iconsousuo pr-3 fs-xxl"></span>
          <span class="va-middle iconfont icontianjia fs-xl"></span>-->
          <!-- :class="$store.state.user.username === username ? '' : ''" -->
          <van-button
            type="primary"
            size="small"
            v-if="$store.state.user.username === username"
            class="bt-color"
          >保存</van-button>
          <van-button type="primary" size="small" v-else @click="updateUsername">保存</van-button>
        </div>
      </template>
    </my-top-bar>
    <div class="d-flex jc-center mt-1">
      <van-field v-model="username" class="field" />
    </div>
    <p class="fs-sm text-dark-3 pl-1 ml-0-5">好的名字可以让朋友更容易记住你</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$store.state.user.username
    };
  },
  methods: {
    // 更新用户名
    async updateUsername() {
      let res = await this.$http.put(
        `/rest/users/${this.$store.state.user._id}`,
        { username: this.username }
      );
      if (res.status === 200) {
        this.$store.commit("updateUsername", this.username);
        this.$toast({
          type: "success",
          message: "修改成功"
        });
      }
    }
  },
  computed: {
    
  },
  updated() {
    console.log(this.username);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_variables.scss";

.username {
  .bt-color {
    background-color: map-get($colors, "dark-3");
    border-color: map-get($colors, "dark-3");
  }
  .field {
    border-bottom: 1px solid map-get($colors, "green");
    &.van-cell {
      background-color: map-get($colors, "primary");
      width: 90%;
    }
  }
}
</style>