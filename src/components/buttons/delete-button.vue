<template>
  <div id="delete-button"
    @click="$emit('click')"
  >
    <image-box class="delete-button__image">
      <img src="@/assets/images/delete.png">
    </image-box>
  </div>
</template>

<script>
export default {
  name: 'delete-button'
}
</script>

<style lang="scss" scoped>
#delete-button {
  display: flex;

  justify-content: center;
  align-items: center;

  background: $delete-background;
  border-radius: 5px;

  .delete-button__image {
    width: 70%;
    height: 70%;
  }
}
</style>
