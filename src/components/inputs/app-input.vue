<template>
  <input id="app-input" :type="type" :placeholder="placeholder">
</template>

<script>
export default {
  props: {
    type: {
      default: 'text',
      type: String
    },
    placeholder: {
      default: '',
      type: String
    }
  },
  name: 'app-input'
}
</script>

<style lang="scss" scoped>
  #app-input {
    background: white;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.35);
    outline: none;
    border: none;
    border-radius: 35px;

    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: $placeholder-typo-color;
  }
</style>
