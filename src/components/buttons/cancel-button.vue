<template>
  <div id="cancel-button" @click="$emit('click')">
    <image-box class="cancel-button__image">
      <img src="@/assets/images/no.png" alt="Ok">
    </image-box>
  </div>
</template>

<script>
export default {
  name: 'cancel-button'
}
</script>

<style lang="scss" scoped>
  #cancel-button {
    .cancel-button__image {
      width: inherit;
      height: inherit;
    }
  }
</style>
