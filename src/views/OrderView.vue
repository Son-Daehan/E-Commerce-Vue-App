<template>
  <div class="order">
    <div class="wrapper" id="orderWrapper">
      <div class="order-title">
        <h1>Order</h1>
      </div>
      <div class="orderNested">
        <div class="orderNestedLeft">
          <div>Order ID:</div>
          <div>Subtotal:</div>
          <div>Total Tax:</div>
          <div>Total:</div>
        </div>
        <div class="orderNestedRight">
          <div>{{ order.id }}</div>
          <div>${{ order.subtotal }}</div>
          <div>${{ order.tax }}</div>
          <div>${{ order.total }}</div>
        </div>
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