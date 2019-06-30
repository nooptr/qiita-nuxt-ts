<template>
  <section class="container">
    <div>
      <h3>Nuxt.js のタグが付けられた投稿一覧</h3>
      <pagination :page="page"></pagination>
      <item v-for="item in items" :key="item.id" :item="item"/>
    </div>
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Pagination from '../components/pagination.vue'
import Item from '../components/item.vue'

@Component({
  components: {
    Pagination,
    Item
  }
})

export default class Index extends Vue {
  get items() {
    return this.$store.state.items
  }

  get page() {
    const page = this.$route.params.page
    return Number(page) || 1
  }

  mounted() {
    this.pageChanged()
  }

  pageChanged() {
    this.$store
      .dispatch('FETCH_FEED', {
        page: this.page
      })
      .catch(() => {})
  }
}
</script>
