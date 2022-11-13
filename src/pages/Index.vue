<template>
  <div class="bg-gray-800">
    <div class="">
      日期
    </div>
    <div>
      <div class="demo-progress">
        <el-progress class="container mx-auto" :percentage="50" />
        <el-progress class="container mx-auto" :percentage="100" :format="format" />
        <el-progress class="container mx-auto" :percentage="100" status="success" />
        <el-progress class="container mx-auto" :percentage="100" status="warning" />
        <el-progress class="container mx-auto" :percentage="50" status="exception" />
      </div>
    </div>
    <div>
      <router-link to="/AllTask">正在做</router-link>
    </div>
    <div class="container mx-auto">
      稍后做
    </div>
    <div>
      已完成
    </div>
  </div>
</template>


<script>
export default {
  name: "index",
  data() {
    return {
    }
  },
  methods: {
    format : (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
  },
  created() {
    console.log(123);
  }
}

</script>

<style lang="scss">
  .demo-progress .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
  }
</style>

