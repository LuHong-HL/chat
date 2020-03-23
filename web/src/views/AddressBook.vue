<template>
  <div class="address-book-container">
    <my-top-bar title="通讯录"></my-top-bar>
    <van-index-bar :index-list="indexList" class="index-class">
      
      <div v-for="(item, index) in indexList" :key="index">
        <van-index-anchor :index="item">{{item}}</van-index-anchor>
        <my-cell src="https://img.yzcdn.cn/vant/cat.jpeg" title="我是小小鸭"></my-cell>
        <my-cell src="https://img.yzcdn.cn/vant/cat.jpeg" title="我是小小鸭"></my-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.address-book-container {
  padding-bottom: 1.33333rem;
  ::v-deep .van-index-bar__index {
    line-height: 0.45rem;
  }
}
 
</style>