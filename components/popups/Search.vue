<template>
  <div id="searchModal" class="modal fade searchModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 id="myModalLabel" class="modal-title">
            搜寻
          </h4>
        </div>
        <div class="modal-body">
          <div class="input-group">
            <input type="text" class="form-control" aria-describedby="basic-addon2">
            <span id="basic-addon2" class="input-group-addon">
              <a href="" @click.prevent="onClickedSearch"><i class="fa fa-search" /></a>
            </span>
          </div>
          <div class="searchModal_head">
            热门搜寻：
          </div>
          <div class="searchModal_body">
            <a class="" href="">
              <div class="searchModal_num first">1</div>
              <div class="searchModal_name">雪暴</div>
            </a>
            <a class="" href="">
              <div class="searchModal_num second">2</div>
              <div class="searchModal_name">俗女养成记</div>
            </a>
            <a class="" href="">
              <div class="searchModal_num third">3</div>
              <div class="searchModal_name">G杀事件</div>
            </a>
            <a class="" href="">
              <div class="searchModal_num">4</div>
              <div class="searchModal_name">大唐荣耀</div>
            </a>
            <a class="" href="">
              <div class="searchModal_num">5</div>
              <div class="searchModal_name">秘密精品店</div>
            </a>
            <a class="" href="">
              <div class="searchModal_num">6</div>
              <div class="searchModal_name">萌兽宠物店</div>
            </a>
            <a class="" href="">
              <div class="searchModal_num">7</div>
              <div class="searchModal_name">秘密精品店</div>
            </a>
            <a class="" href="">
              <div class="searchModal_num">8</div>
              <div class="searchModal_name">萌兽宠物店</div>
            </a>
            <a class="" href="">
              <div class="searchModal_num">9</div>
              <div class="searchModal_name">秘密精品店</div>
            </a>
            <a class="" href="">
              <div class="searchModal_num">10</div>
              <div class="searchModal_name">秘密精品店</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPopup',
  components: {},
  mounted () {},
  methods: {
    onClickedSearch () {
      this.$('#searchModal').modal('hide')
      this.$router.push({ name: 'SearchResult' })
    }
  }
}
</script>
