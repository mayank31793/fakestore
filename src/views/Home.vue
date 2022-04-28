<template>
  <div class="home">
    <div class="display-container">
      <div class="sidebar-container">
        <Sidebar />
      </div>
      <div class="routing-container">
        <ul v-if="getAllProducts.length > 0">
          <li
            v-for="x in getAllProducts"
            :key="x.id"
            @click="redirectToProductPage(x.id)"
          >
            <div class="image-container">
              <img :src="x.image" />
            </div>
            <p class="product-name">{{ x.title }}</p>
            <p>
              <b><span>$ </span>{{ x.price }}</b>
            </p>
          </li>
        </ul>
        <div v-else>
          <Loader />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServerRequests from "../Mixins/ServerRequests";
import Sidebar from "../components/Sidebar";
import Loader from "../components/loader";

export default {
  name: "Home",
  data() {
    return {
      // products: [],
    };
  },
  mixins: [ServerRequests],
  components: { Sidebar, Loader },
  methods: {
    redirectToProductPage: function (id) {
      this.$router.push({ name: "ProductDetails", params: { id } });
    },
  },
  created() {
    this.callAllProducts();
  },
  computed: {
    getAllProducts() {
      return this.$store.state.products;
    },
  },
};
</script>

<style lang="scss" scoped>
.routing-container {
  width: 100%;
  li {
    padding: 5px 10px;
  }
  .product-name {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .image-container img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
}
.display-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  .sidebar-container {
    min-width: 200px;
    height: calc(100vh - 40px);
    position: sticky;
    top: 50px;
  }
}
ul {
  display: grid;
  list-style-type: none;
  padding-left: 0px;
  grid-template-columns: repeat(auto-fit, 25%);
}

ul li {
  border: 1px solid #d8d8d8;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 3px 7px 25px #d8d8d8;
}

ul li:hover {
  cursor: pointer;
}
</style>
