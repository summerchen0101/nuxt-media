<template>
  <div id="login_dialog_inner">
    <div class="login_dialog_title">
      <span><img :src="`${$root.resUrl}/images/login_dialog.png`" alt=""></span>
      <span>会员登入</span>
    </div>
    <form class="form-horizontal login_dialog_form">
      <div class="form-group">
        <div class="col-xs-12">
          <input type="text" class="form-control" placeholder="帐号">
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-12">
          <input type="password" class="form-control" placeholder="密码">
        </div>
      </div>
      <div class="login_link login_link_forget">
        <!-- <a id="go_forgetPw">忘记密码</a> -->
      </div>
      <div class="form-group">
        <div class="dialog_form_btn">
          <a href="" class="btn btn-primary" @click.prevent="onClickedLogin">登入</a>
        </div>
      </div>
      <div class="login_link login_link_account">
        没有帐号?
        <a id="go_reg">创建一个新帐号</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPopup',
  components: {},
  mounted () {},
  methods: {
    onClickedLogin () {
      this.$.fancybox.close()
      this.$router.push({ name: 'Profile' })
    }
  }
}
</script>
