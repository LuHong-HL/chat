<template>
  <div>
    <h1>{{id ? '编辑' : '创建'}}管理员账号</h1>
    <el-form label-width="120px" @submit.native.prevent="create">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password" type="password" ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">{{id ? '保存' : '创建'}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    id: {}
  },
  created() {
    this.id && this.fetch();
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    // 创建或者保存管理员账号
    async create() {
      if (this.id) {
        await this.$http.put(`/rest/admin_users/${this.id}`, this.model);
      } else {
        await this.$http.post("/rest/admin_users", this.model);
      }
      this.$router.push("/admin_users/list");
      this.$message({
        type : 'success',
        message : '操作成功'
      })
    },
    // 根据 id 获取管理员账号信息
    async fetch() {
      const res = await this.$http.get(`/rest/admin_users/${this.id}`);
      this.model = res.data;
    }
  }
};
</script>