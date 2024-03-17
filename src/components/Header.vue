<template>
  <header>
    <button class="burger" aria-label="Меню">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/functions';
@import '../styles/mixins';

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: sbig(120);
  background-color: #333333;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: sbig(20) sbig(42);
  box-sizing: border-box;

  @include small-screen {
    height: ssmall(40);
    padding: ssmall(5) ssmall(16);
  }
}

.burger {
  background: transparent;
  border: none;
  padding: 0;

  &:hover {
    cursor: pointer;

    span {
      &:first-child {
        transform: translateY(-50%);
      }

      &:nth-child(2) {
        transform: scaleX(0.8);
      }

      &:last-child {
        transform: translateY(50%);
      }
    }
  }

  span {
    display: block;
    width: sbig(66);
    height: sbig(7);
    background: #fff;
    transition: transform 0.3s;
    transform-origin: center;

    &:not(:last-child) {
      margin-bottom: sbig(9);
    }

    @include small-screen {
      width: ssmall(28);
      height: ssmall(5);

      &:not(:last-child) {
        margin-bottom: small(6.5);
      }
    }
  }
}
</style>
