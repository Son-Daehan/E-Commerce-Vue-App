<template>
  <div class="products">
    <div class="btnCategoryContainer">
      <button
        class="btnCategory"
        v-on:click="productFilterKey = 'all'"
        :class="{ active: productFilterKey == 'all' }"
      >
        All
      </button>
      <button
        class="btnCategory"
        v-on:click="productFilterKey = 'menClothing'"
        :class="{ active: productFilterKey == 'mens clothing' }"
      >
        Men's Clothing
      </button>
      <button
        class="btnCategory"
        v-on:click="productFilterKey = 'womenClothing'"
        :class="{ active: productFilterKey == 'womens clothing' }"
      >
        Women's Clothing
      </button>
      <button
        class="btnCategory"
        v-on:click="productFilterKey = 'jewelery'"
        :class="{ active: productFilterKey == 'jewelery' }"
      >
        Jewelery
      </button>
      <button
        class="btnCategory"
        v-on:click="productFilterKey = 'electronics'"
        :class="{ active: productFilterKey == 'electronics' }"
      >
        Electronics
      </button>
    </div>
    <div class="wrapperProduct" id="product-wrapper">
      <div v-for="(product, index) in productFilter" v-bind:key="index">
        <!-- <div v-if="product.category == 'electronics'"> -->
        <div class="card" id="product-nested">
          <div>
            <router-link
              class="routerLink"
              v-bind:to="{ name: 'singleProduct', params: { id: index + 1 } }"
            >
              <img
                v-bind:src="product.image_url"
                id="product-image"
                v-bind:alt="product.title"
              />
            </router-link>
          </div>

          <router-link
            class="routerLink"
            v-bind:to="{ name: 'singleProduct', params: { id: index + 1 } }"
            >{{ product.title }}</router-link
          >

          <div class="price">${{ product.price }}</div>
        </div>
        <!-- </div> -->
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
      productFilterKey: "all",
    };
  },

  created: function () {
    axios.get("/api/products").then((response) => {
      this.products = response.data;
      console.log(this.products);
    });
  },

  computed: {
    productFilter() {
      return this[this.productFilterKey];
    },
    all() {
      return this.products;
    },
    electronics() {
      return this.products.filter(
        (product) => product.category == "electronics"
      );
    },
    menClothing() {
      return this.products.filter(
        (product) => product.category == "men's clothing"
      );
    },
    womenClothing() {
      return this.products.filter(
        (product) => product.category == "women's clothing"
      );
    },
    jewelery() {
      return this.products.filter((product) => product.category == "jewelery");
    },
  },
};
</script>