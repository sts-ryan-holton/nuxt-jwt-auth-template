<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container is-desktop">
          <div class="columns">
            <div class="column">
              <h1 class="title">
                Secret Page
              </h1>
              <h2 class="subtitle">
                This page is protected by authentication
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

            secret page

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
