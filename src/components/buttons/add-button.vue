<template>
  <div id="add-button"
    @click="$emit('click')"
  >
    <p class="add-button__text">
      +
    </p>
  </div>
</template>

<script>
export default {
  name: 'add-button'
}
</script>

<style lang="scss" scoped>
#add-button {
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 50%;
  background: $controll-background;

  .add-button__text {
    font-family: 'Manjari', sans-serif;
    font-weight: bold;
    font-size: inherit;
    color: $main-typo-color;

    transform: translateY(2px);
  }
}
</style>
