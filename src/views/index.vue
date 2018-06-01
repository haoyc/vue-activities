<template>
  <div class="ciic-active">
    <i :class="[musicFlag?'music-open':'','music-icon']" @click="music"></i>
    <audio autoplay loop="loop" src="../../static/audio/music.mp3" ref="music" class="music" @click="first">
      你的浏览器不支持audio标签
    </audio>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide1></swiper-slide1>
      <swiper-slide2></swiper-slide2>
      <swiper-slide3></swiper-slide3>
      <swiper-slide4></swiper-slide4>
      <swiper-slide5></swiper-slide5>
      <swiper-slide6></swiper-slide6>
      <swiper-slide11></swiper-slide11>
      
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {  swiperSlide1, swiperSlide2, swiperSlide3, swiperSlide4, swiperSlide5, swiperSlide6,  swiperSlide11} from './../components/swipers/index'
import 'script-loader!../assets/js/swiper.animate1.0.3.min'
export default {
  name: 'ciicActive',
  components: {
    swiper,
    swiperSlide1,
    swiperSlide2,
    swiperSlide3,
    swiperSlide4,
    swiperSlide5,
    swiperSlide6,
    swiperSlide11
  },
  data () {
    return {
      musicFlag: true,
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
    document.addEventListener("WeixinJSBridgeReady", () => {  
      this.$refs.music.play()
    }, false);  
  },
  methods: {
    first() {
      this.$refs.music.play()
    },
    music() {
      this.musicFlag = !this.musicFlag
      if (this.musicFlag) {
        this.$refs.music.play()
      } else {
        this.$refs.music.pause()
      }
      
    }
  }
}
</script>

<style lang="stylus">
.ciic-active
  height 100%
  position relative
  @keyframes rotated
      0%
        transform:rotate(0deg);
      100%
        transform:rotate(360deg);
  .music-icon
    background:#8f8e8e url('static/img/music-icon.png') center center no-repeat;
    background-size: 60% 60%;
    position:absolute;
    overflow:hidden;
    right:10px;
    top:10px;
    width: 60px;
    height: 60px;
    display: block;
    z-index: 300;
    border-radius: 100%;  
  .music-open
    animation: rotated 3s infinite linear;  
  .music
    display:none;
  .swiper-container
    height 100%
</style>
