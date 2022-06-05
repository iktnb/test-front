<template>
  <div class="todo-page">
    <div class="todo-container">
      <div class="todo-header">
        <h4 class="todo-title">Todo app</h4>
        <Button @click="createTodo()">Create todo</Button>
      </div>
      <div class="todo-table"><TodoList ref="todoList" /></div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/UI/Button.vue";
import TodoList from "@/components/Todo/TodoList.vue";
export default {
  methods: {
    createTodo() {
      this.$refs.todoList.createTodo();
    },
  },
  components: { Button, TodoList },
};
</script>
<style lang="scss" scoped>
.todo-title {
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 400;
  margin-right: 16px;
}
.todo-page {
  padding: 20px 16px;
}
.todo-container {
  border: 4px solid #0076c0;
  border-radius: 8px;
}
.todo-header {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2.5px solid #0076c0;
}
.todo-table {
  padding: 10px;
  height: 100%;
}
</style>