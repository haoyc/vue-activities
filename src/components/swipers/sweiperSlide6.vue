<template>
  <swiper-slide class="slid6">
    <div class="clearfix">
      <img class="slid6-img1 ani" src="../../../static/img/i_001.png" alt=""  swiper-animate-effect="flip" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">
      <div class="slid6-left">
        <p class="slid6-p1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">丰富的体检套餐</p> 
        <p class="slid6-p2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">Choices of Examination Package</p> 
      </div>
    </div>
    <div class="slid6-say ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">
      <div class="slid6-name">
        <img class="slid6-img2" src="../../../static/img/m_01.png" alt="">
        <div>小王</div>
      </div>
      <img class="slid6-img3" src="../../../static/img/05_y.png" alt="">
    </div>
    <div class="slid6-say ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">
      <img class="slid6-img3 img3-hg" src="../../../static/img/05_b.png" alt="">    
      <div class="slid6-name">
        <img class="slid6-img2" src="../../../static/img/m_02.png" alt="">
        <div>HR</div>
      </div> 
    </div>
    <p class="slid6-p3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">不必再劳心，选择更多样、更全面，体检套餐定制化。中智安心体检可根据您的年龄、职业、性别、预算，为您定制可灵活组合的体检方案。</p>
    <p class="slid6-p3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3">Hassle free. Diversified options，more comprehensive customised physical examination solutions for you.</br>Cosy Health Examination can customise comprehensive and flexible physical check solutions for you base on your age，occupation, gender，and your budget.</p>
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'weiperSlide6',
  components: {
    swiperSlide
  }
}
</script>

<style lang="stylus">
.slid6
  .slid6-img1
    width 250px
    height 276px  
    float right  
    margin-right 26px
  .slid6-left
    float left
    margin 144px 0 0 10px
    .slid6-p1
      font-size 48px
      color clan
    .slid6-p2
      font-size 12px
      margin-top -24px
      font-weight bold
      color chui
  .slid6-say
    display flex
    margin 30px 0 0 40px
    align-items center
    .slid6-name
      display flex
      align-items center
      margin-left 10px
      flex-direction column
      .slid6-img2
        width 112px
        height 112px
      div
        line-height 40px
        color chui
    .slid6-img3
      width 534px
      height 146px
      margin-left 10px
    .img3-hg
      height 176px
  .slid6-p3
    margin 60px auto 
    width 640px
    font-size 24px
    line-height 40px
    font-style: italic
    color chui
    word-break: break-word;
</style>
