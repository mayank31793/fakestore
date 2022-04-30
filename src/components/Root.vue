<template>
  <div id="nav">
    <div class="nav-container">
      <div class="store-name">
        <router-link to="/"><h2>FakeStore</h2></router-link>
      </div>
      <div class="search-field">
        <input
          type="text"
          placeholder="Search Products"
          @keyup="productsTitleFunction"
          v-model="titleText"
        />
        <ul v-if="productsTitle.length > 0" class="title-list">
          <li
            v-for="(x, index) in productsTitle"
            :key="index"
            @click="redirectToProductPage(x.id)"
          >
            <div class="title-image"><img :src="x.img" /></div>
            <div class="title-text">{{ x.title }}</div>
          </li>
        </ul>
      </div>
      <div class="header-links">
        <button
          @click="loggingOutUser"
          class="logout-button-container"
          v-if="isLogoutButtonVisible"
        >
          Logout
        </button>
        <div
          class="user-login"
          v-if="$store.getters.userEmail != null"
          @click="showLogoutUserButton"
        >
          {{ "Welcome \n" + $store.getters.userEmail }}
        </div>
        &nbsp;
        <router-link to="/login" v-else>{{
          $store.getters.userEmail != null
            ? "Welcome " + $store.getters.userEmail
            : "Login"
        }}</router-link
        >&nbsp;|&nbsp;
        <router-link to="/cart" class="cart-items"
          ><span v-if="totalNumberItems > 0">{{ totalNumberItems + " " }}</span>
          &nbsp;Cart</router-link
        >
      </div>
    </div>
  </div>

  <router-view :key="$route.fullPath" />

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
      productsTitle: [],
      titleText: null,
      isLogoutButtonVisible: false,
    };
  },
  methods: {
    async productsTitleFunction(e) {
      this.productsTitle = await this.$store.state.products
        .map((res) => ({
          title: res.title,
          img: res.image,
          id: res.id,
        }))
        .filter((response) =>
          response.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
    },
    redirectToProductPage: function (id) {
      this.$router.push({ name: "ProductDetails", params: { id } });
      this.productsTitle = [];
      this.titleText = null;
    },
    loggingOutUser: function () {
      this.$store.dispatch("logout");
      this.isLogoutButtonVisible = !this.isLogoutButtonVisible;
      this.$router.push("/");
    },
    showLogoutUserButton: function () {
      this.isLogoutButtonVisible = !this.isLogoutButtonVisible;
    },
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
  padding: 5px 20px;
  background-color: #a90229;
  height: 40px;
  .search-field,
  .store-name {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .header-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    a {
      color: #c7c7c7;
      font-size: 14px;
      font-weight: 400;
      text-decoration: none;
      background-color: #c35151;
      padding: 4px 9px;
      border-radius: 4px;
    }
  }
}
.user-login {
  &:hover {
    cursor: pointer;
  }
}
.user-login,
.cart-items {
  text-align: center;
  background-color: #c35151;
  padding: 4px 9px;
  font-size: 13px;
  line-height: 14px;
  border-radius: 4px;
  color: #c7c7c7;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.logout-button-container {
  position: absolute;
  top: 37px;
  left: 50px;
  background-color: #b80d0d;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  box-shadow: 1px 5px 20px #969696;
  &:hover {
    cursor: pointer;
  }
}
.title-list {
  position: absolute;
  top: 21px;
  width: 312px;
  height: 200px;
  overflow-y: scroll;
  padding-left: 0px;
  scrollbar-width: none;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 3px 5px 20px #7d7d7d;
  li {
    padding: 5px 0px;
    border-bottom: 1px solid #000;
    padding-left: 8px;
    font-size: 14px;
    display: flex;
    &:hover {
      cursor: pointer;
    }
    .title-image {
      min-width: 30px;
      max-width: 30px;
      height: 30px;
      margin-right: 5px;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
    .title-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

h2 {
  margin: 0px;
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
    height: 33px;
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
