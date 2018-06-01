<template>
  <div class="ciic-active">
    <i :class="[musicFlag?'music-open':'','music-icon']" @click="music"></i>
    <audio autoplay loop="loop" src="../../static/audio/music.mp3" ref="music" class="music" @click="first">
      你的浏览器不支持audio标签
    </audio>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="slid1">
          <img src="../../static/img/001.png" alt="" class="slid1-img1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">
          <div class="bottom-slid1">
            <p>
              <span  class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">健康知己</span>
              <span class="ani"  swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">中智相伴</span>
            </p>
            <img src="../../static/img/logo_1.png" alt="" class="slid1-img2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">            
          </div>
      </swiper-slide>
      <swiper-slide class="slid2">
          <img src="../../static/img/003.png" alt="" class="slid2-img1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">  
          <p class="slid2-p1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">员工的健康——公司的希望</p>
          <img class="slid2-img2 ani" src="../../static/img/02.png" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3" alt="">    
      </swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide class="slid5">
        <img class="slid5-img1" src="../../static/img/i_001.png" alt="">
        <p>丰富的体检套餐</p> 
        <p>Choices of Examination Package</p> 
      </swiper-slide>
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
  </div>
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
    right:0.6rem;
    top:0.6rem;
    width: 80px;
    height: 80px;
    display: block;
    z-index: 300;
    border-radius: 100%;  
  .music-open
    animation: rotated 3s infinite linear;  
  .music
    display:none;
  .swiper-container
    height 100%
  .slid1
    background:url('static/img/bg_01.jpg') center center no-repeat;
    background-size: cover;
    position relative
    .slid1-img1
      margin 76px 0 0 95px
      height 300px
      width 268px
    .bottom-slid1
      position absolute
      display flex
      align-items center
      justify-content center
      bottom 45px
      right 66px
      span
        display inline-block 
        color #013F7D
        font-size 36px
        margin-right 35px
        font-weight bold
      span:nth-of-type(1)
        margin-right 44px
      .slid1-img2
        display inline-block
        font-size 0
        margin-top -10px
        width 92px
        height 60px
  .slid2
    background:#F7B93F;
    background-size: cover;
    .slid2-img1
      margin 120px 0 0 500px
      height 188px
      width 170px
    .slid2-p1
      font-size 36px
      color #fff
      text-align center
    .slid2-img2
      float right
      margin-top 40px
      height 542px
      width 638px  
  .slid5
    .slid5-img1
      width 250px
      height 276px  
      float right  
      margin-right 26px
    p:nth-of-type(1)
      margin-top 144px
      font-size 48px
      color #013F7D
</style>
