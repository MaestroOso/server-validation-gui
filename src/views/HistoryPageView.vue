<template>
  <span>
    <header-view></header-view>
    <history-list></history-list>
  </span>
</template>


<script>
import HistoryList from '@/components/HistoryList'
import HeaderView from './shared/HeaderView'

export default {
  name: 'HistoryPageView',
  components: {
    HistoryList,
    HeaderView
  }
}
</script>
