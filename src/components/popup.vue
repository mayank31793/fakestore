<template>
  <div class="popup-container">
    <div class="popup">
      <div class="inner-container">
        <div class="order-placed">
          <p>Your Order is Placed</p>
          <button @click="backToShop">Back to Shop</button>
        </div>
        <span class="cancel-popup" @click="cancelPopup">&times;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    cancelPopup: function () {
      this.$store.dispatch("popupRequest", false);
    },
    backToShop: function () {
      this.$store.dispatch("popupRequest", false);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-container {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  .popup {
    width: 40vw;
    height: 200px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .inner-container {
      background: #a90229;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      box-shadow: -1px 1px 20px #877a7a;
    }
  }
}
.order-placed {
  text-align: center;
  padding-top: 30px;
  color: #fff;
  button {
    border: none;
    color: #fff;
    background-color: #c0930e;
    padding: 10px 20px;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
    }
  }
}
.cancel-popup {
  position: absolute;
  top: 6px;
  right: 10px;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
}
</style>
