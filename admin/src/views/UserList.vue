<template>
  <div>
    <h1>用户账号列表</h1>
    <el-table :data="items" :stripe="true">
      <el-table-column label="ID" prop="_id"></el-table-column>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column label="手机号" prop="phone"></el-table-column>
      <!-- <el-table-column label="密码" prop="password"></el-table-column> -->
      <el-table-column label="状态">正常</el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click="freeze(scope.row)" type="text" size="small">冻结</el-button>
          <el-button @click="unfreeze(scope.row)" type="text" size="small">解冻</el-button>
          <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  created() {
    this.fetch();
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    // 获取管理员账号列表
    async fetch() {
      const res = await this.$http.get("/rest/users");
      this.items = res.data;
    },
    // 冻结或者解冻用户账号
    freeze(row) {
      console.log('冻结', row)
    },
    unfreeze(row) {
      console.log('解冻', row)
    },
    // 根据 id 删除对应管理员账号
    async remove(row) {
      this.$confirm(`是否删除 ${row.username} 用户账号`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then( async () => {
        await this.$http.delete(`/rest/users/${row._id}`)
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetch()
        })
    }
   
  }
};
</script>