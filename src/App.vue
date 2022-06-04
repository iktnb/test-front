<template>
  <div id="app">
    <Header />
    <div class="wrapper"><router-view /></div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
* {
  margin: 0;
  box-sizing: border-box;
  color: var(--white-color);
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

:root {
  --header-first-color: #333333;
  --header-second-color: linear-gradient(180deg, #00a9e7 0%, #005b9f 100%);
  --footer-color: #333333;
  --button-color: #0076c0;
  --title-color: #0076c0;
  --text-color-main: #333333;
  --white-color: #fff;
}
</style>
