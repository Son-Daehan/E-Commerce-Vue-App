<template>
  <div class="signup">
    <form id="login" v-on:submit.prevent="submit()">
      <div class="form-group" id="form-header">
        <h1>Create Account</h1>
      </div>
      <div class="form-group">
        <label for="inputEmail">Your name</label>
        <input
          type="text"
          class="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Password"
          v-model="password"
        />
        <small id="emailHelp" class="form-text text-muted"
          >Password must be at least 6 characters.</small
        >
      </div>
      <div class="form-group">
        <label for="inputPassword">Confirm password</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Password"
          v-model="passwordConfirmation"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },

  methods: {
    submit: function () {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>