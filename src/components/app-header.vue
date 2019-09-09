<template>
  <div id="app-header">
    <p class="app-header__logo">
      Controll
    </p>

    <image-box class="app-header__profile-btn">
      <img class="image-box__image" src="@/assets/images/profile.png" alt="Profile Image">
    </image-box>

  </div>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss" scoped>
  #app-header {
    z-index: 1000;

    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    height: 40px;
    width: 100%;

    background: $controll-background;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);

    .app-header__logo {
      margin-left: 50%;

      transform: translateX(-50%);

      font-family: 'Saira', sans-serif;
      font-weight: bold;
      font-size: 20px;
      color: $main-typo-color;
    }

    .app-header__profile-btn {
      height: 30px;
      width: 30px;

      margin-left: auto;
      margin-right: 5px;
    }
  }
</style>
