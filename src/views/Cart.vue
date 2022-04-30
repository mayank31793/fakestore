<template>
  <div class="cart-container">
    <div v-if="itemsInCart.length == 0" class="empty-container">
      <h3>
        No item in cart
        <span @click="redirectToHome" class="shop-now">Shop Now</span>
      </h3>
      <div class="empty-cart">
        <img :src="newImg" />
      </div>
    </div>
    <div class="inner-container" v-else>
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
        <p>Subtotal ({{ totalNumberItems + " items" }}): $ {{ totalCost }}</p>
        <button @click="redirectToCheckout" class="checkoutProceed">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import emptyCart from "../assets/empty-cart.svg";
export default {
  name: "Cart",
  data() {
    return {
      // itemsInCart: [],
      newImg: emptyCart,
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
    redirectToHome: function () {
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    itemsInCart: function () {
      return this.$store.state.productListInCart;
    },
    totalNumberItems() {
      return this.$store.state.productListInCart.reduce(
        (a, b) => a + b.quantity,
        0
      );
    },
    totalCost: function () {
      return this.$store.state.productListInCart.reduce(
        (a, b) => a + b.price * b.quantity,
        0
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-container {
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  .inner-container {
    display: grid;
    grid-template-columns: auto 300px;
    grid-column-gap: 20px;
  }
  .empty-container {
    h3 {
      text-align: center;
    }
    img {
      margin: 0 auto;
    }
  }
  .empty-cart {
    text-align: center;
  }
}
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
  li {
    margin-bottom: 10px;
    box-shadow: 3px 10px 25px #efefef;
    border: 1px solid #efefef;
    padding: 3px;
    position: relative;
    p {
      margin: 0px;
    }
  }
}
.cart-item {
  display: flex;
}
.checkoutProceed {
  width: 80%;
  background-color: #ca0b0b;
  color: #dfdfdf;
  border: none;
  border-radius: 4px;
  padding: 7px 14px;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
  &:hover {
    cursor: pointer;
  }
}
.image-container {
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
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
  span {
    font-weight: 600;
    color: #727272;
    display: inline-block;
    width: 70px;
  }
}
.delete-item {
  position: absolute;
  top: 5px;
  right: 10px;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: #ff7e7e;
  }
}
.proceed-checkout {
  border-radius: 4px;
  border: 1px solid #efefef;
  box-shadow: 3px 10px 24px #efefef;
  padding: 10px 20px;
  height: 100px;
}
.shop-now {
  color: #5651f4;
  &:hover {
    cursor: pointer;
  }
}
</style>
