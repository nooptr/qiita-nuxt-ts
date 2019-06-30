<template>
  <section class="container">
    <div>
      <h3>Nuxt.js のタグが付けられた投稿一覧</h3>
      <pagination :page="page"></pagination>
      <transition :name="transition" mode="out-in">
        <div :key="displayedPage" class="news-list">
          <transition-group tag="ul" name="item">
            <item v-for="item in items" :key="item.id" :item="item"/>
          </transition-group>
        </div>
      </transition>
    </div>
  </section>
</template>

<script lang='ts'>
import { Component, Watch, Vue } from 'vue-property-decorator'
import { Transition } from '@nuxt/vue-app'
import { Route } from 'vue-router'
import Pagination from '../components/pagination.vue'
import Item from '../components/item.vue'

@Component({
  components: {
    Pagination,
    Item
  },
  asyncData({ route }) {
    return {
      displayedPage: Number(route.params.page) || 1
    }
  }
})

export default class Index extends Vue {
  displayedPage: number = 1
  transition:
    | null
    | string
    | Transition
    | ((to: Route, from: Route) => string) = 'slide-right'

  get items() {
    return this.$store.state.items
  }

  get page() {
    const page = this.$route.params.page
    return Number(page) || 1
  }

  mounted() {
    this.pageChanged(this.page)
  }

  @Watch('page')
  pageChanged(to, from = -1) {
    this.$store
      .dispatch('FETCH_FEED', {
        page: this.page
      })
      .catch(() => {})

    this.transition =
      from === -1 ? null : to > from ? 'slide-left' : 'slide-right'

    this.displayedPage = to
  }
}
</script>
