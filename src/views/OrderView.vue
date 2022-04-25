<template>
  <div class="order">
    <div class="order-title">
      <h1>Checkout</h1>
    </div>
    <div class="wrapper" id="orderWrapper">
      <div id="orderNested">
        <div>Order ID:</div>
        <div>${{ order.id }}</div>
        <div>Subtotal:</div>
        <div>${{ order.subtotal }}</div>
        <div>Total Tax:</div>
        <div>${{ order.tax }}</div>
        <div>Total:</div>
        <div>${{ order.total }}</div>
        <div>numbers</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      order: [],
    };
  },
  created: function (id) {
    axios.get("/api/orders/" + this.$route.params.id).then((response) => {
      this.order = response.data;
      console.log(this.order);
    });
  },
};
</script>