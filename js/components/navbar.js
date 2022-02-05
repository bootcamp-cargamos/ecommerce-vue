/* Component: Navbar 
   Contiene la barra de navegación 
   así como los link de acceso a otras paginas */

import STORAGE from "../utils/storage.js";

export default Vue.component("navbar", {
  props: [],
  data: function () {
    return {
      username: "",
      password: "",
      isLogged: false,
      current_path: false,
    };
  },
  computed: {
    isRoot() {
      return this.current_path == '/products' || this.current_path == '/'
    },
  },
  methods: {
    goLogin() {
      this.$router.push("/");
    },
    goBack() {
      this.$router.push("/");
    },
    goRegister() {
      // Redirige al usuario al listado de productos
      this.$router.push("register");
    },
    logout() {
      // Eliminamos el token de sesión
      STORAGE.remove("token");
      this.$router.push("/");
    },
  },
  mounted() {},
  created: function () {
    // Validamos el cambio en el Local Storage
    setInterval(() => {
      this.isLogged = !(STORAGE.get("token") == null);
      this.current_path = this.$router.history.current.path
    }, 1000);
  },
  template: `
  <nav class="navbar navbar-dark bg-dark sticky-top">
  <!-- Container wrapper -->
  <div class="container-fluid py-2">
    <!-- Navbar brand -->
    <a  class="navbar-brand me-2" 
        v-if="isRoot"
        href="#">
      <img
        src="./assets/logo.png"
        alt="MDB Logo"
        loading="lazy"
        style="margin-top: -1px"
      />
    </a>

    <a  v-else 
        class="navbar-brand me-2"
        href=""
        @click.prevent="goLogin">
    <i class="bi bi-chevron-left"></i> Regresar
    </a>

    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible wrapper -->
    <div
      class="collapse navbar-collapse bg-secondary rounded mt-2"
      id="navbarSupportedContent"
    >
      <!-- Left links -->

      <div v-if="!isLogged" class="py-3 d-flex justify-content-center">
        <button type="button" @click="goLogin" class="btn btn-link px-3 me-2 text-decoration-none">
          Inicia Sesión
        </button>
        <button @click.prevent="goRegister" type="button" class="btn btn-primary me-3">
          Registrate
        </button>
      </div>
      <div v-else class="py-3 d-flex justify-content-center">
        <button type="button" @click="logout" class="btn btn-link px-3 me-2 text-decoration-none">
          Cerrar Sesión
        </button>
      </div>
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
    `,
});
