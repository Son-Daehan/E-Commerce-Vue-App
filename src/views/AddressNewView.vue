<template>
  <div class="profile">
    <nav class="navbar-custom">
      <div id="profileNavbar">
        <ul class="list-unstyled" id="profileNavbarNested">
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

    <form id="createNewAddress" v-on:submit.prevent="submit()">
      <div class="form-group" id="form-header">
        <h1>Create Account</h1>
      </div>
      <div class="form-group">
        <label for="inputStreetName">Your street name</label>
        <input
          type="text"
          class="form-control"
          id="inputStreetName"
          aria-describedby="streetNameHelp"
          placeholder="Enter street name"
          v-model="streetName"
        />
      </div>
      <div class="form-group">
        <label for="inputCity">City</label>
        <input
          type="city"
          class="form-control"
          id="inputCity"
          aria-describedby="cityHelp"
          placeholder="Enter city"
          v-model="city"
        />
      </div>
      <div class="form-group">
        <label for="inputRegion">region</label>
        <input
          type="region"
          class="form-control"
          id="inputRegion"
          placeholder="Region"
          v-model="region"
        />
      </div>
      <div class="form-group">
        <label for="inputPostalCode">Postal Code</label>
        <input
          type="postalCode"
          class="form-control"
          id="inputPostalCode"
          placeholder="Postal Code"
          v-model="postalCode"
        />
      </div>
      <div class="form-group">
        <label for="inputCountry">Country</label>
        <input
          type="country"
          class="form-control"
          id="inputCountry"
          placeholder="Country"
          v-model="country"
        />
      </div>
      <div class="form-group">
        <label for="shipTo">Is this the shipping address?</label>
        <input
          type="shipTo"
          class="form-control"
          id="shipTo"
          placeholder="Ship To"
          v-model="shipTo"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      streetName: "",
      city: "",
      region: "",
      country: "",
      postalCode: "",
      shipTo: "",
      errors: [],
    };
  },

  methods: {
    submit: function () {
      var params = {
        street_name: this.streetName,
        city: this.city,
        region: this.region,
        country: this.country,
        postal_code: this.postalCode,
      };
      axios
        .post("/api/user_addresses", params)
        .then((response) => {
          this.$router.push("/profile/addresses");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>