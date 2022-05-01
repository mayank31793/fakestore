<template>
  <div class="checkout-container">
    <div class="inner-container">
      <div>
        <h2>Payment Options</h2>
        <div>
          <input
            type="radio"
            id="gpay"
            name="paymentMode"
            class="payment-mode"
            value="gpay"
            v-model="paymentMode"
          />
          <label for="gpay">Google Pay</label>
        </div>
        <div>
          <input
            type="radio"
            id="paytm"
            name="paymentMode"
            class="payment-mode"
            value="paytm"
            v-model="paymentMode"
          />
          <label for="paytm">Paytm</label>
        </div>
        <div>
          <input
            type="radio"
            id="upi"
            name="paymentMode"
            class="payment-mode"
            value="upi"
            v-model="paymentMode"
          />
          <label for="upi">UPI</label>
        </div>
        <div>
          <input
            type="radio"
            id="debit"
            name="paymentMode"
            class="payment-mode"
            value="debit"
            v-model="paymentMode"
          />
          <label for="debit">Debit Card</label>
        </div>
        <div>
          <input
            type="radio"
            id="cod"
            name="paymentMode"
            class="payment-mode"
            value="cod"
            v-model="paymentMode"
          />
          <label for="cod">Cash On Delivery</label>
        </div>
        <button
          @click="placeOrder"
          class="place-order-button"
          :disabled="paymentMode == null"
          :class="{ isDisabled: paymentMode == null }"
        >
          Place Order
        </button>
      </div>
      <div class="price-summary">
        <h2>Price Summary</h2>
        <p>Items: {{ totalNumberItems }}</p>
        <p>Delivery Charges: FREE</p>
        <b>Amount Payable: {{ "$ " + totalCost }}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentMode: null,
    };
  },
  methods: {
    placeOrder: function () {
      this.$store.dispatch("popupRequest", true);
    },
  },
  computed: {
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
.checkout-container {
  max-width: 1200px;
  margin: 0 auto;
}
.place-order-button {
  border: none;
  color: #fff;
  background-color: #b80d0d;
  padding: 10px 24px;
  font-weight: bold;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
}
.isDisabled {
  background-color: #858585;
}
.inner-container {
  display: grid;
  grid-template-columns: auto 300px;
  grid-column-gap: 20px;
}
input[type="radio"] {
  display: none;
}
label {
  background-color: #c7c9c7;
  display: block;
  margin-bottom: 6px;
  padding: 10px 12px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background-color: #a6a6a6;
  }
}
input[type="radio"]:checked + label {
  font-weight: bold;
  background-color: #6a6a6a;
}
.price-summary {
  border-radius: 4px;
  border: 1px solid #efefef;
  box-shadow: 3px 10px 24px #efefef;
  padding: 0px 20px 10px 20px;
  height: 182px;
  margin-top: 10px;
}
</style>
