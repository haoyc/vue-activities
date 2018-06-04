<template>
 <swiper-slide class="p10bg" >
    <div class="ani p10-1" swiper-animate-effect="bounceInDown" swiper-animate-duration="0.1s" swiper-animate-delay="0.0s">
      <h3>高效的系统平台</h3>
      <p>Efficient Platform</p>
    </div>
    <div class="clear"></div>
    <div class="p10-2">
      <div class="ani p10-3" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">          
        <img src="/static/img/p10-_05.jpg" />          
      </div>
      <div class="ani p10-3" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">          
        <img src="/static/img/p10-_08.jpg" />          
      </div>
      <div class="ani p10-3" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">          
        <img src="/static/img/p10-_10.jpg" />          
      </div>
    </div>    
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'weiperSlide8',
  components: {
    swiperSlide
  }
}
</script>

<style lang="stylus">
.clear
  clear both
  overflow hidden
.p10bg
  background #fff url('static/img/p10-_01.jpg') left top no-repeat
  background-size 40%
  .p10-1
    h3
      font-size 48px
      color clan
      margin 100px 60px 0 0
      text-align right 
      font-weight 400
    p
      font-size 28px
      color chui
      margin 12px 60px 20px 0
      text-align right
  .p10-2
    width 100%
    padding 0 30px
    box-sizing border-box
  .p10-3
      img
        margin 50px auto 0 auto 
        width 100%
        height auto
        display block
</style>
