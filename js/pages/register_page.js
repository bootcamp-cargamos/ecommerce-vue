import CLIENT from "../api/client.js";

export default Vue.component("register-page", {
  data: function () {
    return {
      username: "",
      email: "",
      password: "",
      is_staff: false,
    };
  },
  methods: {
    async createUser() {
      let vm = this;
      try {
        await CLIENT.post("/authentication/sign-up/", {
          "username": vm.username,
          "email":vm.email,
          "password":vm.password,
          "is_staff" : vm.is_staff,
        });
        alert("Usuario creado correctamente");
        vm.$router.push("/");
      } catch (e) {
        
        alert("Upps hubo un error: " + e.message)
        console.info(e);
      }
    },
    goLogin() {
      this.$router.push("/");
    },
  },
  created: function () {},
  template: `
     <div class="container"
          autocomplete="nope"
          @submit.prevent="createUser">
      <form>
        <div class="mb-3">
          <label for="username" 
                 class="form-label fw-bold">
          Nombre de usuario
          </label>
          <input
            type="text"
            autocomplete="new-username"
            placeholder="jhondoe123"
            v-model="username"
            class="form-control"
            required
            id="username"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label fw-bold">Email</label>
          <input
            type="email"
            placeholder="jhondoe@mail.com"
            v-model="email"
            class="form-control"
            required
            id="email"
          />
        </div>
        <div class="mb-3">
          <label for="password" 
                 class="form-label fw-bold">
                 Password
          </label>
          <input type="password"
                 v-model="password"
                 placeholder="**********"
                 class="form-control" 
                 id="password" 
                 required
                 autocomplete="new-password" />
        </div>

        <div class="form-check form-switch px-0 py-4 d-flex justify-content-between">

          <label class="form-check-label fw-bold" for="is_staff">
            Soy administrador (STAFF)
          </label>

          <input class="form-check-input"  
                 v-model="is_staff" 
                 type="checkbox" 
                 id="is_staff" />
        </div>

        <div class="py-3 form-check">
          <input type="checkbox"
                 required
                 class="form-check-input"
                 id="terms" />
          <label class="form-check-label" for="terms">
            <small>
            Acepto los <strong> Terminos y condiciones</strong>, así mismo
            acepto los terminos de
            <strong> Privacidad y trato de mis datos personales</strong>
            </small>
          </label>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary py-3"
                  type="submit">
            CREAR MI CUENTA
          </button>
        </div>
      </form>
      <div class="d-flex justify-content-center py-4">
        <label for=""
          >¿Ya tienes una cuenta?
          <a class="fw-bold text-dark" href="#" @click.prevent="goLogin"> INICIA SESIÓN</a>
        </label>
      </div>
    </div>
      `,
});
