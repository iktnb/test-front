<template>
  <div class="input_wrapper">
    <div class="label" v-if="label">{{ label }}</div>
    <div class="input-container">
      <input class="input" type="text" />
      <div class="error">
        <span class="cross"></span>
        <span class="error-text">Enter name</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.input_wrapper {
  .input_error {
    border: 1px solid var(--input-border-error);
  }
  .input_focus {
    border: 1px solid var(--input-border-focus);
  }
}

.label {
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 7px;
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