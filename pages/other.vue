<template>
  <div id="wrapper">
    <div id="page-content-wrapper">
      <!--banner start-->
      <div class="page_banner imgLiquidFill imgLiquid">
        <img src="/images/page_banner.jpg" alt="">
      </div>
      <!--banner end-->
      <div class="page_container">
        <div class="container">
          <div class="row">
            <SubPagesMenu />
            <!--company_left end-->
            <nuxt-child />
            <!--company_right end-->
          </div>
          <!--page_content_s end-->
        </div>
      </div>
      <!--page_container end-->
      <Footer />
      <ScrollTop />
    </div>
  </div>
</template>

<script>
import SubPagesMenu from '../components/SubPagesMenu'
export default {
  name: 'Other',
  layout: 'main',
  components: {
    SubPagesMenu
  },
  data () {
    return {}
  },
  mounted () {
    $('.imgLiquidFill').imgLiquid()
  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/member.css' }
      ]
    }
  }
}
</script>
