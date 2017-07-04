<template>
  <div class="mapview">
  </div>
</template>

<script>

  //  import dataService from '../../service/dataService'
  import DetailMap from '../lib/DetailMap'
  export default {
    name: 'mapview',
    data () {
      return {
        title: 'mapview',

      }
    },
    mounted(){
      this.map = new DetailMap(this.$el, {
        center: [22.365354, 114.105228],
        bound: null
      });
    },
    computed:{
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
