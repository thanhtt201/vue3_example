<template>
  <h1 @click="logHello">qưeqweqeqwe</h1>
  <form @submit="checkVal">
    <input type="text" v-model="title" />
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup(props, context) {
    console.log("props", props);
    console.log("context", context);
    const title = ref("");

    const checkVal = (event) => {
      event.preventDefault();
      const newTask = {
        id: Date.now(),
        title: title.value,
        completed: false,
      };
      context.emit("add-task", newTask);
      title.value = "";
    };

    return { title, checkVal };
  },
  methods: {
    logHello() {
      console.log("ggggg");
    },
  },
};
</script>
