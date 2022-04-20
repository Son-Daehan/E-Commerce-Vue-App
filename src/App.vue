<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">E-Commerce</a>

      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
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
          <li class="nav-item">
            <a class="nav-link" href="/login">Account</a>
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
    logOut: function () {
      localStorage.removeItem("jwt");
    },
  },
};
</script>
