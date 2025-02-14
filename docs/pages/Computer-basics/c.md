
<List :list="lists" />

<script>
  import List from '../../components/list.vue'
  import {lists} from '../../data/Computer-basics/c.js'
  export default {
    data() {
      return {
        lists: lists
      }
    },
    components: {
      List
    }
  }
</script>
<style>
  @media (min-width: 1440px) {
    .VPContent.has-sidebar[data-v-98ddab3d] {
        padding-right: 10px;
    }
}
@media (min-width: 1280px) {
    .VPDoc .aside[data-v-10119189] {
        display: none;
    }
}
.VPDoc.has-aside .content-container[data-v-10119189] {
    max-width: 6688px;
}
@media (min-width: 1440px) {
    .VPNavBar.has-sidebar .content[data-v-cf6e7c5e] {
        padding-right: 10px;
    }
}
</style>
