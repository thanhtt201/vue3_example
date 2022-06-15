<template>
  <form action="" @submit="addTodo">
    <input type="text" v-model="inputTodo" />
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const inputTodo = ref("");

    return { inputTodo };
  },
  methods: {
    addTodo(event) {
      event.preventDefault();
      const newTodo = {
        id: Date.now(),
        title: this.inputTodo,
        completed: false,
      };
      this.$store.dispatch("addTodoItem", newTodo);
    },
  },
};
</script>
