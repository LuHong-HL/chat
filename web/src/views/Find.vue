<template>
  <div>
    <my-top-bar title="发现"></my-top-bar>
    <!-- my-container 部分 -->
    <van-cell-group class="find-container">
      <van-cell class="cell-container d-flex ai-center jc-between fs-lg pt-1-5 pb-1-5">
        <template v-slot:icon>
          <van-icon class-prefix="iconfont iconpengyouquan" size=".586667rem" color="#2e92f0" />
        </template>
        <template v-slot:title>
          <span class="cell-title pl-1 fs-lg text-dark flex-grow-1">朋友圈</span>
        </template>
        <template v-slot:right-icon>
          <van-icon name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
    </van-cell-group>
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
</style>