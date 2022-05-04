<template>
  <div class="cart">
    <div class="cart-title">
      <h1>Shopping Cart</h1>
    </div>
    <div v-if="!isEmpty" class="wrapper" id="wholeWrapper">
      <div class="wrapper" id="cartWrapper">
        <div
          class="cardCarted"
          v-for="(carted, index) in cartedProducts"
          :key="index"
        >
          <div class="nested" id="cartNested">
            <router-link
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

            <div id="cartNestedFurther">
              <div>
                <router-link
                  v-bind:to="{
                    name: 'singleProduct',
                    params: { id: carted.product.id },
                  }"
                  >{{ carted.product.title }}</router-link
                >
              </div>
              <div>{{ carted.product.description }}</div>
            </div>
            <div class="computedDetail">
              <div>Quantity: {{ carted.quantity }}</div>
              <div>Price: ${{ carted.product.price }}</div>
              <button class="button" v-on:click="destroyCartedProduct(carted)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="cardCartedTwo">
        <div
          v-for="(carted, index) in cartedProducts.slice(0, 1)"
          v-bind:key="index"
        >
          <div>
            Subtotal: ${{ carted.subtotal }}
            <button class="button">
              <router-link to="/checkout"> Checkout </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else id="emptyCartGrid">
      <div class="emptyCart">Shopping cart is empty.</div>
      <router-link class="emptyCart" v-bind:to="{ name: 'products' }"
        >Continue Shopping</router-link
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      cartedProducts: [],
    };
  },

  created: function () {
    axios.get("/api/carted_products").then((response) => {
      this.cartedProducts = response.data;
      console.log(this.cartedProducts);
    });
  },

  methods: {
    destroyCartedProduct: function (carted) {
      axios.delete("/api/carted_products/" + carted.id).then((response) => {
        console.log("Carted product has been destroyed", response);
        this.$router.go();
      });
    },
  },

  computed: {
    isEmpty: ({ cartedProducts }) => cartedProducts.length === 0,
  },
};
</script>