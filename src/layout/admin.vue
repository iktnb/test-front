<template>
  <div class="admin-layout">
    <div class="wrapper">
      <div class="logo">
        <img @click="$router.push('/')" src="@/assets/logo.png" alt="logo" />
      </div>
      <div class="admin-wrapper"><router-view /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin-layout {
  background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
  height: 70vh;
}

.logo {
  display: flex;
  justify-content: center;
  img {
    margin-top: 65px;
    margin-bottom: 70px;
    height: 119px;
  }
}

.admin-wrapper {
  background: #fff;
}
</style>