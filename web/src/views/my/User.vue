<template>
  <div>
    <my-top-bar left-arrow left-text="个人信息" to="/main/my"></my-top-bar>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      // Toast('返回');
    },
    onClickRight() {
      // Toast('按钮');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>