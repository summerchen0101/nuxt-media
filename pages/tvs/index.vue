<template>
  <div class="container">
    <Menu />
    <h3>TV List</h3>
    <TVList />
  </div>
</template>

<script>
import TVList from '~/components/TVList.vue'
import Menu from '~/components/Menu.vue'
export default {
  components: {
    TVList,
    Menu
  },
  async asyncData ({ params, app, store }) {
    await store.dispatch('tv/getList')
  }
}
</script>
