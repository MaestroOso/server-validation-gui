<template>
  <span>
    <header-view></header-view>
    <server-info></server-info>
  </span>
</template>


<script>
import ServerInfo from '@/components/ServerInfo'
import HeaderView from './shared/HeaderView'

export default {
  name: 'ConsultPageView',
  components: {
    ServerInfo,
    HeaderView
  }
}
</script>
