<template>
  <div class="company_left col-xs-12 col-sm-3 col-md-3">
    <div class="company_left_pc">
      <NuxtLink :to="{name: 'About'}">
        <i class="fa fa-chevron-right" />关于我们
      </NuxtLink>
      <NuxtLink :to="{name: 'FAQ'}">
        <i class="fa fa-chevron-right" />常见问题
      </NuxtLink>
      <NuxtLink :to="{name: 'Privacy'}">
        <i class="fa fa-chevron-right" />隐私权政策
      </NuxtLink>
      <NuxtLink :to="{name: 'Service'}">
        <i class="fa fa-chevron-right" />服务介绍
      </NuxtLink>
    </div>
    <select name="here" onchange="location.href=this.options[this.selectedIndex].value;" class="company_left_mb">
      <option value="">
        请选择
      </option>
      <option value="about.html">
        关于我们
      </option>
      <option value="qa.html">
        常见问题
      </option>
      <option value="privacy.html">
        隐私权政策
      </option>
      <option value="service.html">
        服务介绍
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SubPagesMenu',
  components: {},
  mounted () {}
}
</script>
