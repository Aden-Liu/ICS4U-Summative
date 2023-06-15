import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import PurchasePage from "../pages/PurchasePage.vue";
import CartPage from "../pages/CartPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/purchase",
      component: PurchasePage,
    },
    {
      path: "/cart",
      component: CartPage,
    },
    {
      path: "/register",
      component: RegisterPage,
    },
  ],
});
