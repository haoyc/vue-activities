<template>
  <swiper-slide class="slid9">
    <div class="clearfix">
      <div class="slid9-left">
        <p class="slid9-p1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">贴心的家人关爱</p> 
        <p class="slid9-p2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">Intimate Family Care</p> 
      </div>
      <img class="slid9-img1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" src="../../../static/img/pic_01.jpg" alt="">
    </div>
    <p class="slid9-p4 ani">你和家人都体检了吗？</p>
    <div class="slid9-say ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
      <div class="slid9-name">
        <img class="slid9-img2" src="../../../static/img/m_04.png" alt="">
        <div>刘总</div>
      </div>
      <img class="slid9-img3" src="../../../static/img/08_y.png" alt="">
    </div>
    <div class="slid9-say ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
      <img class="slid9-img3 img3-hg" src="../../../static/img/08_b.png" alt="">    
      <div class="slid9-name">
        <img class="slid9-img2" src="../../../static/img/m_02.png" alt="">
        <div>HR</div>
      </div> 
    </div>
    <p class="slid9-p3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">爱惜自己的同时，将您的爱带给家人，传递健康正能量。</p>
    <p class="slid9-p3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">Love yourself, meanwhile,bring the love to your whole family with positive healthy energy.</p>
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'weiperSlide9',
  components: {
    swiperSlide
  }
}
</script>

<style lang="stylus">
.slid9
  background url('static/img/i_004.png') 110% 92% no-repeat;
  background-size 40%
  .slid9-left
    float left
    margin 74px 0 0 48px
    .slid9-p1
      font-size 48px
      color clan
    .slid9-p2
      font-size 12px
      margin-top -24px
      font-weight bold
      color chui
  .slid9-img1
    width 660px
    height 255px
    margin-left 48px
  .slid9-say
    display flex
    margin 30px 0 0 40px
    align-items center
    .slid9-name
      display flex
      align-items center
      margin-left 10px
      flex-direction column
      .slid9-img2
        width 112px
        height 112px
      div
        line-height 40px
        color chui
    .slid9-img3
      width 534px
      height 146px
      margin-left 10px
    .img3-hg
      height 176px
  .slid9-p3
    margin-left 48px
    width 410px
    font-size 24px
    line-height 40px
    font-style: italic
    color chui
    word-break: break-word;
  .slid9-p4
    font-size 36px
    color clan
    margin-left 48px
  .mt30px
    margin-top 30px
  .slid9-img3
    width 456px
    height 245px
    margin 10px 0 0 56px
</style>
