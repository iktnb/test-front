<template>
  <footer>
    <div class="wrapper">
      <div class="row-first">
        <div class="logo">
          <img src="@/assets/logo.png" alt="logo" />
        </div>
        <div class="links">
          <p v-for="link in linksList" :key="link" class="link">{{ link }}</p>
        </div>
      </div>
      <div class="row-second">
        <p class="copyright-text">
          Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
          Opportunity Lender.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      linksList: [
        "Terms & Conditions",
        "Privacy",
        "Notice at Collection",
        "CA Privacy Hub",
        "Contact Us",
        "Sitemap",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
footer {
  height: 175px;
  background-color: var(--footer-color);

  p {
    font-size: 16px;
    color: var(--white-color);
  }
}

.logo {
  img {
    height: 35px;
    width: 55.99px;
    display: block;
  }
}

.row-first {
  display: flex;
  height: 95.5px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--white-color);
}

.row-second {
  display: flex;
  align-items: center;
  height: 79.5px;
}

.links {
  display: flex;
  cursor: pointer;
}

.link {
  margin-right: 20px;
  border-bottom: 0.5px solid transparent;
  transition: border-bottom 0.3s;
  &:hover {
    border-bottom: 0.5px solid var(--white-color);
  }
}
</style>