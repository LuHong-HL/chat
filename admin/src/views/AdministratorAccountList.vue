<template>
  <div>
    <h1>管理员账号列表</h1>
    <el-table :data="items" :stripe="true">
      <el-table-column label="ID" prop="_id"></el-table-column>
      <el-table-column label="账号" prop="account"></el-table-column>
      <el-table-column label="密码" prop="password"></el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/administratorAccounts/edit/${scope.row._id}`)"
            type="text"
            size="small"
          >编辑</el-button>
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
      const res = await this.$http.get("/rest/administratorAccounts");
      this.items = res.data;
    },
    // 根据 id 删除对应管理员账号
    async remove(row) {
      this.$confirm(`是否删除 ${row.account} 管理员账号`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then( async () => {
        await this.$http.delete(`/rest/administratorAccounts/${row._id}`)
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetch()
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>