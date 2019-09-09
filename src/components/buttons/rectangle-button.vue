<template>
  <div id="rectangle-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rectangle-button'
}
</script>

<style lang="scss" scoped>
  #rectangle-button {
    display: flex;

    align-items: center;
    justify-content: center;

    overflow: hidden;

    cursor: pointer;
  }
</style>
