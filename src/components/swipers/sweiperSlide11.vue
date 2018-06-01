<template>
  <swiper-slide class="slid11"> 
    <p class="slid11-p1 ani" swiper-animate-effect="zoomInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">体检也能省心又省力吗？</p>
    <p class="ani" swiper-animate-effect="zoomInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">我们愿意给您满意的答案。</p>
    <p class="slid11-p3 ani" swiper-animate-effect="zoomInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">欲知详情，请咨询您的客户经理</p>
    <p class="slid11-p4 ani" swiper-animate-effect="zoomInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.3"><span class="slid11-span2">或垂询：</span><span class="slid11-span1">021-339702548</br><span>400 889 4545</span></span></p>
    <p class="slid11-p5 ani" swiper-animate-effect="zoomInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">中智安心体检</p>
    <p class="ani" swiper-animate-effect="zoomInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">提供给您实实在在的定制服务!</p>
    <p class="slid11-p6 ani" swiper-animate-effect="zoomInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.3"><span>健康知己</span>中智相伴</p>    
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'sweiperSlide11',
  components: {
    swiperSlide
  }
}
</script>

<style lang="stylus">
.slid11
  background:#F7B93F url('static/img/004.png') 200% 40% no-repeat;
  background-size 65%
  p
    color cbai
    margin-left 90px
    font-size 24px
  .slid11-p1
    margin-top 336px
  .slid11-p3
    margin-top 60px
  .slid11-p4
    display flex
    .slid11-span1
      font-size 40px
    .slid11-span2
      margin-top 5px
  .slid11-p5
    margin-top 46px
  .slid11-p6
    margin-top 80px
    font-size 48px
    span 
      margin-right 40px
    
</style>
