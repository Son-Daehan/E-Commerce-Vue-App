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

    <div class="wrapper" id="addressGrid">
      <div v-for="(address, index) in addresses" :key="index">
        <div id="addressNestedGrid">
          <div id="addressStyling">
            {{ address.street_name }}, <br />{{ address.city }},
            {{ address.region }} {{ address.postal_code }}
          </div>
          <div>Active Shipping Address: {{ address.ship_to }}</div>
          <router-link
            v-bind:to="{
              name: 'address-edit',
              params: { id: address.address_id },
            }"
            id="addressEditStyling"
          >
            Edit
          </router-link>
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
      addresses: [],
    };
  },
  created: function () {
    axios.get("/api/user_addresses").then((response) => {
      this.addresses = response.data;
      console.log(this.addresses);
    });
  },
};
</script>