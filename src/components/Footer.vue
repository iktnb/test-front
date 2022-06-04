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
  background-color: var(--footer-color);

  p {
    font-size: 16px;
    color: var(--white-color);
  }

  @media (max-width: 992px) {
    p {
      font-size: 14px;
    }
    .row-second {
      justify-content: center;
    }
  }
}

.logo {
  padding-right: 30px;
  img {
    height: 35px;
    width: 55.99px;
    display: block;
  }
}

.row-first {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--white-color);
}

.row-second {
  display: flex;
  align-items: center;
  padding: 35px 0;
}

.links {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
  padding: 30px 0;
}

.link {
  margin-right: 20px;
  border-bottom: 0.5px solid transparent;
  transition: border-bottom 0.3s;
  &:hover {
    border-bottom: 0.5px solid var(--white-color);
  }

  @media (max-width: 992px) {
    margin-right: 10px;
  }
}
@media (max-width: 767px) {
  .logo {
    display: none;
  }
  .links {
    padding: 15px 0;
  }
  .row-first {
    justify-content: center;
  }
  .row-second {
    padding: 20px 0;
    text-align: center;
  }
}
</style>