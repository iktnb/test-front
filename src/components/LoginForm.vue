<template>
  <div class="login-form">
    <div class="login-from_wrapper">
      <div class="inputs">
        <Input
          :error="errorUserName"
          v-model="username"
          @input="onUserNameInput"
          label="Name"
        />
        <Input
          :error="errorPassword"
          type="password"
          label="Password"
          @input="onPasswordInput"
        />
      </div>
      <Button @click="login()" class="login-button">Login</Button>
      <p class="forgot-password">Forgot Password</p>
    </div>
    <Button class="register-button">Register now</Button>
  </div>
</template>
<script>
import Input from "@/components/UI/Input.vue";
import Button from "@/components/UI/Button.vue";
export default {
  data() {
    return {
      username: "Admin",
      password: "12345",
      errorUserName: false,
      errorPassword: false,
    };
  },
  components: { Input, Button },
  methods: {
    onUserNameInput(e) {
      this.username = e;
    },
    onPasswordInput(e) {
      this.password = e;
    },
    checkValid() {
      this.errorUserName = this.username === "Admin" ? false : true;
      this.errorPassword = this.password === "12345" ? false : true;
      if (!this.errorUserName && !this.errorPassword) {
        return true;
      } else return false;
    },
    login() {
      if (this.checkValid()) {
        localStorage.setItem("auth", "true");
        this.$router.push("/admin");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login-form {
  max-width: 481px;
  width: 100%;
  min-height: 464px;
  line-height: 1.16;
  background: var(--white-color);
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  align-self: center;
}
.login-from_wrapper {
  margin: 40px 30px 30px 23px;
}

.login-button {
  width: 100%;
  height: 53px;
  font-size: 25px;
  line-height: 1.16;
  text-transform: uppercase;
}

.register-button {
  background-color: #f6f6f6;
  color: #333333;
  height: 63px;
  width: 100%;
}
.forgot-password {
  text-align: center;
  padding-top: 20px;
  cursor: pointer;
  color: #056dae;
}
.inputs .input_wrapper {
  margin-bottom: 40px;
}
</style>