<template>
  <div class="input_wrapper">
    <div class="label">Name</div>
    <div class="input-container">
      <input class="input" type="text" />
    </div>
    <div class="error" v-if="false">
      <span class="error-text">Enter name</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
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

.error {
  margin: 5px 0 0 0;
}
.error-text {
  color: var(--text-error);

  line-height: 1.18;
  font-size: 16px;
}
</style>