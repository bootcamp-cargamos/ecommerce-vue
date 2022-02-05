import CLIENT from "../api/client.js";
import STORAGE from "../utils/storage.js";

export default Vue.component("login-page", {
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    DoLogin: async function () {
      let vm = this;
      try {
        //Enviamos la petición Via POST
        const response = await CLIENT.post("/authentication/login/", {
          username: vm.username,
          password: vm.password,
        });
        // Almacenamos el token si el inicio de sesión es correcto
        STORAGE.set("token", response.token);
        // Redirigimos al usuario al home
        vm.$router.push("products");
      } catch (e) {
        //En caso haya un error en el inicio de sesión
        // Notificamos por consola el incidente
        console.warn(e);
        alert("Error al iniciar sesión");
      }
    },
    goRegister() {
      // Redirige al usuario al listado de productos
      this.$router.push("register");
    },
  },
  created: function () {
    // Verifica si el usuario esta loggeado a través del token
    const is_logged = !(STORAGE.get("token") == null);
    if (is_logged) {
      this.$router.push("products");
    }
  },
  template: `
    <div class="row" >
    <!--Login Form (Email, Password) -->
    <div class="col-12 mt-2">
        <form>
        <div class="form-group">
            <label for="username">Nombre de usuario</label>
            <input
            type="text"
            class="form-control"
            placeholder="jhondoe123"
            id="username"
            v-model="username"
            />
        </div>
        <div class="form-group mt-3">
            <label for="password">Contraseña</label>
            <input
            type="password"
            class="form-control"
            placeholder="*********"
            id="password"
            v-model="password"
            />
        </div>
        <button
            type="submit"
            class="my-4 py-3 btn btn-primary fw-bold col-12"
            @click.prevent="DoLogin"
        >
            INICIAR SESIÓN
        </button>
        </form>
    </div>
    <!-- Register Link -->
    <div class="col-12 text-center">
        ¿Aun no tienes una cuenta? 
        </br>
        <a href="#" @click.prevent="goRegister" class="ms-2 text-dark fw-bold">REGÍSTRATE AHORA</a>
    </div>
    </div>
    `,
});
