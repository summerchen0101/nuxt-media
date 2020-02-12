<template>
  <div id="wrapper">
    <!-- /#sidebar-wrapper -->
    <div class="page_container">
      <div class="container tv_sub_container row">
        <div class="tv_sub_left col-xs-12 col-sm-3 col-md-2">
          <div class="tv_sub_lTitle">
            <div class="dropdown">
              <button
                id="dropdownMenu1"
                class="dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                电视剧
                <span class="caret" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>
                  <router-link>电视剧</router-link>
                </li>
                <li><a href="">综艺</a></li>
                <li><a href="">电影</a></li>
                <li><a href="">微电影</a></li>
                <li><a href="">动漫</a></li>
                <li><a href="">音乐</a></li>
                <li><a href="">搞笑</a></li>
                <li><a href="">体育</a></li>
                <li><a href="">时尚</a></li>
              </ul>
            </div>
          </div>
          <div class="tb_sub_select_box">
            <div class="tv_sub_stitle">
              类别：
            </div>
            <ul class="tv_sub_select_tab">
              <li><a href="">全部</a></li>
              <li><a href="">古装</a></li>
              <li><a href="">武侠</a></li>
              <li><a href="">警匪</a></li>
              <li><a href="">军事</a></li>
              <li><a href="">神话</a></li>
              <li><a href="">科幻</a></li>
              <li><a href="" class="select">悬疑</a></li>
              <li><a href="">都市</a></li>
              <li><a href="">家庭</a></li>
              <li><a href="">搞笑</a></li>
              <li><a href="">偶像</a></li>
              <li><a href="">言情</a></li>
              <li><a href="">时装</a></li>
            </ul>
          </div>
          <div class="tb_sub_select_box">
            <div class="tv_sub_stitle">
              地区：
            </div>
            <ul class="tv_sub_select_tab">
              <li><a href="">全部</a></li>
              <li><a href="">大陆</a></li>
              <li><a href="">香港</a></li>
              <li><a href="">美国</a></li>
              <li><a href="">台湾</a></li>
              <li><a href="" class="select">韩国</a></li>
              <li><a href="">泰国</a></li>
              <li><a href="">新加坡</a></li>
              <li><a href="">日本</a></li>
              <li><a href="">法国</a></li>
              <li><a href="">英国</a></li>
            </ul>
          </div>
          <div class="tb_sub_select_box">
            <div class="tv_sub_stitle">
              时间：
            </div>
            <ul class="tv_sub_select_tab">
              <li><a href="">全部</a></li>
              <li><a href="">2017</a></li>
              <li><a href="" class="select">2016</a></li>
              <li><a href="">2015</a></li>
              <li><a href="">2014</a></li>
              <li><a href="">2013</a></li>
              <li><a href="">2012</a></li>
              <li><a href="">2011</a></li>
              <li><a href="">2010</a></li>
            </ul>
          </div>
          <div class="tb_sub_select_box">
            <div class="tv_sub_stitle">
              状态：
            </div>
            <ul class="tv_sub_select_tab">
              <li><a href="">全部</a></li>
              <li><a href="">跟播</a></li>
              <li><a href="">完结</a></li>
            </ul>
          </div>
        </div>
        <div class="tv_sub_right col-xs-12 col-sm-9 col-md-10">
          <div class="ad-box mb-20">
            <a href="" target="_blank"><img src="/images/ad-img-l.png" alt=""></a>
          </div>
          <div class="filter_box">
            <span class="filter_title">筛选条件：</span>
            <a href="">悬疑<i class="fa fa-times-circle" /></a>
            <a href="">韩国<i class="fa fa-times-circle" /></a>
            <a href="">2016<i class="fa fa-times-circle" /></a>
            <span class="result">共884个筛选结果</span>
          </div>
          <div class="sorting_box">
            <span class="sorting_title">排序方式：</span>
            <a href="" class="select">最具人气</a>
            <a href="">最多评论</a>
            <a href="">最新发佈</a>
          </div>
          <div class="tv_sub_list">
            <router-link v-for="i in 20" :key="i" :to="{name: 'VideoDetail'}" class="index_tv_unit video_unit">
              <div class="index_tv_img index_unit_img imgLiquidFill imgLiquid">
                <img src="/images/index/tv_img1.jpg" alt="">
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
          <div class="ad-box mb-20">
            <a href="" target="_blank"><img src="/images/ad-img-l.png" alt=""></a>
          </div>
          <div class="page_list">
            <a href=""><i class="fa fa-angle-left" aria-hidden="true" /></a>
            <a href="">1</a>
            <a href="">2</a>
            <a href="" class="select">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a href="">7</a>
            <a href="">...</a>
            <a href="">20</a>
            <a href=""><i class="fa fa-angle-right" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </div>
    <!--page_container end-->
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
export default {
  name: 'FilterPage',
  components: {},
  metaInfo () {
    return {
      link: [
        { rel: 'stylesheet', href: `${this.$root.resUrl}/css/tv_cat_list.css` }
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
