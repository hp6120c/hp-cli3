import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
<%_ if (options.echarts) { _%>
import echarts from 'echarts';
    <%_ } _%>
import App from './App.vue';
import router from './router';
import store from './store';
import http from './api/api';

<%_ if (options.echarts) { _%>

Vue.prototype.$echarts = echarts;
      <%_ } _%>
Vue.use(ElementUI, {
  size: 'medium',
});

Vue.prototype.$http = http;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
