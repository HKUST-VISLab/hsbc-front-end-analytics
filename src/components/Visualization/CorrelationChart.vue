<template>
  <div></div>
</template>

<script>
  import CorrelationChart from '../../lib/CorrelationChart.js'
  import pipeService from '../../service/pipeService'
  import dataService from '../../service/dataService'
  export default {
    name: 'correlation',
    props:['selectedStation'],
    data () {
      return {
        title: 'correlation',
        corrData: null
      }
    },
    mounted(){
      this.correlationChart = new CorrelationChart(this.$el);

      let stationId = this.selectedStation['id'];
      let attr = "PM2_5";
      console.log('station', this.selectedStation);
      dataService.getCorrRecordsOfStation(stationId, "PM2_5", 6, null, null, (data)=>{
        this.corrData = data;
      });
    },
    beforeDestroy(){
    },
    computed:{
    },
    methods:{
    },
    watch:{
      corrData(newData, oldData){
        if(newData){
          this.correlationChart.setData(newData);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
