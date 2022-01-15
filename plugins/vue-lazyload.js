import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 9.9,
  loading: "/favicons/puff.svg",
  attempt: 1
});
