<template>
  <div>
    <my-top-bar title="微信"></my-top-bar>
    <div class="container">
      <van-cell class="cell-container d-flex ai-center fs-lg" v-for="(item, index) in 15" :key="index">
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
            <span class="cell-title pl-1 fs-sm text-dark-3">12:35</span>
          </div>
        </template>
        <template v-slot:label>
          <span class="cell-title fs-sm pl-1 text-dark-3">{{item}}有东西聊吗</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.container {
  padding-bottom: 1.333333rem;
}
</style>