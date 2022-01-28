import CLIENT from "../api/client.js";
import STORAGE from "../utils/storage.js";
import Loader from "../components/loader.js";
import ProductList from "../components/product_list.js";
import CategoryList from "../components/category_list.js";
import SearchInput from "../components/search_input.js";

export default Vue.component("products", {
  components: { Loader, ProductList, CategoryList, SearchInput },
  data: function () {
    return {
      products: [],
      loading: true,
      search: "",
      current_category: {},
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + STORAGE.get("token"),
      },
    };
  },
  methods: {
    async setCategory(category) {
      let vm = this;
      vm.current_category = category;
      await vm.getProducts();
    },
    async getProducts() {
      let vm = this;

      let url = "/products/products/";
      url += "?search=" + vm.search;
      if (vm.current_category.name != "Todos") {
        url += "&category=" + vm.current_category.pk;
      }
      //Enviamos la petición Via GET
      const response = await CLIENT.get(url, vm.headers);
      // Almacenamos el token si el inicio de sesión es correcto
      vm.products = response.sort((a, b) => {
        return b.discount_price - a.discount_price;
      });
      // Redirigimos al usuario al home
    },
    async getCategories() {
      let vm = this;

      //Enviamos la petición Via POST
      const response = await CLIENT.get(
        "/products/categories/",
        vm.headers
      );
      // Almacenamos el token si el inicio de sesión es correcto
      console.log(response);
      vm.categories = response;
      vm.categories.unshift({ pk: 0, name: "Todos" });
      vm.current_category = vm.categories[0];
      // Redirigimos al usuario al home
    },
    async onSearchKeyup(event) {
      this.search = event.target.value;
      await this.getProducts();
    },
  },
  created: async function () {
    let vm = this;
    try {
      await vm.getCategories();
      await vm.getProducts();
      vm.loading = false;
    } catch (e) {
      //En caso haya un error en el inicio de sesión
      // Notificamos por consola el incidente
      console.warn(e);
    }
  },
  template: `
      
      <loader v-if="loading"></loader>
      
      <div v-else>
        <category-list :categories="categories" :current="current_category.name" :setCategory="setCategory"/>
        <search-input  :onKeyup="onSearchKeyup"/>

        <product-list :products="products"/>
      </div>
      
      
    `,
});
