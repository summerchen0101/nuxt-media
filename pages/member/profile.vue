<template>
  <div class="member_right col-xs-12 col-sm-9 col-md-9">
    <div class="setting_content">
      <ul class="page_tabs">
        <li class="active" rel="tab1">
          个人资料
        </li>
        <li rel="tab2">
          修改密码
        </li>
      </ul>
      <div class="tab_container">
        <div id="tab1" class="tab_content">
          <ValidationObserver v-slot="{ invalid }">
            <form class="form-horizontal contact_form">
              <div class="setting_upload_img_box row">
                <div class="col-xs-12 col-md-2 setting_upload_img">
                  <img src="/images/member/setting_upload_img.png" alt="">
                </div>
                <div class="col-xs-12 col-md-10 setting_upload_txt">
                  <button class="setting_upload_img_btn">
                    选择照片上传
                  </button>
                  <div class="setting_upload_img_note">
                    支持JPG、JPEG、GIF、PNG格式，图片不得超过2M
                  </div>
                </div>
              </div>
              <div class="form-group setting_group">
                <label for="user_id" class="control-label">帐号</label>
                <div>
                  <ValidationProvider v-slot="v" rules="required|account" name="account">
                    <input id="user_id" v-model="form.account" type="text" class="form-control">
                    <span class="text-danger">{{ v.errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="form-group left_group">
                <label for="name" class="control-label">暱称</label>
                <div>
                  <ValidationProvider v-slot="v" rules="required" name="nick">
                    <input id="name" v-model="form.nick" type="text" class="form-control">
                    <span class="text-danger">{{ v.errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="form-group left_group">
                <label for="email" class="control-label">信箱</label>
                <div>
                  <ValidationProvider v-slot="v" rules="required|email" name="email">
                    <input id="email" v-model="form.email" type="email" class="form-control">
                    <span class="text-danger">{{ v.errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="form-group right_group">
                <label for="phone" class="control-label">手机</label>
                <div>
                  <ValidationProvider v-slot="v" rules="required|phone" name="phone">
                    <input id="phone" v-model="form.phone" type="text" class="form-control">
                    <span class="text-danger">{{ v.errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="form-group">
                <div class="page_form_btn">
                  <button class="btn save_btn" :disabled="invalid" @click.prevent="onSubmit">
                    储存设置
                  </button>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
        <!-- #tab1 -->
        <div id="tab2" class="tab_content">
          <form class="form-horizontal contact_form pw_form">
            <div class="form-group">
              <label for="old_pw" class="control-label">旧密码</label>
              <div>
                <input id="old_pw" type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label for="new_pw" class="control-label">新密码</label>
              <div>
                <input id="new_pw" type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label for="check_pw" class="control-label">确认密码</label>
              <div>
                <input id="check_pw" type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <div class="page_form_btn">
                <button type="submit" class="btn save_btn">
                  储存设置
                </button>
              </div>
            </div>
          </form>
        </div>
        <!-- #tab2 -->
      </div>
      <!-- .tab_container -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Profile',
  async asyncData ({ store, redirect }) {
    try {
      await store.dispatch('user/getProfile')
    } catch (err) {
      // redirect({ name: 'index' })
    }
    return {
      form: Object.assign({}, store.state.user.profile)
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      profile: 'user/profile'
    })
  },
  mounted () {
    jqFix()
  },
  methods: {
    async onSubmit () {
      await this.$store.dispatch('user/updateProfile', this.form)
    }
  },
  head () {
    return {}
  }
}

function jqFix () {
  /* imgLiquid */
  $('.imgLiquidFill').imgLiquid()

  /* tab accordion */
  $('.tab_content').hide()
  $('.tab_content:first').show()

  $('ul.page_tabs li').click(function () {
    $('.tab_content').hide()
    const activeTab = $(this).attr('rel')
    $('#' + activeTab).fadeIn()

    $('ul.page_tabs li').removeClass('active')
    $(this).addClass('active')
  })
  $('ul.page_tabs li')
    .last()
    .addClass('tab_last')
}
</script>
