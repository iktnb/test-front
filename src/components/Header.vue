<template>
  <header>
    <div class="first_layer"></div>
    <div class="second_layer">
      <div class="wrapper logo">
        <img src="@/assets/logo.png" alt="logo" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.first_layer {
  background-color: var(--header-first-color);
  height: 53px;
}

.second_layer {
  height: 96px;
  background: var(--header-second-color);
}

.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: inherit;

  img {
    display: block;
    @media (max-width: 1215px) {
      margin-left: 15px;
    }
  }
}
</style>