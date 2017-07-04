/**
 * Created by qshen on 4/7/2017.
 */
import L from "leafLet";
import 'leaflet/dist/leaflet.css'
let DetailMap = function(el, config){
  this.$el = el;
  this.bound = config.bound;
  this.center = config.center;
  this.init();
};

DetailMap.prototype.init = function(){
  this.cities = new L.LayerGroup();
  var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieWlkaW5neWlkaW4iLCJhIjoiY2lnajcwMjIxMDAyM3R0bHVsamh5M3B2diJ9.-ZvX8uRwCv4IdYSvzi7HPg';

  this.grayscaleDark   = L.tileLayer(mbUrl, {id: 'mapbox.dark', attribution: null});
  this.grayscaleLight   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: null});
  this.streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: null});
  this.outdoor  = L.tileLayer(mbUrl, {id: 'mapbox.outdoors',   attribution: null});
  this.satellite = L.tileLayer(mbUrl, {id: 'mapbox.satellite',   attribution: null});
  this.map = L.map(this.$el, {
    center: this.center,
    zoom: 10,
    layers: [this.streets, this.cities],
    zoomControl: false,
    maxZoom: 18,
    rotate: true,
    touchRotate: true
  });
  this.baseLayers = {
    "GrayScaleLight": this.grayscaleLight,
    "GrayScaleDark": this.grayscaleDark,
    "Streets": this.streets,
    "Outdoor": this.outdoor,
    "satellite": this.satellite
  };
  L.control.layers(this.baseLayers).addTo(this.map);
};

export default DetailMap
