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
    <div class="w-2/5 container mx-auto">
      <el-date-picker
          v-model="currentDate"
          type="date"
          placeholder="Pick a day"
      />
    </div>
    <div class="demo-progress; w-2/5 container mx-auto mt-10">
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
        <svg @click="dialogVisible = true" t="1668338684769" class="icon; mt-3 mr-3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2676" width="2rem" height="2rem"><path d="M925.696 384q19.456 0 37.376 7.68t30.72 20.48 20.48 30.72 7.68 37.376q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68l-287.744 0 0 287.744q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888l0-287.744-287.744 0q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68l287.744 0 0-287.744q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68q39.936 0 68.096 28.16t28.16 68.096l0 287.744 287.744 0z" p-id="2677" fill="#ffffff"></path></svg>
      </div>
    </div>
    <el-dialog
        v-model="dialogVisible"
        title="新建任务"
        width="40%"
        :before-close="handleClose"
    >
      <el-form :model="form" label-width="120px">
        <el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Activity time">
          <el-col :span="11">
            <el-date-picker
                v-model="form.startTime"
                value-format="YYYY-MM-DD"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
            />
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-date-picker
                v-model="form.endTime"
                value-format="YYYY-MM-DD"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
            />
          </el-col>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="onSubmit">
          Confirm
        </el-button>
      </span>
      </template>
    </el-dialog>
    <item v-for="task in doingTask" :key="doingTask[task]" :task-content="task"></item>
    <div class="demo-collapse">
      <el-collapse>
        <el-collapse-item title="已完成" name="1">
          <c-item v-for="task in doingTask" :key="doingTask[task]" :task-content="task"></c-item>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div>66</div>
  </div>
</template>


<script>
import item from "../components/unCompletedItem.vue";
import cItem from "../components/CompletedItem.vue"
import {ElMessageBox} from "element-plus";
import service from "../utils/axios.js";
export default {
  components: {
    item,
    cItem
  },
  name: "index",
  data() {
    return {
      doingTask: ["为爱冲锋","为爱冲锋","为爱冲锋"],
      value2: '',
      currentDate: null,
      currentYear: '',
      currentMonth: '',
      currentDay: '',
      currentWeek: '',
      dialogVisible: false,
      form: {
        taskId: '',
        name: '',
        status: '',
        startTime: '',
        endTime: '',
      }
    }
  },
  watch: {
    currentDate() {
      console.log('------------------------------------------------------');
      console.log('当前日期' + this.currentDate);
      let date = new Date(this.currentDate);
      console.log('年份'+date.getFullYear());
      console.log('月份'+date.getMonth());
      console.log('星期'+date.getDay());
      console.log('日期'+date.getDate());
      this.currentMonth = date.getMonth();
      this.currentDay = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();
      switch (date.getDay()){
        case 0:
          this.currentWeek = "Sunday";
          break;
        case 1:
          this.currentWeek = "Monday";
          break;
        case 2:
          this.currentWeek = "TuesDay";
          break;
        case 3:
          this.currentWeek = "Wednesday";
          break;
        case 4:
          this.currentWeek = "Thursday";
          break;
        case 5:
          this.currentWeek = "Friday";
          break;
        case 6:
          this.currentWeek = "Saturday";
          break;
      }
      switch (date.getMonth()) {
        case 0:
          this.currentMonth = "Jan";
          break;
        case 1:
          this.currentMonth = "Feb";
          break;
        case 2:
          this.currentMonth = "Mar";
          break;
        case 3:
          this.currentMonth = "Apr";
          break;
        case 4:
          this.currentMonth = "May";
          break;
        case 5:
          this.currentMonth = "Jun";
          break;
        case 6:
          this.currentMonth = "Jul";
          break;
        case 7:
          this.currentMonth = "Aug";
          break;
        case 8:
          this.currentMonth = "Sep";
          break;
        case 9:
          this.currentMonth = "Oct";
          break;
        case 10:
          this.currentMonth = "Nov";
          break;
        case 11:
          this.currentMonth = "Dec";
          break;
      }
      console.log("------------------------------------------------")
    }
  },
  methods: {
      format : (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`),
    getDate() {
      console.log(this.value2)
    },
    handleClose( ) {
      ElMessageBox.confirm('您确定取消添加任务吗？')
          .then(() => {
            this.dialogVisible = false
          })
          .catch(() => {

          })
    },
    onSubmit() {
      this.dialogVisible = false;
      console.log(this.form.name)
      console.log(this.form.startTime);
      console.log(this.form.endTime);
      service.post('/task/insertTask', this.form)
          .then( res => {
            console.log(res.data)
          })
     }
  },
  created() {
    service.get('/test/hello')
        .then(res => {
          console.log(res.data)
        })
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
  margin: 0 auto;
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
</style>

