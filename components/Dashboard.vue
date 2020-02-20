<template>
  <div>
    <div class="menuBg" />
    <!--nav start-->
    <Header />
    <Login />
    <Register />
    <Search />
    <slot />
  </div>
</template>

<script>
import Header from './Header'
import Login from './popups/Login'
import Register from './popups/Register'
import Search from './popups/Search'
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
