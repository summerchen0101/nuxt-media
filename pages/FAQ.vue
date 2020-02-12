<template>
  <Dashboard id="wrapper">
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
            <div class="company_right col-xs-12 col-sm-9 col-md-9">
              <div class="company_title">
                <i class="icon-discuss-issue" /><span>常见问题</span>
              </div>
              <div class="company_content">
                <div class="qa_container">
                  <div class="qa_box">
                    <a><span class="q_icon">Q.</span>如何收藏视频、专辑、相册视频？</a>
                    <div class="qa_content">
                      收藏视频：在视频播放页播放器下方点击“收藏”收藏相册视频：在相册视频播放页播放器下方点击“收藏”。收藏相册视频：在相册视频播放页播放器下方点击“收藏”。
                    </div>
                  </div>
                  <div class="qa_box">
                    <a><span class="q_icon">Q.</span>如何关注别人？关注别人有什么用？？</a>
                    <div class="qa_content">
                      收藏视频：在视频播放页播放器下方点击“收藏”收藏相册视频：在相册视频播放页播放器下方点击“收藏”。收藏相册视频：在相册视频播放页播放器下方点击“收藏”。
                    </div>
                  </div>
                  <div class="qa_box">
                    <a><span class="q_icon">Q.</span>如何关注别人？关注别人有什么用？？</a>
                    <div class="qa_content">
                      收藏视频：在视频播放页播放器下方点击“收藏”收藏相册视频：在相册视频播放页播放器下方点击“收藏”。收藏相册视频：在相册视频播放页播放器下方点击“收藏”。
                    </div>
                  </div>
                  <div class="qa_box">
                    <a><span class="q_icon">Q.</span>如何关注别人？关注别人有什么用？？</a>
                    <div class="qa_content">
                      收藏视频：在视频播放页播放器下方点击“收藏”收藏相册视频：在相册视频播放页播放器下方点击“收藏”。收藏相册视频：在相册视频播放页播放器下方点击“收藏”。
                    </div>
                  </div>
                  <div class="qa_box">
                    <a><span class="q_icon">Q.</span>如何关注别人？关注别人有什么用？？</a>
                    <div class="qa_content">
                      收藏视频：在视频播放页播放器下方点击“收藏”收藏相册视频：在相册视频播放页播放器下方点击“收藏”。收藏相册视频：在相册视频播放页播放器下方点击“收藏”。
                    </div>
                  </div>
                  <div class="qa_box">
                    <a><span class="q_icon">Q.</span>如何关注别人？关注别人有什么用？？</a>
                    <div class="qa_content">
                      收藏视频：在视频播放页播放器下方点击“收藏”收藏相册视频：在相册视频播放页播放器下方点击“收藏”。收藏相册视频：在相册视频播放页播放器下方点击“收藏”。
                    </div>
                  </div>
                  <div class="qa_box">
                    <a><span class="q_icon">Q.</span>如何关注别人？关注别人有什么用？？</a>
                    <div class="qa_content">
                      收藏视频：在视频播放页播放器下方点击“收藏”收藏相册视频：在相册视频播放页播放器下方点击“收藏”。收藏相册视频：在相册视频播放页播放器下方点击“收藏”。
                    </div>
                  </div>
                  <div class="qa_box">
                    <a><span class="q_icon">Q.</span>如何关注别人？关注别人有什么用？？</a>
                    <div class="qa_content">
                      收藏视频：在视频播放页播放器下方点击“收藏”收藏相册视频：在相册视频播放页播放器下方点击“收藏”。收藏相册视频：在相册视频播放页播放器下方点击“收藏”。
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--company_right end-->
          </div>
          <!--page_content_s end-->
        </div>
      </div>
      <!--page_container end-->
      <Footer />
      <ScrollTop />
    </div>
  </Dashboard>
</template>

<script>
import SubPagesMenu from '../components/SubPagesMenu'
export default {
  name: 'FAQ',
  components: {
    SubPagesMenu
  },
  data () {
    return {}
  },
  mounted () {
    this.$mixin.loadScript('/js/script.js')
  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/member.css' },
        { rel: 'stylesheet', href: '/css/qa.css' }
      ]
    }
  }
}
</script>
