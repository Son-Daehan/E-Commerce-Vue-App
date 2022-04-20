<template>
  <div class="singleProduct">
    <div class="wrapper" id="product-detail-wrapper">
      <div>
        <img :src="product.url" id="productDetailImage" alt="Random Image" />
      </div>
      <div class="productStyle" id="productDetailNested">
        <div id="individualProductTitle">{{ product.name }}</div>
        <div>{{ product.description }}</div>
        <div>$ {{ product.price }}</div>
        <div class="qty-changer">
          Quantity
          <input
            class="qty-input form-group"
            type="number"
            v-model="newCartedProductQuantity"
          />
        </div>
        <button
          v-on:click="createCartedProducts()"
          type="button"
          class="btn btn-primary product-button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      product: [],
      carted_products: [],
      newCartedProductQuantity: "",
    };
  },

  created: function (id) {
    axios.get("/api/products/" + this.$route.params.id).then((response) => {
      this.product = response.data;
      console.log(this.product);
    });
  },

  methods: {
    createCartedProducts: function () {
      var params = {
        user_id: 1,
        product_id: this.$route.params.id,
        quantity: this.newCartedProductQuantity,
        status: "Carted",
      };
      axios
        .post("/api/carted_products", params)
        .then((response) => {
          console.log("Success", response.data);
          this.carted_products.push(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>