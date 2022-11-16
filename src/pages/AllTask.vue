<template>
  <div class="w-2/5 container mx-auto">
    <div class="w-full mt-24 flex justify-between">
      <div class="demo-progress;">
        <el-progress type="circle" :percentage="100" status="success" />
        <div class="text-center text-white mt-4">当日任务进度</div>
      </div>
      <div class="demo-progress;">
        <el-progress type="circle" :percentage="70" status="warning" />
        <div class="text-center text-white mt-4">所有任务进度</div>
      </div>
    </div>
    <div class="mt-16">
      <el-collapse>
        <el-collapse-item title="全部未完成" name="1">
          <Item class="completed" v-for="task in completedTask" :key="task.taskId" :task-content="task.name" :task-id="task.taskId"></Item>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="mt-8">
      <el-collapse>
        <el-collapse-item title="全部已完成" name="1">
          <c-item v-for="task in unCompletedTask" :key="task.taskId" :task-content="task.name" :task-id="task.taskId"></c-item>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
import cItem from "../components/CompletedItem.vue";
import Item from "../components/unCompletedItem.vue";
import service from "../utils/axios";
export default {
  provide() {
    return {
      refresh: this.refreshTask
    }
  },
  components: {
    Item,
    cItem
  },
  data() {
    return {
      completedTask: ["为爱冲锋！","为爱冲锋！","为爱冲锋！"],
      unCompletedTask: ["为爱冲锋！","为爱冲锋！","为爱冲锋！"],
      successStatus: false,
      exceptionStatus: false,
      warningStatus: false,
      nullStatus: false,
    }
  },
  methods: {
    refreshTask() {
      this.getAllTask();
    },
    getAllTask() {
      service.get('/task/getAllTask/')
          .then(res => {
            console.log("获取所有任务");
            console.log( res.data);
            let allTask = res.data.data;
            this.completedTask = [];
            this.unCompletedTask = [];
            let completedNum = 0;
            for (let i = 0;i < allTask.length;i++){
              if (allTask[i].status === true) {
                completedNum++;
                this.completedTask.push(allTask[i])
              } else {
                this.unCompletedTask.push(allTask[i]);
              }
            }
            console.log("任务数量" + allTask.length)
            if (allTask.length === 0) {
              this.nullStatus = true;
              this.exceptionStatus = false;
              this.successStatus = false;
              this.warningStatus = false;
            } else {
              this.percent = (completedNum / allTask.length) * 100;
              if (this.percent < 20) {
                this.exceptionStatus = true;
                this.successStatus = false;
                this.warningStatus = false;
                this.nullStatus = false;
              } else if (this.percent >= 20 && this.percent < 80) {
                this.warningStatus = true;
                this.exceptionStatus = false;
                this.successStatus = false;
                this.nullStatus = false;
              } else {
                this.successStatus = true;
                this.exceptionStatus = false;
                this.warningStatus = false;
                this.nullStatus = false;
              }
            }
            console.log("以完成的任务：");
            console.log(this.completedTask);
            console.log("未完成的任务：");
            console.log(this.unCompletedTask);
          })
    }
  },
  created() {
    this.getAllTask();
  }
}
</script>
<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
:deep(.el-collapse-item__header) {
  color: white;
  font-size:larger;
  font-weight: bolder;
  background-color: rgb(31,41,55);
}
:deep(.el-collapse-item__wrap) {
  background-color: rgb(31,41,55);
}
:deep(.el-dialog){
  background-color: rgb(31,41,55);
}
:deep(.el-dialog__title) {
  color: white;
}
</style>
