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
                <div class="dropdown member_select">
                  <button
                    id="dropdownMenu1"
                    class="btn btn-default dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    全部讯息
                    <span class="caret" />
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">全部讯息</a></li>
                    <li><a href="#">系统消息</a></li>
                  </ul>
                </div>
              </div>
              <div class="news_list">
                <div v-for="i in 6" :key="i" class="news_unit">
                  <div class="news_top">
                    <span class="news_sort"><i class="icon-black-envelope" />系统消息</span>
                    <span class="news_date">2017-03-01</span>
                  </div>
                  <a href="message_detail.html" class="news_txt">
                    见元戏这得节建时随的。会找错客着学人满应有防，试天张，的话玩运定更议故预陆是间得却了们有，受家来的资年的成长时高便病向领，财我的育；规配和下体。宝大世大、件或算生留有...
                  </a>
                </div>
              </div>
              <!--news_list end-->
              <div class="page_list">
                <a href="">上一页</a>
                <a href="">1</a>
                <a href="">2</a>
                <a href="" class="select">3</a>
                <a href="">4</a>
                <a href="">5</a>
                <a href="">6</a>
                <a href="">7</a>
                <a href="">8</a>
                <a href="">9</a>
                <a href="">下一页</a>
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
  name: 'Message',
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
