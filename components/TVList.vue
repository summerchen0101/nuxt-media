<template>
  <div>
    <ul>
      <li v-for="(item, i) in tvs" :key="i">
        <NuxtLink :to="{name: 'tvs-id', params: {id: item.id}}">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
    <p>筆數：{{ tvs.length }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      tvs: 'tv/tvs'
    })
  }
}
</script>
