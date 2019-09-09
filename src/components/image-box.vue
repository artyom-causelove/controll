<template>
  <div id="image-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'image-box'
}
</script>

<style lang="scss" scoped>
  #image-box {
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;

      height: 100%;
      width: 100%;

      transform: translate(-50%, -50%);

      object-fit: cover;
    }
  }
</style>
