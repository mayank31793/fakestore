<template>
  <div id="nav">
    <div class="nav-container">
      <div class="store-name">
        <router-link to="/"><h2>FakeStore</h2></router-link>
      </div>
      <div class="search-field">
        <input type="text" placeholder="Search Products" />
      </div>
      <div>
        <router-link to="/login">Login</router-link>|
        <router-link to="/cart">{{ totalNumberItems }} Cart</router-link>
      </div>
    </div>
  </div>

  <router-view />

  <Footer />
</template>

<script>
import Sidebar from "./Sidebar";
import Footer from "./Footer";
export default {
  components: { Footer, Sidebar },
  data() {
    return {
      cartItemNumber: 0,
    };
  },
  computed: {
    totalNumberItems() {
      return this.$store.state.productListInCart.reduce(
        (a, b) => a + b.quantity,
        0
      );
    },
  },
};
</script>

<style lang="scss">
#nav {
  position: sticky;
  top: 0px;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #a90229;
}
h2 {
  margin: 0px;
  font-family: sans-serif;
  color: #9f9f9f;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
}
.store-name a {
  text-decoration: none;
}
.search-field {
  input {
    width: 300px;
    height: 25px;
    background-color: #e4e4e4;
    border: none;
    border-radius: 4px;
    padding: 0px 6px;
  }
  ::placeholder {
    text-align: center;
  }
}
</style>
