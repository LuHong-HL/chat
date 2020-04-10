<template>
  <div>
    <van-sticky>
      <div class="topbar bg-gray fs-xl d-flex jc-between p-1 ai-center">
        <slot name="left">
          <div class="nav-bar_left">
            <i
              v-if="leftArrow"
              class="va-middle icon-arrow-left iconfont icon-left-arrow fs-xxxl"
              @click="back"
            ></i>
            <span class="pl-1">{{leftText ? leftText : ''}}</span>
          </div>
        </slot>

        <slot name="default"></slot>
        <slot name="right"></slot>
      </div>
    </van-sticky>
  </div>
</template>

<script>
export default {
  props: {
    "left-text": {
      type: String
    },
    "left-arrow": {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    // 返回上一层
    back() {
      this.$router.go(-1);
    }
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

.topbar {
  height: 1.222133rem;
}
</style>