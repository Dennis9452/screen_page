
<script setup>
  import { ref } from 'vue'
  import { getScreenList } from '@/util/getScreenList';
  //test
  let screenList = ref({})
  let serverList = ref(['99', '100'])
  serverList.value.map( (domainIp) => {
    getScreenList(domainIp).then((data) => {
      screenList.value[domainIp] = (data)
    })
  })
  function onclick(server, token, event){
    event.preventDefault()
    window.open(`http://192.168.22.${server}/player/${token}`)
  }

  function getUrl(server, token){
    return `http://192.168.22.${server}/player/${token}`
  }
</script>
<template>
  
    <div class="screenList"
      v-for="server in serverList"
      :key="server"
    >
      <p> 192.168.22.{{ server }}</p>
      
      <div
        v-for="screen in screenList[server]"
        :key="screen"
      >
        <div
          v-if="!screen.isEmpty"
        >
          <div 
            v-for="data in screen.data"
            :key="data.token"
            class="screenItem"
            @click.self.stop="onclick(server, data.token, $event)"
          >
              <div>ip : {{ data.ip }}</div>
              <div>uuid : {{ data.uuid }}</div>
              <div>screenKind : {{ data.screenKind }}</div>
              <div>type : {{ data.type}}</div>
              <div 
                class="screenType"
                @click.stop="onclick(server, data.token, $event)"
              > 
                <a :href="getUrl(server, data.token)"
                > Open </a>
              </div>
          </div>
        </div> 
        <div
          v-else
          class="emptyList"
        >
          <div>can't get screen list from this server.</div>
        </div>
        <div class="divider"></div>
      </div>
  </div>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.divider{
  border: 2px solid black;
}

.screen{
  &Type {
    margin: 10px 0;
    background-color: aliceblue;
    right: -140px;
  }

  &Item{
    display: inline-block;
    border: 2px solid black;
    text-align: left;
    padding: 1rem;
    margin: 20px;

    div {
      padding: 10px 0 ;
    }

    .screenType{
      padding: 1rem;
      text-align: center;
    }
  }
}

.emptyList {
    background-color: indianred;
    display: inline-block;
    padding: 2rem;
    margin: 10px;
    border: 2px solid black;
}
</style>
