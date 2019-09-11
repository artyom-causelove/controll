<template>
  <div id="blank-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'blank-card'
}
</script>

<style lang="scss" scoped>
  #blank-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 9px;

    background: white;
    box-shadow: 0 0 7px rgba(0, 0, 0, .25);
  }
</style>
