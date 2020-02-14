<template>
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
          全部
          <span class="caret" />
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li><a href="#">全部</a></li>
          <li><a href="#">电影</a></li>
          <li><a href="#">电视剧</a></li>
          <li><a href="#">动漫</a></li>
          <li><a href="#">其他</a></li>
        </ul>
      </div>
      <!--member_select end-->
      <a href="#" class="member_clearBtn"><i class="fa fa-trash-o" />清除所有收藏</a>
    </div>
    <!--member_head end-->
    <div class="member_video_list">
      <div v-for="i in 10" :key="i" class="member_video_unit">
        <a href="" class="member_delete"><i class="fa fa-times" /></a>
        <div class="member_video_img imgLiquidFill imgLiquid">
          <img src="/images/member/collect_img1.jpg" alt="">
          <div class="member_video_time">
            05:56
          </div>
        </div>
        <a href="tv_korea_detail.html" class="member_video_txt">
          <div class="member_video_title">李钟硕《W 两个世界》韩剧电视剧海报拍摄</div>
          <div class="member_video_view"><i class="fa fa-play" />已看到00分05秒</div>
        </a>
      </div>
    </div>
    <!--member_video_list end-->
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
</template>

<script>
export default {
  name: 'Favorite',
  components: {
  },
  data () {
    return {}
  },
  mounted () {
    $('.imgLiquidFill').imgLiquid()
  },
  head () {
    return {
    }
  }
}
</script>
