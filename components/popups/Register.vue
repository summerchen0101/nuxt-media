<template>
  <div class="hidden">
    <div id="register_dialog" class="modall">
      <div id="registered_dialog_inner">
        <div class="login_dialog_title">
          <span><img src="/images/login_dialog.png" alt=""></span>
          <span>会员注册</span>
        </div>
        <ValidationObserver v-slot="{ invalid, reset }">
          <form
            ref="form"
            class="form-horizontal login_dialog_form"
            @submit.prevent="onSubmit"
            @reset.prevent="reset"
          >
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
                  <input v-model="form.pw" type="password" class="form-control" placeholder="密码(6-16位字母、数字和符号)">
                  <span class="text-danger">{{ v.errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-12">
                <ValidationProvider v-slot="v" rules="required|match:@pw" name="pw_confirm">
                  <input v-model="form.pw_c" type="password" class="form-control" placeholder="确认密码">
                  <span class="text-danger">{{ v.errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="registered_dialog_txt">
              点击创建帐户，即表示同意相关
              <a href="/other/service" target="service">
                服务条款
              </a>
            </div>
            <div class="form-group">
              <div class="dialog_form_btn">
                <button type="submit" class="btn btn-primary" :disabled="invalid">
                  注册
                </button>
              </div>
            </div>
            <div class="login_link login_link_account">
              已有帐号?
              <a class="fancybox" href="#login_dialog">立即登入</a>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
function initForm () {
  return {
    account: '',
    pw: '',
    pw_c: ''
  }
}
export default {
  name: 'LoginPopup',
  components: {},
  data () {
    return {
      form: initForm()
    }
  },
  mounted () {
    const vm = this
    $('.fancybox').fancybox({
      wrapCSS: 'fancybox-login',
      padding: 40,
      width: 800,
      maxWidth: '100%',
      helpers: {
        overlay: {
          css: {
            background: 'rgba(0,0,0,.8)'
          }
        }
      },
      afterClose () {
        vm.form = initForm()
        vm.$nextTick(() => {
          vm.$refs.form.reset()
        })
      }
    })
  },
  methods: {
    async onSubmit () {
      const data = Object.assign({}, this.form, {
        domain: this.host
      })
      await this.$store.dispatch('user/register', data)
    }
  }
}
</script>
