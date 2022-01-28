export default Vue.component("edit-category-page", {
  data: function () {
    return {};
  },
  methods: {
    goProductsList() {
      this.$router.push("/products");
    },
  },
  created: function () {},
  template: `
    <div class="row " >
        <div class="d-flex flex-column align-items-center">
        <a href="#" class="text-dark fw-bold" @click.prevent="goProductsList">
            Regresar 
        </a>
        <p class="mt-5"> Edit Category page </p>
        </div>
    </div>
    `,
});