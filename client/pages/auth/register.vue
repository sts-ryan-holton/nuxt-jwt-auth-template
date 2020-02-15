<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container is-desktop">
          <div class="columns">
            <div class="column">
              <h1 class="title">
                Register
              </h1>
              <h2 class="subtitle">
                Create yourself an account to log in!
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
                <label class="label">Name</label>
                <input :class="errors && errors.name ? 'is-danger' : ''" type="text" placeholder="Your Name" class="input" v-model="fields.name" />
                <p class="help is-danger" v-if="errors && errors.name">{{ errors.name[0] }}</p>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">Email</label>
                <input :class="errors && errors.email ? 'is-danger' : ''" type="email" placeholder="Your Email" class="input" v-model="fields.email" />
                <p class="help is-danger" v-if="errors && errors.email">{{ errors.email[0] }}</p>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">Password</label>
                <input :class="errors && errors.password ? 'is-danger' : ''" type="password" placeholder="Create a password" class="input" v-model="fields.password" />
                <p class="help is-danger" v-if="errors && errors.password">{{ errors.password[0] }}</p>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">Password Confirmation</label>
                <input :class="errors && errors.password_confirmation ? 'is-danger' : ''" type="password" placeholder="Type out your password again!" class="input" v-model="fields.password_confirmation"/>
                <p class="help is-danger" v-if="errors && errors.password_confirmation">{{ errors.password_confirmation[0] }}</p>
              </div>
            </div>

            <div class="field is-marginless">
              <div class="control">
                <button :disabled="isLoading" type="button" @click="register" class="button is-primary" :class="isLoading ? 'is-loading' : ''">Create account</button>
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
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      isLoading: false,
      errors: null
    }
  },
  methods: {

    /*
    * Register a user
    */
    register () {
      this.isLoading = true
      this.errors = null
      this.$axios.post(`${process.env.AUTH_API}/api/auth/register`, this.fields)
        .then(response => {
          this.isLoading = false
          this.fields = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
          }
          if (response.statusText == 'Created') this.$router.push('/secret')
        })
        .catch(e => {
          this.isLoading = false
          this.errors = e.response.data
        })
    }

  }
}
</script>
