<template>
  <div class="login-container d-flex jc-center ai-center">
    <div class="login-inner-container p-3">
      <van-tabs v-model="model.active" :border="false">
        <van-tab title="登录">
          <van-form @submit="login">
            <div class="field">
              <van-field
                v-model="model.login.phone"
                :rules="[{ validator: validatorPhone, message: '请输入正确手机号' }]"
                label="手机号"
                placeholder="请输入手机号"
              />
              <van-field
                type="password"
                v-model="model.login.password"
                :rules="[{ required: true, message: '密码不能为空' }]"
                label="密码"
                placeholder="请输入密码"
              />
            </div>
            <!-- <van-button type="info" block @click="login">登录</van-button> -->
            <van-button round block type="info" native-type="submit">登录</van-button>
            <!-- <p class="fs-md text-dark">账号密码登录</p> -->
            <p class="fs-md text-dark">短信验证登录</p>
          </van-form>
        </van-tab>
        <van-tab title="注册">
          <van-form @submit="register">
            <div class="field">
              <van-field
                v-model="model.register.username"
                :rules="[{ validator: validatorUsername, message: '请输入1-8位字符的用户名' }]"
                placeholder="请输入用户名"
                label="用户名"
              />
              <van-field
                v-model="model.register.phone"
                placeholder="请输入手机号"
                label="手机号"
                :rules="[{ validator: validatorPhone, message: '请输入正确手机号' }]"
              />
              <van-field
                type="password"
                v-model="model.register.password"
                placeholder="请输入密码"
                label="密码"
                :rules="[{ validator: validatorPassword, message: '请输入3位以上的密码' }]"
              />
              <van-field
                type="password"
                v-model="model.register.password2"
                placeholder="再次输入密码"
                label="确认密码"
                :rules="[{ validator: validatorPassword2, message: '两次密码输入不一致' }]"
              />
            </div>
            <van-button round block type="info" native-type="submit">注册</van-button>
          </van-form>
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
        register: {
          username: "", //用户名
          phone: "", // 手机号
          password: "", // 密码
          password2: "" // 密码
        },
        login: {
          username: "",
          password: ""
        }
      }
    };
  },
  methods: {
    // 登录
    async login() {
      const res = await this.$http.post("/login", this.model.login);
      // sessionStorage.token = res.data.token;
      sessionStorage.setItem("token", res.data.token);
      console.log('user', res.data.user)
      this.$toast({
        type: "success",
        message: "登录成功"
      });
      this.$router.push("/main");
    },
    // login() {
    //   this.$http.post("/login", this.model.login).then(resolved =>{
    //      sessionStorage.token = resolved.data.token;
    //   this.$toast({
    //     type: "success",
    //     message: "登录成功"
    //   });
    //   this.$router.push("/main");
    //   })
    // },
    // 注册
    async register() {
      const res = await this.$http.post("/rest/users", this.model.register);
      this.$toast({
        type: "success",
        message: "注册成功"
      });
      console.log(res);
      this.model.login.phone = res.data.phone;
      this.model.active = 0;
    },
    // 正则验证用户名
    validatorUsername(val) {
      return /^.{1,8}$/.test(val);
    },
    // 正则验证手机号
    validatorPhone(val) {
      return /^1[3456789]\d{9}$/.test(val);
    },
    // 验证密码
    validatorPassword(val) {
      return /^.{3,30}$/.test(val);
    },
    // 验证两次密码是否相等
    validatorPassword2() {
      if (!(this.model.register.password === this.model.register.password2)) {
        this.model.register.password = "";
        this.model.register.password2 = "";
        return false;
      } else {
        return true;
      }
    }
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
    // .van-button--block {
    //   width: 99%;
    // }
  }
}
</style>