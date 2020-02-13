<template>
  <div>
    <div class="menuBg" />
    <!--nav start-->
    <Header />
    <div class="hidden">
      <div id="login_dialog" class="modall">
        <Login />
        <Register />
      </div>
    </div><!--login_dialog end-->
    <Search />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Login from '@/components/popups/Login'
import Register from '@/components/popups/Register'
import Search from '@/components/popups/Search'
export default {
  name: 'Dashboard',
  components: {
    Header,
    Login,
    Register,
    Search
  },
  mounted () {
  }
}
</script>
