import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout";

Vue.use(Router);

export const routes = [
  {
    // Home
    path: "/",
    component: Layout,
    redirect: "/",
    children: [
      {
        path: "",
        name: "Home",
        meta: {
          title: "Home",
        },
        component: () => import("@/views/home"),
      },
    ],
  },

  {
    // 图片动态URL
    path: "/img-dynamic-url",
    component: Layout,
    redirect: "/img-dynamic-url",
    children: [
      {
        path: "",
        name: "img-dynamic-url",
        meta: {
          title: "图片动态URL",
        },
        component: () => import("@/views/img-dynamic-url"),
      },
    ],
  },
];

export default new Router({
  routes,
});
