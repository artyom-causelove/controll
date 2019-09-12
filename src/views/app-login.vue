<template>
  <div id="app-login">
    <button @click="recaptcha">awd</button>
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
      const token = await this.$recaptcha('login')
      console.log(token)
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
