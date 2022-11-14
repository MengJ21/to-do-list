<template>
  <div class="body">
    <div class="flex w-2/5 mt-20 mb-8 container mx-auto justify-between ">
      <div class="flex">
        <div class="text-7xl font-bold text-white">
          13
        </div>
        <div>
          <div class="text-3xl font-medium text-white">Nov</div>
          <div class="text-3xl text-gray-300">
              2022
          </div>
        </div>
      </div>
      <div class="text-3xl text-gray-300 text-center">
        <div class="mt-5">
          Sunday
        </div>
      </div>
    </div>
    <div class="demo-progress; w-2/5 container mx-auto mt-20">
      <el-progress
          :text-inside="true"
          :stroke-width="30"
          :percentage="80"
          status="success"
      />
    </div>
    <div class="h-16 mt-5 ">
      <div class="flex container mx-auto w-2/5 bg-gray-900 rounded-lg">
        <input class="h-14 flex-1 bg-gray-900 rounded-l-3xl outline-white text-white" placeholder="    添加任务">
        <svg t="1668338684769" class="icon; mt-3 mr-3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2676" width="2rem" height="2rem"><path d="M925.696 384q19.456 0 37.376 7.68t30.72 20.48 20.48 30.72 7.68 37.376q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68l-287.744 0 0 287.744q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888l0-287.744-287.744 0q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68l287.744 0 0-287.744q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68q39.936 0 68.096 28.16t28.16 68.096l0 287.744 287.744 0z" p-id="2677" fill="#ffffff"></path></svg>
      </div>
    </div>
    <item v-for="task in doingTask" :key="doingTask[task]" :task-content="task"></item>
    <div class="demo-collapse">
      <el-collapse>
        <el-collapse-item title="已完成" name="1">
          <item v-for="task in doingTask" :key="doingTask[task]" :task-content="task"></item>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div>66</div>
  </div>
</template>


<script>
import item from "../components/unCompletedItem.vue";
import cItem from "../components/CompletedItem.vue"
export default {
  components: {
    item,
    cItem
  },
  name: "index",
  data() {
    return {
      doingTask: ["为爱冲锋","为爱冲锋","为爱冲锋"]
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

<style lang="scss" scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-collapse{
  width: 40%;
}
:deep(.el-collapse-item__header) {
  color: silver;
  background-color: rgb(31,41,55);
}
:deep(.el-collapse-item__wrap) {
  background-color: rgb(31,41,55);
}
</style>

