<template>
  <div id="items-card">
    <blank-card class="items-card__card">
      <div class="card__wrapper">
        <p class="wrapper__no-items-text"
          v-if="!hasItems"
        >
          You do not have items
        </p>

        <div class="wrapper__items">

        </div>

        <div class="wrapper__buttons">
          <add-button class="buttons__add-button"
            @click="$emit('addClick')"
          ></add-button>
          <delete-button class="buttons__delete-button"
            @click="$emit('deleteClick')"
          ></delete-button>
          <ok-button class="buttons__ok-button"
            @click="$emit('submitClick')"
          ></ok-button>
        </div>
      </div>
    </blank-card>
  </div>
</template>

<script>
import blankCard from '@/components/cards/blank-card'
import addButton from '@/components/buttons/add-button'
import okButton from '@/components/buttons/ok-button'
import deleteButton from '@/components/buttons/delete-button'

export default {
  name: 'items-card',
  data () {
    return {
      hasItems: false
    }
  },
  components: {
    blankCard,
    addButton,
    okButton,
    deleteButton
  }
}
</script>

<style lang="scss" scoped>
#items-card {
  position: relative;

  height: 369px;
  width: 304px;

  .items-card__card {
    width: 100%;
    height: 100%;

    .card__wrapper {
      display: flex;

      flex-direction: column;

      width: 100%;
      height: 100%;

      padding: 10px;

      .wrapper__no-items-text {
        position: absolute;

        top: 30px;
        left: 50%;

        width: 100%;
        height: max-content;

        transform: translateX(-50%);

        text-align: center;
        color: $placeholder-typo-color;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
      }

      .wrapper__items {
        width: 100%;
        height: calc(100% - 60px);
      }

      .wrapper__buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 10px;

        width: 100%;
        height: 60px;

        .buttons__ok-button {
          width: 48px;
          height: 48px;

        }

        .buttons__add-button {
          width: 48px;
          height: 48px;

          font-size: 53px;
        }

        .buttons__delete-button {
          width: 48px;
          height: 48px;

          border-radius: 50%;
        }
      }
    }
  }
}
</style>
