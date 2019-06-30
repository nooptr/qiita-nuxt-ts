<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  fetch({ redirect }) {
    redirect('/1')
  }
})
export default class Index extends Vue {}
</script>
