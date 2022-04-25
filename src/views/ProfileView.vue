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

    <div v-if="!isEditing" class="wrapper" id="profileGrid">
      <div>
        <div id="profileNestedGrid">
          <div>
            <div>{{ user.name }}</div>
            <div>{{ user.email }}</div>
            <div>{{ user.password_digest }}</div>
          </div>
          <button v-on:click="toggleToItemEditForm">Edit</button>
        </div>
      </div>
    </div>
    <form v-else class="wrapper" id="profileGrid">
      <div>
        <div id="profileNestedGrid">
          <div>
            <form v-on:submit.prevent="updateUser(user)">
              Name: <input type="text" v-model="user.name" /> Email:
              <input type="text" v-model="user.email" /> Password:
              <input type="text" v-model="user.password" /> Password
              Confirmation:
              <input type="text" v-model="user.password_confirmation" />
              <input type="submit" Value="Submit" />
            </form>
          </div>
          <button v-on:click="toggleToItemEditForm">Cancel</button>
        </div>
      </div>
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
