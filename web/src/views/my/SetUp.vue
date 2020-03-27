<template>
  <div class="set_up-container">
    <my-top-bar left-arrow left-text="设置" to="/main/my"></my-top-bar>
    <!-- set_up-inner-container 部分 -->
    <div class="set_up-inner-container">
      <van-cell-group>
        <van-cell
          class="cell-container d-flex ai-center jc-between fs-lg pt-1-5 pb-1-5"
          to="/set_up"
        >
          <template v-slot:title>
            <span class="cell-title pl-1 fs-lg text-dark flex-grow-1">账号与安全</span>
          </template>
          <template v-slot:right-icon>
            <van-icon name="arrow" color="#e9e9e9" />
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell class="cell-container fs-lg pt-1-5 pb-1-5">
          <div class="text-center">
            <span class="cell-title fs-lg text-dark">切换账号</span>
          </div>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell class="cell-container fs-lg pt-1-5 pb-1-5" @click="showPopup">
          <div class="text-center">
            <span class="cell-title fs-lg text-dark">退出</span>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- popup 部分 -->
    <van-popup v-model="show" round position="bottom" class="popup">
      <van-cell-group>
        <van-cell class="cell-container fs-lg pt-1-5 pb-1-5">
          <div class="text-center">
            <span class="cell-title fs-lg text-dark">退出登录</span>
          </div>
        </van-cell>
        <van-cell class="cell-container fs-lg pt-1-5 pb-1-5">
          <div class="text-center">
            <span class="cell-title fs-lg text-dark">关闭微信</span>
          </div>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell class="cell-container fs-lg pt-1-5 pb-1-5" @click="cancelPopup">
          <div class="text-center">
            <span class="cell-title fs-lg text-dark">取消</span>
          </div>
        </van-cell>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    // 展示弹出层
    showPopup() {
      this.show = true;
    },
    //取消弹出层
    cancelPopup() {
      this.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";
.set_up-container {
  .van-cell-group {
    margin-bottom: map-get($spacing-sizes, "1") * $spacing-base-size;
  }
  .set_up-inner-container {
    .van-cell-group:last-child {
      margin-bottom: map-get($spacing-sizes, "3") * $spacing-base-size;
    }
  }
  .popup {
    .van-cell-group:last-child {
      margin-bottom: 0;
    }
    &.van-popup {
      background-color: map-get($colors, "primary");
    }
  }
}
</style>