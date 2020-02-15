<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/"><strong>Auth Demo</strong></nuxt-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
        <nuxt-link v-if="isAuthenticated" class="navbar-item" to="/secret">Secret Page</nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div v-if="!isAuthenticated" class="buttons">
            <nuxt-link class="button is-info" to="/auth/register">Register</nuxt-link>
            <nuxt-link class="button is-primary" to="/auth/login">Log in</nuxt-link>
          </div>
          <div v-else class="buttons">
            <nuxt-link class="button is-info" to="/auth/profile">My Profile</nuxt-link>
            <button type="button" @click="logout" class="button is-primary">Log out</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/')
    }
  }
}
</script>
