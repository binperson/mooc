<template>
  <div class="pagebar">
    <div class="page clearfix">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage3: 5
    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.pagebar
  .page
    margin: 40px auto 50px
    text-align: center
    button, li, span
      height: 36px
      line-height: 36px
      font-size: 16px
    li
      min-width: 36px
      &:hover
        color: #4d555d
        background: #d9dde1
      &.active
        border-color: #4d555d
        background: #4d555d
</style>
