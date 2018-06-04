<template>
  <swiper-slide class="p5bg" >
    <div class="ani p5-1" swiper-animate-effect="bounceInDown" swiper-animate-duration="0.1s" swiper-animate-delay="0.0s">
      <h3>健康体检，您想了解多少呢？</h3>          
    </div>
    <div class="clear"></div>
    <div class="ani p5-2" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">          
      <img src="/static/img/p5-1.png" />          
    </div>
    <div class="ani p5-3" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.4s">          
      <img src="/static/img/p5-2.png" />          
    </div>
    <div class="ani p5-4" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.6s">          
      <img src="/static/img/p5-3.png" />          
    </div>
    <div class="ani p5-5" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">          
      <img src="/static/img/p5-4.png" />          
    </div>
    <div class="ani p5-6" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="1.2s">          
      <img src="/static/img/p5-5.png" />          
    </div>
    <div class="clear"></div>
    <div class="ani p5-7" swiper-animate-effect="bounceInUp" swiper-animate-duration="0.5s" swiper-animate-delay="1.4s">
      <h3>您还会因体检不周而烦恼吗？</h3>          
    </div>
  </swiper-slide>
</template>
<script>
import { swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'sweiperSlide5',
  components: {
    swiperSlide
  }
}
</script>

<style lang="stylus">
.clear
  clear both
  overflow hidden
.p5bg
  background #fff url('static/img/bg_02.jpg') center center no-repeat
  background-size cover
  .p5-1,.p5-7
    h3
      font-size 48px
      color #013f7d
      margin 120px 0 40px 0
      text-align center
      font-weight 400
  .p5-7
    h3
      margin 110px 0 0 0
  .p5-2,.p5-3,.p5-4,.p5-5,.p5-6
    img
      margin 60px 0 10px 0 
      width 676px
      display block
  .p5-5,.p5-6
    img
      float right
      text-align right

</style>
