<template>
  <swiper-slide class="slid2">
      <img src="../../../static/img/003.png" alt="" class="slid2-img1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">  
      <p class="slid2-p1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">员工的健康——公司的希望</p>
      <img class="slid2-img2 ani" src="../../../static/img/02.png" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3" alt="">    
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'sweiperSlide2',
  components: {
    swiperSlide
  }
}
</script>

<style lang="stylus">
.slid2
  background:#F7B93F;
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
</style>
