<template>
    <v-container>
        <v-layout justify-center align-center column>
            <h4> Lookup for information </h4><br>
            Insert domain (e.g. truora.com): <input v-model="domain" placeholder="Domain">
            <button v-on:click="searchdomain">Search</button>
        </v-layout>
        <br>

        <div v-if="serverfound">
          {{ servermsg }}
          Results for {{ this.domain }}: <br>
          Server changed: {{ serverdata.ServersChanged }} <br>
          Ssl grade: {{ serverdata.SslGrade }} <br>
          Previous Ssl Grade: {{ serverdata.PreviousSslGrade }} <br>
          Logo: {{ serverdata.Logo }} <br>
          Is Down: {{ serverdata.Is_down }} <br>
          Servers:
          <div v-if="serverdata.Servers != null">
            <ul id="history-list">
              <li v-for="server in serverdata.Servers" v-bind:key="server.Address">
                Address: {{ server.Address }} <br>
                Ssl Grade: {{ server.SslGrade }} <br>
                Country: {{ server.Country }} <br>
                Owner: {{ server.Owner }} <br>
              </li>
            </ul>
          </div>
          <div v-else>
              No servers available
          </div>
        </div>
    </v-container>
</template>

<script>

export default {
  name: 'ServerInfo',
  methods:{
    searchdomain: function (){
      if( this.domain == "" ) {
        alert("Domain can't be empty")
        return;
      }
      this.serverfound = false;
      this.servermsg = 'Loading...'
      this.$http.get('http://localhost:8888/serverInfo/' + this.domain).then( response => {
        if(response.status == "200") {
          this.serverfound = true;
          this.serverdata = JSON.parse( JSON.stringify( response.body ) )
          this.servermsg = ''
        } else {
          alert("Error on server lookup")
        }
      });
    },
  },
  data: function(){
    return {
      serverfound: false,
      serverdata: 'Loading...',
      servermsg: 'Loading...'
    }
  }
};
</script>
