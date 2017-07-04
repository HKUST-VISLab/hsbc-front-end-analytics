/**
 * Created by qshen on 4/7/2017.
 */

import Vue from 'vue'
import VueResource from 'vue-resource'


Vue.use(VueResource);
const $http = Vue.http;
const dataServerUrl = "http://127.0.0.1:5000";

function getStationsConfig (callback) {
  const url = `${dataServerUrl}/stationConfig`
  $http.get(url).then(response => {
    callback(response.data)
  }, errResponse => {
    console.log(errResponse)
  })
}

export default{
  getStationsConfig
}
