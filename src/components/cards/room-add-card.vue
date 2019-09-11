<template>
  <div id="room-add-card">
    <blank-card class="room-add-card__wrapper">
      <div class="wrapper__caption">
        <p class="caption__text">
          Room №1
        </p>

        <image-box class="caption__image">
          <img src="@/assets/images/edit.png" alt="Edit">
        </image-box>
      </div>

      <div class="wrapper__editors">
        <app-input class="editors__input" type="text" placeholder="Type"></app-input>
        <app-input class="editors__input" type="text" placeholder="Width"></app-input>
        <app-input class="editors__input" type="text" placeholder="Length"></app-input>
        <app-input class="editors__input" type="text" placeholder="Height"></app-input>

        <p class="editors__value">
          In meters
        </p>
      </div>

      <div class="wrapper__buttons">
        <cancel-button class="buttons__cancel"
          @click="$emit('cancelClick')"
        ></cancel-button>
        <ok-button class="buttons__ok"
          @click="$emit('submitClick')"
        >
        </ok-button>
      </div>
    </blank-card>
  </div>
</template>

<script>
import blankCard from '@/components/cards/blank-card'
import okButton from '@/components/buttons/ok-button'
import cancelButton from '@/components/buttons/cancel-button'

export default {
  name: 'room-add-card',
  components: {
    blankCard,
    okButton,
    cancelButton
  }
}
</script>

<style lang="scss" scoped>
  #room-add-card {
    height: 363px;
    width: 304px;

    .room-add-card__wrapper {
      .wrapper__caption {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 35px;

        .caption__text {
          color: $second-typo-color;
          font-family: 'Saira', sans-serif;
          font-size: 20px;
          font-weight: bold;
        }

        .caption__image {
          width: 21px;
          height: 21px;

          margin-left: 10px;
        }
      }

      .wrapper__editors {
        display: flex;
        flex-direction: column;

        padding: 0 10px;

        width: 100%;
        height: calc(100% - 95px);

        .editors__input {
          align-self: center;

          margin-bottom: 20px;

          height: 27px;
          width: 100%;

          &:nth-child(1) {
            margin-bottom: 50px;
            margin-top: 10px;
          }

          &:nth-child(4) {
            margin-bottom: 10px;
          }
        }

        .editors__value {
          align-self: flex-end;

          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          color: $placeholder-typo-color;
        }
      }

      .wrapper__buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 10px;

        width: 100%;
        height: 60px;

        .buttons__ok, .buttons__cancel {
          width: 48px;
          height: 48px;
        }
      }
    }
  }
</style>
