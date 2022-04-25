<template>
  <div class="profile">
    <nav class="navbar">
      <div id="profileNavbar">
        <ul id="profileNested">
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

    <div class="wrapper" id="addressDetailGrid">
      <div id="addressDetailNestedGrid">
        <form v-on:submit.prevent="updateAddress(address)">
          Street Name: <input type="text" v-model="address.street_name" /> City:
          <input type="text" v-model="address.city" /> Region:
          <input type="text" v-model="address.region" /> Postal Code:
          <input type="text" v-model="address.postal_code" />
          <input type="submit" Value="Submit" />
        </form>
        <button
          v-on:click="destroyAddress(address)"
          id="addressDetailEditStyling"
        >
          Delete
        </button>
        <router-link
          v-bind:to="{
            name: 'addresses',
          }"
          id="addressDetailEditStyling"
          >Cancel</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      address: {},
    };
  },
  created: function () {
    axios
      .get("/api/user_addresses/" + this.$route.params.id)
      .then((response) => {
        this.address = response.data;
        console.log(this.address);
      });
  },
  methods: {
    destroyAddress: function (address) {
      axios
        .delete("/api/user_addresses/" + this.$route.params.id)
        .then((response) => {
          console.log("address destroy", response);
          this.$router.push("/profile/addresses");
        });
    },
    updateAddress: function (address) {
      var params = {
        street_name: address.street_name,
        city: address.city,
        region: address.region,
        postal_code: address.postal_code,
      };
      axios
        .patch("/api/user_addresses/" + this.$route.params.id, params)
        .then((response) => {
          console.log("address update", response);
          this.$router.push("/profile/addresses");
        });
    },
  },
};
</script>