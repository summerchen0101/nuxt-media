<template>
  <div class="member_left col-xs-12 col-sm-3 col-md-3">
    <div class="intro_info">
      <div class="member_bigImg imgLiquidFill imgLiquid">
        <img src="/images/member/member_bigImg.jpg" alt="">
      </div>
      <div class="user_name">
        Sunny
      </div>
      <div class="user_id">
        ID:201135498
      </div>
    </div>
    <div class="member_list_pc">
      <nuxt-link :to="{name: 'member-record'}">
        <i class="fa fa-history" />观看纪录
      </nuxt-link>
      <nuxt-link :to="{name: 'member-favorite'}">
        <i class="fa fa-heart-o" />我的收藏
      </nuxt-link>
      <nuxt-link :to="{name: 'member-message'}">
        <i class="icon-commenting" />我的消息
      </nuxt-link>
      <nuxt-link :to="{name: 'member-profile'}">
        <i class="fa fa-cog" />帐号设置
      </nuxt-link>
    </div>
    <select name="here" onchange="location.href=this.options[this.selectedIndex].value;" class="member_list_mb">
      <option value="">
        请选择
      </option>
      <option value="record.html">
        观看纪录
      </option>
      <option value="collect.html">
        我的收藏
      </option>
      <option value="message.html">
        我的消息
      </option>
      <option value="setting.html">
        帐号设置
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'MemberSideMenu',
  components: {},
  mounted () {
    console.log(this.$route)
  }
}
</script>
