import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  // Check if the user is not logged in and trying to access a protected route
  if (!isUserLoggedIn() && to.name !== "Login") {
    // Redirect to the login view
    next({ name: "Login" });
  }
  // Check if the user is logged in and trying to access the login route
  else if (isUserLoggedIn() && to.name === "Login") {
    // Redirect to the dashboard or any other appropriate route
    next({ name: "Dashboard" });
  } else if (to.name === null) {
    // Redirect to the "Not Found" page
    next({ name: "NotFound" });
    setTimeout(() => {
      router.replace(from.fullPath); // Redirect back to the previous route
    }, 2000);
  }
  // For other cases, proceed with the navigation
  else {
    next();
  }
});

// Helper function to check if the user is logged in
function isUserLoggedIn() {
  // Replace this with your actual implementation to check the user's login status
  // Return true if the user is logged in, false otherwise
  return true; //Replace with your logic
}

export default router;
