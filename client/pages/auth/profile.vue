<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container is-desktop">
          <div class="columns">
            <div class="column">
              <h1 class="title">
                Profile
              </h1>
              <h2 class="subtitle">
                Welcome to your profile
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section content">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-4">

            {{ loggedInUser.name }}

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script>
