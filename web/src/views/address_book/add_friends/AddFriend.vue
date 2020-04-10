<template>
  <div class="add_friend">
    <my-top-bar left-arrow left-text="添加朋友"></my-top-bar>
    <van-search
      class="search"
      v-model="model.phone"
      background="#ededed"
      placeholder="请输入通信号/手机号"
      input-align="center"
      @focus="toSearchPage"
    />
    <div class="d-flex jc-center pt-1 pb-3">
      <span class="fs-sm text-dark-3">我的通信号：{{$store.state.user.phone}}</span>
      <van-icon class="pl-1" class-prefix="iconfont iconerweima" size=".373333rem" color="#959595" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        phone: "" // 手机号
      }
    };
  },
  methods: {
    //跳转到搜索页面
    toSearchPage() {
      this.$router.push({
        path: "/new_friends/search_friends"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.add_friend {
  .search {
    ::v-deep .van-cell--borderless {
      padding: 0.025rem 0.21333rem 0.025rem 0;
    }
  }
}
</style>