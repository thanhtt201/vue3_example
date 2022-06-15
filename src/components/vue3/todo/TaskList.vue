<template>
  <AddTask @add-task="addTask" />
  <ul>
    <li v-for="(task, index) in listTask" :key="index">
      {{ task.title }}
      <button @click="removeTask(task.id)">Delete</button>
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import AddTask from "./AddTask.vue";

export default {
  name: "App",
  components: {
    AddTask,
  },
  setup() {
    const listTask = ref([]);

    // get list task
    const getAllTask = async () => {
      try {
        const res = await axios.get(
          "https://62a955243b31438554315c7d.mockapi.io/api/v1/todos"
        );
        listTask.value = res.data;
      } catch (error) {
        console.log("erorr", error.response);
      }
    };

    getAllTask();

    //add task
    const addTask = async (event) => {
      try {
        const newTask = await axios.post(
          "https://62a955243b31438554315c7d.mockapi.io/api/v1/todos",
          event
        );
        listTask.value = [...listTask.value, newTask.data];
      } catch (error) {
        console.log("error", error.response);
      }
    };

    // remove task
    const removeTask = async (idTask) => {
      try {
        const deleteTask = await axios.delete(
          `https://62a955243b31438554315c7d.mockapi.io/api/v1/todos/${idTask}`
        );
        listTask.value = listTask.value.filter(
          (task) => task.id !== deleteTask.data.id
        );
      } catch (error) {
        console.log("error", error.response);
      }
    };

    return { listTask, addTask, removeTask };
  },
};
</script>

<style></style>
