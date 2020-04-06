<template>
  <div>
    <my-top-bar left-arrow left-text="个人信息" to="/main/my"></my-top-bar>
    <van-cell-group>
      <van-cell class="d-flex ai-center">
        <template v-slot:title>
          <span class="fs-lg text-dark">头像</span>
        </template>
        <template v-slot:right-icon>
          <van-image
            width="1.4rem"
            height="1.4rem"
            radius=".133333rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <van-icon class="pl-1" name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
      <van-cell class=" d-flex ai-center fs-lg pt-1-5 pb-1-5" to="/user/username">
        <template v-slot:title>
          <span class="fs-lg text-dark">昵称</span>
        </template>
        <template v-slot:right-icon>
          <span class="text-dark-3">{{$store.state.user.username}}</span>
          <van-icon class="pl-1" name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
      <van-cell class=" d-flex ai-center fs-lg pt-1-5 pb-1-5" to="">
        <template v-slot:title>
          <span class="fs-lg text-dark">通信号</span>
        </template>
        <template v-slot:right-icon>
          <span class="text-dark-3">{{$store.state.user.phone}}</span>
          <van-icon class="pl-1" name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
      <van-cell class=" d-flex ai-center fs-lg pt-1-5 pb-1-5" to="">
        <template v-slot:title>
          <span class="fs-lg text-dark">二维码名片</span>
        </template>
        <template v-slot:right-icon>
          <van-icon class-prefix="iconfont iconerweima" size=".373333rem" color="#e8e8e8" />
          <van-icon class="pl-1" name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
      <van-cell class=" d-flex ai-center fs-lg pt-1-5 pb-1-5" to="">
        <template v-slot:title>
          <span class="fs-lg text-dark">更多</span>
        </template>
        <template v-slot:right-icon>
          <van-icon class="pl-1" name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="mt-1">
      <van-cell class=" d-flex ai-center fs-lg pt-1-5 pb-1-5" to="">
        <template v-slot:title>
          <span class="fs-lg text-dark">我的地址</span>
        </template>
        <template v-slot:right-icon>
          <van-icon class="pl-1" name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>