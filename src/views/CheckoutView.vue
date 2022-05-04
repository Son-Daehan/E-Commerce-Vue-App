<template>
  <div class="checkout">
    <div class="checkout-title">
      <h1>Checkout</h1>
    </div>
    <div class="wrapper" id="checkoutWholeWrapper">
      <div class="firstRowWrapper">
        <div v-for="(address, index) in activeAddress" :key="index">
          <div
            v-if="address.ship_to != false"
            class="wrapper addressCard"
            id="firstNested"
          >
            <div>Shipping Method</div>
            <div>
              {{ address.street_name }},
              <br />
              {{ address.city }}, {{ address.region }},
              {{ address.postal_code }}
            </div>
            <router-link
              class="button addressChangeButton"
              v-bind:to="{ path: '/profile/addresses' }"
              >Change</router-link
            >
          </div>
        </div>
        <div>
          <div class="wrapper billingCard" id="secondNested">
            <div>
              <div>Payment Method</div>
            </div>
            <div>
              <div>test</div>
            </div>
            <div>
              <div>test</div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper" id="thirdNested">
        <div class="productOrderCard">
          <div v-for="(carted, index) in cartedProducts" :key="index">
            <div id="checkoutThirdNestedFurther">
              <div>
                <router-link
                  class="routerLink"
                  v-bind:to="{
                    name: 'singleProduct',
                    params: { id: carted.product.id },
                  }"
                >
                  <img
                    v-bind:src="carted.product.image"
                    id="product-image"
                    v-bind:alt="carted.product.title"
                  />
                </router-link>
              </div>
              <div class="checkoutProductCardNested">
                <div class="productOrderTitle">
                  <router-link
                    v-bind:to="{
                      name: 'singleProduct',
                      params: { id: carted.product.id },
                    }"
                    >{{ carted.product.title }}</router-link
                  >
                </div>
                <div class="productOrderDescription">
                  {{ carted.product.description }}
                </div>
                <div class="productQuantityPrice">
                  <div>Quantity: {{ carted.quantity }}</div>
                  <div>
                    Total Product Price: ${{
                      carted.product.price * carted.quantity
                    }}
                  </div>
                </div>
              </div>
            </div>
            <hr width="100%" />
          </div>
        </div>

        <div class="orderCard">
          <div id="summaryTitle">Order Summary</div>
          <div class="orderCardWrapper">
            <div class="orderCardLeft" id="fourthNested">
              <div
                class="summaryDetail"
                v-for="(carted, index) in cartedProducts.slice(0, 1)"
                v-bind:key="index"
              >
                Subtotal:
              </div>
              <div class="summaryDetail">Shipping and Handling:</div>
              <div
                class="summaryDetail"
                v-for="(carted, index) in cartedProducts.slice(0, 1)"
                v-bind:key="index"
              >
                Total Before Tax:
              </div>
              <div
                class="summaryDetail"
                v-for="(carted, index) in cartedProducts.slice(0, 1)"
                v-bind:key="index"
              >
                Estimated Tax:
              </div>
              <div
                class="summaryTotal"
                v-for="(carted, index) in cartedProducts.slice(0, 1)"
                v-bind:key="index"
              >
                Order Total:
              </div>
            </div>
            <div class="orderCardRight" id="fourthNested">
              <div
                class="summaryDetail"
                v-for="(carted, index) in cartedProducts.slice(0, 1)"
                v-bind:key="index"
              >
                ${{ carted.subtotal }}
              </div>
              <div class="summaryDetail">$0.00</div>
              <div
                class="summaryDetail"
                v-for="(carted, index) in cartedProducts.slice(0, 1)"
                v-bind:key="index"
              >
                ${{ carted.subtotal }}
              </div>
              <div
                class="summaryDetail"
                v-for="(carted, index) in cartedProducts.slice(0, 1)"
                v-bind:key="index"
              >
                ${{ carted.estimated_tax }}
              </div>
              <div
                class="summaryTotal"
                v-for="(carted, index) in cartedProducts.slice(0, 1)"
                v-bind:key="index"
              >
                ${{ carted.total_order_price }}
              </div>
            </div>
          </div>
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
      taxes: [],
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
    axios.get("/api/taxes").then((response) => {
      this.taxes = response.data;
      console.log(this.taxes);
    });
  },
  computed: {
    activeAddress: function () {
      return this.addresses.filter(function (shipTo) {
        return shipTo.ship_to;
      });
    },
  },
  // methods: {
  //   toTwoDecimal: function (number) {
  //     this.number.toFixed(2);
  //   },
  // },
};
</script>