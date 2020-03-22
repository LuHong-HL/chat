<template>
  <div>
    <my-top-bar title="通讯录"></my-top-bar>
    <van-index-bar :index-list="indexList">
      <div v-for="(item, index) in indexList" :key="index">
        <van-index-anchor index="A">标题1</van-index-anchor>
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
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

<style scoped>
</style>