<template>
  <swiper-slide class="slid1">
    <img src="../../../static/img/001.png" alt="" class="slid1-img1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">
    <div class="bottom-slid1">
      <p>
        <span  class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">健康知己</span>
        <span class="ani"  swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">中智相伴</span>
      </p>
      <img src="../../../static/img/logo_1.png" alt="" class="slid1-img2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">            
    </div>
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'sweipersSlide1',
  components: {
    swiperSlide
  }
}
</script>

<style lang="stylus">
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
</style>
