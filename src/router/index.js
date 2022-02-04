import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import Login from '../views/Login.vue'

import  store  from "../store";

function requireAuth(to, from, next) {
  // redirect from 'files' page to 'home' if reloading page
  if (
    store.state.userEmail == null
  )
    return next({ name: "Login" });
  else return next();
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/productDetails/:id',
    name: 'ProductDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetails.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
    beforeEnter: requireAuth,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
