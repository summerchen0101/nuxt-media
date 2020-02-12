<template>
  <footer class="footer_box">
    <div class="container">
      <div class="footer_link">
        <NuxtLink :to="{name: 'About'}">
          关于我们
        </NuxtLink>|
        <NuxtLink :to="{name: 'FAQ'}">
          常见问题
        </NuxtLink>|
        <NuxtLink :to="{name: 'Privacy'}">
          隐私权政策
        </NuxtLink>|
        <NuxtLink :to="{name: 'Service'}">
          服务介绍
        </NuxtLink>
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
