<template>
  <div class="products">
    <div class="productTitle">
      <h1>All Products</h1>
    </div>

    <div class="wrapper" id="product-wrapper">
      <div v-for="(product, index) in products" :key="index">
        <div class="nested" id="product-nested">
          <div>
            <router-link
              v-bind:to="{ name: 'singleProduct', params: { id: index + 1 } }"
            >
              <img
                v-bind:src="product.url"
                id="product-image"
                v-bind:alt="product.name"
              />
            </router-link>
          </div>
          <router-link
            v-bind:to="{ name: 'singleProduct', params: { id: index + 1 } }"
            >{{ product.name }}</router-link
          >
          <div>{{ product.price }}</div>
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
      products: [],
    };
  },

  created: function () {
    axios.get("/api/products").then((response) => {
      this.products = response.data;
      console.log(this.products);
    });
  },

  methods: {},
};
</script>