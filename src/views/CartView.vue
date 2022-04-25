<template>
  <div class="cart">
    <div class="cart-title">
      <h1>Shopping Cart</h1>
    </div>
    <div v-if="!isEmpty" class="wrapper" id="wholeWrapper">
      <div class="wrapper" id="cartWrapper">
        <div v-for="(carted, index) in cartedProducts" :key="index">
          <div class="nested" id="cartNested">
            <router-link
              v-bind:to="{ name: 'singleProduct', params: { id: index + 1 } }"
            >
              <img
                v-bind:src="carted.product.url"
                id="product-image"
                v-bind:alt="carted.product.name"
              />
            </router-link>
            <div id="cartNestedFurther">
              <div>
                <router-link
                  v-bind:to="{
                    name: 'singleProduct',
                    params: { id: index + 1 },
                  }"
                  >{{ carted.product.name }}</router-link
                >
              </div>
              <div>{{ carted.product.description }}</div>
              <div>Quantity: {{ carted.quantity }}</div>
              <div>Price: ${{ carted.product.price }}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          v-for="(carted, index) in cartedProducts.slice(0, 1)"
          v-bind:key="index"
        >
          <div>
            Subtotal: ${{ carted.subtotal }}
            <router-link to="/checkout"> Checkout </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else id="emptyCartGrid">
      <div>THIS IS AN EMPTY CART, PLEASE ADD PRODUCTS TO PROCEED.</div>
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

  computed: {
    isEmpty: ({ cartedProducts }) => cartedProducts.length === 0,
  },
};
</script>