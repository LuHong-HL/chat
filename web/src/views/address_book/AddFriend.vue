<template>
  <div class="add_friend">
    <my-top-bar left-arrow left-text="添加朋友" to="/new_friends"></my-top-bar>
    <van-search
      class="search"
      v-model="model.phone"
      background="#ededed"
      placeholder="请输入通信号/手机号"
      input-align="center"
    />
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
  methods: {}
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