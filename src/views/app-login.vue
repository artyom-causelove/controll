<template>
  <div id="app-login">
    <sign-in-card class="app-login__sign-in-card">

    </sign-in-card>
  </div>
</template>

<script>
import signInCard from '@/components/cards/sign-in-card'

export default {
  name: 'app-login',
  methods: {
    async recaptcha () {
      let token
      try {
        token = await this.$recaptcha('login')
      } catch (error) {
        console.error('Google server error: ' + error)
      }

      try {
        const response = await this.$http.post('http://127.0.0.1:3000/reCAPTCHA',
          { token }, { headers: { 'content-type': 'application/json' } })
      } catch (error) {
        console.error('Server error: ' + error)
      }
    }
  },
  components: {
    signInCard
  }
}
</script>

<style lang="scss" scoped>
#app-login {
  position: relative;

  height: 100%;

  background: $background;

  .app-login__sign-in-card {
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -55%);
  }
}
</style>
