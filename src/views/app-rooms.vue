<template>
  <div id="app-rooms">
    <rectangle-button class="app-rooms__my-items-btn">
      <p class="my-items-btn__text">MY ITEMS</p>
      <image-box class="my-items-btn__image">
        <img src="@/assets/images/items.png" alt="Items image">
      </image-box>
    </rectangle-button>

    <circle-button class="app-rooms__add-room-btn"
      @click="addingRoom = true"
    >
      <template v-slot:inner>
        <p class="add-room-btn__inner-text">+</p>
      </template>

      <template v-slot:outer>
        <p class="add-room-btn__outer-text">ADD ROOM</p>
      </template>
    </circle-button>

    <room-changer class="app-room__room-changer disabled"></room-changer>

    <rectangle-button class="app-rooms__create-furn-btn disabled">
      <p class="create-furn-btn__text">
        CREATE FURNITURE
      </p>
      <svg class="create-furn-btn__icon" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11.5" cy="11.5" r="10.5" stroke="white" stroke-width="2"/>
        <path d="M11.4248 6.59082H11.4463C11.7399 6.59082 11.9906 6.69824 12.1982
        6.91309C12.4131 7.12077 12.5205 7.37142 12.5205 7.66504V7.67578L12.5635
        10.7051H15.6035C15.8971 10.7051 16.1478 10.8125 16.3555 11.0273C16.5703
        11.235 16.6777 11.4857 16.6777 11.7793C16.6777 12.0729 16.5703 12.3271
        16.3555 12.542C16.1478 12.7497 15.8971 12.8535 15.6035 12.8535H12.585L12.6172
        15.8936V15.9258C12.6172 16.2194 12.5098 16.4736 12.2949 16.6885C12.0872 16.8962
        11.8366 17 11.543 17C11.2493 17 10.9951 16.8962 10.7803 16.6885C10.5726 16.4736
        10.4688 16.2194 10.4688 15.9258L10.4365 12.8535H7.40723C7.11361 12.8535 6.85938
        12.7497 6.64453 12.542C6.43685 12.3271 6.33301 12.0729 6.33301 11.7793C6.33301
        11.4857 6.43685 11.235 6.64453 11.0273C6.85938 10.8125 7.11361 10.7051 7.40723
        10.7051H10.415L10.3721 7.69727V7.66504C10.3721 7.37142 10.4759 7.12077 10.6836
        6.91309C10.8913 6.7054 11.1383 6.59798 11.4248 6.59082Z" fill="white"/>
      </svg>
    </rectangle-button>

    <room-add-card class="app-rooms__room-adding-card"
      v-if="addingRoom"
      @cancel="addingRoom = false"
      @submit="addingRoom = false"
    >

    </room-add-card>
  </div>
</template>

<script>
import roomChanger from '@/components/room-changer'
import roomAddCard from '@/components/room-add-card'

export default {
  name: 'app-rooms',
  data () {
    return {
      addingRoom: false
    }
  },
  components: {
    roomChanger,
    roomAddCard
  }
}
</script>

<style lang="scss" scoped>
  #app-rooms {
    position: relative;

    background: $background;
    height: 100%;

    .app-rooms__my-items-btn {
      position: absolute;

      top: 5px;
      right: 5px;

      width: 113px;
      height: 41px;

      border-radius: 7px;
      background: $controll-background;
      box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);

      .my-items-btn__text {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: bold;
        color: $main-typo-color;
      }

      .my-items-btn__image {
        margin-left: 5px;

        height: 20px;
        width: 20px;

        transform: translateY(-1px);
      }
    }

    .app-rooms__add-room-btn {
      position: absolute;

      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      height: 162px;
      width: 130px;

      border-color: $controll-background;

      .add-room-btn__inner-text {
        margin: 0 auto;

        transform: translateY(5px);

        font-family: 'Manjari', sans-serif;
        font-size: 150px;
        color: $controll-background;
      }

      .add-room-btn__outer-text {
        font-family: 'Saira', sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: $controll-background;
      }
    }

    .app-rooms__create-furn-btn {
      position: absolute;

      bottom: 0;
      left: 0;

      width: 100%;
      height: 43px;

      background: $controll-background;

      .create-furn-btn__text {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: bold;
        color: $main-typo-color;
      }

      .create-furn-btn__icon {
        margin-left: 10px;
      }

      &.disabled {
        background: $disabled-controll-background;
      }
    }

    .app-room__room-changer {
      position: absolute;

      bottom: 50px;
      left: 50%;

      transform: translateX(-50%);

      width: 160px;
      height: 38px;
    }

    .app-rooms__room-adding-card {
      z-index: 1000;

      position: absolute;

      top: 50%;
      left: 50%;

      transform: translate(-50%, -55%);
    }
  }
</style>
