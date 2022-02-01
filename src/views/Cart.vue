<template>
  <div class="cart-container">
    <div>
      <ul>
        <li v-for="x in itemsInCart" :key="x.id">
          <div class="cart-item">
            <div class="image-container">
              <img :src="x.image" />
            </div>
            <div class="details-container">
              <p @click="redirectToProductPage(x.id)">
                <span>Title: </span>{{ x.title }}
              </p>
              <p><span>Price: </span>{{ x.price }}</p>
              <p><span>Quantity: </span>{{ x.quantity }}</p>
              <p>
                <span>Rating: </span>{{ x.rating.rate }} / ({{
                  x.rating.count
                }})
              </p>
            </div>
          </div>
          <span class="delete-item" @click="deleteItem(x.id)">&times;</span>
        </li>
      </ul>
    </div>
    <div class="proceed-checkout">
      <p>Proceed To Checkout</p>
      <button @click="redirectToCheckout">Proceed to Checkout</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      // itemsInCart: [],
    };
  },
  methods: {
    deleteItem: function (id) {
      this.$store.dispatch("deleteItem", id);
    },
    redirectToProductPage: function (id) {
      this.$router.push({ name: "ProductDetails", params: { id } });
    },
    redirectToCheckout: function () {
      this.$router.push({ name: "Checkout" });
    },
  },
  computed: {
    itemsInCart: function () {
      return this.$store.state.productListInCart;
    },
  },
};
</script>

<style scoped>
.cart-container {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
}
ul {
  list-style-type: none;
  max-width: 700px;
  margin-top: 0px;
}
ul li {
  margin-bottom: 10px;
  box-shadow: 3px 10px 25px #efefef;
  border: 1px solid #efefef;
  padding: 3px;
  position: relative;
}
ul li p {
  margin: 0px;
}
.cart-item {
  display: flex;
}
.image-container {
  width: 100px;
  height: 100px;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.details-container {
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.details-container p:first-child:hover {
  color: rgb(48, 114, 238);
  cursor: pointer;
}
.details-container p {
  font-size: 14px;
  font-family: sans-serif;
}
.details-container p span {
  font-weight: 600;
  color: #727272;
  display: inline-block;
  width: 70px;
}
.delete-item {
  position: absolute;
  top: 5px;
  right: 10px;
  font-weight: bold;
  font-size: 20px;
}
.delete-item:hover {
  cursor: pointer;
  color: #ff7e7e;
}
.proceed-checkout {
  border-radius: 4px;
  border: 1px solid #efefef;
  box-shadow: 3px 10px 24px #efefef;
  padding: 10px 20px;
}
</style>
