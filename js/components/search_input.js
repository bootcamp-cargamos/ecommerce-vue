/* Component: Search Input
   Refiere al campo de texto que permite hacer busquedas
  en la lista de productos*/

export default Vue.component("search-input", {
  props: ["onKeyup"],
  template: `
        <div class="row">
            <div class="col-12 mt-3">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-search"></i>
                </span>
                <!--Se utiliza el evento keyup 
                (cada que el usuario presiona una tecla)
                para recuperar lo que el usuario escribe-->
                <input
                  type="text"
                  class="form-control"
                  placeholder="Buscar productos..."
                  aria-label="search"
                  @keyup="onKeyup"
                />
              </div>
            </div>
          </div>
    `,
});
