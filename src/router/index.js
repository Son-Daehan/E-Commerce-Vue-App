import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import OrderView from '../views/OrderView.vue'
import ProfileView from '../views/ProfileView.vue'
import AddressView from '../views/AddressView.vue'
import AddressNewView from '../views/AddressNewView.vue'
import AddressEditView from '../views/AddressEditView.vue'
import AccountInfoView from '../views/AccountInfoView.vue'
import BillingView from '../views/BillingView.vue'
import OrderHistoryView from '../views/OrderHistoryView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/products/:id',
    name: 'singleProduct',
    component: ProductDetailView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/order/:id',
    name: 'order',
    component: OrderView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/profile/addresses',
    name: 'addresses',
    component: AddressView
  },
  {
    path: '/profile/addresses/new',
    name: 'addresses-new',
    component: AddressNewView
  },
  {
    path: '/profile/addresses/:id',
    name: 'address-edit',
    component: AddressEditView
  },
  {
    path: '/profile/billing',
    name: 'billing',
    component: BillingView
  },
  {
    path: '/profile/order-history',
    name: 'order-history',
    component: OrderHistoryView
  },
  {
    path: '/profile/account-information',
    name: 'account-information',
    component: AccountInfoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
