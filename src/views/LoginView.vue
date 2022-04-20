<template>
  <div class="login">
    <form id="login" v-on:submit.prevent="submit()">
      <div class="form-group" id="form-header">
        <h1>Log-In</h1>
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
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
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
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="inputRemember" />
        <label class="form-check-label" for="inputRemember">Remember Me</label>
      </div>
      <input
        id="logInSubmit"
        type="submit"
        class="btn btn-primary"
        value="Submit"
      />
      <a href="/signup" class="btn btn-primary">Sign-Up</a>
    </form>
    <!-- <small id="emailHelp" class="form-text text-muted">${this.errors}</small> -->
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },

  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>