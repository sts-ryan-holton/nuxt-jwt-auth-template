<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container is-desktop">
          <div class="columns">
            <div class="column">
              <h1 class="title">
                Log in
              </h1>
              <h2 class="subtitle">
                Log in to your account!
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

            <div v-if="errors && errors.message" class="notification is-danger">
              {{ errors.message }}
            </div>

            <div class="field">
              <div class="control">
                <label class="label">Email</label>
                <input type="email" placeholder="Your Email" class="input" :class="errors && errors.email ? 'is-danger' : ''" v-model="fields.email" />
                <p class="help is-danger" v-if="errors && errors.email">{{ errors.email[0] }}</p>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">Password</label>
                <input type="password" placeholder="Your Password" class="input" :class="errors && errors.password ? 'is-danger' : ''" v-model="fields.password" />
                <p class="help is-danger" v-if="errors && errors.password">{{ errors.password[0] }}</p>
              </div>
            </div>

            <div class="field is-marginless">
              <div class="control">
                <button :disabled="isLoading" type="button" @click="login" class="button is-primary" :class="isLoading ? 'is-loading' : ''">Log in</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: {
        email: '',
        password: ''
      },
      isLoading: false,
      errors: null
    }
  },
  methods: {

    /*
    * Log a user in
    */
    async login () {
      this.isLoading = true
      this.errors = null
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.fields.email,
            password: this.fields.password
          }
        });
        this.$router.push('/secret')
      } catch (e) {
        this.isLoading = false
        this.errors = e.response.data
      }
    }

  }
}
</script>
