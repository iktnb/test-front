<template>
  <button class="button"><slot></slot></button>
</template>



<style lang="scss">
.button {
  min-height: 35px;
  transition: all 0.2s;
  min-width: 133px;
  font-size: 16px;
  line-height: 1.9;
  font-weight: 500;
  border-radius: 0px;
  border: 2px solid transparent;
  background-color: var(--button-color);
  color: var(--button-text-color);

  &:hover {
    background-color: var(--button-color-hover);
    color: var(--button-text-color-hover);
    border: 2px solid var(--button-color);
  }
}
</style>

