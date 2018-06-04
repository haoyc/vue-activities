<template>
  <swiper-slide>
    <div class="ani p3-1" swiper-animate-effect="bounceInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.0s">
      <div class="img"></div>
      <h3>中智安心体检<br/>开启与健康的对话</h3>          
    </div>
    <div class="ani p3-2" swiper-animate-effect="fadeInRightBig" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">          
      <img src="static/img/logo_1.png" />
      <p>中智上海经济技术合作公司成立于1937年，是国务院国资委旗下唯一从事人力资源服务的企业。二十多年来，中智从单一的人力资源外包供应商发展为全球领先的全方位人力资源服务供应商。</p>
      <p>中智上海旗下的外企服务公司自成立以来一直致力于为企业及雇员提供人力资源解决方案、管理平台解决方案、 健康保障服务方案及员工福利解决方案、帮助各类企业客户提升组织效能 ，构建和谐劳动关系，在健康保障服务领域，中智凭借其完善的保障体系，覆盖全国的服务网络及先进的系统平台 ，提供涵盖了雇员及其家属的补充医疗保障，健康体检保障等各项服务，充分满足企业客户及雇员的多方面、深层次需求。</p>
    </div>
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'sweiperSlide3',
  components: {
    swiperSlide
  }
}
</script>

<style lang="stylus">
.p3-1,.p4-1
  .img
    height 220px
    width 280px    
    background #fff url('static/img/P3-1.png') right center no-repeat
    background-size 100% 100%
    position absolute
    right 0
    top -60px
  h3
    font-size 50px
    line-height 70px
    color #013f7d
    margin 60px 0 0 40px
.p3-2,.p4-2
  margin 80px 60px 0 60px
  img
    width 130px
    height auto
    display block
  p
    font-size 28px
    line-height 56px
    margin 40px 0 0 0
    color #000
</style>
