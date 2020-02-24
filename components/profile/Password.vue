<template>
  <ValidationObserver v-slot="{ invalid, reset }">
    <form ref="form" class="form-horizontal contact_form pw_form" @reset.prevent="reset">
      <div class="form-group">
        <label for="old_pw" class="control-label">旧密码</label>
        <div>
          <ValidationProvider v-slot="v" rules="required|pw" name="old_pw">
            <input id="old_pw" v-model="form.old_pw" type="password" class="form-control">
            <span class="text-danger">{{ v.errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group">
        <label for="new_pw" class="control-label">新密码</label>
        <div>
          <ValidationProvider v-slot="v" rules="required|pw" name="new_pw">
            <input id="new_pw" v-model="form.pw" type="password" class="form-control">
            <span class="text-danger">{{ v.errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group">
        <label for="check_pw" class="control-label">确认密码</label>
        <div>
          <ValidationProvider v-slot="v" rules="required|match:@new_pw" name="pw_confirm">
            <input id="check_pw" v-model="form.pw_c" type="password" class="form-control">
            <span class="text-danger">{{ v.errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group">
        <div class="page_form_btn">
          <button type="submit" class="btn save_btn" :disabled="invalid" @click.prevent="onSubmit">
            储存设置
          </button>
        </div>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
function initForm () {
  return {
    old_pw: '',
    pw: '',
    pw_c: ''
  }
}
export default {
  name: 'ProfilePassword',
  components: {},
  data () {
    return {
      form: initForm()
    }
  },
  mounted () {},
  methods: {
    async onSubmit () {
      const res = await this.$store.dispatch('user/updatePw', this.form)
      if (res.code === '0') {
        this.form = initForm()
        this.$nextTick(() => {
          this.$refs.form.reset()
        })
      }
    }
  }
}
</script>
