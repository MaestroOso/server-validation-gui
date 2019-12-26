<template>
  <v-container>
    <h1> Routing Application using Vue </h1>
    <router-link to="/info"><button> Search Server </button></router-link>
    <router-link to="/history"><button> History </button></router-link>
  </v-container>
</template>


<script>

export default {
  name: 'HeaderView',
  components: {}
}

</script>
