<template>
  <div class="user">
    <my-top-bar left-arrow left-text="个人信息" to="/main/my"></my-top-bar>
    <van-cell-group>
      <!-- 图片上传 -->
      <van-uploader :after-read="afterRead">
        <van-cell class="d-flex ai-center">
          <template v-slot:title>
            <span class="fs-lg text-dark">头像</span>
          </template>
          <template v-slot:right-icon>
            <van-image
              width="1.4rem"
              height="1.4rem"
              radius=".133333rem"
              :src="$store.state.user.avatar"
              fit="cover"
            />
            <van-icon class="pl-1" name="arrow" color="#e9e9e9" />
          </template>
        </van-cell>
      </van-uploader>
      <van-cell class="d-flex ai-center fs-lg pt-1-5 pb-1-5" to="/user/username">
        <template v-slot:title>
          <span class="fs-lg text-dark">昵称</span>
        </template>
        <template v-slot:right-icon>
          <span class="text-dark-3">{{$store.state.user.username}}</span>
          <van-icon class="pl-1" name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
      <van-cell class="d-flex ai-center fs-lg pt-1-5 pb-1-5" to>
        <template v-slot:title>
          <span class="fs-lg text-dark">通信号</span>
        </template>
        <template v-slot:right-icon>
          <span class="text-dark-3">{{$store.state.user.phone}}</span>
          <van-icon class="pl-1" name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
      <van-cell class="d-flex ai-center fs-lg pt-1-5 pb-1-5" to>
        <template v-slot:title>
          <span class="fs-lg text-dark">二维码名片</span>
        </template>
        <template v-slot:right-icon>
          <van-icon class-prefix="iconfont iconerweima" size=".373333rem" color="#e8e8e8" />
          <van-icon class="pl-1" name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
      <van-cell class="d-flex ai-center fs-lg pt-1-5 pb-1-5" to>
        <template v-slot:title>
          <span class="fs-lg text-dark">更多</span>
        </template>
        <template v-slot:right-icon>
          <van-icon class="pl-1" name="arrow" color="#e9e9e9" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="mt-1">
      <van-cell class="d-flex ai-center fs-lg pt-1-5 pb-1-5" to>
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
    return {};
  },
  methods: {
    // 文件读取完成后 上传文件到服务器
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      let content = file.file;
      let data = new FormData();
      data.append("img", content);
      let res = await this.$http.post("/upload", data);
      // 保存到数据库
      if (res.status === 200) {
        this.updateAvatar(res.data.url);
      } else {
        this.$toast({
          type: "fail",
          message: "修改失败"
        });
      }
    },
    // 修改用户头像
    async updateAvatar(url) {
      await this.$http.put(`/rest/users/${this.$store.state.user._id}`, {
        avatar: url
      });

      // 修改 store 中的user.avatar 头像链接
      this.$store.commit("updateAvatar", url);
      this.$toast({
        type: "success",
        message: "修改成功"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  ::v-deep .van-uploader__input-wrapper {
    width: 10rem;
  }
}
</style>