<template>
  <div id="login_dialog" class="modall">
    <div id="login_dialog_inner">
      <div class="login_dialog_title">
        <span><img src="/images/login_dialog.png" alt=""></span>
        <span>会员登入</span>
      </div>
      <ValidationObserver v-slot="{ invalid }">
        <form class="form-horizontal login_dialog_form">
          <div class="form-group">
            <div class="col-xs-12">
              <ValidationProvider v-slot="v" rules="required|account" name="account">
                <input v-model="form.account" type="text" class="form-control" placeholder="帐号">
                <span class="text-danger">{{ v.errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-12">
              <ValidationProvider v-slot="v" rules="required|pw" name="pw">
                <input v-model="form.pw" type="password" class="form-control" placeholder="密码">
                <span class="text-danger">{{ v.errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
          <div class="login_link login_link_forget">
            <!-- <a id="go_forgetPw">忘记密码</a> -->
          </div>
          <div class="form-group">
            <div class="dialog_form_btn">
              <a v-if="loading" class="btn btn-primary" href="" disabled>登入中...</a>
              <a
                v-else
                href=""
                class="btn btn-primary"
                :disabled="invalid"
                @click.prevent="onClickedLogin(invalid)"
              >
                登入</a>
            </div>
          </div>
          <div class="login_link login_link_account">
            没有帐号?
            <a class="fancybox" href="#register_dialog">创建一个新帐号</a>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPopup',
  components: {},
  data () {
    return {
      form: {
        account: '',
        pw: ''
      },
      loading: false
    }
  },
  mounted () {},
  methods: {
    async onClickedLogin (invalid) {
      if (invalid) { return }
      this.loading = true
      await this.$store.dispatch('user/login', { ...this.form, device: this.device })
      this.loading = false
      if (this.device !== 'web') {
        $('.navbar-hamburger').trigger('click')
      }
    }
  }
}
</script>
