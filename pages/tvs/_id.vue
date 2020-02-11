<template>
  <div class="container">
    <Menu />
    <h3>{{ tv.name }}</h3>
    <pre>
      {{ tv }}
    </pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Menu from '~/components/Menu.vue'
export default {
  components: {
    Menu
  },
  async asyncData ({ params, app, store }) {
    await store.dispatch('tv/getItem', params.id)
  },
  computed: {
    ...mapGetters({
      tvs: 'tv/tvs',
      tv: 'tv/get'
    })
  }
}
</script>
