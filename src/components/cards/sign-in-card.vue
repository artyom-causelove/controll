<template>
  <div id="sign-in-card">
    <blank-card class="sign-in-card__card">
      <p class="card__caption">
        Login
      </p>

      <validate-input class="card__input"
        type="email"
        placeholder="Enter your email..."
        v-model="userEmail"
        :lazy="true"
        :validationObject="$v.userEmail"
      ></validate-input>

      <validate-input class="card__input"
        type="password"
        placeholder="Enter your password..."
        v-model="password"
        :lazy="true"
        :validationObject="$v.password"
      ></validate-input>

      <error-notifi class="card__error-notifi"
        v-if="isErrorNotifi"
        @cancelClick="isErrorNotifi = false"
      >
        <p class="error-notifi__text">
          Wrong password
        </p>
      </error-notifi>

      <div class="card__buttons-wrapper">
        <rectangle-button class="buttons-wrapper__button-sign-up">
          <p class="button-sign-up__text">
            Sign Up
          </p>
        </rectangle-button>

        <rectangle-button class="buttons-wrapper__button-sign-in">
          <p class="button-sign-in__text">
            Sign In
          </p>
        </rectangle-button>
      </div>
    </blank-card>
  </div>
</template>

<script>
import blankCard from '@/components/cards/blank-card'
import validateInput from '@/components/inputs/validate-input'
import rectangleButton from '@/components/buttons/rectangle-button'
import errorNotifi from '@/components/notifications/error-notifi'

import { required, minLength, email } from 'vuelidate/lib/validators'
import withAlphaAndNums from '@/components/validators/withAlphaAndNums'

export default {
  name: 'sign-in-card',
  data () {
    return {
      isErrorNotifi: false,
      userEmail: '',
      password: ''
    }
  },
  created () {
    console.log(this.$v.userEmail)
  },
  validations: {
    userEmail: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  components: {
    blankCard,
    validateInput,
    rectangleButton,
    errorNotifi
  }
}
</script>

<style lang="scss" scoped>
#sign-in-card {
  width: 304px;

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

    .card__error-notifi {
      height: 46px;
      width: 100%;
      
      .error-notifi__text {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: $main-typo-color;
      }
    }

    .card__buttons-wrapper {
      display: flex;

      justify-content: space-between;
      
      width: 100%;

      margin-top: 3px;

      .buttons-wrapper__button-sign-up {
        width: calc(50% - 1.5px);
        height: 35px;

        cursor: pointer;

        background: #64C45C;
        border-bottom-left-radius: 9px;

        .button-sign-up__text {
          color: $main-typo-color;
          font-family: 'Saira', sans-serif;
          font-weight: bold;
          font-size: 16px;
        }
      }

      .buttons-wrapper__button-sign-in {
        width: calc(50% - 1.5px);
        height: 35px;

        cursor: pointer;

        background: #64C45C;
        border-bottom-right-radius: 9px;

        .button-sign-in__text {
          color: $main-typo-color;
          font-family: 'Saira', sans-serif;
          font-weight: bold;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
