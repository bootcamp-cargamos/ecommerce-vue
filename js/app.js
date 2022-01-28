import LoginPage from "./pages/login_page.js";
import ProductsPage from "./pages/products_page.js";
import EditProductPage from "./pages/edit_product_page.js";
import EditCategoryPage from "./pages/edit_product_page.js";
import Navbar from "./components/navbar.js";

var routes = [
  { path: "/", component: LoginPage },
  { path: "/products", component: ProductsPage },
  { path: "/products/edit", component: EditProductPage },
  { path: "/categories/edit", component: EditCategoryPage },
];

var router = new VueRouter({
  routes: routes,
  mode: "hash",
  base: "/",
});

var app = new Vue({
  el: "#app",
  components: { Navbar },
  router: router,
});
