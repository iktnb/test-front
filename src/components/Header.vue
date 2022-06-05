<template>
  <header>
    <div class="first_layer"></div>
    <div class="second_layer">
      <div class="wrapper">
        <div @click="goToMain" class="logo">
          <img src="@/assets/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    goToMain() {
      this.$router.push("/");
    },
  },
};
</script>

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
    height: 66px;
  }
}
@media (max-width: 992px) {
  .first_layer {
    display: none;
  }
  .second_layer {
    height: 60px;
  }
  .logo {
    height: 100%;
    img {
      height: 50px;
    }
  }
}
</style>