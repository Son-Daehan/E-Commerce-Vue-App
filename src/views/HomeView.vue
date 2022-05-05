<template>
  <div class="home">
    <div id="myCarousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="imageHome d-block w-100"
            src="https://res.cloudinary.com/daehan/image/upload/v1651708093/Ecommerce%20App/sale-tag-online-shopping_prxtco.jpg"
            alt="ecommerce image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
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
