<template>
  <div class="company_left col-xs-12 col-sm-3 col-md-3">
    <div class="company_left_pc">
      <nuxt-link :to="{name: 'other-about'}">
        <i class="fa fa-chevron-right" />关于我们
      </nuxt-link>
      <nuxt-link :to="{name: 'other-faq'}">
        <i class="fa fa-chevron-right" />常见问题
      </nuxt-link>
      <nuxt-link :to="{name: 'other-privacy'}">
        <i class="fa fa-chevron-right" />隐私权政策
      </nuxt-link>
      <nuxt-link :to="{name: 'other-service'}">
        <i class="fa fa-chevron-right" />服务介绍
      </nuxt-link>
    </div>
    <select name="here" class="company_left_mb" @change="onChangeLink">
      <option value="">
        请选择
      </option>
      <option value="about">
        关于我们
      </option>
      <option value="faq">
        常见问题
      </option>
      <option value="privacy">
        隐私权政策
      </option>
      <option value="service">
        服务介绍
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SubPagesMenu',
  components: {},
  mounted () {},
  methods: {
    onChangeLink (e) {
      this.$router.push({ name: 'other-' + e.target.value })
    }
  }
}
</script>
