const routes = [
  //make
  {
    path: "/auth/login",
    name: "Login",
    component: () => import("../pages/auth/Login.vue"),
  },
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../pages/Dashboard.vue"),
  },

  {
    //not-found paeg
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFound.vue"),
  },
];

export default routes;
