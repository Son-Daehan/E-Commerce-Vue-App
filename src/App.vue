<template>
  <div id="app">
    <header>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark"
        :key="$route.fullPath"
      >
        <a class="navbar-brand" href="/">E-Commerce</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto" id="navbarHeader">
            <li class="nav-item active">
              <a class="nav-link" href="/"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/products">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item" v-if="isLoggedIn()">
              <a class="nav-link" href="/profile">Account</a>
            </li>
            <li class="nav-item" v-if="isNotLoggedIn()">
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
    </header>

    <router-view></router-view>
    <footer>
      <div class="footer row bg-dark text-light">
        <div class="text-center col-lg-6 offset-lg-3">
          <h4>Footer</h4>
          <p>
            Copyright &copy; 2022 &middot; All Rights Reserved &middot;
            <a href="#">Samuel Son</a>
          </p>
        </div>
        <div>
          <div class="container">
            <div class="footerSocial">
              <div class="col-lg-2 col-md-3 col-xs-12 swingHorizontal">
                <a href="https://www.linkedin.com/in/samuel-son-68078a234/">
                  <h4 class="linked">linkedin</h4>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-xs-12 swingHorizontal">
                <a href="https://github.com/Son-Daehan">
                  <h4 class="linked">Github</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
