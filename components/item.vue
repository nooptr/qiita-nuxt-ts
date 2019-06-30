<template>
  <li class='news-item'>
    <span class='title'>
      <template v-if='item.url'>
        <a :href='item.url' target='_blank' rel='noopener'>{{ item.title }}</a>
      </template>
      <template v-else>
        <router-link :to='`/item/${item.id}`'>{{ item.title }}</router-link>
      </template>
    </span>
    <br>
    <span class='meta'>
      <small>by {{ item.user.id }}</small>
    </span>
  </li>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class NewsItem extends Vue {
  @Prop({ type: Object, required: true })
  item: any
}
</script>
