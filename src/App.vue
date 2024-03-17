<template>
  <MainPage />
</template>

<script>
  import windowHeight from './helpers/windowHeight';
  import windowWidth from './helpers/windowWidth';
  import diagonal from './helpers/diagonal';
  import MainPage from './views/MainPage.vue';

  export default {
    components: {
      MainPage
    },
    mounted() {
      windowHeight.init();
      windowHeight.addListener();
      windowWidth.init();
      windowWidth.addListener();
      diagonal.init();
      diagonal.addListener();
    }
  }
</script>
