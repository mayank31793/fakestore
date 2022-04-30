<template>
  <div class="login-container">
    <div class="inner-container">
      <h3>LOGIN</h3>
      <form @submit.prevent="loginFormSubmit">
        <div>
          <label for="email"> Email: </label>
          <input
            type="email"
            id="email"
            placeholder="Please enter your Email"
            required
            v-model="loginFormData.userEmail"
          />
        </div>
        <div>
          <label for="password"> Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            v-model="loginFormData.userPassword"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginFormData: {
        userEmail: null,
        userPassword: null,
      },
    };
  },
  methods: {
    loginFormSubmit: function () {
      this.$store.dispatch("login", this.loginFormData);
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  max-width: 600px;
  margin: 0 auto;
  .inner-container {
    h3 {
      text-align: center;
      margin: 0px 0px 20px 0px;
    }

    margin-top: 20px;
    box-shadow: 0px 1px 20px 5px #e8e8e8;
    border: 1px solid #efefef;
    padding: 20px;
    label {
      width: 100px;
      display: inline-block;
    }
    input {
      width: calc(100% - 120px);
      height: 35px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 1px solid #a9a7a7;
      padding-left: 10px;
    }
    button {
      display: block;
      margin-top: 20px;
      color: #e8e6e6;
      background-color: #d5691b;
      border: none;
      padding: 10px 20px;
      border-radius: 3px;
      font-weight: bold;
      position: relative;
      right: -50%;
      transform: translateX(-50%);
      &:hover {
        cursor: pointer;
        background-color: #ca5806;
      }
    }
  }
}
</style>
