export default Vue.component("register-page", {
    data: function () {
      return {};
    },
    methods: {
      goLogin() {
        this.$router.push("/");
      },
    },
    created: function () {},
    template: `
      <div class="row " >
          <div class="d-flex flex-column align-items-center">
          <a href="#" class="text-dark fw-bold" @click.prevent="goLogin">
              Regresar 
          </a>
          <p class="mt-5"> Register page </p>
          </div>
      </div>
      `,
  });
  