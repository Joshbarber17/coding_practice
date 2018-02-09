import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
const router = new VueRouter({mode:'history', routes: routes});
import App from './App.vue';
new Vue(Vue.util.extend({router})).$mount('#app');
import CreateItem from './components/CreateItem.vue';
const routes = [
  {
        name: 'CreateItem',
        path: '/',
        component: CreateItem
    }
];
