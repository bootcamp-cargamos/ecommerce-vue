import CLIENT from "../api/client.js";
import STORAGE from "../utils/storage.js";
export default Vue.component("edit-product-page", {
  data: function () {
    return {
      product_id: 0,
      image_url: "assets/noimage.png",
      name: "",
      description: "",
      price: 0,
      category_id: 0,
      discount_price: 0,
      enable_promo: false,
      is_active: true,
      categories: [],
      edited: false,
      sending: false,
    };
  },
  methods: {
    setImage() {
      const new_url = prompt("Ingresa url de la imagen", this.image_url);
      this.image_url = new_url ? new_url : this.image_url;
    },
    async getCategories() {
      let vm = this;
      //Enviamos la petición Via GET
      const response = await CLIENT.get("/products/categories/");
      // Cargamos las categorias
      vm.categories = response;
    },

    async removeProduct() {
      let vm = this;
      vm.sending = true;
      try {
        //Enviamos la petición DELETE

        await CLIENT.request(
          "DELETE",
          "/products/products/" + vm.product_id + "/"
        );
        // Cargamos las categorias
        STORAGE.remove("product");
        vm.goProductsList();
      } catch (e) {
        console.info(e);
      } finally {
        vm.sending = false;
      }
    },
    async saveProduct() {
      let vm = this;
      vm.sending = true;
      try {
        //Enviamos la petición Via GET
        let url = "/products/products/";
        url += vm.edited ? this.product_id + "/" : "";

        await CLIENT.request(vm.edited ? "PUT" : "POST", url, {
          image_url: vm.image_url,
          name: vm.name,
          description: vm.description,
          price: vm.price,
          category_id: vm.category_id,
          discount_price: vm.enable_promo ? vm.discount_price : 0,
          is_active: vm.is_active,
        });
        // Cargamos las categorias
        STORAGE.remove("product");
        vm.goProductsList();
      } catch (e) {
        alert("Upps hubo un error: " + e.message);
        console.info(e);
      } finally {
        vm.sending = false;
      }
    },
    goProductsList() {
      this.$router.push("/products");
    },
  },
  created: async function () {
    const product = STORAGE.getArray("product")[0];
    if (product) {
      this.edited = true;
      this.product_id = product.pk;
      this.name = product.name;
      this.image_url = product.image_url;
      this.description = product.description;
      this.category_id = product.category.pk;
      this.price = product.price;
      this.discount_price = product.discount_price;
      this.enable_promo = product.discount_price > 0;
      this.is_active = product.is_active;
    }

    await this.getCategories();
  },
  template: `
    <div class="container mb-5 pb-5">
      <form @submit.prevent="saveProduct">
        <div class="d-flex flex-column align-items-center py-4">
          <img
            @click.prevent="setImage"
            class="w-50 rounded-3 shadow-sm hand"
            :src="image_url"
            alt=""
          />
          <a class="my-3 text-dark" 
             href="#"
             @click.prevent="setImage">
            <i class="bi bi-pencil"></i>
            Cambiar imagen
          </a>
        </div>

        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <div class="mb-3">
              <label for="product" 
                     class="form-label fw-bold">
              Nombre del producto
              </label>

              <input type="text"
                     required
                     v-model="name"
                     class="form-control" 
                     id="product" />
            </div>
            <div class="mb-3">
              <label for="description" 
                     class="form-label fw-bold">
                Descripción
              </label>

              <input type="text"
                     v-model="description"
                     required
                     class="form-control" 
                     id="description" />
            </div>
            <div class="mb-3">
              <label for="price" 
                     class="form-label fw-bold">
                  Precio venta ($)
              </label>

              <input type="text" 
                     v-model.number="price" 
                     class="form-control" 
                     id="price" />
            </div>
            <div class="mb-3">
              <label for="category" 
                     class="form-label fw-bold">
                Categoria
              </label>
              <select id="category" 
                      v-model="category_id"
                      required 
                      class="form-select">
                <option selected disabled value="0">
                    Selecciona una categoria
                </option>
                <option :key="category.pk" 
                        v-for="category in categories" 
                        :value="category.pk">
                        {{category.name}}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="card border-0 shadow-sm mt-3">
          <div class="card-body">
            <div class="form-check form-switch px-0 py-2 d-flex justify-content-between" >
              <label class="form-check-label fw-bold" 
                     for="is_active">
                Mostrar producto catalogo web
              </label>

              <input class="form-check-input" 
                     v-model="is_active"
                     type="checkbox" 
                     id="is_active" />
            </div>
          </div>
        </div>

        <div class="card bg-primary border-0 shadow-sm my-3">
          <div class="card-body">
            <div class="form-check form-switch px-0 py-2 d-flex justify-content-between">
              <label class="form-check-label fw-bold" 
                     for="enable_promo">
                     Habilitar promo
              </label>
              <input class="form-check-input switch-dark" 
                     v-model="enable_promo"
                     type="checkbox" 
                     id="enable_promo" />
            </div>

            <div class="my-3" v-show="enable_promo">
              <label for="discount_price" 
                     class="form-label fw-bold">
                Precio de descuento ($)
              </label>
              <input type="text" 
                     v-model.number="discount_price" 
                     class="form-control" 
                     id="discount_price" />
            </div>
          </div>
        </div>


        <div v-if="edited" class="card border-0 shadow-sm mt-3">
          <div class="card-header bg-white">
            <h6 class="text-danger"> Zona de peligro </h6>
          </div>
          <div class="card-body">
            <p> La siguiente acción no se puede deshacer </p>
            <button class="btn btn-outline-danger w-100 py-2" 
                     @click.prevent="removeProduct"
                     :disabled="sending"
                    >
              Eliminar producto
            </button>
          </div>
        </div>
        

        <div class="container fixed-bottom py-2 bg-white shadow-sm">
          <button class="btn btn-primary w-100 py-3 fw-bold" 
                  :disabled="sending"
                  type="submit">
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
    `,
});
