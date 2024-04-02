<template>
  <section ref="catScreen" class="cat-screen">
    <div class="cat-screen__cat-image"></div>
    <div class="cat-screen__figures-path">
      <svg width="1495" height="520" viewBox="0 0 1495 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="motionPath" d="M790.5 265C849 223.5 1066.95 0.500072 1235 0.5C1453.5 0.499906 1493.5 97 1494.5 222.5C1495.66 368.5 1283.5 465.5 1111.5 437.5C939.5 409.5 557.5 312 504 292C450.5 272 249 195 136 225.5C23 256 -3.34159e-05 309.5 1.49997 356C2.99997 402.5 141 546.5 349 514.5C557 482.5 660 364.785 790.5 265Z" stroke="black"/>
      </svg>
    </div>
    <div class="cat-screen__shadows-path">
      <svg width="1558" height="327" viewBox="0 0 1558 327" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="shadowPath" d="M621 301.5C790 324.5 1218.5 327.5 1274 325.5C1472 314 1557.5 243.5 1557.5 214C1557.5 184.5 1537.5 169.5 1451 134C1364.5 98.4998 1246.5 80.4999 1127 50.9999C1007.5 21.4999 435.801 -4.51607 312 1.99991C188.5 8.50003 -6.09426 16.3704 1.49995 93.9999C5.99998 140 40.5 151 94 180.5C147.5 210 452 278.5 621 301.5Z" stroke="black"/>
</svg>


    </div>
    <div>
      <Figure
        v-for="(figure, index) in figuresArray"
        :key="index"
        :number="figure"
      />
    </div>
    <div>
      <div
        v-for="(item, index) in figuresArray"
        :key="index"
        class="cat-screen__shadow"
      />
    </div>
  </section>
</template>

<script>
import Figure from './Figure.vue';
import CatAnimation from '../helpers/catAnimations';

export default {
  components: {
    Figure
  },
  data() {
    return {
      figuresArray: [2, 3, 7, 9, 5, 2, 7, 4, 9, 2, 3, 5],
    }
  },
  mounted() {
    const screen = this.$refs.catScreen;
    const figures = screen.querySelectorAll('.figure');
    const shadows = screen.querySelectorAll('.cat-screen__shadow');

    const figuresAnimation = new CatAnimation(figures, '#motionPath');
    const shadowsAnimation = new CatAnimation(shadows, '#shadowPath');

    figuresAnimation.init();
    shadowsAnimation.init();

    const debounce = (func, timeout = 400) => {
      let timer;
      let width;
      let height;

      return (...args) => {
        if (!width) width = screen.getBoundingClientRect().width;
        if (!height) height = screen.getBoundingClientRect().height;

        clearTimeout(timer);
        timer = setTimeout(() => {

          // Перезапускаем анимацию только при изменении размеров контейнера
          if (screen.getBoundingClientRect().width !== width || screen.getBoundingClientRect().height !== height) {
            func.apply(this, args);
          }
          width = null;
          height = null;
        }, timeout);
      };
    }

    const onResize = debounce(() => {
      figuresAnimation.killScrollTrigger();
      shadowsAnimation.killScrollTrigger();
      figuresAnimation.restart();
      shadowsAnimation.restart();
    });

    window.addEventListener("resize", onResize);
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/functions';
@import '../styles/mixins';

.cat-screen {
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  max-width: calc(var(--vw, 1vw) * 100);
  background: #EAF0EE;
  overflow: hidden;

  @include medium-screen {
    height: auto;
    aspect-ratio: 320 / 415;
  }

  @include small-screen {
    height: auto;
    aspect-ratio: 320 / 415;
  }

  .figure {
    position: relative;
    top: unset;
    left: unset;
    right: unset;
    bottom: unset;
    width: vheight(324);
    height: vheight(324);

    &:nth-child(n) {
      z-index: 3;
    }

    @include medium-screen {
      width: sbig(324);
      height: sbig(324);
    }

    @include small-screen {
      width: ssmall(79);
      height: ssmall(79);
    }

    &:nth-child(1) {
      .figure__image-inner {
        transform: rotate(50deg);
      }
    }

    &:nth-child(2) {
      .figure__image-inner {
        transform: rotate(80deg);
      }
    }

    &:nth-child(6) {
      .figure__image-inner {
        transform: rotate(-50deg);
      }
    }

    &:nth-child(7) {
      .figure__image-inner {
        transform: rotate(-160deg);
      }
    }

    &:nth-child(9) {
      .figure__image-inner {
        transform: rotate(130deg);
      }
    }

    .figure__shadow {
      display: none;
    }
  }

  &__cat-image {
    position: absolute;
    top: vheight(84);
    left: 50%;
    height: vheight(991);
    aspect-ratio: 823 / 991;
    background-image: url('../assets/images/cat-imagex1.png');
    background-size: contain;
    transform: translateX(-50%);
    z-index: 3;

    @include retina {
      background-image: url('../assets/images/cat-imagex2.png');
    }

    @include medium-screen {
      height: sbig(1500);
      top: 50%;
      transform: translate(-50%, -50%);
    }

    @include small-screen {
      height: ssmall(276);
      aspect-ratio: 229 / 276;
      background-image: url('../assets/images/cat-imagex0.5.png');
      top: 50%;
      left: auto;
      right: ssmall(-11);
      transform: translate(0, calc(-50% - ssmall(12)));


      @include retina {
        background-image: url('../assets/images/cat-imagex1.png');
      }
    }
  }

  &__figures-path {
    position: absolute;
    top: vheight(318);
    left: 50%;
    height: vheight(520);
    width: vheight(1495);
    transform: translateX(-50%);

    @include medium-screen {
      top: 50%;
      height: sbig(624);
      width: sbig(1794);
      transform: translate(-50%, -50%);
    }

    @include small-screen {
      left: ssmall(9);
      height: ssmall(176);
      width: ssmall(394);
      top: 50%;
      transform: translate(0, calc(-50% - ssmall(10)));
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      visibility: hidden;
    }
  }

  &__shadows-path {
    position: absolute;
    top: vheight(774);
    left: 50%;
    height: vheight(322);
    width: vheight(1449);
    transform: translateX(-50%);

    @include medium-screen {
      top: 50%;
      width: sbig(1739);
      height: sbig(386);
      transform: translate(-50%, 100%);
    }

    @include small-screen {
      top: 50%;
      left: ssmall(9);
      width: ssmall(382);
      height: ssmall(85);
      transform: translate(0, 45%);
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      visibility: hidden;
    }
  }

  &__shadow {
    width: vheight(455);
    height: vheight(88);
    background-image: url('../assets/images/shadow.svg');
    background-size: contain;
    background-repeat: no-repeat;

    @include medium-screen {
      width: sbig(445);
      height: sbig(88);
    }

    @include small-screen {
      width: ssmall(112);
      height: ssmall(22);
    }
  }
}
</style>
