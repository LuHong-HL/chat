<template>
  <div>
    <van-sticky>
      <div class="topbar bg-gray fs-xl d-flex jc-between py-0-5 px-1 ai-center">
        <router-link tag="slot" name="left" :to="to">
          <div class="nav-bar_left">
            <i v-if="leftArrow" class="va-middle icon-arrow-left iconfont icon-left-arrow fs-xxxl"></i>
            <span class="pl-1">{{leftText ? leftText : ''}}</span>
          </div>
        </router-link>

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
    },
    to: {
      type: String,
      default:''
    }
  },
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