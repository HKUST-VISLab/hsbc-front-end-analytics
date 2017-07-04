<template>
  <div id="app">
    <div class="NavBar" >
      <div class="tag">
        <span>PRAISE-HK</span>
      </div>
    </div>
    <div class="main">
      <MapContainer class="mapContainer"></MapContainer>
    </div>
  </div>
</template>

<script>

  import dataService from './service/dataService'
  import MapContainer from './components/MapContainer.vue'
  export default {
    name: 'app',
    components:{
      MapContainer
    },
    data(){
      return {

      }
    },
    mounted(){
      dataService.getStationsConfig((data)=>{

      })
    }
  }
</script>

<style>
  html{
    height: 100%;
  }
  body{
    margin: 0px;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  .NavBar {
    position: relative;
    height: 80px;
    width: 100%;
    background-color: #8ce1ff;
  }
  .tag {
    position: absolute;
    left: 100px;
    top: 10px;
    font-size: 50px;
    font-family: 'Comfortaa', serif;
    font-weight: bold;
    color: #666;
  }
  .main{
    height: calc(100% - 80px);

    background-color: antiquewhite;
  }
  .mapContainer{
    height: 100%;
    width: 100%;
  }


</style>
