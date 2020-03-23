<template>
  <div>
    <div class="my-header">头部</div>
    <div class="my-container">
      <van-cell>
        <div class="cell-container d-flex ai-center jc-between fs-lg">
          <!-- <van-icon radius=".133333rem" name="setting-o" size=".586667rem" /> -->
          <van-icon radius=".133333rem" class-prefix="iconfont iconshezhi" size=".586667rem" color="#2e92f0"/>
          <span class="cell-title pl-1 fs-lg text-dark flex-grow-1">设置</span>
          <van-icon name="arrow" color="#e9e9e9"/>  
        </div>        
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

<style lang="scss" scoped>
.my-container {
  // ::v-deep .van-icon {
  //   font-size: .586667rem !important;
  // }
}
</style>