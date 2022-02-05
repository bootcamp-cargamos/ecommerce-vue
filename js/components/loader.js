/* Component: Loader 
   Genera una imagen animada temporal cuando se esta realizando
   una tarea asincrona */
export default Vue.component("navbar", {
  props: [],
  data: function () {
    return {};
  },
  methods: {},
  template: `
    <div class="d-flex flex-column justify-content-center align-items-center"
         style="min-height: 90vh">
        <img src="assets/loading.gif" loop="infinite" width="100" alt="" />
        <small>Cargando...</small>
    </div>
    `,
});
