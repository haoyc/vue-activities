<template>
  <swiper-slide class="slid8">
    <div class="clearfix">
      <img class="slid8-img1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" src="../../../static/img/map.png" alt="">
      <div class="slid8-left">
        <p class="slid8-p1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">广泛的城市覆盖</p> 
        <p class="slid8-p2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">Wide Location Coverage</p> 
      </div>
    </div>
    <div class="slid8-say ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
      <div class="slid8-name">
        <img class="slid8-img2" src="../../../static/img/m_03.png" alt="">
        <div>Helen</div>
      </div>
      <img class="slid8-img3" src="../../../static/img/07_y.png" alt="">
    </div>
    <div class="slid8-say ani mt20px" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
      <img class="slid8-img3 img3-hg" src="../../../static/img/06_b.png" alt="">    
      <div class="slid8-name">
        <img class="slid8-img2" src="../../../static/img/m_02.png" alt="">
        <div>HR</div>
      </div> 
    </div>
    <p class="slid8-p3 ani mt30px" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">不必再劳力，选择更灵活、更便捷，体验机构全方位覆盖。无论您身在何处，中智安心体检是您最值得信赖的体检选择。</p>
    <p class="slid8-p3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">Flexible,convenient with full coverage og medical institutions.Wherever you are，Cosy Health Exarninaf package can be the most accountable solution for your health examinations.</p>
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
.slid8
  background url('static/img/i_003.png') -30% 140px no-repeat;
  background-size 40%
  .slid8-left
    float left
    margin-left 225px
    .slid8-p1
      font-size 48px
      color clan
    .slid8-p2
      font-size 12px
      margin-top -24px
      font-weight bold
      color chui
  .slid8-img1
    width 480px
    height 400px
    margin-left 176px
  .slid8-say
    display flex
    margin 0 0 0 40px
    align-items center
    .slid8-name
      display flex
      align-items center
      margin-left 10px
      flex-direction column
      .slid8-img2
        width 112px
        height 112px
      div
        line-height 40px
        color chui
    .slid8-img3
      width 534px
      height 146px
      margin-left 10px
    .img3-hg
      height 176px
  .mt20px
    margin-top 20px
  .slid8-p3
    margin 36px auto 10px
    width 640px
    font-size 24px
    line-height 40px
    font-style: italic
    color chui
    word-break: break-word;
  .mt30px
    margin-top 30px
  .slid8-img3
    width 456px
    height 245px
    margin 10px 0 0 56px
  .slid8-p4
    font-size 36px
    color clan
    margin-left 56px
    line-height 60px

</style>
