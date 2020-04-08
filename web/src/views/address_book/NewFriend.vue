<template>
  <div class="new_friends">
    <!-- 顶部 bar  -->
    <my-top-bar left-arrow left-text="新朋友" to="/main/address_book">
      <template v-slot:right>
        <router-link to="/new_friends/add_friends" tag="div">
          <span>添加朋友</span>
        </router-link>
      </template>
    </my-top-bar>
    <!-- 搜索框 -->
    <van-search
      class="search"
      v-model="model.phone"
      background="#ededed"
      placeholder="通信号/手机号"
      input-align="center"
      @focus="toSearchPage"
    />
    <!-- 新朋友请求信息 -->
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
          </div>
        </template>
        <template v-slot:label>
          <span class="cell-title fs-sm pl-1 text-dark-3">{{item}}有东西聊吗</span>
        </template>
        <template v-slot:default>
          <van-button type="primary" size="small">接受</van-button>
          <!-- <span>已添加</span> -->
          <!-- <span>已拒绝</span> -->
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model:{
        phone:'', // 手机号
      }
    };
  },
  methods: {
    toSearchPage() {
      this.$router.push({
        path:'/new_friends/search_friends'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

.new_friends {
  .search {
    ::v-deep .van-cell--borderless {
      padding: 0.025rem 0.21333rem 0.025rem 0;
    }
  }
  .container {
    margin-top: map-get($spacing-sizes, '2' ) * $spacing-base-size;
    .icon {
      vertical-align: middle;
    }
  }
}
</style>