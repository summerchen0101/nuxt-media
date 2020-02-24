<template>
  <ValidationObserver v-slot="{ invalid }">
    <form class="form-horizontal contact_form">
      <div class="form-group setting_group">
        <label for="user_id" class="control-label">帐号</label>
        <div>
          <ValidationProvider v-slot="v" rules="required|account" name="account">
            <input id="user_id" v-model="form.account" type="text" class="form-control" disabled>
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
</template>

<script>
export default {
  name: 'ProfileBasic',
  components: {},
  props: {
    form: {
      type: Object,
      default: () => ({
        account: '',
        email: '',
        phone: ''
      })
    }
  },
  mounted () {},
  methods: {
    async onSubmit () {
      await this.$store.dispatch('user/updateProfile', this.form)
    }
  }
}
</script>
