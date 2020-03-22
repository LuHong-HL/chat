<template>
  <div>
    <van-sticky>
      <div class="topbar bg-gray fs-xl d-flex jc-between p-1 ai-center">
        <div>{{title}}</div>
        <div class="d-flex ai-center">
          <span class="iconfont iconsousuo pr-3 fs-xxl"></span>
          <span class="iconfont icontianjia fs-xl"></span>
        </div>
      </div>
    </van-sticky>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// .topbar {
//   // position: fixed;
//   position: sticky;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 2;
// }
</style>