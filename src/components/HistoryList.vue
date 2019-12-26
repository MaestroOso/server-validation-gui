<template>
    <v-container>
        <v-layout justify-center align-center column>
            <h4> History of your search's </h4><br>
            <button v-on:click="searchdomain">Search</button>
        </v-layout>
        <br>
        <div v-if="serverfound">
          {{ serverdata }}
        </div>
    </v-container>
</template>

<script>

export default {
  name: 'HistoryList',
  methods:{
    searchdomain: function (){
      if( this.domain == "" ) {
        alert("Domain can't be empty")
        return;
      }
      this.serverfound = true;
      this.serverdata = 'Loading...'
      this.$http.get('http://localhost:8888/history').then( response => {
        if(response.status == "200") {
          this.serverdata = response.body;
        }
      });
    },
  },
  data: function(){
    return {
      serverfound: false,
      serverdata: 'Loading...',
    }
  }
};
</script>
