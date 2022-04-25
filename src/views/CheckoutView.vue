<template>
  <div class="checkout">
    <div class="checkout-title">
      <h1>Checkout</h1>
    </div>
    <div class="wrapper" id="checkoutWholeWrapper">
      <div v-for="(address, index) in activeAddress" :key="index">
        <div v-if="address.ship_to != false" class="wrapper" id="firstNested">
          <div>Shipping Method</div>
          <div>
            {{ address.street_name }},
            <br />
            {{ address.city }}, {{ address.region }},
            {{ address.postal_code }}
          </div>
          <router-link v-bind:to="{ path: '/' }">Change</router-link>
        </div>
      </div>

      <div class="wrapper" id="secondNested">
        <div>Payment Method</div>
        <div>test</div>
        <div>test</div>
      </div>

      <div class="wrapper" id="thirdNested">
        <div>
          <div v-for="(carted, index) in cartedProducts" :key="index">
            <div id="checkoutThirdNestedFurther">
              <div>
                <div>
                  <router-link
                    v-bind:to="{
                      name: 'singleProduct',
                      params: { id: index + 1 },
                    }"
                    >{{ carted.product.name }}</router-link
                  >
                </div>
                <div>Quantity: {{ carted.quantity }}</div>
                <div>Price:</div>
                <hr width="100%" />
              </div>
            </div>
          </div>
        </div>
        <div id="fourthNested">
          <div>Order Summary</div>
          <div
            v-for="(carted, index) in cartedProducts.slice(0, 1)"
            v-bind:key="index"
          >
            Subtotal: ${{ carted.subtotal }}
          </div>
          <div>Shipping and Handling: $0.00</div>
          <div
            v-for="(carted, index) in cartedProducts.slice(0, 1)"
            v-bind:key="index"
          >
            Total Before Tax: ${{ carted.subtotal }}
          </div>
          <div>Estimated Tax: $0.00</div>
          <div>Order Total: $0.00</div>
          <button
            v-on:click="createOrder()"
            type="button"
            class="btn btn-primary"
          >
            Create Order
          </button>
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
      cartedProducts: [],
      addresses: [],
      errors: [],
      order: [],
    };
  },

  methods: {
    createOrder: function (id) {
      var params = {};
      axios
        .post("/api/orders", params)
        .then((response) => {
          console.log("Success", response.data);
          this.order.push(response.data);
          this.orderId = response.data.id;
          this.$router.push({ name: "order", params: { id: this.orderId } });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created: function () {
    axios.get("/api/carted_products").then((response) => {
      this.cartedProducts = response.data;
      console.log(this.cartedProducts);
    });
    axios.get("/api/user_addresses").then((response) => {
      this.addresses = response.data;
      console.log(this.addresses);
    });
  },
  computed: {
    activeAddress: function () {
      return this.addresses.filter(function (shipTo) {
        return shipTo.ship_to;
      });
    },
  },
};
</script>