<template>
  <div class="search_friend">
    <van-search
      class="search"
      v-model="model.phone"
      background="#ededed"
      placeholder="通信号/手机号"
      show-action
      @cancel="Cancel"
    />

    <van-cell class="d-flex ai-center" @click="searchFriends(model.phone)">
      <template v-slot:icon>
        <div class="my-icon my-icon-1 d-flex jc-center ai-center">
          <van-icon class-prefix="iconfont iconbg-add-friend" size=".586667rem" color="#fff" />
        </div>
      </template>
      <template v-slot:title>
        <div class="cell-title pl-1 fs-lg text-dark d-flex ai-center">
          <span>搜索:</span>
          <span class="text-green text-ellipsis my-text">{{model.phone}}</span>
        </div>
      </template>
    </van-cell>
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
    // search friends 取消触发 返回上一层
    Cancel() {
      this.$router.go(-1);
    },
    // 查找朋友
    searchFriends(message) {
        console.log('message', message)
        
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.search_friend {
  .search {
    ::v-deep .van-cell--borderless {
      padding: 0.025rem 0.21333rem 0.025rem 0;
    }
  }
  .my-icon {
    width: 1rem;
    height: 1rem;
    border-radius: 0.133333rem;
  }
  .my-icon-1 {
    background-color: map-get($colors, "green");
  }
  .my-text {
      max-width: 6.5rem;
  }
}
</style>