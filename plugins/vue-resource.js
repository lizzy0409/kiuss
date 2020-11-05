import Vue from 'vue';
import VueResource from 'vue-resource';
import VueLazyload from 'vue-lazyload';

Vue.use(VueResource);
Vue.use(VueLazyload, {
  preLoad: 9.9,
  loading: '/favicons/loading.png',
  attempt: 1
});
