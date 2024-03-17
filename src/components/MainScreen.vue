<template>
  <section ref="mainScreen" class="main-screen">
    <div class="main-screen__inner">
      <Figure
        v-for="(number, index) in figuresArray"
        :key="index"
        :number="number"
      />
      <div class="title-word title-word--left">
        <div class="title-word__inner"><img src="../assets/images/bit.svg"></div>
      </div>
      <div class="title-word title-word--right">
        <div class="title-word__inner"><img src="../assets/images/block.svg"></div>
      </div>
    </div>
    <div class="main-screen__bottom">
      <p class="main-screen__desc">press any key to continue</p>
      <nav class="main-screen__nav">
        <ul class="main-screen__nav-list">
          <li class="main-screen__nav-item">
            <a href="#" class="main-screen__nav-link">graphic and sound</a>
          </li>
          <li class="main-screen__nav-item">
            <a href="#" class="main-screen__nav-link">discussion</a>
          </li>
          <li class="main-screen__nav-item">
            <a href="#" class="main-screen__nav-link">post your works</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import Figure from './Figure.vue';
import { getShuffledNumbersArray } from '../helpers/utils';
import gsap from 'gsap';

export default {
  components: {
    Figure
  },
  data() {
    return {
      figuresAmount: 8
    }
  },
  computed: {
    figuresArray() {
      return getShuffledNumbersArray(this.figuresAmount);
    }
  },
  mounted() {
    const figures = this.$refs.mainScreen.querySelectorAll('.figure');
    const wordLeft = this.$refs.mainScreen.querySelector('.title-word--left');
    const wordRight = this.$refs.mainScreen.querySelector('.title-word--right');

    const timeline = gsap.timeline({delay: 0.5});

    figures.forEach((figure) => {
      timeline.from(figure, {
        duration: 0.5,
        yPercent: -50,
        opacity: 0,
      }, '-=0.4')
    })

    const trLeft = window.innerWidth < 768 && window.innerHeight > window.innerWidth
      ? 'translate(100vh, -100vh)'
      : 'translate(-100vw, 100vh)';

    const trRight = window.innerWidth < 768 && window.innerHeight > window.innerWidth
      ? 'translate(-100vh, 100vh)'
      : 'translate(100vw, -100vh)';

    timeline
      .from(wordLeft, {
        transform: trLeft,
        ease: 'power4.out',
        duration: 1.1,
      }, 'word')
      .from(wordRight, {
        transform: trRight,
        ease: 'power4.out',
        duration: 1.1,
      }, 'word')
  }
}
</script>

<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/functions';
@import '../styles/mixins';

.main-screen {
  position: relative;
  min-height: calc(var(--vh, 1vh) * 100);
  background: #EAF0EE;
  overflow: hidden;

  @include small-screen {
    height: auto;
  }

  &__inner {
    @include small-screen {
      position: relative;
      height: 100vh;
    }
  }

  &__bottom {
    font-family: 'TokeelyBrookings';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0 sbig(40) 3.36vh;
    box-sizing: border-box;

    @include small-screen {
      position: static;
      padding: ssmall(12) ssmall(48) ssmall(24);
    }
  }

  &__desc {
    font-size: sbig(48);
    line-height: 56%;
    color: #ADAEAE;
    text-align: center;
    margin: 0 auto 6.3vh;
    letter-spacing: -0.12rem;
    width: max-content;

    @include small-screen {
      font-size: ssmall(16);
      letter-spacing: -0.06rem;
      margin-bottom: ssmall(30);
      text-align: left;
      width: auto;
    }
  }

  &__nav {
    &-list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: center;
      gap: sbig(309);

      @include small-screen {
        flex-direction: column;
        gap: ssmall(24);
      }
    }

    &-link {
      font-size: sbig(27);
      line-height: 160%;
      color: #292929;
      text-decoration: underline;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }

      @include small-screen {
        font-size: ssmall(18);
      }
    }
  }
}

.title-word {
  position: absolute;
  z-index: 2;

  img {
    height: vheight(241);
    transform: rotate(calc(var(--vd, 0rad) * -1));

    @include narrow-landscape {
      height: sbig(241);
    }

    @include small-screen {
      height: ssmall(47);
      transform: rotate(-45deg);

      @include narrow-mobile {
        height: ssmall(40);
      }
    }
  }

  &--left {
    bottom: 13.37%;
    right: 50%;

    @include narrow-landscape {
      right: auto;
      left: 4.22%;
    }

    @media (min-aspect-ratio: 1920 / 1065) {
      bottom: 20%;
    }

    @include extra-landscape {
      bottom: 25%;
    }

    @include medium-screen {
      bottom: 25%;
    }

    @include small-screen {
      top: 44.17%;
      left: auto;
      right: 7.81%;

      @include narrow-mobile {
        right: 20%;
      }
    }

    .title-word__inner {
      transform: translateX(-27%);

      @include narrow-landscape {
        transform: none;
      }
    }

    img {
      transform-origin: top left;
    }
  }

  &--right {
    left: 50%;
    top: 9.03%;

    @include narrow-landscape {
      left: auto;
      right: 1.35%;
    }

    @include extra-landscape {
      top: 17%;
    }

    @include medium-screen {
      top: 20%;
    }

    @include small-screen {
      top: 43.33%;
      right: 16.56%;

      @include narrow-mobile {
        right: 25%;
      }
    }

    .title-word__inner {
      transform: translateX(-27%);

      @include narrow-landscape {
        transform: none;
      }
    }

    img {
      transform-origin: bottom right;
    }
  }
}
</style>
