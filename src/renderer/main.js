import Vue from 'vue';
import App from './App';
import ipcService from './plugins/ipcService'
import ElementUI from 'element-ui'
import moment from 'moment'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.config.productionTip = false;

Vue.use(ipcService)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>',
}).$mount('#app');

moment.locale('zh-cn');
