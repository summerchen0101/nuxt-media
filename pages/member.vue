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
            <SideMenu />
            <!--member_left end-->
            <nuxt-child />>
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
import SideMenu from '@/components/MemberSideMenu'
export default {
  name: 'Member',
  layout: 'main',
  components: {
    SideMenu
  },
  data () {
    return {}
  },
  mounted () {
  },
  head () {
    return {
      link: [{ rel: 'stylesheet', href: '/css/member.css' }]
    }
  }
}
</script>
