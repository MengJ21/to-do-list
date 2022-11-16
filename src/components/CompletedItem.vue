<template>
  <div class="h-16 mt-2">
    <div class="flex h-14 container mx-auto w-full justify-between bg-gray-700 rounded-lg">
      <div class="rounded-l-3xl text-white text-xl">
        <div class="mt-3 ml-3 text-gray-500">{{ taskContent }}</div>
      </div>
      <div class="flex mt-3 mr-3">
        <svg @click="undo" t="1668414299574" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4374" width="2rem" height="2rem"><path d="M511.950005 512.049995m-447.956254 0a447.956254 447.956254 0 1 0 895.912508 0 447.956254 447.956254 0 1 0-895.912508 0Z" fill="#20B759" p-id="4375"></path><path d="M458.95518 649.636559L289.271751 479.95313c-11.698858-11.698858-30.697002-11.698858-42.39586 0s-11.698858 30.697002 0 42.395859l169.683429 169.68343c11.698858 11.698858 30.697002 11.698858 42.39586 0 11.798848-11.598867 11.798848-30.597012 0-42.39586z" fill="#FFFFFF" p-id="4376"></path><path d="M777.62406 332.267552c-11.698858-11.698858-30.697002-11.698858-42.39586 0L424.158578 643.437164c-11.698858 11.698858-11.698858 30.697002 0 42.39586s30.697002 11.698858 42.39586 0l311.069622-311.069622c11.798848-11.798848 11.798848-30.796992 0-42.49585z" fill="#FFFFFF" p-id="4377"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../utils/axios";
import {ElMessageBox} from "element-plus";

export default {
  name: "item",
  inject: ['refresh'],
  props: {
    taskContent: String,
    taskId: Number
  },
  methods: {
    undo() {
      ElMessageBox.confirm('您确定更改任务状态为未完成吗？')
      .then(() => {
        service.get('/task/setStatus' + '/false' + '/' + this.taskId)
            .then(res => {
              this.refresh();
              console.log(res.data)
            })
      })
      .catch()
    }
  }
}
</script>

<style scoped>

</style>
