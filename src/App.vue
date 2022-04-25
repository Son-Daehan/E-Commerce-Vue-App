<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">E-Commerce</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto" id="navbarHeader">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Products
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/products">All</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Category 2</a>
              <a class="dropdown-item" href="#">Category 3</a>
            </div>
          </li>
          <li class="nav-item" v-if="isLoggedIn()">
            >
            <a class="nav-link" href="/profile">Account</a>
          </li>
          <li class="nav-item" v-if="isNotLoggedIn()">
            >
            <a class="nav-link" href="/login">Log-In</a>
          </li>
          <li class="nav-item" v-if="isLoggedIn()">
            <a class="nav-link" href="/cart">Cart</a>
          </li>
          <li class="nav-item" v-if="isLoggedIn()">
            <a class="nav-link" href="/login" v-on:click="logOut">Log Out</a>
          </li>
        </ul>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>

    <router-view></router-view>

    <div class="row bg-dark text-light">
      <div class="text-center col-lg-6 offset-lg-3">
        <h4>Footer</h4>
        <p>
          Copyright &copy; 2022 &middot; All Rights Reserved &middot;
          <a href="#">Samuel Son</a>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    isNotLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return false;
      } else {
        return true;
      }
    },
    logOut: function () {
      localStorage.removeItem("jwt");
    },
  },
};
</script>
