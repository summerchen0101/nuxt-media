<template>
  <footer class="footer_box">
    <div class="container">
      <div class="footer_link">
        <nuxt-link :to="{name: 'other-about'}">
          关于我们
        </nuxt-link>|
        <nuxt-link :to="{name: 'other-faq'}">
          常见问题
        </nuxt-link>|
        <nuxt-link :to="{name: 'other-privacy'}">
          隐私权政策
        </nuxt-link>|
        <nuxt-link :to="{name: 'other-service'}">
          服务介绍
        </nuxt-link>
      </div>
      <div class="copyright">
        Copyright © 2019 All rights reserved
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  mounted () {}
}
</script>
