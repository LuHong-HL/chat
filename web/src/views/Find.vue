<template>
  <div>
    <my-top-bar left-text="发现">
      <template v-slot:right>
        <div class="nav-bar_right">
          <span class="va-middle iconfont iconsousuo pr-3 fs-xxl"></span>
          <span class="va-middle iconfont icontianjia fs-xl"></span>
        </div>
      </template>
    </my-top-bar>
    <!-- my-container 部分 -->
    <div class="find-container">
      <van-cell-group>
        <van-cell class="d-flex ai-center jc-between fs-lg pt-1-5 pb-1-5">
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
      <van-cell-group class="mt-1">
        <van-cell class="d-flex ai-center jc-between fs-lg pt-1-5 pb-1-5" to="/main/find/world">
          <template v-slot:icon>
            <van-icon class-prefix="iconfont iconWorld" size=".586667rem" color="#08c161" />
          </template>
          <template v-slot:title>
            <span class="cell-title pl-1 fs-lg text-dark flex-grow-1">世界喊话</span>
          </template>
          <template v-slot:right-icon>
            <van-icon name="arrow" color="#e9e9e9" />
          </template>
        </van-cell>
      </van-cell-group>
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
</style>