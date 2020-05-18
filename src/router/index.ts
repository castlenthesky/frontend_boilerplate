import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Sandbox from "../views/Sandbox.vue";
import Payors from "../views/Payors.vue";
import Referrals from "../views/Referrals.vue";
import Tasks from "../views/Tasks.vue";
import Team from "../views/Team.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sandbox",
    name: "Sandbox",
    component: Sandbox
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/payors",
    name: "Payors",
    component: Payors,
  },
  {
    path: "/referrals",
    name: "Referrals",
    component: Referrals,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;

