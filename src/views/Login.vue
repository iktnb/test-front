<template>
  <div class="login-page">
    <div class="login-page-image">
      <div class="wrapper">
        <div class="login-content">
          <h1 class="login-page-title">Welcome to Business Analytics Online</h1>
          <p class="subtitle">
            <span>Business Analytics</span> — a new, convenient tool for
            managing and forecasting your business performance, which will help
            analyze your own finances and cash flows, visualize your reporting,
            business processes, KPI's
          </p>
          <ul class="check-list">
            <li class="check-list_item">
              <span class="title"
                ><span class="check-mark"></span
                ><span class="title-text">Interactive Reporting</span></span
              >
              <p>
                In just a few clicks, you can connect your data from 1C, CRM
                (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka,
                ebay), Logistic (Nova Poshta), Google Analytics and many more
                systems that reflect different aspects of business activities.
              </p>
            </li>
            <li class="check-list_item">
              <span class="title"
                ><span class="check-mark"></span
                ><span class="title-text">Automated data updates</span></span
              >
              <p>
                The application automatically updates and structures the data in
                just 60 seconds, saving you time and money.
              </p>
            </li>
            <li class="check-list_item">
              <span class="title"
                ><span class="check-mark"></span
                ><span class="title-text">Data Security</span></span
              >
              <p>
                The Bank guarantees the safety of your personal data, ensuring
                their integrity and confidentiality.
              </p>
            </li>
          </ul>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
  components: { LoginForm },
};
</script>

<style lang="scss" scoped>
.login-page {
  line-height: 1.56;
}
.login-page-image {
  background-image: url("../assets/backgrond-login.png");
  background-repeat: no-repeat;
}
.login-page-title {
  font-size: 55px;
  padding-top: 215px;
  margin-bottom: 110px;
  color: var(--white-color);
}
.wrapper {
  display: flex;
}
.login-content {
  max-width: 696px;
  width: 100%;
  font-weight: 400;
  margin-right: auto;
}
.subtitle {
  margin-bottom: 15px;
}

.check-list {
  list-style-image: url("../assets/checkMark.svg");
  list-style: none;
  margin-left: 38px;
  margin-bottom: 40px;
  .check-list_item {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 40px;
    }
  }
}
.title {
  .title-text {
    font-weight: 500;
    margin-bottom: 10px;
    display: block;
  }
  position: relative;
  .check-mark {
    &::before {
      position: absolute;
      content: url("../assets/checkMark.svg");
      left: -38px;
    }
  }
}
</style>