import { createWebHistory, createRouter } from "vue-router";
import TaskList from "../components/vue3/todo/TaskList.vue";
import TodoList from "../components/vuex/TodoList.vue";

const routes = [
  {
    path: "/vue3",
    name: "Vue3",
    component: TaskList,
  },
  {
    path: "/vuex",
    name: "VueX",
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
