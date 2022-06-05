<template>
  <div class="input_wrapper" :class="{ autoWidth: autoWidth }">
    <div class="label" v-if="label">{{ label }}</div>
    <div class="input-container">
      <input
        ref="input"
        :type="type"
        :value="value"
        @input="onInput"
        :disabled="disabled"
        @focus="onFocus"
        @blur="onBlur"
        :class="{ todo_item: todoItem }"
        class="input"
      />
      <div class="error" v-if="error">
        <span class="cross"></span>
        <span class="error-text">Enter {{ toLowerCase(label) }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
    toLowerCase(text) {
      return text.toLowerCase();
    },
    onBlur() {
      this.$emit("blur");
    },
    onFocus(event) {
      console.log(event);
      this.$emit("focus", event);
    },
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
    todoItem: {
      type: Boolean,
      default: false,
    },
    autoWidth: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 7px;
}
.autoWidth {
  width: 100%;
}
.input-container {
  position: relative;
  .input {
    width: 100%;
    border: 1px solid var(--input-border);
    height: 53px;
    padding: 16px 15px;
    font-size: 18px;
    line-height: 1.16;

    &:focus {
      outline: none;
      border: 1px solid var(--input-border-focus);
    }
  }

  .todo_item {
    border: 1px solid transparent;
    font-size: 16px;

    height: 40px;
  }
}
.cross {
  position: absolute;
  left: -13px;

  &::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 2px;
    left: 0;
    transform: rotate(-45deg);

    display: block;
    background-color: var(--text-error);
  }
  &::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 2px;
    left: 0;
    transform: rotate(45deg);

    display: block;
    background-color: var(--text-error);
  }
}

.error {
  position: absolute;
  bottom: -22px;
  left: 20px;
}

.error-text {
  color: var(--text-error);
  line-height: 1.18;
  font-size: 16px;
}
</style>