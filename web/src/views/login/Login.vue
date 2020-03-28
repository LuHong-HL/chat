<template>
  <div class="login-container d-flex jc-center ai-center">
    <div class="login-inner-container p-3">
      <van-tabs animated v-model="model.active" :border="false">
        <van-tab title="登录">
          <div class="field">
            <van-field v-model="model.login.username" required label="用户名" placeholder="请输入手机号或用户名" />
            <van-field v-model="model.login.password" required label="密码" placeholder="请输入密码" />
          </div>
          <van-button type="info" block>登录</van-button>
          <!-- <p class="fs-md text-dark">账号密码登录</p> -->
          <p class="fs-md text-dark">短信验证登录</p>
        </van-tab>
        <van-tab title="注册">
          <div class="field">
            <van-field v-model="model.register.username" required placeholder="请输入用户名" label="用户名"/>
            <van-field v-model="model.register.phone" required placeholder="请输入手机号" label="手机号" />
            <van-field v-model="model.register.password" required placeholder="请输入密码" label="密码" />
            <van-field v-model="model.register.password2" required placeholder="再次输入密码" label="确认密码" />
          </div>
          <van-button type="info" block>注册</van-button>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        active: 0,
        register: {},
        login: {}
      },
      
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";
.login-container {
  padding-top: map-get($spacing-sizes, "5") * $spacing-base-size;
  padding-left: map-get($spacing-sizes, "2") * $spacing-base-size;
  padding-right: map-get($spacing-sizes, "2") * $spacing-base-size;
  .login-inner-container {
    // width: 90%;
    background-color: #fff;
    border-radius: 0.25rem;
    .field {
      padding-bottom: map-get($spacing-sizes, "1") * $spacing-base-size;
    }
    .van-button--block {
      width: 99%;
    }
  }
}
</style>