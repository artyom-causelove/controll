<template>
  <div id="error-notifi">
    <slot></slot>

    <image-box class="error-notifi__button-cancel"
      @click="$emit('cancelClick')"
    >
      <img class="button-cancel__image" src="@/assets/images/cross.png" alt="Cancel">
    </image-box>
  </div>
</template>

<script>
export default {
  name: 'error-notifi'
}
</script>

<style lang="scss" scoped>
#error-notifi {
  position: relative;

  display: flex;
  
  justify-content: center;
  align-items: center;

  background: rgba(166, 0, 0, .59);

  .error-notifi__button-cancel {
    position: absolute;

    top: 0;
    right: 0;

    width: 27px;
    height: 27px;

    cursor: pointer;
  }
}
</style>