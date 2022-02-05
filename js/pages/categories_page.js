import CLIENT from "../api/client.js";
import CategoryEditItem from "../components/category_edit_item.js";
export default Vue.component("categories-page", {
  components:{CategoryEditItem},
  data: function () {
    return {
      categories:[],
      new_category:"",
      num:0,
    };
  },
  methods: {
    async getCategories() {
      let vm = this;
      //Enviamos la petición Via GET
      const response = await CLIENT.get("/products/categories/");
      // Cargamos las categorias
      vm.categories = response;
    },
    setCategoryName(index,value){
      this.categories[index].name = value;
    },
    async updateCategory(index) {
      let vm = this;
      try {
        //Enviamos la petición Via GET
        let url = "/products/categories/" + vm.categories[index].pk + "/";

        await CLIENT.request("PUT", url, vm.categories[index] );
        // Cargamos las categorias
        await vm.getCategories()

      } catch (e) {
        alert("Upps hubo un error: " + e.message);
        console.info(e);
      }
    },
    async deleteCategory(index){
      let vm = this;
      try {
        //Enviamos la petición Via GET
        let url = "/products/categories/" + vm.categories[index].pk + "/";

        await CLIENT.request("DELETE", url, vm.categories[index] );
        // Cargamos las categorias
        await vm.getCategories()

      } catch (e) {
        alert("Upps hubo un error: " + e.message);
        console.info(e);
      }
    },

    async createCategory(){
      let vm = this;
      try {
        //Enviamos la petición Via GET
        let url = "/products/categories/";

        await CLIENT.request("POST", url, {name:vm.new_category} );
        // Cargamos las categorias
        await vm.getCategories()
        vm.new_category = "";

      } catch (e) {
        alert("Upps hubo un error: " + e.message);
        console.info(e);
      }
    },

    goProductsList() {
      this.$router.push("/products");
    },
  },
  created: async function () {
    await this.getCategories();
  },
  template: `
     <div class="container">
      <label class="fw-bold my-3"> 
          Todas las categorias 
        </label>
      <div class="list-group">
      <!-- <input type="number" min=0 v-on:input="change($event, num)"/> -->
          <category-edit-item 
              :key="category.pk" 
              v-for="(category,index) in categories" 
              :setCategoryName="setCategoryName"
              :index="index"
              :item="category"
              :onSave="updateCategory"
              :onDelete="deleteCategory" />
      </div>
      <div class="d-flex flex-column">
          <label class="fw-bold my-3"> Nueva categoria </label>
          <input  type="text" 
                  v-model="new_category"
                  class="flex-grow-1 mb-3 py-2"
                  placeholder="Ingresa nombre de nueva categoria"/>
      </div>

        <div class="d-grid gap-2">
            <button class="btn btn-primary py-3" 
                    type="button"
                    @click.prevent="createCategory">
              Añadir categoria
            </button>
          </div>

          <div class="d-flex justify-content-center my-4">
          <a class="fw-bold text-dark" href="#" @click.prevent="goProductsList">
            <i class="bi bi-arrow-left"></i>
              Regresar
            </a>  
          </div>
      </div>
    </div>
    `,
});
