<template>
  <div class="address-book-container">
    <my-top-bar left-text="通讯录">
      <template v-slot:right>
        <div class="nav-bar_right">
          <span class="va-middle iconfont iconsousuo pr-3 fs-xxl"></span>
          <span class="va-middle iconfont icontianjia fs-xl"></span>
        </div>
      </template>
    </my-top-bar>
    <van-index-bar :index-list="indexList" class="index-class">
      <!-- 通讯录功能区 -->
      <van-cell-group class="functional-area">
        <van-cell class="d-flex ai-center" to="/new_friends">
          <template v-slot:icon>
            <div class="my-icon my-icon-1 d-flex jc-center ai-center">
              <van-icon class-prefix="iconfont iconbg-add-friend" size=".586667rem" color="#fff" />
            </div>
          </template>
          <template v-slot:title>
            <span class="cell-title pl-1 fs-lg text-dark">新的朋友</span>
          </template>
        </van-cell>
        <van-cell class="d-flex ai-center">
          <template v-slot:icon>
            <div class="my-icon my-icon-2 d-flex jc-center ai-center">
              <van-icon class-prefix="iconfont iconqunliao" size=".586667rem" color="#fff" />
            </div>
          </template>
          <template v-slot:title>
            <span class="cell-title pl-1 fs-lg text-dark">群聊</span>
          </template>
        </van-cell>
        <van-cell class="d-flex ai-center">
          <template v-slot:icon>
            <div class="my-icon my-icon-3 d-flex jc-center ai-center">
              <van-icon class-prefix="iconfont iconbiaoqian" size=".586667rem" color="#fff" />
            </div>
          </template>
          <template v-slot:title>
            <span class="cell-title pl-1 fs-lg text-dark">标签</span>
          </template>
        </van-cell>
      </van-cell-group>
      <!-- 朋友列表 -->
      <div v-for="(item, index) in indexList" :key="index">
        <!-- <van-index-anchor :index="item">{{item}}</van-index-anchor> -->
        <!-- <van-cell class="d-flex ai-center" v-for="(item, index) in friendsList" :key="index">
          <template v-slot:icon>
            <van-image
              width="1rem"
              height="1rem"
              radius=".133333rem"
              :src="item.avatar"
            />
          </template>
          <template v-slot:title>
            <span class="cell-title pl-1 fs-lg text-dark">{{item.username}}</span>
          </template>
        </van-cell> -->
      </div>
      <van-cell class="d-flex ai-center" v-for="(item, index) in friendsList" :key="index" @click="goToFriendPage(item)">
          <template v-slot:icon>
            <van-image
              width="1rem"
              height="1rem"
              radius=".133333rem"
              :src="item.avatar"
            />
          </template>
          <template v-slot:title>
            <span class="cell-title pl-1 fs-lg text-dark">{{item.username}}</span>
          </template>
        </van-cell>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  created() {
    this.getFriendsList()
  },
  data() {
    return {
      friendsList: [], //好友列表
      indexList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },
  methods: {
    //获取好友列表
    getFriendsList() {
      this.friendsList = this.$store.state.user.friends
         
    },
    // 跳转到朋友页面
    goToFriendPage(item) {
        this.$router.push({
          path: '/address_book/friend',
          query: item
        })
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

.address-book-container {
  padding-bottom: 1.33333rem;
  ::v-deep .van-index-bar__index {
    line-height: 0.45rem;
  }
  .functional-area {
    margin-bottom: map-get($spacing-sizes , '2') * $spacing-base-size;
  }
  .my-icon {
    width: 1rem;
    height: 1rem;
    border-radius: 0.133333rem;
  }
  .my-icon-1 {
    background-color: #fa9d3b;
  }
  .my-icon-2 {
    background-color: #07c160;
  }
  .my-icon-3 {
    background-color: #2782d7;
  }

  .van-cell {
    padding-top: 0.16667rem;
    padding-bottom: 0.16667rem;
  }
}
</style>