import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import downloadVideo from "@/components/downloadVideo";
import userInfo from "@/components/userInfo";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/downloadVideo",
      name: "downloadVideo",
      component: downloadVideo
    },
    {
      path: "/userInfo",
      name: "userInfo",
      component: userInfo
    }
  ]
});
