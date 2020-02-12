<template>
  <div id="registered_dialog_inner">
    <div class="login_dialog_title">
      <span><img src="/images/login_dialog.png" alt=""></span>
      <span>会员注册</span>
    </div>
    <form class="form-horizontal login_dialog_form">
      <div class="form-group">
        <div class="col-xs-12">
          <input type="text" class="form-control" placeholder="帐号">
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-12">
          <input type="password" class="form-control" placeholder="密码(6-16位字母、数字和符号)">
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-12">
          <input type="password" class="form-control" placeholder="确认密码">
        </div>
      </div>
      <div class="registered_dialog_txt">
        点击创建帐户，即表示同意相关
        <a href="privacy.html">服务条款</a>
      </div>
      <div class="form-group">
        <div class="dialog_form_btn">
          <button type="submit" class="btn btn-primary">
            注册
          </button>
        </div>
      </div>
      <div class="login_link login_link_account">
        已有帐号?
        <a id="go_log">立即登入</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPopup',
  components: {},
  mounted () {}
}
</script>
