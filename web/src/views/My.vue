<template>
  <div>
    <!-- my-header 部分 -->
    <van-cell-group class="my-header pb-2 pt-2">
      <van-cell class="cell-container d-flex ai-center jc-between fs-lg mt-1 mb-1" to="/user">
        <template v-slot:icon>
          <van-image
            width="1.555555rem"
            height="1.555555rem"
            radius=".133333rem"
            :src="$store.state.user.avatar"
            fit="cover"
          />
        </template>
        <template v-slot:title>
          <span class="cell-title pl-1 fs-xxl text-dark flex-grow-1">{{$store.state.user.username}}</span>
        </template>
        <template v-slot:label>
          <div class="d-flex">
            <span class="cell-title fs-md pl-1 text-dark-3 flex-grow-1">通信号:{{$store.state.user.phone}}</span>
            <div class="d-flex">
              <div class="pr-1">
                <van-icon class-prefix="iconfont iconerweima" size=".373333rem" color="#e8e8e8" />
              </div>
              <van-icon
                class-prefix="iconfont iconarrow-right-copy-copy-copy"
                size=".5rem"
                color="#e8e8e8"
              />
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <!-- my-container 部分 -->
    <van-cell-group class="my-container">
      <van-cell class="cell-container d-flex ai-center jc-between fs-lg pt-1-5 pb-1-5" to="/set_up">
        <template v-slot:icon>
          <van-icon class-prefix="iconfont iconshezhi" size=".586667rem" color="#2e92f0" />
        </template>
        <template v-slot:title>
          <span class="cell-title pl-1 fs-lg text-dark flex-grow-1">设置</span>
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
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.van-cell-group {
  margin-bottom: map-get($spacing-sizes, "1") * $spacing-base-size;
}
.my-header {
  .van-cell__label {
    margin-top: map-get($spacing-sizes, "1") * $spacing-base-size;
  }
}
</style>