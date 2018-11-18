<template>
  <div id="app">
    <router-view />
    <img class="logo" src="./assets/cognizant_logo_white.png" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "TT Norms";
  font-weight: 500;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #00a7f6;
  height: 100vh;
}
@font-face {
  font-family: "TT Norms";
  src: url("./assets/fonts/hinted-TTNorms-Medium.eot");
  src: local("TT Norms Medium"), local("TTNorms-Medium"),
    url("./assets/fonts/hinted-TTNorms-Medium.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/hinted-TTNorms-Medium.woff2") format("woff2"),
    url("./assets/fonts/hinted-TTNorms-Medium.woff") format("woff"),
    url("./assets/fonts/hinted-TTNorms-Medium.ttf") format("truetype"),
    url("./assets/fonts/hinted-TTNorms-Medium.svg#TTNorms-Medium") format("svg");
  font-weight: 500;
  font-style: normal;
}
.logo {
  position: fixed;
  bottom: 20px;
  max-width: 50vw;
  z-index: 999;
}
</style>
