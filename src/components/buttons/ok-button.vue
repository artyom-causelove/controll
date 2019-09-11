<template>
  <div id="ok-button" @click="$emit('click')">
    <image-box class="ok-button__image">
      <img src="@/assets/images/ok.png" alt="Ok">
    </image-box>
  </div>
</template>

<script>
export default {
  name: 'ok-button'
}
</script>

<style lang="scss" scoped>
  #ok-button {
    cursor: pointer;

    .ok-button__image {
      width: inherit;
      height: inherit;
    }
  }
</style>
