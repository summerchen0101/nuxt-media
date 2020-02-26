<template>
  <div v-if="data" class="company_right col-xs-12 col-sm-9 col-md-9">
    <div class="company_title">
      <i class="icon-article" /><span>{{ data.title }}</span>
    </div>
    <div class="company_content" v-html="data.contents" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Privacy',
  components: {
  },
  async asyncData ({ store, redirect }) {
    try {
      await store.dispatch('site/getInfo')
    } catch (err) {
      console.log(err)
    }
    return {}
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      info: 'site/info'
    }),
    data () {
      return this.info.Privacy
    }
  },
  mounted () {
  },
  head () {
    return {
    }
  }
}
</script>
