<template>
  <swiper-slide class="slid7">
    <div class="clearfix">
      <div class="slid7-left">
        <p class="slid7-p1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">丰富的体检套餐</p> 
        <p class="slid7-p2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">Selected Examination Organizations</p> 
      </div>
    </div>
    <div class="slid7-say ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
      <div class="slid7-name">
        <img class="slid7-img2" src="../../../static/img/m_05.png" alt="">
        <div>小王</div>
      </div>
      <img class="slid7-img3" src="../../../static/img/06_y.png" alt="">
    </div>
    <div class="slid7-say ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
      <img class="slid7-img3 img3-hg" src="../../../static/img/06_b.png" alt="">    
      <div class="slid7-name">
        <img class="slid7-img2" src="../../../static/img/m_02.png" alt="">
        <div>HR</div>
      </div> 
    </div>
    <p class="slid7-p3 ani mt30px" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">更专业、更权威、服务更贴心。</p>
    <p class="slid7-p3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">More professional,more authoritative,</br>more exclusive services for you.</p>
    <img class="slid7-img3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s"  src="../../../static/img/pic_02.jpg" alt="">
    <p class="slid7-p4 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" >您还会因为选择</br>体检机构而困惑吗？</p>
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'weiperSlide7',
  components: {
    swiperSlide
  }
}
</script>

<style lang="stylus">
.slid7
  background url('static/img/i_002.png') 150% 80% no-repeat;
  background-size 50%
  .slid7-left
    float left
    margin 70px 0 0 56px
    .slid7-p1
      font-size 48px
      color clan
    .slid7-p2
      font-size 12px
      margin-top -24px
      font-weight bold
      color chui
  .slid7-say
    display flex
    margin 30px 0 0 40px
    align-items center
    .slid7-name
      display flex
      align-items center
      margin-left 10px
      flex-direction column
      .slid7-img2
        width 112px
        height 112px
      div
        line-height 40px
        color chui
    .slid7-img3
      width 534px
      height 146px
      margin-left 10px
    .img3-hg
      height 176px
  .slid7-p3
    margin 0 auto 10px
    width 640px
    font-size 24px
    line-height 40px
    font-style: italic
    color chui
    word-break: break-word;
  .mt30px
    margin-top 30px
  .slid7-img3
    width 456px
    height 245px
    margin 10px 0 0 56px
  .slid7-p4
    font-size 36px
    color clan
    margin-left 56px
    line-height 60px

</style>
