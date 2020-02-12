<template>
  <div class="Home">
    <slick class="banner-box" :options="$root.bannerSlickOptions">
      <div class="item">
        <img src="~assets/images/index/pc-banner1.jpg" class="show-pc">
        <img src="~assets/images/index/mb-banner1.jpg" alt="" class="show-mb">
      </div>
      <div class="item">
        <img src="~assets/images/index/pc-banner1.jpg" class="show-pc">
        <img src="~assets/images/index/mb-banner1.jpg" alt="" class="show-mb">
      </div>
    </slick>
    <div class="index_container">
      <!--index block start-->
      <div class="index_block">
        <div class="container">
          <a id="section1" />
          <div class="head_title">
            <span class="index_mtitle"><i class="icon-television" />戏剧</span>
            <a href="tv_list.html" class="index_more">更多</a>
          </div>
          <!--head_title end-->
          <div class="index_contentBox index_contentBox_column">
            <div class="index_tv_list">
              <router-link v-for="i in 10" :key="i" :to="{name: 'VideoDetail'}" class="index_tv_unit video_unit">
                <div class="index_tv_img index_unit_img imgLiquidFill imgLiquid">
                  <img src="~assets/images/index/tv_img1.jpg" alt="">
                </div>
                <div class="index_info">
                  <div class="index_unit_title">
                    明天和你
                  </div>
                  <div class="index_unit_txt">
                    更新至6集
                  </div>
                </div>
              </router-link>
            </div>
            <!--index_tv_list end-->
            <div class="rank_box">
              <div class="rank_mtitle">
                <i class="icon-ranking" />排行榜
              </div>
              <div class="rank_content">
                <div class="rank_img imgLiquidFill imgLiquid">
                  <img src="~assets/images/index/rank_img1.jpg" alt="">
                </div>
                <div class="rank_list">
                  <a href="tv_korea_detail.html" class="rank_unit first_unit">
                    <i class="first">1</i><span>W－两个世界</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i class="second">2</i><span>孤单又灿烂的神-鬼怪</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i class="third">3</i><span>如朕亲临</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>4</i><span>植剧场：荼蘼</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>5</i><span>太阳的后裔</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>6</i><span>浮士德的微笑</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>7</i><span>独家保镳</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>8</i><span>蓝色海洋的传说</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>9</i><span>植剧场：天黑请闭眼</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>10</i><span>THE K2</span>
                  </a>
                </div>
              </div>
              <!--rank_content end-->
            </div>
            <!--rank_box end-->
          </div>
          <!--index_content end-->
          <div class="ad-box mb-20">
            <a href="" target="_blank"><img src="~assets/images/ad-img-index.png" alt=""></a>
          </div>
        </div>
        <!--container end-->
      </div>
      <!--index block end-->
      <div class="index_block">
        <div class="container">
          <a id="section2" />
          <div class="head_title">
            <span class="index_mtitle"><i class="icon-movie-symbol-of-video-camera" />电影</span>

            <a href="tv_list.html" class="index_more">更多</a>
          </div>
          <!--head_title end-->
          <div class="index_contentBox index_contentBox_column">
            <div class="index_variety_list_big">
              <a href="tv_korea_detail.html" class="index_variety_unit video_unit">
                <div class="index_variety_img index_unit_img imgLiquidFill imgLiquid">
                  <img src="~assets/images/index/variety_img1.jpg" alt="">
                </div>
                <div class="index_info">
                  <div class="index_unit_title">明天和你</div>
                  <div class="index_unit_txt">更新至6集</div>
                </div>
              </a>
            </div>
            <div class="index_variety_list">
              <a v-for="i in 3" :key="i" href="tv_korea_detail.html" class="index_variety_unit video_unit">
                <div class="index_variety_img index_unit_img imgLiquidFill imgLiquid">
                  <img src="~assets/images/index/variety_img2.jpg" alt="">
                </div>
                <div class="index_info">
                  <div class="index_unit_title">明天和你</div>
                  <div class="index_unit_txt">更新至6集</div>
                </div>
              </a>
            </div>
          </div>
          <!--index_content end-->
          <div class="ad-box mb-20">
            <a href="" target="_blank"><img src="~assets/images/ad-img-index.png" alt=""></a>
          </div>
        </div>
        <!--container end-->
      </div>
      <!--index block end-->
      <div class="index_block">
        <div class="container">
          <a id="section3" />
          <div class="head_title">
            <span class="index_mtitle"><i class="icon-karaoke-microphone-icon" />综艺</span>
            <a href="tv_list.html" class="index_more">更多</a>
          </div>
          <!--head_title end-->
          <div class="index_contentBox index_contentBox_column">
            <div class="index_movie_list">
              <a v-for="i in 10" :key="i" href="tv_korea_detail.html" class="index_movie_unit video_unit">
                <div class="index_movie_img index_unit_img imgLiquidFill imgLiquid">
                  <img src="~assets/images/index/movie_img1.jpg" alt="">
                </div>
                <div class="index_info">
                  <div class="index_unit_title index_movie_title">
                    明天和你
                    <b class="comment_num">8.1</b>
                  </div>
                  <div class="index_unit_txt">更新至6集</div>
                </div>
              </a>
            </div>
            <!--index_tv_list end-->
            <div class="rank_box">
              <div class="rank_mtitle">
                <i class="icon-ranking" />排行榜
              </div>
              <div class="rank_content">
                <div class="rank_img imgLiquidFill imgLiquid">
                  <img src="~assets/images/index/rank_img2.jpg" alt="">
                </div>
                <div class="rank_list">
                  <a href="tv_korea_detail.html" class="rank_unit first_unit">
                    <i class="first">1</i><span>W－两个世界</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i class="second">2</i><span>孤单又灿烂的神-鬼怪</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i class="third">3</i><span>如朕亲临</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>4</i><span>植剧场：荼蘼</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>5</i><span>太阳的后裔</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>6</i><span>浮士德的微笑</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>7</i><span>独家保镳</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>8</i><span>蓝色海洋的传说</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>9</i><span>植剧场：天黑请闭眼</span>
                  </a>
                  <a href="tv_korea_detail.html" class="rank_unit">
                    <i>10</i><span>THE K2</span>
                  </a>
                </div>
              </div>
              <!--rank_content end-->
            </div>
            <!--rank_box end-->
          </div>
          <!--index_content end-->
          <div class="ad-box mb-20">
            <a href="" target="_blank"><img src="~assets/images/ad-img-index.png" alt=""></a>
          </div>
        </div>
        <!--container end-->
      </div>
      <!--index block end-->
      <div class="index_block">
        <div class="container">
          <a id="section4" />
          <div class="head_title">
            <span class="index_mtitle"><i class="icon-cartoons-character-with-big-eyes" />动漫</span>

            <a href="tv_list.html" class="index_more">更多</a>
          </div>
          <!--head_title end-->
          <div class="index_contentBox">
            <slick class="index_smovie_list" :options="$root.tvReviewSlickOptions">
              <a v-for="i in 10" :key="i" href="tv_korea_detail.html" class="index_slide_unit video_unit">
                <div class="index_smovie_img index_unit_img imgLiquidFill imgLiquid">
                  <img src="~assets/images/index/smovie_img1.jpg" alt="">
                </div>
                <div class="index_info">
                  <div class="index_unit_title"> 明天和你</div>
                  <div class="index_unit_txt">更新至6集</div>
                </div>
              </a>
            </slick>
          </div>
          <!--index_content end-->
          <div class="ad-box mb-20">
            <a href="" target="_blank"><img src="~assets/images/ad-img-index.png" alt=""></a>
          </div>
        </div>
        <!--container end-->
      </div>
      <!--index block end-->
      <div class="index_block">
        <div class="container">
          <a id="section5" />
          <div class="head_title">
            <span class="index_mtitle"><i class="icon-18" />成人</span>
            <a href="tv_list.html" class="index_more">更多</a>
          </div>
          <!--head_title end-->
          <div class="index_contentBox">
            <slick class="index_cartoons_list" :options="$root.tvReviewSlickOptions">
              <a v-for="i in 10" :key="i" href="tv_korea_detail.html" class="index_slide_unit video_unit">
                <div class="index_smovie_img index_unit_img imgLiquidFill imgLiquid">
                  <img src="~assets/images/index/smovie_img1.jpg" alt="">
                </div>
                <div class="index_info">
                  <div class="index_unit_title"> 明天和你</div>
                  <div class="index_unit_txt">更新至6集</div>
                </div>
              </a>
            </slick>
          </div>
          <!--index_content end-->
          <div class="ad-box mb-20">
            <a href="" target="_blank"><img src="~assets/images/ad-img-index.png" alt=""></a>
          </div>
        </div>
        <!--container end-->
      </div>
      <!--index block end-->
    </div>
    <!--index_container end-->
    <Footer />
    <IndexScrollTop />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  metaInfo () {
    return {
      link: [{ rel: 'stylesheet', href: `${this.$root.resUrl}/css/index.css` }]
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.$store.dispatch('getBranchInfo', { time: '2020-02-04' })
    // animationEffect()

    setTimeout(animationEffect.bind(this), 300)
  }
}

function animationEffect () {
  // $('.imgLiquidFill').imgLiquid()
}
</script>

<style lang="scss">
.index_smovie_list,
.index_cartoons_list {
  .slick-slide {
    padding: 0 7px;
  }
}

.index_variety_list {
  width: 65%;
  padding-left: 20px;
  .index_variety_unit {
    &:last-child {
      display: block !important;
    }
  }
}
</style>
