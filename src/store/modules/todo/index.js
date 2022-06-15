import axios from "axios";

const state = {
  todos: [],
};

const mutations = {
  LIST_TODO(state, payload) {
    state.todos = payload;
    return state.todos;
  },
  ADD_TODO(state, payload) {
    return state.todos.push(payload);
  },
  REMOVE_TODO(state, payload) {
    state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    return state.todos;
  },
};

const actions = {
  getListTodo({ commit }) {
    axios
      .get("https://62a955243b31438554315c7d.mockapi.io/api/v1/todos")
      .then((res) => {
        commit("LIST_TODO", res.data);
      });
  },
  addTodoItem({ commit }, payload) {
    axios
      .post("https://62a955243b31438554315c7d.mockapi.io/api/v1/todos", payload)
      .then((res) => {
        commit("ADD_TODO", res.data);
      });
  },
  removeTodoItem({ commit }, id) {
    axios
      .delete(`https://62a955243b31438554315c7d.mockapi.io/api/v1/todos/${id}`)
      .then((res) => {
        commit("REMOVE_TODO", res.data);
      });
  },
};

const getters = {
  todoList: (state) => state.todos,
};

const todoModule = {
  state,
  mutations,
  actions,
  getters,
};

export default todoModule;
