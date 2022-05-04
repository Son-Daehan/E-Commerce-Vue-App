<template>
  <div class="profile">
    <nav class="navbar-custom">
      <div id="profileNavbar">
        <ul class="list-unstyled" id="profileNavbarNested">
          <li class="nav-item active">
            <a class="nav-link" href="/profile"
              >Account Information <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profile/addresses">Addresses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profile/billing">Billing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profile/order-history">Order-History</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="wrapper" id="orderHistoryGrid">
      <div v-for="(order, index) in orders" :key="index">
        <div class="orderHistoryWrapper">
          <div class="orderHistoryHeader">
            <div>ORDER PLACED</div>
            <div>TOTAL</div>
            <div>SHIP TO</div>
            <div></div>
            <div>ORDER #{{ order.id }}</div>
          </div>
          <div id="orderHistoryHeader2">
            <div>{{ order.date_created }}</div>
            <div>${{ order.total }}</div>
            <div></div>
            <div>View Order Details</div>
            <div>View Invoice</div>
          </div>
          <div id="orderNestedGrid">
            <div>
              <div
                id="orderList"
                v-for="(product, index) in order.products"
                :key="index"
              >
                <div>{{ product.title }}</div>
                <div>{{ product.description }}</div>
                <div>Price: ${{ product.price }}</div>
              </div>
            </div>
            <div id="orderHistorySupport">
              <div>Track Package</div>
              <div>Get Product Support</div>
              <div>Return or Replace Items</div>
              <div>Share Gift Receipt</div>
              <div>Leave Seller Feedback</div>
            </div>
          </div>
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
      orders: [],
      products: [],
    };
  },
  created: function () {
    axios.get("/api/orders").then((response) => {
      this.orders = response.data;
      console.log(this.orders);
    });
  },
};
</script>