<template>
  <div id="sign-in-card">
    <blank-card class="sign-in-card__card">
      <p class="card__caption">
        Login
      </p>

      <validate-input class="card__input" type="email" placeholder="Enter your email..."></validate-input>
      <validate-input class="card__input" type="password" placeholder="Enter your password..."></validate-input>
    </blank-card>
  </div>
</template>

<script>
import blankCard from '@/components/cards/blank-card'
import validateInput from '@/components/inputs/validate-input'

export default {
  name: 'sign-in-card',
  components: {
    blankCard,
    validateInput
  }
}
</script>

<style lang="scss" scoped>
#sign-in-card {
  width: 304px;
  height: 369px;

  .sign-in-card__card {
    display: flex;

    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 100%;

    .card__caption {
      width: 100%;

      margin: 10px 0 15px 0;

      text-align: center;
      color: $second-typo-color;
      font-family: 'Saira', sans-serif;
      font-weight: bold;
      font-size: 26px;
    }

    .card__input {
      width: 254px;
      height: 50px;

      margin-bottom: 14px;
    }
  }
}
</style>
