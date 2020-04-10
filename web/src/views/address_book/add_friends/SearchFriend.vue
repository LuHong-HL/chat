<template>
  <div class="search_friend">
    <van-search
      class="search"
      v-model="model.phone"
      background="#ededed"
      placeholder="通信号/手机号"
      show-action
      @cancel="Cancel"
      @input="displaySearch"
      ref='searchId'
    />
    <van-divider :style="{ borderColor: 'rgb(200, 200, 200)', margin:0 }"></van-divider>

    <van-cell v-show="model.isDisplay" class="d-flex ai-center" @click="searchFriends(model.phone)">
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

    <div v-show="model.isSearch" class="d-flex jc-center py-3 bg-white">
      <span class="fs-sm text-dark-3">该用户不存在</span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // 输入框自动聚焦
    this.$refs.searchId.children[0].children[0].children[1].children[0].children[0].focus();
  },
  data() {
    return {
      model: {
        phone: "", // 手机号
        isSearch: false, //是否显示用户不存在UI
        isDisplay: false // 是否显示所搜框
      }
    };
  },
  methods: {
    // search friends 取消触发 返回上一层
    Cancel() {
      this.$router.go(-1);
    },
    // 查找朋友
    async searchFriends(message) {
      this.hideSearch();
      // 查找好友
      // 查找成功跳转到陌生人页面，进一步操作
      // 失败提示
      const res =await this.$http.post(`/rest/users/conditions`, {phone: message})
      console.log(res)
      if(res.data.length ===  0){ //没找到
          this.model.isSearch = true;
      }else{ //查找到对应用户
          this.model.isSearch = false;
          this.$router.push({
            path:'/user_profiles',
            query:res.data[0]
          })

          
      }
      
    },
    // 显示搜索框
    displaySearch() {
      this.model.isSearch = false;
      if (this.model.phone === "") {
        this.model.isDisplay = false;
      } else {
        this.model.isDisplay = true;
      }
    },
    // 隐藏搜索框
    hideSearch() {
      this.model.isDisplay = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_variables.scss";

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