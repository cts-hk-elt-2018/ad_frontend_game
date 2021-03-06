import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Upload from "./views/Upload.vue";
import Success from "./views/Success.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/upload",
      name: "upload",
      component: Upload
    },
    {
      path: "/success",
      name: "success",
      component: Success
    }
  ]
});
