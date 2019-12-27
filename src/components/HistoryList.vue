<template>
    <v-container>
        <v-layout justify-center align-center column>
            <h4> History of your search's </h4><br>
            <button v-on:click="searchdomain">Search</button>
        </v-layout>
        <br>
        <div v-if="serverfound">
          {{ servermsg }}
          <div v-if="serverdata.Items != null">
            <ul id="history-list">
              <li v-for="domain in serverdata.Items" v-bind:key="domain.Host">
                <b>{{ domain.Host }}:</b>
                <br>
                <ul id="server-list">
                    <li v-for="domainconsult in domain.Servers" v-bind:key="domainconsult.Consult_time">
                      Consult Time: {{ domainconsult.Consult_time }} <br>
                      Ssl_grade: {{ domainconsult.Ssl_grade }} <br>
                      Title: {{ domainconsult.Title }} <br>
                      Is down: {{ domainconsult.Is_down }} <br>
                      Server: <br>
                    </li>
                </ul>
              </li>
            </ul>
          </div>
          <div v-else>
            No items on response
          </div>
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
          this.servermsg = '';
          this.serverdata = JSON.parse( JSON.stringify( response.body ) )
        } else {
          this.servermsg = 'Error on lookup'
        }
      });
    },
  },
  data: function(){
    return {
      serverfound: false,
      servermsg: 'Loading...',
      serverdata: null,
    }
  }
};
</script>
