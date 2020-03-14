<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#08c161" inactive-color="#000">
      <van-tabbar-item info="3" replace to="/main/home">
        <span>微信</span>
        <span
          slot="icon"
          slot-scope="props"
          :class="props.active ? 'iconfont iconchat' : 'iconfont iconchat_bubble'"
        ></span>
      </van-tabbar-item>
      <van-tabbar-item info="3" replace to="/main/address_book">
        <span>通讯录</span>
        <span
          slot="icon"
          slot-scope="props"
          :class="props.active ? 'iconfont iconaddressbook_fill' : 'iconfont iconaddressbook'"
        size="50px"></span>
      </van-tabbar-item>
      <van-tabbar-item info="3" replace to="/main/find">
        <span>发现</span>
        <span
          slot="icon"
          slot-scope="props"
          :class="props.active ? 'iconfont iconfaxian1' : 'iconfont iconfaxian'"
        ></span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/main/my">
        <span>我</span>
        <span
          slot="icon"
          slot-scope="props"
          :class="props.active ? 'iconfont iconiconfontzhizuobiaozhun04' : 'iconfont iconiconfontzhizuobiaozhun08'"
        ></span>
      </van-tabbar-item>
    
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>
.van-tabbar{
  background-color: #f7f7f7;
}
</style>
