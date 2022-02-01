<template>
  <div v-if="productDetails != null">
    <div class="product-details-container">
      <div class="image-container">
        <img :src="productDetails.image" />
      </div>
      <div>
        <p>{{ productDetails.category }}</p>
        <p>{{ productDetails.description }}</p>
        <p>{{ productDetails.price }}</p>
        <p>
          {{ productDetails.rating.rate }} ({{ productDetails.rating.count }})
        </p>
        <div class="quantity-container">
          <button @click="decrement" :disabled="quantity == 1">-</button>
          <span>{{ quantity }}</span>
          <button @click="increment">+</button>
        </div>
        <button @click="addToCart">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetails",
  data() {
    return {
      productDetails: null,
      quantity: 1,
      productId: null,
    };
  },
  methods: {
    increment: function () {
      this.quantity += 1;
    },
    decrement: function () {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    addToCart: function () {
      //   axios
      //     .put("https://fakestoreapi.com/carts/7", {
      //       productId: this.productId,
      //       quantity: this.quantity,
      //     })
      //     .then((res) => console.log(res));
      this.$store.dispatch("addProductInCart", {
        ...this.productDetails,
        quantity: this.quantity,
      });
    },
  },
  created() {
    axios
      .get("https://fakestoreapi.com/products/" + this.$route.params.id)
      //   .then((res) => console.log(res.data));
      .then((res) => (this.productDetails = res.data))
      .then((res) => (this.productId = res.id));
  },
};
</script>

<style scoped>
.product-details-container {
  display: flex;
}
.image-container {
  max-width: 240px;
  max-height: 240px;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.quantity-container {
  display: flex;
}
</style>
