<template>
  <div class="sidebar-container">
    <div class="category">
      <input
        type="radio"
        name="category"
        value="all"
        id="all"
        @change="getCategory('all')"
        checked
      />
      <label for="all"> All </label>
    </div>
    <div class="category">
      <input
        type="radio"
        name="category"
        value="men's clothing"
        id="men-clothing"
        @change="getCategory('men\'s clothing')"
      />
      <label for="men-clothing"> Men's Clothing </label>
    </div>
    <div class="category">
      <input
        type="radio"
        name="category"
        value="women's clothing"
        id="women-clothing"
        @change="getCategory('women\'s clothing')"
      />
      <label for="women-clothing"> Women's Clothing </label>
    </div>
    <div class="category">
      <input
        type="radio"
        name="category"
        value="jewelery"
        id="jewelery"
        @change="getCategory('jewelery')"
      />
      <label for="jewelery"> Jewelery </label>
    </div>
    <div class="category">
      <input
        type="radio"
        name="category"
        value="electronics"
        id="electronics"
        @change="getCategory('electronics')"
      />
      <label for="electronics"> Electronics </label>
    </div>
  </div>
</template>

<script>
import ServerRequests from "../Mixins/ServerRequests";

export default {
  data() {},
  mixins: [ServerRequests],
  methods: {
    getCategory: async function (category) {
      if (category == "all") {
        await this.callAllProducts(category);
      } else {
        await this.callAllProductsOfCategory(category);
      }
    },
  },
};
</script>

<style>
.category {
  display: flex;
}
</style>
