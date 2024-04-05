<template>
  <div class="figure" :class="additionalClass">
    <div class="figure__shadow">
      <div class="figure__shadow-inner"></div>
    </div>
    <div class="figure__image">
      <div class="figure__image-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
    },
  },
  computed: {
    additionalClass() {
      if (!this.number) return "";

      return `figure--${this.number}`;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/functions";
@import "../styles/mixins";

.figure {
  position: absolute;
  opacity: 1;

  &.is--hidden .figure__image {
    opacity: 0;
  }

  .figure__image {
    opacity: 1;
    transition: opacity 0.5s 0.2s;
  }

  .figure__image,
  .figure__shadow,
  .figure__image-inner,
  .figure__shadow-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .figure__image-inner,
  .figure__shadow-inner {
    transform-origin: center;
    background-size: contain;
  }

  &.figure--1 {
    right: 24.5%;
    bottom: 16.5%;
    width: vheight(222);
    height: vheight(222);
    z-index: 3;

    @include narrow-landscape {
      width: sbig(222);
      height: sbig(222);
    }

    @include small-screen {
      top: 43.5%;
      right: auto;
      left: 12.8%;
      width: ssmall(50);
      height: ssmall(50);
    }

    .figure__image-inner {
      background-image: url("../assets/images/figure-2x1.png");
      transform: rotate(-30deg);

      @include retina {
        background-image: url("../assets/images/figure-2x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/figure-2x0.5.png");
        transform: rotate(-120deg);

        @include retina {
          background-image: url("../assets/images/figure-2x1.png");
        }
      }
    }

    .figure__shadow {
      left: 30%;
      top: 5%;
      filter: blur(2px);

      @include small-screen {
        left: 120%;
      }
    }

    .figure__shadow-inner {
      background-image: url("../assets/images/shadow-2x1.png");
      transform: rotate(-30deg);

      @include retina {
        background-image: url("../assets/images/shadow-2x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/shadow-2x0.5.png");
        transform: rotate(-120deg);

        @include retina {
          background-image: url("../assets/images/shadow-2x1.png");
        }
      }
    }
  }

  &.figure--2 {
    left: -4%;
    bottom: 28.9%;
    width: vheight(325);
    height: vheight(325);
    z-index: 4;

    @include narrow-landscape {
      width: sbig(325);
      height: sbig(325);
    }

    @include medium-screen {
      left: 10%;
      bottom: 50%;
    }

    @include small-screen {
      top: 50%;
      left: 12.18%;
      width: ssmall(73);
      height: ssmall(73);
    }

    .figure__image-inner {
      background-image: url("../assets/images/figure-3x1.png");
      transform: rotate(-120deg);

      @include retina {
        background-image: url("../assets/images/figure-3x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/figure-3x0.5.png");
        transform: rotate(101deg);

        @include retina {
          background-image: url("../assets/images/figure-3x1.png");
        }
      }
    }

    .figure__shadow {
      right: 30%;
      left: auto;
      top: 32%;
      filter: blur(8px);

      @include small-screen {
        top: 110%;
        right: 135%;
        filter: blur(16px);
      }
    }

    .figure__shadow-inner {
      background-image: url("../assets/images/shadow-3x1.png");
      transform: scale(1.1) rotate(-120deg);

      @include retina {
        background-image: url("../assets/images/shadow-3x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/shadow-3x0.5.png");
        transform: scale(1.1) rotate(101deg);

        @include retina {
          background-image: url("../assets/images/shadow-3x1.png");
        }
      }
    }
  }

  &.figure--3 {
    left: 0.88%;
    bottom: 1.18%;
    width: vheight(288);
    height: vheight(288);
    z-index: 3;

    @include narrow-landscape {
      width: sbig(288);
      height: sbig(288);
    }

    @include medium-screen {
      left: 25%;
      bottom: 15%;
    }

    @include small-screen {
      top: 73.8%;
      left: 36.88%;
      width: ssmall(65);
      height: ssmall(65);

      @include wide-mobile {
        left: 5%;
      }
    }

    .figure__image-inner {
      background-image: url("../assets/images/figure-4x1.png");
      transform: rotate(91deg);

      @include retina {
        background-image: url("../assets/images/figure-4x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/figure-4x0.5.png");
        transform: rotate(1deg);

        @include retina {
          background-image: url("../assets/images/figure-4x1.png");
        }
      }
    }

    .figure__shadow {
      right: 28%;
      left: auto;
      top: 34%;
      filter: blur(10px);

      @include small-screen {
        top: 130%;
        right: 120%;
        filter: blur(13px);
      }
    }

    .figure__shadow-inner {
      background-image: url("../assets/images/shadow-4x1.png");
      transform: rotate(91deg);

      @include retina {
        background-image: url("../assets/images/shadow-4x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/shadow-4x0.5.png");
        transform: rotate(1deg);

        @include retina {
          background-image: url("../assets/images/shadow-4x1.png");
        }
      }
    }
  }

  &.figure--4 {
    right: 30.9%;
    top: 18.8%;
    width: vheight(189);
    height: vheight(189);
    z-index: 3;

    @include narrow-landscape {
      width: sbig(189);
      height: sbig(189);
    }

    @include small-screen {
      top: 30.83%;
      right: auto;
      left: 9.69%;
      width: ssmall(36);
      height: ssmall(36);

      @include wide-mobile {
        left: 5%;
      }
    }

    .figure__image-inner {
      background-image: url("../assets/images/figure-5x1.png");
      transform: rotate(-48deg);

      @include retina {
        background-image: url("../assets/images/figure-5x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/figure-5x0.5.png");
        transform: rotate(-138deg);

        @include retina {
          background-image: url("../assets/images/figure-5x1.png");
        }
      }
    }

    .figure__shadow {
      right: -10%;
      left: auto;
      top: 3%;
      filter: blur(1px);

      @include small-screen {
        right: -30%;
        top: 10%;
        filter: blur(2px);
      }
    }

    .figure__shadow-inner {
      background-image: url("../assets/images/shadow-5x1.png");
      transform: scale(1.1) rotate(-48deg);

      @include retina {
        background-image: url("../assets/images/shadow-5x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/shadow-5x0.5.png");
        transform: scale(1.1) rotate(-138deg);

        @include retina {
          background-image: url("../assets/images/shadow-5x1.png");
        }
      }
    }
  }

  &.figure--5 {
    right: 1.58%;
    bottom: 19.19%;
    width: vheight(477);
    height: vheight(477);
    z-index: 5;

    @include narrow-landscape {
      width: sbig(477);
      height: sbig(477);
    }

    @include medium-screen {
      bottom: 27%;
    }

    @include small-screen {
      top: 19.67%;
      right: auto;
      left: 14.38%;
      width: ssmall(108);
      height: ssmall(108);

      @include wide-mobile {
        top: 10%;
      }
    }

    .figure__image-inner {
      background-image: url("../assets/images/figure-6x1.png");
      transform: rotate(12deg);

      @include retina {
        background-image: url("../assets/images/figure-6x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/figure-6x0.5.png");
        transform: rotate(-78deg);

        @include retina {
          background-image: url("../assets/images/figure-6x1.png");
        }
      }
    }

    .figure__shadow {
      right: -10%;
      left: auto;
      top: 22%;
      filter: blur(20px);

      @include small-screen {
        top: 120%;
        right: -40%;
        filter: blur(30px);
      }
    }

    .figure__shadow-inner {
      background-image: url("../assets/images/shadow-6x1.png");
      transform: scale(1.1) rotate(12deg);

      @include retina {
        background-image: url("../assets/images/shadow-6x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/shadow-6x0.5.png");
        transform: scale(1.1) rotate(-78deg);

        @include retina {
          background-image: url("../assets/images/shadow-6x1.png");
        }
      }
    }
  }

  &.figure--6 {
    right: 6.15%;
    bottom: 23.8%;
    width: vheight(350);
    height: vheight(350);
    z-index: 4;

    @include narrow-landscape {
      width: sbig(350);
      height: sbig(350);
    }

    @include small-screen {
      top: 15.67%;
      right: 25.62%;
      width: ssmall(79);
      height: ssmall(79);

      @include wide-mobile {
        right: 2%;
      }
    }

    .figure__image-inner {
      background-image: url("../assets/images/figure-7x1.png");
      transform: rotate(60deg);

      @include retina {
        background-image: url("../assets/images/figure-7x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/figure-7x0.5.png");
        transform: rotate(-30deg);

        @include retina {
          background-image: url("../assets/images/figure-7x1.png");
        }
      }
    }

    .figure__shadow {
      right: -14%;
      left: auto;
      top: 32%;
      filter: blur(8px);

      @include small-screen {
        right: -50%;
        top: 120%;
        filter: blur(15px);
      }
    }

    .figure__shadow-inner {
      background-image: url("../assets/images/shadow-7x1.png");
      transform: scale(1.1) rotate(60deg);

      @include retina {
        background-image: url("../assets/images/shadow-7x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/shadow-7x0.5.png");
        transform: scale(1.1) rotate(-30deg);

        @include retina {
          background-image: url("../assets/images/shadow-7x1.png");
        }
      }
    }
  }

  &.figure--7 {
    left: 17.52%;
    top: 5.58%;
    width: vheight(470);
    height: vheight(470);
    z-index: 5;

    @include narrow-landscape {
      width: sbig(470);
      height: sbig(470);
    }

    @include small-screen {
      top: 75.67%;
      left: auto;
      right: 13.44%;
      width: ssmall(106);
      height: ssmall(106);
    }

    .figure__image-inner {
      background-image: url("../assets/images/figure-8x1.png");
      transform: rotate(25deg);

      @include retina {
        background-image: url("../assets/images/figure-8x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/figure-8x0.5.png");
        transform: rotate(-65deg);

        @include retina {
          background-image: url("../assets/images/figure-8x1.png");
        }
      }
    }

    .figure__shadow {
      right: -12%;
      left: auto;
      top: 24%;
      filter: blur(18px);

      @include small-screen {
        top: 100%;
        filter: blur(22px);
      }
    }

    .figure__shadow-inner {
      background-image: url("../assets/images/shadow-8x1.png");
      transform: scale(1.1) rotate(25deg);

      @include retina {
        background-image: url("../assets/images/shadow-8x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/shadow-8x0.5.png");
        transform: scale(1.1) rotate(-65deg);

        @include retina {
          background-image: url("../assets/images/shadow-8x1.png");
        }
      }
    }
  }

  &.figure--8 {
    left: 44.24%;
    top: 27.62%;
    width: vheight(204);
    height: vheight(204);
    z-index: 3;

    @include narrow-landscape {
      width: sbig(204);
      height: sbig(204);
    }

    @include small-screen {
      top: 64.17%;
      left: auto;
      right: 19.06%;
      width: ssmall(46);
      height: ssmall(46);
    }

    .figure__image-inner {
      background-image: url("../assets/images/figure-6x1.png");
      transform: rotate(-197deg);

      @include retina {
        background-image: url("../assets/images/figure-6x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/figure-6x0.5.png");
        transform: rotate(72deg);

        @include retina {
          background-image: url("../assets/images/figure-6x1.png");
        }
      }
    }

    .figure__shadow {
      right: -7%;
      left: auto;
      top: 2%;
      filter: blur(1px);

      @include small-screen {
        right: -25%;
        top: 8%;
        filter: blur(2px);
      }
    }

    .figure__shadow-inner {
      background-image: url("../assets/images/shadow-6x1.png");
      transform: scale(1.1) rotate(-197deg);

      @include retina {
        background-image: url("../assets/images/shadow-6x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/shadow-6x0.5.png");
        transform: scale(1.1) rotate(72deg);

        @include retina {
          background-image: url("../assets/images/shadow-6x1.png");
        }
      }
    }
  }

  &.figure--9 {
    left: 44.24%;
    top: 27.62%;
    width: vheight(204);
    height: vheight(204);
    z-index: 3;

    @include narrow-landscape {
      width: sbig(204);
      height: sbig(204);
    }

    @include small-screen {
      top: 64.17%;
      left: auto;
      right: 19.06%;
      width: ssmall(46);
      height: ssmall(46);
    }

    .figure__image-inner {
      background-image: url("../assets/images/figure-1x1.png");
      transform: rotate(-197deg);

      @include retina {
        background-image: url("../assets/images/figure-1x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/figure-1x0.5.png");
        transform: rotate(72deg);

        @include retina {
          background-image: url("../assets/images/figure-1x1.png");
        }
      }
    }

    .figure__shadow {
      right: -7%;
      left: auto;
      top: 2%;
      filter: blur(1px);

      @include small-screen {
        right: -25%;
        top: 8%;
        filter: blur(2px);
      }
    }

    .figure__shadow-inner {
      background-image: url("../assets/images/shadow-1x1.png");
      transform: scale(1.1) rotate(-197deg);

      @include retina {
        background-image: url("../assets/images/shadow-1x2.png");
      }

      @include small-screen {
        background-image: url("../assets/images/shadow-1x0.5.png");
        transform: scale(1.1) rotate(72deg);

        @include retina {
          background-image: url("../assets/images/shadow-1x1.png");
        }
      }
    }
  }
}
</style>
