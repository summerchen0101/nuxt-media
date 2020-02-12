<template>
  <div id="wrapper">
    <!-- /#sidebar-wrapper -->
    <div id="page-content-wrapper">
      <!--banner start-->
      <div class="page_banner imgLiquidFill imgLiquid">
        <img :src="`${$root.resUrl}/images/page_banner.jpg`" alt="">
      </div>
      <!--banner end-->
      <div class="page_container">
        <div class="container">
          <div class="search_bar_head">
            <span>影音<b>搜索</b></span>
            <form action="" class="search_form">
              <input type="text">
              <button class="btn" type="submit">
                <i class="fa fa-search" />搜全网
              </button>
            </form>
          </div><!-- search_bar_head end -->
          <div class="search_tv_detail">
            <a v-for="i in 15" :key="i" href="tv_korea_detail.html" class="search_unit video_unit">
              <div class="index_tv_img index_unit_img imgLiquidFill imgLiquid">
                <img :src="`${$root.resUrl}/images/index/tv_img2.jpg`" alt="">
              </div>
              <div class="index_info">
                <div class="index_unit_title">明天和你</div>
                <div class="index_unit_txt">更新至6集</div>
              </div>
            </a>
          </div>
          <div class="search_tv_detail_resultBox">
            <div class="search_tv_detail_head">
              <div class="search_tv_sort">
                <div class="search_tv_relative_title">
                  相关度
                </div>
              </div>
              <div class="search_tv_totalResult">
                共找到<b>15,283</b>个视频
              </div>
            </div>
            <div class="search_tv_list">
              <div v-for="i in 10" :key="i" class="search_tv_unit">
                <div class="search_tv_img imgLiquidFill imgLiquid">
                  <img :src="`${$root.resUrl}/images/member/collect_img1.jpg`" alt="">
                  <div>
                    <div class="search_tv_view">
                      <i class="fa fa-play" />3,534
                    </div>
                    <div class="search_tv_time">
                      05:56
                    </div>
                  </div>
                </div>
                <a href="tv_korea_detail.html" class="search_tv_txt">
                  <div class="search_tv_title">李钟硕《<span class="search_keyword">W</span><span class="search_keyword">两</span><span class="search_keyword">个</span><span class="search_keyword">世</span><span class="search_keyword">界</span> 》韩剧电视剧海报拍摄</div>
                  <div class="search_tv_user_info">
                    <div class="search_tv_user_name"><i class="fa fa-user" aria-hidden="true" />Sunny</div>
                    <div class="search_tv_user_post"><i class="fa fa-clock-o" aria-hidden="true" />2月前</div>
                  </div>
                </a>
              </div>
            </div>
            <!--search_tv_detail_resultBox end-->
            <div class="search_tv_relative">
              <div class="search_tv_relative_title">
                相关搜索
              </div>
              <div class="search_tv_relative_content">
                <a href="">两个世界</a>
                <a href="">W两个世界韩剧</a>
                <a href="">韩国电视剧</a>
                <a href="">W两个世界韩剧电视剧</a>
                <a href="">韩剧</a>
                <a href="">李钟硕</a>
                <a href="">李钟硕电视剧</a>
                <a href="">W的两个世界</a>
                <a href="">两个世界韩剧</a>
                <a href="">韩孝周</a>
              </div>
            </div>
            <!--search_tv_relative end-->
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
          <!--page_content_s end-->
        </div>
        <!--page_container end-->
        <footer class="footer_box">
          <div class="container">
            <div class="footer_link">
              <a href="about.html">关于我们</a>|
              <a href="qa.html">常见问题</a>|

              <a href="privacy.html">隐私权政策</a>|
              <a href="service.html">服务介绍</a>
            </div>
            <div class="copyright">
              Copyright © 2019 All rights reserved
            </div>
          </div>
        </footer>
        <div class="page_fixedSlide">
          <a class="scrollTop"><i class="fa fa-caret-up" />TOP</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  components: {},
  metaInfo () {
    return {
      link: [
        { rel: 'stylesheet', href: `${this.$root.resUrl}/css/search_list.css` }
      ]
    }
  },
  data () {
    return {}
  },
  mounted () {
    setTimeout(animationEffect.bind(this), 300)
  }
}

function animationEffect () {
  // $('.imgLiquidFill').imgLiquid()
}
</script>
