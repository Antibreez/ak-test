<template>
  <Header />
  <main>
    <MainScreen/>
    <Stub />
    <CatScreen />
    <Stub />
    <Stub />
  </main>
</template>

<script>
  import MainScreen from '../components/MainScreen.vue';
  import CatScreen from '../components/CatScreen.vue';
  import Header from '../components/Header.vue';
  import Stub from '../components/Stub.vue';

  export default {
    components: {
      Header,
      MainScreen,
      CatScreen,
      Stub
    }
  }
</script>

<style scoped lang="scss">
</style>
