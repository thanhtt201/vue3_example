<template>
  <TodoAdd />
  <ul>
    <li v-for="(todo, index) in todoList" :key="index">
      {{ todo.title }}
      <button @click="deleteTodo(todo.id)">Delete</button>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import TodoAdd from "./TodoAdd.vue";

export default {
  components: {
    TodoAdd,
  },
  computed: {
    ...mapGetters(["todoList"]),
  },
  created() {
    this.$store.dispatch("getListTodo");
  },
  methods: {
    deleteTodo(idTodo) {
      this.$store.dispatch("removeTodoItem", idTodo);
    },
  },
};
</script>
