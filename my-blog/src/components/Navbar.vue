<template>
  <nav>
    <h1>Vuex Auth</h1>
    <template v-if="authIsReady">
      <!-- for all users -->
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <span>Logged in as {{ user.email }} </span>
        <button @click="logout">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const logout = async () => {
      await store.dispatch("logout");
    };

    const user = computed(() => store.state.user);
    const authIsReady = computed(() => store.state.authIsReady);

    return { logout, user, authIsReady };
  },
};
</script>
