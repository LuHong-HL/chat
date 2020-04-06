<template>
  <div class="username">
    <my-top-bar left-arrow left-text="更改名字" to="/user">
      <template v-slot:right>
        <div class="nav-bar_right">
          <!-- <span class="va-middle iconfont iconsousuo pr-3 fs-xxl"></span>
          <span class="va-middle iconfont icontianjia fs-xl"></span>-->
          <van-button type="primary" size="small">保存</van-button>
        </div>
      </template>
    </my-top-bar>
    <div class="d-flex jc-center mt-1">
      <van-field v-model="username" class="field" />
    </div>
    <p class="fs-sm text-dark-3 pl-1 ml-0-5">好的名字可以让朋友更容易记住你</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:this.$store.state.user.username
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/_variables.scss';

.username {
  .field {
      border-bottom:1px solid map-get($colors , 'green' );
      &.van-cell {
          background-color: map-get($colors , 'primary' );
          width: 90%;
      }
  }
}
</style>