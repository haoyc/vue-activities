<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <div class="ani slid1" swiper-animate-effect="bounce" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">
        I'm Slide 1
      </div>
      <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">
        I'm Slide 111
      </div>
      <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">
        I'm Slide 1111
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
        I'm Slide 2
      </div>
      <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
        I'm Slide 3
      </div>
    </swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <swiper-slide>I'm Slide 8</swiper-slide>
    <swiper-slide>I'm Slide 9</swiper-slide>
    <swiper-slide>I'm Slide 10</swiper-slide>
    <!-- Optional controls -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'script-loader!../assets/js/swiper.animate1.0.3.min'
export default {
  name: 'ciicActive',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      isTwo: false,
      swiperOption: {
        direction: 'vertical',
        on: {
          init: function () {
            swiperAnimateCache(this)
            swiperAnimate(this)
          },
          slideChangeTransitionEnd: function () {
            swiperAnimate(this)
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // this.swiper.slideTo()
  },
  methods: {
  }
}
</script>

<style lang="stylus">
  .swiper-container
    height 100%
  .slid1
    font-size 18px
</style>
