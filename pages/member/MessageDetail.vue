<template>
  <div id="wrapper">
    <div id="page-content-wrapper">
      <!--banner start-->
      <div class="page_banner imgLiquidFill imgLiquid">
        <img :src="`${$root.resUrl}/images/page_banner.jpg`" alt="">
      </div>
      <!--banner end-->
      <div class="page_container">
        <div class="container">
          <div class="row">
            <SideMenu />
            <!--member_left end-->
            <div class="member_right col-xs-12 col-sm-9 col-md-9">
              <div class="member_head">
                <div class="news_detail_title">
                  见元戏这得节建时随的。会找错客着学人满应有防，试天张，的话玩运定更议故预陆是间得却了
                </div>
                <div class="news_detail_date">
                  2017-03-01
                </div>
              </div>
              <div class="news_content">
                见元戏这得节建时随的。会找错客着学人满应有防，试天张，的话玩运定更议故预陆是间得却了们有，受家来的资年的成长时高便病向领，财我的育；规配和下体。宝大世大、件或算生留有...见元戏这得节建时随的。会找错客着学人满应有防，试天张，的话玩运定更议故预陆是间得却了们有，受家来的资年的成长时高便病向领，财我的育；规配和下体。宝大世大、件或算生留有...见元戏这得节建时随的。会找错客着学人满应有防，试天张，的话玩运定更议故预陆是间得却了们有，受家来的资年的成长时高便病向领，财我的育；规配和下体。宝大世大、件或算生留有<br><br>
                见元戏这得节建时随的。会找错客着学人满应有防，试天张，的话玩运定更议故预陆是间得却了们有，受家来的资年的成长时高便病向领，财我的育；规配和下体。宝大世大、件或算生留有...见元戏这得节建时随的。会找错客着学人满应有防，试天张，的话玩运定更议故预陆是间得却了们有，受家来的资年的成长时高便病向领，财我的育；规配和下体。宝大世大、件或算生留有...见元戏这得节建时随的。会找错客着学人满应有防，试天张，的话玩运定更议故预陆是间得却了们有，受家来的资年的成长时高便病向领，财我的育；规配和下体。宝大世大、件或算生留有
              </div>
              <div class="page_list news_page">
                <a href="message.html"><i class="fa fa-chevron-left" />回列表</a>
              </div>
            </div>
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
  name: 'MessageDetail',
  components: {
    SideMenu
  },
  metaInfo () {
    return {
      link: [{ rel: 'stylesheet', href: `${this.$root.resUrl}/css/member.css` }]
    }
  },
  data () {
    return {}
  },
  mounted () {
    setTimeout(animationEffect.bind(this), 100)
  }
}

function animationEffect () {
  // $('.imgLiquidFill').imgLiquid()
}
</script>
