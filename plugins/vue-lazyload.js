import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 9.9,
  loading: '/favicons/loading.png',
  attempt: 1
});
