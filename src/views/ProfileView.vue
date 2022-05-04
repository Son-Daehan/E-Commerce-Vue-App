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

    <div v-if="!isEditing" class="wrapper" id="profileGrid">
      <div class="profileCard">
        <div id="profileNestedGrid">
          <div>
            <div>{{ user.name }}</div>
            <div>{{ user.phone_number }}</div>
            <div>{{ user.email }}</div>
          </div>
          <button class="btnProfile" v-on:click="toggleToItemEditForm">
            Edit
          </button>
        </div>
      </div>
    </div>
    <form v-else class="wrapper profileCard" id="profileEditGrid">
      <div>
        <form v-on:submit.prevent="updateUser(user)">
          <div id="profileEditNestedGrid">
            <div>Name:</div>
            <input type="text" v-model="user.name" />
            <div>Email:</div>
            <input type="text" v-model="user.email" />
            <div>Phone Number:</div>
            <input type="text" v-model="user.phone_number" />

            <div>Password:</div>
            <input type="text" v-model="user.password" />
            <div>Password Confirmation:</div>
            <input type="text" v-model="user.password_confirmation" /> <br />
          </div>
          <input class="btnEditProfile" type="submit" Value="Submit" />
        </form>
      </div>
      <button class="btnEditProfile" v-on:click="toggleToItemEditForm">
        Cancel
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: {},
      isEditing: false,
      isDone: this.done,
    };
  },
  created: function () {
    axios.get("/api/users").then((response) => {
      this.user = response.data[0];
      console.log(this.user);
    });
  },
  methods: {
    toggleToItemEditForm() {
      this.isEditing = true;
    },
    updateUser: function (user) {
      var params = {
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        password: user.password,
        password_confirmation: user.password_confirmation,
      };
      axios.patch("/api/users/" + user.user_id, params).then((response) => {
        console.log("user update", response);
        this.$router.push("/profile");
        this.isEditing = false;
      });
    },
  },
};
</script>
