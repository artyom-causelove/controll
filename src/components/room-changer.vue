<template>
  <div id="room-changer">
    <triangle-button class="room-changer__back-btn"></triangle-button>
    <p class="room-changer__target-room-name">NONE</p>
    <triangle-button class="room-changer__next-btn"></triangle-button>
  </div>
</template>

<script>
import triangleButton from '@/components/buttons/triangle-button'

export default {
  name: 'room-changer',
  components: {
    triangleButton
  }
}
</script>

<style lang="scss" scoped>
  #room-changer {
    display: flex;

    justify-content: space-between;
    align-items: center;

    .room-changer__back-btn {
      border-right-color: $controll-background;
      border-width: 16px;
      border-right-width: 27px;
    }

    .room-changer__target-room-name {
      font-family: 'Saira', sans-serif;
      font-weight: bold;
      font-size: 20px;
      color: $controll-background;
    }

    .room-changer__next-btn {
      border-left-color: $controll-background;
      border-width: 16px;
      border-left-width: 27px;
    }

    &.disabled {
      .room-changer__back-btn {
        border-right-color: $disabled-controll-background;
      }

      .room-changer__next-btn {
        border-left-color: $disabled-controll-background;
      }

      .room-changer__target-room-name {
        color: $disabled-controll-background;
      }
    }
  }
</style>
