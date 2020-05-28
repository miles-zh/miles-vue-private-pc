import Vue from 'vue'
import router from './router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import jsonp from 'axios-jsonp'
import echarts from 'echarts'

import {
  Container,
  Aside,
  Main,
  Header,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Row,
  Dropdown,
  DropdownMenu,
  DropdownItem
} 
from 'element-ui';
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)



Vue.config.productionTip = false
import App from './App.vue'


//  let serveUrl = "/api/";
// let serveUrl = "http://v.juhe.cn/";
 
//  Vue.prototype.baseUrl=serveUrl

//  Vue.config.productionTip = false
//  Vue.prototype.$http = axios
//  axios.defaults.baseURL = '/api'
Vue.prototype.jsonp=jsonp

Vue.prototype.echarts=echarts

// Vue.use(VueAxios,axios)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
