<template>
  <footer class="footer_box">
    <div class="container">
      <div class="footer_link">
        <router-link :to="{name: 'About'}">
          关于我们
        </router-link>|
        <router-link :to="{name: 'FAQ'}">
          常见问题
        </router-link>|
        <router-link :to="{name: 'Privacy'}">
          隐私权政策
        </router-link>|
        <router-link :to="{name: 'Service'}">
          服务介绍
        </router-link>
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
