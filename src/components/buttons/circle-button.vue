<template>
  <div id="circle-button" @click="$emit('click')">
    <div ref="circle" class="circle-button__circle">
      <slot name="inner"></slot>
    </div>

    <div class="circle-button__desc">
      <slot name="outer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'circle-button',
  mounted () {
    this.$refs.circle.style.height = this.$refs.circle.offsetWidth + 'px'
  }
}
</script>

<style lang="scss" scoped>
  #circle-button {
    display: flex;

    align-items: center;
    flex-direction: column;

    overflow: hidden;

    .circle-button__circle {
      display: flex;

      width: 100%;

      overflow: hidden;

      align-items: center;

      border: 6px solid;
      border-color: inherit;
      border-radius: 50%;
    }
  }
</style>
