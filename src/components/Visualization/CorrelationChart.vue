<template>
  <el-row :gutter="2" >
    <el-col :span="16" class="vis"></el-col>
    <el-col :span="8" class="ctrl"></el-col>
  </el-row>
</template>

<script>
  import CorrelationChart from '../../lib/CorrelationChart.js'
  import pipeService from '../../service/pipeService'
  import dataService from '../../service/dataService'

  import * as d3 from "d3"
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
      let vicEle = d3.select(this.$el).select(".vis").node();
      this.correlationChart = new CorrelationChart(vicEle);

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
  .vis{
    height: 100%
  }
  .ctrl{
    height: 100%;
    background-color: aquamarine;
  }

</style>
