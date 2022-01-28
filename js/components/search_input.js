export default Vue.component("search-input", {
  props: ["onKeyup"],
  template: `
        <div class="row">
            <div class="col-12 mt-3">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-search"></i>
                </span>
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
