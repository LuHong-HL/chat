<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" replace to="/main/home">标签</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/main/address_book">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/main/find">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/main/my">标签</van-tabbar-item>
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

</style>
