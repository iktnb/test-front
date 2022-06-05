<template>
  <ul class="todo-item-list" v-if="renderComponent">
    <li
      :class="{ edit: todo.canEdit }"
      class="todo-item"
      v-for="(todo, id) of todoList"
      :key="id"
    >
      <div class="left-block">
        <div class="checkbox">
          <input v-model="todo.ready" type="checkbox" />
        </div>
        <div class="todo-item_text">
          <Input
            ref="todoInput"
            :autoWidth="true"
            :todoItem="true"
            :value="todo.text"
            @focus="onFocus"
            @input="onTodoText"
          />
        </div>

        <span></span>
      </div>
      <div class="todo-item-buttons">
        <Button v-if="!todo.canEdit" @click="changeCanEdit(id)">Edit</Button>
        <Button v-else @click="save(id)">Save</Button>
        <span @click.prevent="remove(id)" class="close"></span>
      </div>
    </li>
  </ul>
</template>
<script>
import Button from "@/components/UI/Button.vue";
import Input from "@/components/UI/Input.vue";

export default {
  components: { Button, Input },
  data() {
    return {
      renderComponent: true,
      todoList: [
        { text: "Fisasdt todo", ready: false, canEdit: false },
        { text: "Fist todo", ready: false, canEdit: false },
        { text: "Fist todo", ready: false, canEdit: false },
        { text: "Fist todo", ready: false, canEdit: false },
        { text: "Fist todo", ready: false, canEdit: false },
        { text: "Fist todo", ready: false, canEdit: false },
      ],
      editedText: null,
      editId: null,
    };
  },
  computed: {
    edited() {
      let edited = this.todoList.find((e) => e.canEdit);
      return edited ? true : false;
    },
  },
  methods: {
    forceRerender() {
      this.renderComponent = false;

      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
    onFocus(event) {
      if (this.editId !== null) {
        this.$refs.todoInput[this.editId].$refs.input.focus();
        return;
      } else {
        event.target.blur();
      }
    },
    createTodo() {
      this.todoList.unshift({ text: "New....", ready: false, canEdit: false });
      this.forceRerender();
    },
    onTodoText(value) {
      this.editedText = value;
    },
    changeCanEdit(id) {
      if (this.edited) {
        return;
      }
      this.todoList[id].canEdit = true;
      this.editedText = this.todoList[id].text;
      this.editId = id;
      this.$refs.todoInput[id].$refs.input.focus();
    },
    clear() {
      this.editId = null;
      this.editedText = null;
    },
    save(id) {
      this.todoList[id].text = this.editedText;
      this.todoList[id].canEdit = false;
      this.clear();
    },
    remove(id) {
      this.todoList.splice(id, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.todo-item {
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1.5px solid transparent;
  margin-bottom: 3px;
  padding: 8px;
  transition: all 0.3s;
  &:hover {
    border-color: var(--button-color);
  }
}
.edit {
  border-color: var(--button-color);
}
.left-block {
  display: flex;
  flex-grow: 3;
  align-items: center;
  justify-content: flex-start;
}
.todo-item-buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.close {
  cursor: pointer;
  position: relative;
  height: 15px;
  margin: 0 15px;
  width: 15px;
  &:after {
    position: absolute;
    content: "";
    margin-bottom: auto;
    margin-top: auto;
    top: 0;
    bottom: 0;
    height: 2px;
    width: 15px;
    background-color: red;
    transform: rotate(45deg);
  }
  &:before {
    position: absolute;
    content: "";
    margin-bottom: auto;
    margin-top: auto;
    top: 0;
    bottom: 0;
    height: 2px;
    width: 15px;
    background-color: red;
    transform: rotate(-45deg);
  }
}

.todo-item_text {
  width: 100%;
  padding: 0 16px;
  z-index: 2;
}
</style>


