<template>
  <div id="app">
    <router-view />
    <img class="logo" src="./assets/cognizant_logo_white.png" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #00a7f6;
  height: 100vh;
}
.logo {
  position: fixed;
  bottom: 20px;
  max-width: 50vw;
  z-index: 999;
}
</style>
