import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 1.5,
  loading: "/favicons/puff.svg",
  attempt: 1
});
