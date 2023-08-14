import axios from 'axios';

const instance1 = axios.create({
  baseURL: 'https://api1.example.com'
});

const instance2 = axios.create({
  baseURL: 'https://api2.example.com'
});

export default {
  install(Vue) {
    Vue.prototype.axios1 = instance1;
    Vue.prototype.axios2 = instance2;
  }
}