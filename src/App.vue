<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">

body {
  width: 100%;
  height: 100%;
  display: block;
  padding: 0;
  margin: 0;
  background: var(--color6);
}

div {
  display: block;
  padding: 0;
  margin: 0;
}


@font-face {
  font-family: 'Red Rose';
  src: url('./assets/fonts/RedRose-Regular.ttf');
}

@font-face {
  font-family: 'PT Serif';
  src: url('./assets/fonts/PTSerif-Regular.ttf');
}

</style>
