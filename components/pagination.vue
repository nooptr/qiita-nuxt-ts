<template>
  <div class="news-list-nav">
    <router-link v-if="page > 1" :to="`/${page - 1}`">&lt; prev</router-link>
    <a v-else class="disabled">&lt; prev</a>
    <span>{{ page }}</span>
    <router-link :to="`/${page + 1}`">more &gt;</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({})
export default class ItemListNav extends Vue {
  @Prop({ type: Number, required: true })
  page!: string
}
</script>
