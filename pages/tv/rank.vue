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
          <!-- Nav tabs -->
          <ul class="nav nav-tabs ranking-tabs" role="tablist">
            <li role="presentation " class="active">
              <a href="#ranking2" aria-controls="ranking2" role="tab" data-toggle="tab">戏剧排行</a>
            </li>
            <li role="presentation">
              <a href="#ranking3" aria-controls="ranking3" role="tab" data-toggle="tab">电影排行</a>
            </li>
            <li role="presentation">
              <a href="#ranking4" aria-controls="ranking4" role="tab" data-toggle="tab">动漫排行</a>
            </li>
            <li role="presentation">
              <a href="#ranking5" aria-controls="ranking5" role="tab" data-toggle="tab">综艺排行</a>
            </li>
          </ul>
          <!-- Tab panes -->
          <div class="tab-content ranking-tab-content">
            <div id="ranking2" role="tabpanel" class="tab-pane active">
              <div class="ranking-head">
                <i class="icon-television" />戏剧排行榜 - 今日TOP100
              </div>
              <div class="ranking-body">
                <div class="tv_sub_list">
                  <a v-for="i in 20" :key="i" href="tv_korea_detail.html" class="video_unit">
                    <div class="tv_unit_img tv_sub_img imgLiquidFill imgLiquid">
                      <img src="/images/tv_korea_list/tv_korea_list_img.jpg" alt="">
                    </div>
                    <div class="index_info">
                      <div class="index_unit_title"> 明天和你</div>
                      <div class="index_unit_txt">更新至6集</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div id="ranking3" role="tabpanel" class="tab-pane">
              <div class="ranking-head">
                <i class="icon-movie-symbol-of-video-camera" />电影排行榜 - 今日TOP100
              </div>
              <div class="ranking-body">
                <div class="tv_sub_list">
                  <a v-for="i in 20" :key="i" href="tv_korea_detail.html" class="video_unit">
                    <div class="tv_unit_img tv_sub_img imgLiquidFill imgLiquid">
                      <img src="/images/tv_korea_list/tv_korea_list_img4.jpg" alt="">
                    </div>
                    <div class="index_info">
                      <div class="index_unit_title"> 明天和你</div>
                      <div class="index_unit_txt">更新至6集</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div id="ranking4" role="tabpanel" class="tab-pane">
              <div class="ranking-head">
                <i class="icon-cartoons-character-with-big-eyes" />动漫排行榜 - 今日TOP100
              </div>
              <div class="ranking-body">
                <div class="tv_sub_list">
                  <a v-for="i in 20" :key="i" href="tv_korea_detail.html" class="video_unit">
                    <div class="tv_unit_img tv_sub_img imgLiquidFill imgLiquid">
                      <img src="/images/tv_korea_list/tv_korea_list_img3.jpg" alt="">
                    </div>
                    <div class="index_info">
                      <div class="index_unit_title"> 明天和你</div>
                      <div class="index_unit_txt">更新至6集</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div id="ranking5" role="tabpanel" class="tab-pane">
              <div class="ranking-head">
                <i class="icon-karaoke-microphone-icon" />综艺排行榜 - 今日TOP100
              </div>
              <div class="ranking-body">
                <div class="tv_sub_list">
                  <a v-for="i in 20" :key="i" href="tv_korea_detail.html" class="video_unit">
                    <div class="tv_unit_img tv_sub_img imgLiquidFill imgLiquid">
                      <img src="/images/tv_korea_list/tv_korea_list_img2.jpg" alt="">
                    </div>
                    <div class="index_info">
                      <div class="index_unit_title"> 明天和你</div>
                      <div class="index_unit_txt">更新至6集</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--page_container end-->
      <Footer />
      <ScrollTop />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rank',
  layout: 'main',
  components: {},
  data () {
    return {}
  },
  mounted () {
    $('.imgLiquidFill').imgLiquid()
  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/ranking.css' }
      ]
    }
  }
}
</script>
