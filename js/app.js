/* Se importan todas las Paginas & componentes del proyecto */
import LoginPage from "./pages/login_page.js";
import RegisterPage from "./pages/register_page.js";
import ProductsPage from "./pages/products_page.js";
import EditProductPage from "./pages/edit_product_page.js";
import CategoriesPage from "./pages/categories_page.js";
import Navbar from "./components/navbar.js";

// Definimos las rutas del proyecto
var routes = [
  { path: "/", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/products", component: ProductsPage },
  { path: "/products/edit", component: EditProductPage },
  { path: "/categories", component: CategoriesPage },
];
/* Creamos el router del proyecto y
 cargamos las rutas disponibles */

var router = new VueRouter({
  routes: routes,
  mode: "hash", // añadirá un "#" a la URL para permitir refrescar la pagina
  base: "/",
});

/* Se carga el app dentro <div id="app"> con Vue*/

var app = new Vue({
  el: "#app",
  components: { Navbar },
  router: router,
});
