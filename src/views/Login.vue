<template>
  <div>
    <form @submit.prevent="loginFormSubmit">
      <label for="email"> Email: </label>
      <input
        type="email"
        id="email"
        placeholder="PLease enter your Email"
        required
        v-model="loginFormData.userEmail"
      />
      <label for="password"> Password: </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        required
        v-model="loginFormData.userPassword"
      />
      <button>Submit</button>
    </form>
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
      this.$router.push({ name: "Checkout" });
      console.log("reaching log");
    },
  },
};
</script>
