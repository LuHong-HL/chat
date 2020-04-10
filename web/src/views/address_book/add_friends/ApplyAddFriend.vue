<template>
  <div class="applyAddFriend">
    <my-top-bar left-arrow>
      <template v-slot:right>
        <div>
          <van-button type="primary" size="small" @click="addFriend">发送</van-button>
        </div>
      </template>
    </my-top-bar>
    <div class>
      <div class="d-flex jc-center">
        <h4>申请添加朋友</h4>
      </div>
      <div class="d-flex jc-center">
        <div class="message">
          <span class="text-dark-3 fs-md">发送添加朋友申请信息</span>
          <van-field v-model="checkMessage" class="mt-0-5 my-field" ref="my-field"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friend: this.$route.query, // 要添加朋友的信息
      checkMessage: "" // 添加朋友的验证信息
    };
  },
  methods: {
      //发送添加好友请求
      addFriend() {

      }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/_variables.scss';

.applyAddFriend {
  .message {
    width: 8rem;
    .my-field{
        // min-height: 3rem;
        background-color: map-get($colors, 'gray');
    }
  }
}
</style>