<template>
  <div v-if="productDetails != null" :key="$route.path">
    <div class="product-details-container">
      <div class="image-container">
        <img :src="productDetails.image" />
      </div>
      <div class="product-description">
        <p>
          <span class="heading">Category: </span>{{ productDetails.category }}
        </p>
        <p class="description">
          <span class="heading">Description: </span
          >{{ productDetails.description }}
        </p>
        <p>
          <span class="heading">Price: </span>{{ "$ " + productDetails.price }}
        </p>
        <p>
          <span class="heading">Ratings: </span>
          {{ productDetails.rating.rate }} ({{ productDetails.rating.count }})
        </p>
        <div class="quantity-container">
          <button @click="decrement" :disabled="quantity == 1">-</button>
          <span>{{ quantity }}</span>
          <button @click="increment">+</button>
        </div>
        <button @click="addToCart" class="addToCart">Add To Cart</button>
      </div>
    </div>
  </div>
  <div v-else>
    <Loader />
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../components/loader";

export default {
  name: "ProductDetails",
  components: {
    Loader,
  },
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
      this.$store.dispatch("addProductInCart", {
        ...this.productDetails,
        quantity: this.quantity,
      });
    },
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products/" + this.$route.params.id)
      .then((res) => (this.productDetails = res.data))
      .then((res) => (this.productId = res.id));
  },
};
</script>

<style lang="scss" scoped>
.product-details-container {
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
}
.image-container {
  max-width: 300px;
  max-height: 300px;
  margin-top: 20px;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.quantity-container {
  display: inline-flex;
  border: 1px solid #d1d1d1;
  button {
    border: none;
    width: 25px;
    background-color: #ddd;
    &:hover {
      cursor: pointer;
    }
  }
  span {
    display: inline-flex;
    width: 40px;
    height: 25px;
    font-size: 16px;
    text-align: center;
    justify-content: center;
    flex-direction: column;
  }
}
.product-description {
  max-width: 500px;
  .heading {
    font-weight: bold;
    font-size: 14px;
  }
}
.description {
  font-size: 14px;
  line-height: 20px;
  color: #535353;
  span {
    font-size: 16px !important;
    color: #000;
  }
}
.addToCart {
  display: block;
  margin-top: 20px;
  color: #e8e6e6;
  background-color: #d5691b;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #ca5806;
  }
}
</style>
