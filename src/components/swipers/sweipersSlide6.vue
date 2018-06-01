<template>
  <swiper-slide class="slid6">
    <img class="slid5-img1" src="../../../static/img/i_001.png" alt="">
    <p>丰富的体检套餐</p> 
    <p>Choices of Examination Package</p> 
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'weipersSlide5',
  components: {
    swiperSlide
  }
}
</script>

<style lang="stylus">
.slid6
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
